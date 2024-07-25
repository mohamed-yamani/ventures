import Image from "next/image";
import Button from "../common/button";

const GallarySection = () => {
  return (
    <div className="relative w-screen bg-gradient-to-r from-white to-[#cbdeed]">
      <div className="container mt-20 grid grid-cols-1 items-center justify-center gap-16 sm:grid-cols-7">
        <div className="col-span-4 flex flex-col items-start justify-center gap-10 py-10">
          <div className="h-1 w-20 bg-secondary" />
          <h3 className="font-montserrat text-2xl text-primary">
            LOREM IPSUM EXAMPLE
          </h3>
          <p className="text-justify font-montserrat text-lg text-primary">
            UM6P Ventures is connected to a global network of universities,
            subject matter experts. f universities, subject matter experts, UM6P
            Ventures is connected to a global network of universities, subject
            matter experts. f universities, subject matter experts
          </p>
          <Button className="transform bg-primary p-6 font-montserrat text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-secondary">
            LEARN MORE ABOUT US
          </Button>
        </div>
        <div className="col-span-3 grid min-h-[60vh] w-full grid-flow-col grid-rows-1 gap-4 py-6 md:grid-rows-7">
          <div className="relative col-span-2 row-span-4 flex items-start justify-end">
            <div className="relative h-4/6 w-4/6 -translate-y-4 transform bg-primary md:h-3/6 md:w-3/6 lg:h-4/6 lg:w-4/6"></div>
            <div className="absolute flex h-full w-3/5 items-center justify-center md:w-2/5 lg:w-3/5">
              <Image
                src="/assets/gallary/img1.png"
                alt="ventures"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>

          <div className="... relative col-span-2 row-span-2 bg-blue-500">
            <Image
              src="/assets/gallary/img2.png"
              alt="ventures"
              fill={true}
              layout="container"
              className="object-cover"
            />
          </div>

          <div className="... relative col-span-2 row-span-2 bg-red-500">
            <Image
              src="/assets/gallary/img3.png"
              alt="ventures"
              fill={true}
              layout="container"
              className="object-cover"
            />
          </div>

          <div className="... relative col-span-2 row-span-4">
            <div className="absolute bottom-0 h-4/6 w-4/6 translate-y-4 bg-primary md:h-3/6 md:w-3/6 lg:h-4/6 lg:w-4/6" />

            <div className="relative flex h-full w-3/5 items-center justify-center">
              <Image
                src="/assets/gallary/img4.png"
                alt="ventures"
                fill={true}
                layout="container"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallarySection;
