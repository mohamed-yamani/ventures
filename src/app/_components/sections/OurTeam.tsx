import { LucideIcon } from "lucide-react";
import Subtitle from "../common/subtitle";
import TeamMember from "../common/TeamMember";
import Title from "../common/title";
import Image from "next/image";
import GetInTouch from "./GetInTouch";
import ContactForm from "~/components/ui/ContactForm";

const teamMembers = [
  {
    name: "Yassine Laghzioui",
    role: "Chief Executive Officer",
    imageSrc: "/assets/team/yassinelaghzioui.png",
  },
  {
    name: "Sofia Zine-Eddine",
    role: "Chief Finance Officer",
    imageSrc: "/assets/team/SofiaZine-Eddine.png",
  },
  {
    name: "Lamiaa El Amrani",
    role: "Investment Director",
    imageSrc: "/assets/team/lamiaaelamrani.png",
  },
  {
    name: "Yassine Laghzioui",
    role: "CEO",
    imageSrc: "/assets/team/yassinelaghzioui.png",
  },
  {
    name: "Sofia Zine-Eddine",
    role: "Chief Finance Officer",
    imageSrc: "/assets/team/SofiaZine-Eddine.png",
  },
  {
    name: "Lamiaa El Amrani",
    role: "Investment Director",
    imageSrc: "/assets/team/lamiaaelamrani.png",
  },
  {
    name: "Sofia Zine-Eddine",
    role: "Chief Finance Officer",
    imageSrc: "/assets/team/SofiaZine-Eddine.png",
  },
  {
    name: "Lamiaa El Amrani",
    role: "Investment Director",
    imageSrc: "/assets/team/lamiaaelamrani.png",
  },
];

const OurTeam = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full items-center justify-center">
        <div className="absolute h-full w-full flex-col items-center justify-center gap-4">
          <Image
            src="/assets/background/bg.jpeg"
            alt="Background of our ventures"
            fill={true}
            className="object-cover"
            priority
          />
          <div className="absolute h-full w-full bg-primary opacity-80" />
        </div>
        <div className="container relative mr-28 mt-20 flex h-full flex-col items-start justify-center text-center font-medium text-black">
          <div className="flex h-2 w-24 flex-col items-center justify-center gap-4 bg-orange-600" />
          <Subtitle className="text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Meet the team
          </Subtitle>
          <div className="grid grid-cols-1 items-center justify-center gap-4 p-0 py-9 sm:grid-cols-8"></div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto mt-52">
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mb-24 mt-24 h-[25rem] w-full bg-primary bg-gradient-to-r from-white to-[#bbd0e1]">
        <div className="container flex w-full flex-col items-start justify-center gap-4">
          <div className="grid w-full grid-cols-1 items-center justify-center md:grid-cols-2">
            {/* Textual Testimonial */}
            <div className="flex flex-col items-start justify-center gap-6 p-4">
              <p className="text-3xl font-semibold text-primary sm:text-4xl">
                Our Testimonials
              </p>
              <blockquote className="text-justify text-lg font-normal text-gray-800">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définit.
              </blockquote>
              <div>
                <p className="text-lg font-normal text-gray-800">
                  LAAMIAA EL AMRANI
                </p>
                <p className="text-lg font-normal text-secondary">
                  INVESTMENT DIRECTOR
                </p>
              </div>
            </div>

            {/* Testimonial Image */}
            <div className="items-top relative flex h-[400px] w-full justify-center">
              <div className="relative flex h-96 w-80 -translate-y-20 items-center justify-center bg-[#e9a25d]">
                <Image
                  src="/assets/team/SofiaZine-Eddine.png"
                  alt="Sofia Zine-Eddine - Chief Finance Officer"
                  fill={true}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute h-16 w-20 translate-x-14 translate-y-80 bg-primary" />
              <div className="absolute h-20 w-24 translate-x-40 translate-y-64 bg-secondary" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <GetInTouch />
      <ContactForm />
    </main>
  );
};

export default OurTeam;
