import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="bg-bleu-200 relative h-96 w-full flex-col items-end justify-end">
      <div className="container relative">
        <div className="absolute right-0 top-0 z-10 h-72 w-64">
          <div className="absolute left-0 top-0 z-10 h-60 w-60 bg-primary">
            <Image
              src="/assets/team/lamiaaelamrani.png"
              alt="um6p"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-5 right-0 z-10 flex h-10 w-10 items-center justify-center bg-red-500">
            <MoveRightIcon color="white" />
          </div>
          <div className="absolute bottom-0 right-12 z-10 flex h-8 w-10 items-center justify-center bg-blue-500">
            <MoveLeftIcon color="white" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-0 h-80 w-[100vw] flex-row items-start justify-start bg-gradient-to-r from-[#ffffff] to-[#cbdeed]">
        <div className="container flex h-full flex-col gap-4 py-12 text-start">
          <div className="flex w-3/6 flex-col gap-4 text-start">
            <p className="text-3xl text-primary">Our testimolials</p>
            <p className="text-1xl text-black">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif
            </p>
            <p className="text-l text-justify text-black">LAAMIAA EL AMRANI</p>
            <p className="text-l text-justify font-light text-secondary">
              INVESTMENT DIRECTOR
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default TestimonialsSection;
