"use client";

import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

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
    <div className="mt-24 flex w-full flex-col items-center justify-between gap-8 bg-white">
      <div className="container mb-16 flex w-full flex-col text-center">
        <Title>COMPANIES</Title>
        <Subtitle>Companies We’ve Funded</Subtitle>
      </div>
      <CarouselSize />
    </div>
  );
};

const images: string[] = [
  "/assets/companies/DEEPECHO.png",
  "/assets/companies/JIBLY.png",
  "/assets/companies/climate_crop.png",
  "/assets/companies/WafR-768x768(1).png",
  "/assets/companies/SMARTPROF.png",
  "/assets/companies/de_novo.png",
  "/assets/companies/deepika_logo_HD.png",
  "/assets/companies/Hsabati_Logo_Final_HD.png",
  "/assets/companies/Paylik-Logo-light.png",
  "/assets/companies/OMS.svg",
  "/assets/companies/bluedove.png",
  "/assets/companies/INFIUSS_HEALTH.png",
  "/assets/companies/spotter.png",
  "/assets/companies/Photons_Analysis.png",
  "/assets/companies/LOGIDOO.png",
  "/assets/companies/USERGUEST.png",
  "/assets/companies/aerodrive.png",
  "/assets/companies/atarec.png",
  "/assets/companies/logofull_color.png",
  "/assets/companies/Color.png",
  "/assets/companies/Ground_Truth_Analytics.png",
  "/assets/companies/Logo-T3v1.png",
  "/assets/companies/akorn.png",
  "/assets/companies/ZURI_HEALTH.png",
  "/assets/companies/chari.png",
  // "/assets/companies/TERRAA.png",
  "/assets/companies/biotic.png",
  "/assets/companies/cleverlytics.png",
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "center",
        duration: 500,
        loop: true,
        dragFree: true,
        slidesToScroll: 1,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnFocusIn: false,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          playOnInit: true,
        }),
      ]}
      className="flex w-full"
    >
      <CarouselContent className="flex w-full">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
          >
            <Card className="group flex h-32 w-full cursor-pointer items-center justify-center rounded-none bg-gray-100 transition-all duration-300 hover:scale-105 hover:bg-primary">
              <CardContent className="flex h-32 w-full items-center justify-center p-6">
                <div className="relative h-20 w-32">
                  <Image
                    src={src}
                    alt={`Company ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Companies;
