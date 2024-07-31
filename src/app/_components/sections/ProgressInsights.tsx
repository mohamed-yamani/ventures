"use client";

import { Merriweather } from "next/font/google";

const font = Merriweather({ weight: "400", subsets: ["latin"] });
const ProgressInsights = () => {
  return (
    <div className="relative flex h-[50vh] w-full flex-col items-center justify-center bg-primary text-white md:h-[20vh]">
      <div className="container absolute flex flex-col justify-between gap-8 text-center md:flex-row md:gap-0">
        <div className="flex w-full flex-col items-center">
          <ProgressInsightsCard
            title="PORTFOLIO COMPANIES"
            value={
              <p
                className={`text-center text-xl font-light text-white ${font.className} w-1/2`}
              >
                29
              </p>
            }
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center md:border-l md:border-r">
          <ProgressInsightsCard
            title="MOROCCAN PORTFOLIO COMPANIES"
            value={
              <p
                className={`text-center text-xl font-light text-white ${font.className}`}
              >
                75%
              </p>
            }
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center md:border-r">
          <ProgressInsightsCard
            title="INVESTMENT TICKET"
            value={
              <p
                className={`text-center text-xl font-light text-white ${font.className}`}
              >
                <span className="text-secondary">up to</span> 700K USD
              </p>
            }
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressInsightsCard
            title="FUNDS DEDICATED TO DEEPTECH"
            value={
              <p
                className={`text-center text-xl font-light text-white ${font.className}`}
              >
                70%
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

type progressInsightsCardProps = {
  title: string;
  value: React.ReactNode | string;
};

const ProgressInsightsCard = ({ title, value }: progressInsightsCardProps) => {
  // return number and title
  return (
    <div className="flex w-8/12 flex-col">
      <div className="flex flex-row items-center justify-center text-center">
        {value}
      </div>
      <p className="font-normal text-white">{title}</p>
    </div>
  );
};

export default ProgressInsights;
