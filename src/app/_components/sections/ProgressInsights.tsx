"use client";

import { Merriweather } from "next/font/google";

const font = Merriweather({ weight: "400", subsets: ["latin"] });

const ProgressInsights = () => {
  return (
    <div className="relative flex h-[60vh] w-full flex-col items-center justify-center bg-[#114577] text-white md:h-[40vh] lg:h-[30vh]">
      <div className="flex w-full flex-col justify-between gap-8 px-5 text-center md:flex-row md:gap-6 md:px-10 lg:gap-8">
        {/* INVESTMENT TICKET */}
        <div className="flex w-full flex-col items-center justify-center md:border-r">
          <ProgressInsightsCard
            title="INVESTMENT TICKET"
            value={
              <div className="flex flex-col items-start">
                <p className="text-center text-base font-normal text-orange-400 md:text-lg lg:text-xl">
                  UP TO
                </p>
                <p
                  className={`text-center text-3xl font-normal text-white md:text-5xl lg:text-6xl ${font.className}`}
                >
                  700K <span className="text-lg md:text-xl">USD</span>
                </p>
              </div>
            }
          />
        </div>

        {/* MOROCCAN PORTFOLIO COMPANIES */}
        <div className="flex w-full flex-col items-center justify-center md:border-r">
          <ProgressInsightsCard
            title="MOROCCAN PORTFOLIO COMPANIES"
            value={
              <p
                className={`text-center text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${font.className}`}
              >
                75%
              </p>
            }
          />
        </div>

        {/* FUNDS DEDICATED TO DEEPTECH */}
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressInsightsCard
            title="FUNDS DEDICATED TO DEEPTECH"
            value={
              <p
                className={`text-center text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${font.className}`}
              >
                70%
              </p>
            }
          />
        </div>

        {/* PORTFOLIO COMPANIES */}
        <div className="flex w-full flex-col items-center md:border-l">
          <ProgressInsightsCard
            title="PORTFOLIO COMPANIES"
            value={
              <span
                className={`w-1/2 text-start text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${font.className}`}
              >
                29
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

type ProgressInsightsCardProps = {
  title: string;
  value: React.ReactNode | string;
};

const ProgressInsightsCard = ({ title, value }: ProgressInsightsCardProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-end md:w-8/12 lg:w-9/12">
      <div className="flex flex-row items-start">{value}</div>
      <p className="mt-2 text-start text-sm font-light text-white md:text-base lg:text-lg">
        {title}
      </p>
    </div>
  );
};

export default ProgressInsights;
