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

export default function LandingPage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-white to-[#cbdeed] md:flex-row">
      {/* <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to the ventures App
        </h1>
        <p className="text-lg text-gray-600">
          The ventures app is a platform that helps you to manage your projects
        </p>
        <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
          Get Started
        </button>
      </div> */}

      <div className="flex h-screen flex-col items-center justify-center text-center">
        {/* <video className="h-full w-full object-cover" autoPlay muted loop>
          <source
            src="https://videos.pexels.com/video-files/1851768/1851768-uhd_3840_2160_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <Carousel className="m-0 w-screen">
          <CarouselContent className="flex w-full">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex h-screen w-screen items-center justify-center p-0">
                    <div className="relative h-full w-full">
                      <Image
                        src={`/assets/landing/${index + 1}.jpg`}
                        alt={`Company ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="containers absolute left-6 top-1/2 z-50 -translate-y-1/2 md:left-48" />
          <CarouselNext className="absolute right-6 top-1/2 z-50 -translate-y-1/2 transform md:right-48" />
        </Carousel>
        <div className="container absolute flex h-full w-full flex-col items-stretch justify-end pb-10 text-center">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4">
              <SocialIcons
                src="/assets/social_icons/instagram.png"
                alt="instagram"
              />

              <SocialIcons
                src="/assets/social_icons/linkedin.png"
                alt="linkedin.png"
              />

              <SocialIcons src="/assets/social_icons/play.png" alt="x" />
              <SocialIcons src="/assets/social_icons/x.png" alt="x" />

              <SocialIcons src="/assets/social_icons/facebook.png" alt="x" />
            </div>
            <Button className="rounded-full bg-white px-4 py-2 text-primary">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={"/assets/social_icons/send.png"}
                  alt={"send"}
                  width={20}
                  height={20}
                  className="transform cursor-pointer transition duration-300 hover:scale-110"
                />
                CONTACT US
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
