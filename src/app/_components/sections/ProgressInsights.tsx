"use client";

import { Merriweather } from "next/font/google";

const merriweatherfont = Merriweather({ weight: "400", subsets: ["latin"] });

const ProgressInsights = () => {
  return (
    <div className="relative flex h-[60vh] w-full items-center justify-center bg-[#114577] text-white md:h-[40vh] lg:h-[30vh]">
      <div className="flex w-full items-center justify-between gap-8 px-5 pb-10 text-center md:gap-6 md:px-10 lg:gap-8">
        {/* INVESTMENT TICKET */}
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressInsightsCard
            title="INVESTMENT TICKET"
            value={
              <div className="flex h-36 flex-col items-start justify-end">
                <p className="text-sm font-normal text-orange-400 md:text-base lg:text-lg">
                  UP TO
                </p>
                <p
                  className={`text-5xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
                >
                  700K <span className="text-lg md:text-xl">USD</span>
                </p>
              </div>
            }
          />
        </div>
        {/* vertical line */}
        <div className="mt-10 h-28 w-1 bg-white"></div>
        {/* MOROCCAN PORTFOLIO COMPANIES */}
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressInsightsCard
            title="MOROCCAN PORTFOLIO COMPANIES"
            value={
              <div className="flex h-36 flex-col items-start justify-end">
                <p
                  className={`text-5xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
                >
                  75 <span className="text-lg md:text-xl">%</span>
                </p>
              </div>
            }
          />
        </div>

        {/* vertical line */}
        <div className="mt-10 h-28 w-1 bg-white"></div>
        {/* FUNDS DEDICATED TO DEEPTECH */}
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressInsightsCard
            title="FUNDS DEDICATED TO DEEPTECH"
            value={
              <div className="flex h-36 flex-col items-start justify-end">
                <p
                  className={`text-5xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
                >
                  70 <span className="text-lg md:text-xl">%</span>
                </p>
              </div>
            }
          />
        </div>

        {/* vertical line */}
        <div className="mt-10 h-28 w-1 bg-white"></div>

        {/* PORTFOLIO COMPANIES */}
        <div className="flex w-full flex-col items-center">
          <ProgressInsightsCard
            title="PORTFOLIO COMPANIES"
            value={
              <div className="flex h-36 flex-col items-start justify-end">
                <p
                  className={`text-5xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
                >
                  29
                </p>
              </div>
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
    <div className="flex h-52 w-72 flex-col items-start justify-between">
      <div>{value}</div>
      <p className="mt-2 h-12 text-start font-montserrat text-sm font-light text-white md:text-base lg:text-lg">
        {title}
      </p>
    </div>
  );
};

export default ProgressInsights;
