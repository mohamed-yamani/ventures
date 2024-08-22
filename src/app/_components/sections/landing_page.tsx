"use client";

import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Button from "../common/button";
import SocialIcons from "../common/SocialIcons";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import { Send } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import ContactUsSection from "./ContactUs";

export default function LandingPage() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

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

  const renderCarouselItems = () => {
    return Array.from({ length: images.length }).map((_, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent className="flex h-screen w-screen items-center justify-center bg-primary p-0">
            <div className="relative h-full w-full">
              <Image
                src={images[index] ?? ""}
                alt={`Image ${index}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 text-white" />
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ));
  };

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-white to-[#cbdeed] md:flex-row">
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <Carousel
          ref={carouselRef}
          opts={carouselOptions}
          className="m-0 w-screen"
        >
          <CarouselContent className="flex w-full">
            {renderCarouselItems()}
          </CarouselContent>
          <CarouselPrevious className="containers absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-48" />
          <CarouselNext className="absolute right-6 top-1/2 z-10 -translate-y-1/2 transform md:right-48" />
        </Carousel>
        <div className="container absolute flex h-full w-full flex-col items-stretch justify-end pb-10 text-center">
          <div className="flex flex-col-reverse items-center justify-between gap-9 md:flex-row">
            <div className="flex flex-row gap-4">
              <SocialIcons
                src="/assets/social_icons/instagram.png"
                alt="Instagram"
              />
              <SocialIcons
                src="/assets/social_icons/linkedin.png"
                alt="LinkedIn"
              />
              <SocialIcons src="/assets/social_icons/play.png" alt="Play" />
              <SocialIcons src="/assets/social_icons/x.png" alt="X" />
              <SocialIcons
                src="/assets/social_icons/facebook.png"
                alt="Facebook"
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="group rounded-full bg-white px-4 py-2 text-primary hover:text-white">
                  <div className="flex flex-row items-center gap-2">
                    <Send className="size-5 group-hover:text-white" />
                    <span className="group-hover:text-white">CONTACT US</span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent
                className="flex min-w-max flex-col items-center justify-center rounded-none border-none bg-primary text-black"
                closeIconClassName="text-white size-6"
              >
                <ContactUsSection />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </main>
  );
}
