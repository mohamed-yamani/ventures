"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

const DeepTransform = () => {
  const [carouselRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  // Track the selected item to trigger effects
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const snapIndex = emblaApi.selectedScrollSnap(); // Get current snap index
      setSelectedIndex(snapIndex);
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect); // Listen for snap changes
    onSelect(); // Call initially to set the selectedIndex on mount

    return () => {
      emblaApi.off("select", onSelect); // Clean up the listener on unmount
    };
  }, [emblaApi]);

  const items = [
    {
      title: "Deeptech Ventures",
      description:
        "Um6p ventures is committed to advancing deeptech technologies by supporting ventures in agriculture, chemicals, greentech.",
      image: "/assets/deeptech.jpg", // replace with your image path
      buttonText: "LEARN MORE",
    },
    {
      title: "Digital Transformation",
      description:
        "Um6p ventures is committed to advancing digital transformation in agriculture, chemicals, and greentech.",
      image: "/assets/digital-transformation.png", // replace with your image path
      buttonText: "LEARN MORE",
    },
  ];

  return (
    <div className="relative mt-16 w-full">
      <div ref={carouselRef} className="h-[700px] w-full overflow-hidden">
        <div className="flex space-x-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative h-[600px] w-[70%] flex-shrink-0 transform bg-cover bg-center transition-all duration-300 ${
                selectedIndex === index ? "scale-100" : "scale-90"
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 p-8">
                <h2 className="text-3xl text-white">{item.title}</h2>
                <p className="mt-2 w-1/2 text-lg text-white">
                  {item.description}
                </p>
                <Button className="mt-4 bg-orange-500 px-6 py-2 text-white hover:bg-orange-600">
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        className={`absolute bottom-4 right-96 z-10 flex h-10 w-10 transform items-center justify-center rounded transition-all duration-300 ease-in-out ${
          canScrollPrev
            ? "hover:bg-primary-dark bg-primary text-white hover:scale-105"
            : "bg-gray-300 text-gray-500"
        }`}
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canScrollPrev}
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      {/* Next Button */}
      <button
        className={`absolute bottom-4 right-80 z-10 flex h-10 w-10 transform items-center justify-center rounded transition-all duration-300 ease-in-out ${
          canScrollNext
            ? "hover:bg-primary-dark bg-primary text-white hover:scale-105"
            : "bg-gray-300 text-gray-500"
        }`}
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canScrollNext}
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default DeepTransform;
