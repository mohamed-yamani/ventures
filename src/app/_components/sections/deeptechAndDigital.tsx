"use client";

import useIntersectionObserver from "~/hooks/useIntersectionObserver";
import Button from "../common/button";
import Subtitle from "../common/subtitle";
import Title from "../common/title";
import Image from "next/image";

const DeeptechAndDigital = () => {
  const [containerRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={containerRef}
      className={`flex w-full flex-col items-center justify-between bg-white pt-16 transition-opacity duration-1000 md:pt-24 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <Title>LOREM IPSUM</Title>
      <Subtitle>Our Focus Areas</Subtitle>
      <div className="w-full bg-gradient-to-b from-white to-[#cbdeed] pb-10 pt-16 md:pb-56 md:pt-36">
        <div className="grid w-full grid-cols-1 items-center justify-center gap-5 text-center md:grid-cols-2 md:gap-32">
          <div
            className={`order-2 flex flex-col items-start justify-start gap-5 p-8 text-start transition-transform duration-1000 md:order-1 md:pl-52 ${
              isIntersecting ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-1 w-10 translate-y-4 rounded-full bg-secondary" />
            <h3 className="text-xl font-semibold text-primary">
              DEEPTECH VENTURES
            </h3>
            <p className="text-justify text-lg text-black">
              {`UM6P Ventures is committed to advancing Deeptech technologies by
              supporting ventures in Agriculture, Chemicals, Greentech, and
              Healthtech. These sectors are critical for Africa's sovereignty
              and the continent's future, directly impacting the quality of life
              and well-being of its populations.`}
            </p>
            <Button className="w-4/12 rounded-none bg-primary text-white">
              LEARN MORE
            </Button>
          </div>
          <div
            className={`order-1 flex h-full w-full flex-col items-end justify-center gap-5 text-center transition-transform duration-1000 md:order-2 ${
              isIntersecting ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative h-0 w-full pb-[56.25%]">
              <Image
                src="/assets/deeptech.jpg"
                alt="ventures"
                fill={true}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div
            className={`order-3 flex flex-col items-start justify-center gap-5 text-center transition-transform duration-1000 md:order-3 ${
              isIntersecting ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/digital-transformation.png"
                alt="ventures"
                fill={true}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div
            className={`order-4 flex flex-col items-start justify-start gap-4 p-8 text-start transition-transform duration-1000 md:order-4 md:mr-52 ${
              isIntersecting ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-1 w-10 translate-y-4 rounded-full bg-secondary" />
            <h3 className="text-xl font-semibold text-primary">
              DIGITAL TRANSFORMATION
            </h3>
            <p className="text-justify text-lg text-black">
              UM6P Ventures also invests in digital startups with businesses in
              Fintech, Logistictech, Proptech, and Retailtech to drive
              innovation and economic growth across Morocco and Africa. we aim
              to foster sustainable growth, generate jobs, and establish Morocco
              and Africa as leaders in the global digital economy.
            </p>
            <Button className="w-4/12 rounded-none bg-primary text-white">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeeptechAndDigital;
