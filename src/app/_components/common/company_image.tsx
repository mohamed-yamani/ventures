import Image from "next/image";

type CompanyImageProps = {
  src: string;
  alt: string;
};

const CompanyImage = ({ src, alt }: CompanyImageProps) => {
  return (
    <div className="flex h-[100px] w-[300px] items-center justify-center bg-gray-200 transition duration-300 hover:bg-gray-400">
      <Image src={src} alt={alt} width={60} height={60} />
    </div>
  );
};

export default CompanyImage;
