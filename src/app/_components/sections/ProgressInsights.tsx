"use client";

import { Merriweather } from "next/font/google";

const merriweatherfont = Merriweather({ weight: "400", subsets: ["latin"] });

const ProgressInsights = () => {
  return (
    <div className="relative flex h-[50vh] w-full -translate-y-20 items-center justify-center bg-[#114577] text-white sm:translate-y-0 md:h-[40vh] lg:h-[40vh] lg:pt-16 xl:h-[30vh] xl:pt-0">
      {/* Grid layout on small screens and flex on larger screens */}
      <div className="container grid grid-cols-2 gap-4 px-5 pb-10 text-center sm:grid-cols-4 md:flex md:w-full md:items-center md:justify-between md:gap-6 md:px-10 lg:gap-8">
        <ProgressInsightsCard
          title="INVESTMENT TICKET"
          value={
            <div className="flex h-36 flex-col items-start justify-end">
              <p className="text-sm font-normal text-orange-400 md:text-base lg:text-lg">
                UP TO
              </p>
              <p
                className={`text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
              >
                700K <span className="text-lg md:text-xl">USD</span>
              </p>
            </div>
          }
        />

        <VerticalDivider />

        <ProgressInsightsCard
          title="MOROCCAN PORTFOLIO COMPANIES"
          value={
            <div className="flex h-36 flex-col items-start justify-end">
              <p
                className={`text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
              >
                75 <span className="text-lg md:text-xl">%</span>
              </p>
            </div>
          }
        />

        <VerticalDivider />

        <ProgressInsightsCard
          title="FUNDS DEDICATED TO DEEPTECH"
          value={
            <div className="flex h-36 flex-col items-start justify-end">
              <p
                className={`text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
              >
                70 <span className="text-lg md:text-xl">%</span>
              </p>
            </div>
          }
        />

        <VerticalDivider />

        <ProgressInsightsCard
          title="PORTFOLIO COMPANIES"
          value={
            <div className="flex h-36 flex-col items-start justify-end">
              <p
                className={`text-3xl font-semibold text-white md:text-5xl lg:text-6xl ${merriweatherfont.className}`}
              >
                29
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

const ProgressInsightsCard = ({ title, value }: ProgressInsightsCardProps) => {
  return (
    <div className="flex h-44 w-full flex-col items-start justify-between sm:h-52 md:w-72">
      <div>{value}</div>
      <p className="mt-2 text-start font-montserrat text-sm font-light text-white md:text-base lg:text-lg">
        {title}
      </p>
    </div>
  );
};

const VerticalDivider = () => (
  <div className="hidden h-28 border-l bg-white sm:block"></div>
);

type ProgressInsightsCardProps = {
  title: string;
  value: React.ReactNode | string;
};

export default ProgressInsights;
