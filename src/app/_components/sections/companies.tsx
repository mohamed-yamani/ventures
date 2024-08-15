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
import useIntersectionObserver from "~/hooks/useIntersectionObserver";
import { Link } from "lucide-react";
import { ROUTES } from "~/utils/constants/routes";
import { useRouter } from "next/navigation";

const Companies = () => {
  const [containerRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={containerRef}
      className={`mt-24 flex w-full flex-col items-center justify-between gap-8 bg-white transition-opacity duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mb-16 flex w-full flex-col text-center">
        <Title>COMPANIES</Title>
        <Subtitle>Companies We’ve Funded</Subtitle>
      </div>
      <CarouselWrapper />
    </div>
  );
};

const images: { src: string; link: string }[] = [
  { src: "/assets/companies/DEEPECHO.png", link: "/deepecho" },
  { src: "/assets/companies/JIBLY.png", link: "/jibly" },
  { src: "/assets/companies/climate_crop.png", link: "/climate-crop" },
  { src: "/assets/companies/WafR-768x768(1).png", link: "/wafr" },
  { src: "/assets/companies/SMARTPROF.png", link: "/smartprof" },
  { src: "/assets/companies/de_novo.png", link: "/de-novo" },
  { src: "/assets/companies/deepika_logo_HD.png", link: "/deepika" },
  { src: "/assets/companies/Hsabati_Logo_Final_HD.png", link: "/hsabati" },
  { src: "/assets/companies/Paylik-Logo-light.png", link: "/paylik" },
  { src: "/assets/companies/OMS.svg", link: "/oms" },
  { src: "/assets/companies/bluedove.png", link: "/bluedove" },
  { src: "/assets/companies/INFIUSS_HEALTH.png", link: "/infuiss-health" },
  { src: "/assets/companies/spotter.png", link: "/spotter" },
  { src: "/assets/companies/Photons_Analysis.png", link: "/photons-analysis" },
  { src: "/assets/companies/LOGIDOO.png", link: "/logidoo" },
  { src: "/assets/companies/USERGUEST.png", link: "/userguest" },
  { src: "/assets/companies/aerodrive.png", link: "/aerodrive" },
  { src: "/assets/companies/atarec.png", link: "/atarec" },
  { src: "/assets/companies/logofull_color.png", link: "/logofull" },
  { src: "/assets/companies/Color.png", link: "/color" },
  {
    src: "/assets/companies/Ground_Truth_Analytics.png",
    link: "/ground-truth",
  },
  { src: "/assets/companies/Logo-T3v1.png", link: "/t3" },
  { src: "/assets/companies/akorn.png", link: "/akorn" },
  { src: "/assets/companies/ZURI_HEALTH.png", link: "/zuri-health" },
  { src: "/assets/companies/chari.png", link: "/chari" },
  { src: "/assets/companies/biotic.png", link: "/biotic" },
  { src: "/assets/companies/cleverlytics.png", link: "/cleverlytics" },
];

function CarouselWrapper() {
  const router = useRouter();

  const handleCardClick = async (link: string) => {
    try {
      router.push(link);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    }),
  );

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
        slidesToScroll: 1,
        duration: 1500,
        startIndex: 0,
      }}
      plugins={[autoplay.current]}
      className="flex w-full"
    >
      <CarouselContent className="flex w-full">
        {images.map(({ src, link }, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 basis-1/2 p-1 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
          >
            <Card
              onClick={() => handleCardClick(link)}
              className="group flex h-32 w-full cursor-pointer items-center justify-center rounded-none bg-gray-100 transition-all duration-300 hover:scale-105 hover:bg-primary"
            >
              <CardContent className="flex h-32 w-full items-center justify-center p-0">
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
