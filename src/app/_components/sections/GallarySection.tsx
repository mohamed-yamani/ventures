import Image from "next/image";

const GallarySection = () => {
  return (
    <div className="relative w-screen bg-gradient-to-r from-white to-[#cbdeed]">
      <div className="container flex flex-row items-center justify-center gap-4">
        <div className="relative h-56 w-56 bg-primary">
          <Image
            src="/assets/gallary/img1.png"
            alt="um6p"
            layout="fill"
            objectFit="cover"
            className="transform transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="flex h-[750px] flex-col items-center justify-center gap-4">
          <div className="flex w-full items-end justify-center gap-4">
            <div className="relative h-72 w-80">
              <Image
                src="/assets/gallary/img2.png"
                alt="um6p"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="relative h-52 w-52">
              <Image
                src="/assets/gallary/img3.png"
                alt="um6p"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="flex h-48 w-full items-start justify-center gap-4">
            <div className="relative h-52 w-60">
              <Image
                src="/assets/gallary/img4.png"
                alt="um6p"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="relative h-72 w-72">
              <Image
                src="/assets/gallary/img5.png"
                alt="um6p"
                layout="fill"
                objectFit="cover"
                className="transform transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="relative h-60 w-48">
          <Image
            src="/assets/gallary/img6.png"
            alt="um6p"
            layout="fill"
            objectFit="cover"
            className="transform transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default GallarySection;
