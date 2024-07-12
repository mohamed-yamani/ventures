import Image from "next/image";

type SectionCardProps = {
  imageSrc: string;
  altText: string;
  overlayText: string;
  span?: string;
};

const SectionCard = ({
  imageSrc,
  altText,
  overlayText,
  span = "col-span-1",
}: SectionCardProps) => {
  return (
    <div
      className={`group relative h-[380px] bg-blue-500 text-center text-3xl font-bold text-primary ${span}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
      <div className="relative z-20 flex h-full w-full items-end justify-start p-8">
        <div className="relative flex w-[200px] text-start">
          <div className="absolute inset-y-0 left-0 w-1 bg-secondary"></div>
          <p className="text-lite pl-4 font-montserrat text-lg font-light text-secondary">
            {overlayText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
