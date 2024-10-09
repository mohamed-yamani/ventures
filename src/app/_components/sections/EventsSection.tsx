import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import ActionButton from "../common/button";

const EventsSection = () => {
  return (
    <section className="relative h-[650px] w-screen flex-col items-center justify-center bg-gradient-to-r from-[#ffffff] to-[#cbdeed] text-center">
      <div className="container flex h-full flex-col items-center justify-center gap-4 text-start">
        <CarouselSpacing />
      </div>
    </section>
  );
};

export default EventsSection;

export function CarouselSpacing() {
  return (
    <Carousel className="relative mx-20 w-full items-center justify-center p-0">
      {" "}
      {/* Changed absolute to relative for better alignment */}
      <CarouselContent className="-ml-1 flex items-center justify-center space-x-4">
        {" "}
        {/* Added justify-center and items-center */}
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="relative flex items-center justify-center pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="h-96 w-64 overflow-hidden rounded-bl-[100px] rounded-tr-[100px] bg-white shadow-sm">
              <div className="relative flex h-full flex-col items-center justify-start bg-gray-50 text-center">
                <div className="relative flex h-full w-full flex-col items-center justify-center bg-green-500">
                  <Image
                    src="/assets/blog-virtual-meeting-video-conferencing.webp"
                    alt="Event Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white px-14 py-4">
                  <h3 className="text-sm font-light text-primary">
                    DIGITAL SUMMIT
                  </h3>
                  <p className="text-sm">GITEX Africa Event May 2023</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white px-14 py-4">
              <p>check event</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-20 z-10 flex h-10 w-10 translate-y-60 items-center justify-center rounded-none bg-blue-500" />
      <CarouselNext className="absolute left-36 z-10 flex h-10 w-10 translate-y-60 items-center justify-center rounded-none bg-red-500" />
      <div className="absolute -bottom-[70px] right-20 z-0 flex h-10 w-[10vw] flex-row items-start justify-start">
        <ActionButton className="w-full bg-primary text-white">
          ALL EVENTS
        </ActionButton>
      </div>
    </Carousel>
  );
}
