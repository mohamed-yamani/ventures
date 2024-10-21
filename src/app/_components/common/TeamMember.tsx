import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "~/utils/constants/routes";

type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  slug: string;
};

const TeamMember = ({
  name,
  role,
  imageSrc,
  description,
  slug,
}: TeamMemberProps) => {
  return (
    <div className="group mb-16 p-4">
      {/* team members */}
      <Link
        href={`/team_member_profile/${slug}`}
        key={slug}
        className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
      >
        <div className="relative aspect-square w-full cursor-pointer overflow-hidden bg-gray-100 transition-all duration-300 group-hover:bg-[#f09e5b]">
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
        <p className="text-sm font-normal text-gray-400">{role}</p>
      </Link>
    </div>
  );
};

export default TeamMember;
