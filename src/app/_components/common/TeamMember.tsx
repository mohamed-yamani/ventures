import Image from "next/image";

type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
};

const TeamMember = ({ name, role, imageSrc }: TeamMemberProps) => {
  return (
    <div className="p-4">
      <div className="relative aspect-square w-full overflow-hidden bg-primary">
        <Image
          src={imageSrc}
          alt={`${name} photo`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">
        {name.toUpperCase()}
      </h3>
      <p className="text-sm font-normal text-secondary">{role.toUpperCase()}</p>
    </div>
  );
};

export default TeamMember;
