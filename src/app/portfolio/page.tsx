import Image from "next/image";
import Title from "../_components/common/title";
import Button from "../_components/common/button";
import { Search } from "lucide-react";
import { Input } from "../_components/common/input";

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
                placeholder="DISCOVER OUR VENTURES ...."
                className="w-full border-b border-white bg-transparent placeholder-primary"
              />
            </div>
            <Button className="w-full rounded-none bg-secondary font-normal text-primary text-white sm:col-span-1">
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
