import Image from "next/image";

const ProgressInsights = () => {
  return (
    <div className="relative flex h-[20vh] w-full flex-col items-center justify-center bg-primary text-white">
      <Image
        src="/assets/ventures-in-numbers.jpg"
        alt="progress insights"
        fill={true}
        className="object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-70" />
      <div className="container absolute flex w-full flex-row justify-between text-center">
        <ProgressInsightsCard title="lorem ipsum" value="154+" />
        <div className="h-20 w-0.125 bg-white" />
        <ProgressInsightsCard title="lorem ipsum" value="130+" />
        <div className="h-20 w-0.125 bg-white" />
        <ProgressInsightsCard title="lorem ipsum" value="90" />
        <div className="h-20 w-0.125 bg-white" />
        <ProgressInsightsCard title="lorem ipsum" value="160" />
      </div>
    </div>
  );
};

type progressInsightsCardProps = {
  title: string;
  value: string;
};

const ProgressInsightsCard = ({ title, value }: progressInsightsCardProps) => {
  // return number and title
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center text-center">
        <p className="text-center font-merriweather text-2xl font-semibold text-white">
          {value}
        </p>
      </div>
      <div className="h-0.5 w-32 bg-primary" />
      <p className="font-montserrat font-normal text-white">{title}</p>
    </div>
  );
};

export default ProgressInsights;
