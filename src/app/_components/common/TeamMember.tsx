import Image from "next/image";

type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
};

const TeamMember = ({ name, role, imageSrc }: TeamMemberProps) => {
  return (
    <div className="group mb-16 p-4">
      {/* team members */}
      <div className="relative aspect-square w-full cursor-pointer overflow-hidden bg-[#1c6fad] transition-all duration-300 group-hover:bg-[#e9a25d]">
        <Image
          src={imageSrc}
          alt={`${name} photo`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Change the color on hover using the group-hover utility class */}
      <h3 className="mt-4 cursor-pointer text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-secondary">
        {name.toUpperCase()}
      </h3>
      <p className="text-sm font-normal text-gray-800">{role}</p>
    </div>
  );
};

export default TeamMember;
