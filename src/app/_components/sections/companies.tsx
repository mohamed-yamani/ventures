"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

import Subtitle from "../common/subtitle";
import Title from "../common/title";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="mb-10 mt-10 flex w-full flex-col items-center justify-between gap-8 bg-white">
      <div className="container flex w-full flex-col text-center">
        <Title>OUR PORTFOLIO</Title>
        <Subtitle>Discover the companies we’ve funded</Subtitle>
      </div>
      <CarouselSize />
    </div>
  );
};

import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "center",
        duration: 500,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnFocusIn: false,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          playOnInit: true,
        }),
      ]}
      className="flex w-screen"
    >
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
          >
            <Card className="flex h-32 w-72 items-center justify-center rounded-none bg-gray-300">
              <CardContent className="flex h-32 w-64 items-center justify-center p-6">
                <Image
                  src={`/assets/img${index + 1}.png`}
                  alt={`Company ${index + 1}`}
                  width={80}
                  height={50}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Companies;
