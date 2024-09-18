import Image from "next/image";
import Title from "../_components/common/title";
import Subtitle from "../_components/common/subtitle";
import { Button } from "~/components/ui/button";
import { CircleArrowRight } from "lucide-react";

const images: { src: string; link: string; date: string; title: string }[] = [
  {
    src: "/assets/gallary/img1.png",
    link: "/img1",
    date: "Oct 2022",
    title: "Annual Meeting Side Event",
  },
  {
    src: "/assets/gallary/img2.png",
    link: "/img2",
    date: "Dec 2022",
    title: "Deeptech Ecosystem Startup Showcase",
  },
  {
    src: "/assets/gallary/img3.png",
    link: "/img3",
    date: "Jan 2023",
    title: "Annual Meeting Side Event",
  },
];

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <div className="relative h-[40rem] w-full items-center justify-center">
        <div className="absolute h-full w-full flex-col items-center justify-center gap-4">
          <Image
            src="/assets/gallary/img2.png"
            alt="ventures"
            fill={true}
            className="object-cover"
          />
          <div className="absolute h-full w-full bg-primary opacity-90" />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-center font-medium text-black">
          <Title className="pt-32 text-xl text-secondary">UM6P VENTURES</Title>
          <Subtitle className="text-5xl text-white">Events</Subtitle>
        </div>
      </div>

      <div className="container flex w-full flex-col items-start justify-center gap-4 pb-16">
        <div className="gap-2sm:grid-cols-2 grid w-full grid-cols-1 gap-2 pt-32 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {images.map(({ src, date, title, link }, index) => (
            <div
              key={index}
              className="group relative flex h-96 cursor-pointer flex-wrap items-start justify-start rounded-none bg-gray-100 transition-all duration-300"
            >
              <div className="relative h-3/6 w-full">
                <Image
                  src={src}
                  alt={`Company ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:brightness transition-all duration-300"
                />
              </div>
              <Button className="absolute translate-x-6 translate-y-6 rounded-none bg-secondary font-light text-primary text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary">
                ANNUAL MEETING SIDE EVENT
              </Button>

              <p className="text-grey bottom-0 left-0 bg-opacity-90 px-6 pt-2">
                {date}
              </p>

              <p className="text-grey bottom-0 right-0 bg-opacity-90 px-6 text-2xl text-primary">
                {title}
              </p>

              <div className="flex flex-row items-center justify-center gap-6 bg-opacity-90 px-6 py-4">
                <p className="text-grey text-lg text-secondary">
                  {/* read more */}
                  READ MORE
                </p>
                <CircleArrowRight className="text-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
