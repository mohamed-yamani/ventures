import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import ActionButton from "../common/button";

export default function LandingPage1() {
  return (
    <main className="flex h-screen w-full flex-col bg-gradient-to-r from-white to-[#cbdeed] md:flex-row">
      <div className="container flex flex-row items-center justify-between gap-4 py-4">
        <div className="bg-green flex h-[100vh] w-1/2 flex-col items-start justify-center gap-4 py-12 text-center">
          <p className="text-1xl font-montserrat text-secondary">
            THE FUTURE OF AFRICA AND BEYOND
          </p>
          <p className="font-montserrat text-3xl text-black">
            Investing in science and innovation
          </p>
          <p className="text-l text-justify font-montserrat text-black">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif 
          </p>
          <div className="h-12 w-1/2"></div>
          <div className="flex gap-8">
            <Link href="https://create.t3.gg/en/introduction" target="_blank">
              <Button className="background text-l text-white">
                CHECK OUR FOCUS AREAS
              </Button>
            </Link>
            <div className="flex gap-2">
              <Image
                src="/assets/linkedin.svg"
                alt="Hero Image"
                width={32}
                height={32}
                className="transform cursor-pointer transition duration-300 hover:scale-110"
              />
              <Image
                src="/assets/x.svg"
                alt="Hero Image"
                width={30}
                height={30}
                className="transform cursor-pointer transition duration-300 hover:scale-110"
              />
              <Image
                src="/assets/instagram.svg"
                alt="Hero Image"
                width={32}
                height={32}
                className="transform cursor-pointer transition duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[100vh] flex-col items-center justify-center gap-4 py-12 text-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 w-64 translate-y-5 cursor-pointer">
              <p className="marker absolute bottom-6 left-4 z-10 text-start font-montserrat font-bold text-secondary">
                GREENTECH
              </p>
              <div className="relative h-80 w-64 justify-center overflow-hidden rounded-br-3xl rounded-tl-full bg-white shadow-sm">
                <Image
                  src="/assets/gallary/img2.png"
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
              </div>
            </div>
            <div className="relative h-80 w-64 -translate-y-5 cursor-pointer">
              <ActionButton className="marker absolute right-10 top-10 z-10 bg-white px-14 py-4 font-montserrat text-secondary hover:text-white">
                CHEMICALS
              </ActionButton>
              <div className="relative h-80 w-64 justify-center overflow-hidden rounded-b-xl rounded-tr-full bg-white shadow-sm">
                <Image
                  src="/assets/blog-virtual-meeting-video-conferencing.webp"
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="relative h-80 w-64 translate-y-5 cursor-pointer">
              <ActionButton className="marker absolute bottom-10 right-10 z-10 px-14 py-4 font-montserrat">
                HEALTHTECH
              </ActionButton>
              <div className="relative h-80 w-64 justify-center overflow-hidden rounded-bl-full rounded-tl-xl bg-white shadow-sm">
                <Image
                  src="/assets/blog-virtual-meeting-video-conferencing.webp"
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="relative h-80 w-64 -translate-y-5 cursor-pointer">
              <p className="marker absolute left-4 top-6 z-10 text-start font-montserrat font-bold text-secondary">
                AGRICULTURE
              </p>
              <div className="relative h-80 w-64 justify-center overflow-hidden rounded-br-full rounded-tr-xl bg-white shadow-sm">
                <Image
                  src="/assets/gallary/img2.png"
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
