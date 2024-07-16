import Image from "next/image";

type SocialIconProps = {
  src: string;
  alt: string;
};

const SocialIcons = ({ src, alt }: SocialIconProps) => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        className="transform cursor-pointer transition duration-300 hover:scale-110"
      />
    </div>
  );
};

export default SocialIcons;
