import Image from "next/image";
import Title from "../_components/common/title";
import Button from "../_components/common/button";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "../_components/common/input";
import Subtitle from "../_components/common/subtitle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Checkbox } from "~/components/ui/checkbox";

const images: { src: string; link: string }[] = [
  { src: "/assets/companies/DEEPECHO.png", link: "/deepecho" },
  { src: "/assets/companies/JIBLY.png", link: "/jibly" },
  { src: "/assets/companies/climate_crop.png", link: "/climate-crop" },
  { src: "/assets/companies/WafR-768x768(1).png", link: "/wafr" },
  { src: "/assets/companies/SMARTPROF.png", link: "/smartprof" },
  { src: "/assets/companies/de_novo.png", link: "/de-novo" },
  { src: "/assets/companies/deepika_logo_HD.png", link: "/deepika" },
  { src: "/assets/companies/Hsabati_Logo_Final_HD.png", link: "/hsabati" },
  { src: "/assets/companies/Paylik-Logo-light.png", link: "/paylik" },
  { src: "/assets/companies/OMS.svg", link: "/oms" },
  { src: "/assets/companies/bluedove.png", link: "/bluedove" },
  { src: "/assets/companies/INFIUSS_HEALTH.png", link: "/infuiss-health" },
  { src: "/assets/companies/spotter.png", link: "/spotter" },
  { src: "/assets/companies/Photons_Analysis.png", link: "/photons-analysis" },
  { src: "/assets/companies/LOGIDOO.png", link: "/logidoo" },
  { src: "/assets/companies/USERGUEST.png", link: "/userguest" },
  { src: "/assets/companies/aerodrive.png", link: "/aerodrive" },
  { src: "/assets/companies/atarec.png", link: "/atarec" },
  { src: "/assets/companies/logofull_color.png", link: "/logofull" },
  { src: "/assets/companies/Color.png", link: "/color" },
  {
    src: "/assets/companies/Ground_Truth_Analytics.png",
    link: "/ground-truth",
  },
  { src: "/assets/companies/Logo-T3v1.png", link: "/t3" },
  { src: "/assets/companies/akorn.png", link: "/akorn" },
  { src: "/assets/companies/ZURI_HEALTH.png", link: "/zuri-health" },
  { src: "/assets/companies/chari.png", link: "/chari" },
  { src: "/assets/companies/biotic.png", link: "/biotic" },
  { src: "/assets/companies/cleverlytics.png", link: "/cleverlytics" },
];

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <div className="relative h-[40rem] w-full items-center justify-center">
        <div className="absolute h-full w-full flex-col items-center justify-center gap-4">
          <Image
            src="/assets/background/bg.jpeg"
            alt="ventures"
            fill={true}
            className="object-cover"
          />
          <div className="absolute h-full w-full bg-primary opacity-80" />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-center font-medium text-black">
          <Title className="pt-32 text-6xl text-white">
            Building the future of Africa
          </Title>
          <div className="flex flex-col items-center justify-center gap-4 py-9 sm:flex-row sm:justify-between">
            <div className="flex min-w-[300px] flex-row items-center justify-center bg-white px-3 sm:min-w-max sm:flex-grow">
              <Search className="text-primary" />
              <Input
                type="text"
                placeholder="Discover our ventures ..."
                className="w-full border-b border-white bg-transparent text-primary placeholder-primary caret-primary sm:w-[300px] lg:w-[680px]"
              />
            </div>

            <Button className="w-full rounded-none bg-secondary font-normal text-primary text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary sm:w-auto">
              SEARCH
            </Button>
          </div>
        </div>
      </div>

      <div className="container flex w-full flex-col items-start justify-center gap-4 pb-16 pt-32">
        <Subtitle>Filter By Category</Subtitle>
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <DynamicPopover name="FOCUS AREAS" items={["DEEPTECH", "DIGITAL"]} />
          <DynamicPopover name="SECTORS" items={["AGRICULTURE", "HEALTH"]} />
          <DynamicPopover
            name="INVESTMENT STAGE"
            items={["SEED", "SERIES A"]}
          />
          <DynamicPopover
            name="LOCATION"
            items={["MOROCCO", "SENEGAL", "IVORY COAST"]}
          />
        </div>

        <div className="flex w-full flex-wrap gap-2 pt-32">
          {images.map(({ src, link }, index) => {
            const isLastRow = index >= images.length - (images.length % 4);

            return (
              <div
                key={index}
                className={`group relative z-10 flex aspect-video w-full origin-top transform cursor-pointer items-center justify-center gap-4 rounded-none border border-gray-300 py-6 transition-all duration-300 ease-in-out hover:z-[100] hover:border-none hover:bg-primary sm:w-[calc(50%-8px)] md:w-[calc(33%-8px)] lg:w-[calc(25%-8px)] ${
                  isLastRow
                    ? "hover:-translate-y-[104%] hover:scale-y-[204%]" // Scale upwards for the last row
                    : "hover:scale-y-[204%]"
                }`}
              >
                {/* Fix the image size to prevent scaling */}
                <div className="relative h-32 w-32 transform transition-all duration-300 ease-in-out group-hover:scale-y-[50%]">
                  <Image
                    src={src}
                    alt={`Company ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="object-contain group-hover:brightness-0 group-hover:invert" // Ensure the image itself stays contained within the container
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function DynamicPopover({ name, items }: { name: string; items: string[] }) {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="group flex w-80 cursor-pointer flex-row items-center justify-between rounded-none border border-primary px-5 font-normal text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          <div className="bg-transparent py-2 font-normal text-primary transition duration-300 ease-in-out hover:bg-transparent group-hover:text-white">
            {name}
          </div>
          <ChevronDown className="text-primary transition duration-300 ease-in-out group-hover:text-white" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex w-80 flex-col rounded-none border border-primary bg-white p-4 shadow-lg">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 p-3">
            <Checkbox id={`checkbox-${index}`} />
            <label
              htmlFor={`checkbox-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item}
            </label>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
