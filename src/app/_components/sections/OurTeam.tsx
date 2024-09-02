import Subtitle from "../common/subtitle";
import TeamMember from "../common/TeamMember";
import Title from "../common/title";
import Image from "next/image";

const OurTeam = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <div className="relative h-[30rem] w-full items-center justify-center">
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
          <Title className="mt-44 translate-y-7 text-2xl font-light text-secondary">
            TEAM MEMBERS
          </Title>
          <Subtitle className="text-7xl text-white">Uv Team</Subtitle>
          <div className="grid grid-cols-1 items-center justify-center gap-4 p-0 py-9 sm:grid-cols-8"></div>
        </div>
      </div>
      <div className="container mx-auto mt-52">
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <TeamMember
            name="Yassine Laghzioui"
            role="Chief Executive Officer"
            imageSrc="/assets/team/yassinelaghzioui.png"
          />
          <TeamMember
            name="Sofia Zine-Eddine"
            role="Chief Finance Officer"
            imageSrc="/assets/team/SofiaZine-Eddine.png"
          />
          <TeamMember
            name="Lamiaa El Amrani"
            role="Investment Director"
            imageSrc="/assets/team/lamiaaelamrani.png"
          />
          <TeamMember
            name="Yassine Laghzioui"
            role="CEO"
            imageSrc="/assets/team/yassinelaghzioui.png"
          />
          <TeamMember
            name="Sofia Zine-Eddine"
            role="Chief Finance Officer"
            imageSrc="/assets/team/SofiaZine-Eddine.png"
          />
          <TeamMember
            name="Lamiaa El Amrani"
            role="Investment Director"
            imageSrc="/assets/team/lamiaaelamrani.png"
          />
          <TeamMember
            name="Sofia Zine-Eddine"
            role="Chief Finance Officer"
            imageSrc="/assets/team/SofiaZine-Eddine.png"
          />
          <TeamMember
            name="Lamiaa El Amrani"
            role="Investment Director"
            imageSrc="/assets/team/lamiaaelamrani.png"
          />
        </div>
      </div>

      <div className="mb-96 mt-24 h-[25rem] w-full bg-primary bg-gradient-to-r from-white to-[#bbd0e1]">
        <div className="container flex w-full flex-col items-start justify-center gap-4">
          <div className="grid w-full grid-cols-1 grid-rows-1 items-center justify-center md:grid-cols-2">
            <div className="flex flex-col items-start justify-center gap-4 p-4">
              <p className="text-3xl font-semibold text-primary">
                Our testimolials
              </p>
              <p className="text-lg font-normal text-gray-800">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définit 
              </p>
              <div>
                <p className="text-lg font-normal text-gray-800">
                  {/* Lamiaa El Amrani */}
                  LAAMIAA EL AMRANI
                </p>
                {/* Investment Director */}
                <p className="text-lg font-normal text-secondary">
                  INVESTMENT DIRECTOR
                </p>
              </div>
            </div>
            <div className="items-top relative flex h-[25rem] w-full justify-center">
              <div className="relative flex h-96 w-80 -translate-y-20 items-center justify-center bg-[#e9a25d]">
                <Image
                  src="/assets/team/SofiaZine-Eddine.png"
                  alt="ventures"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="absolute h-16 w-20 translate-x-14 translate-y-80 bg-primary" />
              <div className="absolute h-20 w-24 translate-x-40 translate-y-64 bg-secondary" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
