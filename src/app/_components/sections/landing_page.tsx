import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="flex h-screen w-full flex-row bg-gradient-to-r from-[#ffffff] to-[#cbdeed]">
      <div className="bg-green container flex h-[100vh] w-1/2 flex-col items-start justify-center gap-4 py-12 text-center">
        <p className="text-1xl font-montserrat text-secondary">
          THE FUTURE OF AFRICA AND BEYOND
        </p>
        <p className="font-montserrat text-3xl text-black">
          Investing in science and innovation
        </p>
        <p className="text-l font-montserrat text-justify text-black">
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif 
        </p>
        <div className="h-12 w-1/2"></div>
        <div className="flex gap-4">
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <Button className="background text-l text-white">
              {/* Check our focus areas */}
              CHECK OUR FOCUS AREAS
            </Button>
          </Link>
          <Image
            src="/assets/linkedin.svg"
            alt="Hero Image"
            width={30}
            height={30}
          />
          <Image src="/assets/x.svg" alt="Hero Image" width={30} height={30} />
          <Image
            src="/assets/instagram.svg"
            alt="Hero Image"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="bg-red container flex h-[100vh] w-1/2 flex-col gap-4 py-12 text-center">
        {/* hello world (Red half) */}
      </div>
    </main>
  );
}
