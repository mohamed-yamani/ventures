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
            src="/assets/gallary/img2.png"
            alt="ventures"
            fill={true}
            className="object-cover"
          />
          <div className="absolute h-full w-full bg-primary opacity-90" />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-center font-medium text-black">
          <Title className="pt-32 text-6xl text-white">
            Building the future of africa
          </Title>
          <div className="grid grid-cols-1 items-center justify-center gap-4 p-0 py-9 sm:grid-cols-8">
            <div className="col-span-1 flex min-w-max flex-row items-center justify-center bg-white px-3 sm:col-span-7">
              <Search className="text-primary" />
              <Input
                type="text"
                placeholder="Discover our ventures ..."
                className="w-full border-b border-white bg-transparent text-primary placeholder-primary"
              />
            </div>
            <Button className="w-full rounded-none bg-secondary font-normal text-primary text-white sm:col-span-1">
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

        <div className="gap-2sm:grid-cols-2 grid w-full grid-cols-1 gap-2 pt-32 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {images.map(({ src, link }, index) => (
            <div
              key={index}
              className="group flex aspect-square cursor-pointer flex-wrap items-center justify-center gap-4 rounded-none bg-gray-100 transition-all duration-300 hover:bg-primary"
            >
              <div className="relative h-40 w-40">
                <Image
                  src={src}
                  alt={`Company ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </div>
          ))}
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
