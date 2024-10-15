import Image from "next/image";
import Title from "../_components/common/title";
import Subtitle from "../_components/common/subtitle";
import { Button } from "~/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "~/utils/constants/routes";

const images: { date: string; title: string; description: string }[] = [
  {
    date: "March 25, 2024",
    title:
      "UM6P Ventures launches a call for applications for Deeptech startups",
    description:
      "Casablanca, tMorocco, tMarcht25, t2024. UM6P Ventures, the investment fund of University Mohammed VI Polytechnic, announcestthetlaunchtoftitstcall...",
  },
  {
    date: "Nov 16, 2023",
    title:
      "UM6PtVenturestinvestit danstCharitpour promouvoirtl’inclusion digitale en Afrique",
    description:
      "Le 16 novembre 2023, UM6P Ventures annonce son investissement dans Chari, une startup marocaine leader....",
  },
  {
    date: "Oct 12, 2023",
    title: "UM6P Ventures invests in PAYLIK",
    description:
      "Rabat – UM6P Ventures, a Casablanca-based venture capital fund of the Mohammed VI Polytechnic ...",
  },
  {
    date: "Jan 24, 2024",
    title: "UM6P Ventures Invests in Zuri Health",
    description:
      "Casablanca, Morocco, January 24, 2023 – Zuri Health is proud to announce UM6P Ventures’tnewtinvestmenttintotitstheal-hcare and telemedicine platform ...",
  },
  {
    date: "Nov 8, 2022",
    title:
      "Biotictraisest€2mtseed roundttotcommodify biodegradabletplastic materials",
    description:
      "Amsterdam, tNovembert8, 2022tRockstart, globaltearly-stagetinvestortand accelerator,tannouncestitstco-invest ...",
  },
  {
    date: "Oct 29, 2022",
    title:
      "UM6P Ventures invests in InfiusstHealthttotimprove clinical trial participation andthealthtparitytin Africa",
    description:
      "Democratizes access to clinical research intAfricatbytdiversifyingtparticipant ...",
  },
];

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <div className="relative h-[30rem] w-full items-center justify-center">
        <div className="absolute h-full w-full flex-col items-center justify-center gap-4">
          <Image
            src="/assets/background/bg.jpeg"
            alt="ventures"
            fill={true}
            className="object-cover"
          />
          <div className="absolute h-full w-full bg-primary opacity-90" />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-center font-medium text-black">
          <Title className="pt-32 text-xl text-secondary">NEWS</Title>
          <Subtitle className="text-5xl text-white">Press Releases</Subtitle>
        </div>
      </div>

      <div className="container flex w-full flex-col items-start justify-center gap-4 pb-16">
        <div className="gap-2sm:grid-cols-2 grid w-full grid-cols-1 gap-8 pt-32 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {images.map(({ date, title, description }, index) => (
            <NewsCard
              description={description}
              date={date}
              title={title}
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

interface NewsCardProps {
  description: string;
  date: string;

  title: string;
  key: number;
}

function NewsCard({ description, date, title, key }: NewsCardProps) {
  return (
    <div
      key={key}
      className="group relative cursor-pointer flex-wrap items-start justify-start rounded-none bg-gray-100 transition-all duration-300"
    >
      <Button className="m-8 rounded-none bg-secondary font-light text-primary text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary">
        PRESS RELEASE
      </Button>

      <p className="bottom-0 left-0 bg-opacity-90 px-8 pb-4 pt-8 text-gray-500">
        {date}
      </p>

      <p className="bottom-0 right-0 bg-opacity-90 px-8 pb-4 text-2xl text-primary">
        {title}
      </p>

      <p className="bottom-0 right-0 bg-opacity-90 px-8 pb-40 text-lg text-black">
        {description}
      </p>

      <Link href={ROUTES.ARTICLEPAGE} className="absolute flex w-full">
        <div className="absolute bottom-8 left-8 flex flex-row items-center justify-start gap-6 bg-opacity-90">
          <p className="text-lg text-secondary">
            {/* read more */}
            READ MORE
          </p>
          <CircleArrowRight className="text-secondary" />
        </div>
      </Link>
    </div>
  );
}
