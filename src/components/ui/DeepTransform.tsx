"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import Subtitle from "~/app/_components/common/subtitle";
import Title from "~/app/_components/common/title";

const DeepTransform = () => {
  const [carouselRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: "center", // Center the active item
    containScroll: "trimSnaps", // Prevent over-scrolling
    // dragFree: false, // Disable free dragging
    // speed: 10, // Set the speed of the slider
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
    <div className="relative mb-16 mt-16 w-full lg:mb-24 lg:mt-36">
      <div className="flex w-full flex-col items-center justify-between bg-white pb-16 transition-opacity duration-1000 lg:pb-24">
        <Title>LOREM IPSUM</Title>
        <Subtitle>Our Focus Areas</Subtitle>
      </div>

      <div
        ref={carouselRef}
        className="h-[450px] w-full overflow-hidden lg:h-[700px]"
      >
        <div className="flex space-x-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative w-[92%] flex-shrink-0 transform bg-cover bg-center transition-all duration-300 lg:h-[600px] lg:w-[70%] ${
                selectedIndex === index ? "scale-100" : "scale-90"
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 p-8 lg:pl-32 lg:pt-56">
                <h2 className="pb-10 font-montserrat text-3xl font-normal tracking-wide text-white">
                  {item.title}
                </h2>
                <p className="mt-2 pb-3 font-montserrat text-lg text-white lg:w-5/12">
                  {item.description}
                </p>
                <Button className="mt-4 rounded-none bg-orange-500 px-6 py-2 font-montserrat text-white hover:bg-orange-600">
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flexbox Container for Buttons */}
      <div className="absolute bottom-4 flex w-full items-center gap-5 px-10 lg:-right-[71.1%]">
        {/* Previous Button */}
        <Button
          className={`flex h-10 w-16 items-center justify-center rounded-none transition-all duration-300 ease-in-out ${
            canScrollPrev
              ? "hover:bg-primary-dark bg-primary text-white hover:scale-105"
              : "bg-gray-300 text-gray-500"
          }`}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        {/* Next Button */}
        <Button
          className={`flex h-10 w-16 items-center justify-center rounded-none transition-all duration-300 ease-in-out ${
            canScrollNext
              ? "hover:bg-primary-dark bg-primary text-white hover:scale-105"
              : "bg-gray-300 text-gray-500"
          }`}
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={!canScrollNext}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default DeepTransform;
