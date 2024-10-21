"use client";

import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import ProgressInsights from "./ProgressInsights";
import FindOutMoreButton from "../common/DiscoverArrowButton";

export default function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        if (carouselRef.current) {
          const nextScrollPosition =
            carouselRef.current.scrollLeft + window.innerWidth;
          carouselRef.current.scrollTo({
            left: nextScrollPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carouselOptions = {
    align: "center" as const,
    loop: true,
  };

  const images = [
    "/assets/landing/01.jpg",
    "/assets/landing/02.jpg",
    "/assets/landing/03.jpg",
    "/assets/landing/04.jpg",
    "/assets/landing/05.jpg",
    "/assets/landing/06.jpg",
    "/assets/landing/07.jpg",
  ];

  const renderCarouselItems = () =>
    images.map((src, index) => (
      <CarouselItem key={`carousel-item-${index}`}>
        <div>
          {/* Adjust height here */}
          <CardContent className="flex h-[calc(100vh-35px)] w-screen items-start justify-center bg-[#114577] p-0 sm:h-screen">
            <div className="relative aspect-video w-full sm:h-3/4">
              <Image
                src={src}
                alt={`Landing page image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="object-cover sm:object-contain"
              />
              <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-65 text-white" />
            </div>
          </CardContent>
        </div>
      </CarouselItem>
    ));

  return (
    <main className="relative flex h-[calc(100vh-35px)] w-full flex-col items-center justify-center bg-primary sm:h-screen md:flex-row">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <Carousel
          ref={carouselRef}
          opts={carouselOptions}
          className="m-0 w-screen"
        >
          <CarouselContent className="flex w-full">
            {renderCarouselItems()}
          </CarouselContent>
          <CarouselPrevious className="containers absolute left-6 top-24 z-10 -translate-y-1/2 md:top-1/4 lg:left-48 lg:top-1/3" />
          <CarouselNext className="absolute right-6 top-24 z-10 -translate-y-1/2 transform md:top-1/4 lg:right-48 lg:top-1/3" />
        </Carousel>
        <div className="absolute flex h-full w-full flex-col items-stretch justify-end text-center">
          <ProgressInsights />
          <FindOutMoreButton />
        </div>
      </div>
    </main>
  );
}
