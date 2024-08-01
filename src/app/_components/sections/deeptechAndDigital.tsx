import Button from "../common/button";
import Subtitle from "../common/subtitle";
import Title from "../common/title";
import Image from "next/image";

const DeeptechAndDigital = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-white pt-24">
      <Title>LOREM IPSUM</Title>
      <Subtitle>Our Focus Areas</Subtitle>
      <div className="w-full bg-gradient-to-b from-white to-[#cbdeed] pb-56 pt-36">
        <div className="container grid w-full grid-cols-1 items-center justify-center gap-4 text-center md:grid-cols-2">
          <div className="order-2 flex flex-col items-start justify-start gap-5 text-start md:order-1">
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
          <div className="order-1 flex flex-col items-end justify-center gap-5 text-center md:order-2">
            <div className="relative aspect-square w-full md:w-8/12">
              <Image
                src="/assets/deeptech.jpg"
                alt="ventures"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-3 flex flex-col items-start justify-center gap-5 text-center md:order-3">
            <div className="relative aspect-square w-full md:w-8/12">
              <Image
                src="/assets/digital-transformation.png"
                alt="ventures"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-4 flex flex-col items-start justify-start gap-4 text-start md:order-4">
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
