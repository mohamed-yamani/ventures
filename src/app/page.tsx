import LandingPage from "./_components/sections/landing_page";
import Companies from "./_components/sections/companies";
import DeeptechAndDigital from "./_components/sections/deeptechAndDigital";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      <LandingPage />
      <Companies />
      <div className="h-screen w-full">
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <DeeptechAndDigital />
    </main>
  );
}
