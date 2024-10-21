"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Subtitle from "~/app/_components/common/subtitle";
import Title from "~/app/_components/common/title";

// Example data - replace this with actual data fetching logic
const teamMembers = [
  {
    name: "Yassine Laghzioui",
    role: "Chief Executive Officer",
    imageSrc: "/assets/team/yassinelaghzioui.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "yassine-laghzioui",
  },
  {
    name: "Sofia Zine-Eddine",
    role: "Chief Finance Officer",
    imageSrc: "/assets/team/SofiaZine-Eddine.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "sofia-zine-eddine",
  },
  {
    name: "Lamiaa El Amrani",
    role: "Investment Director",
    imageSrc: "/assets/team/lamiaaelamrani.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "lamiaa-el-amrani",
  },
  {
    name: "Yassine Laghzioui",
    role: "CEO",
    imageSrc: "/assets/team/yassinelaghzioui.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "yassine-laghzioui",
  },
  {
    name: "Sofia Zine-Eddine",
    role: "Chief Finance Officer",
    imageSrc: "/assets/team/SofiaZine-Eddine.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "sofia-zine-eddine",
  },
  {
    name: "Lamiaa El Amrani",
    role: "Investment Director",
    imageSrc: "/assets/team/lamiaaelamrani.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "lamiaa-el-amrani",
  },
  {
    name: "Sofia Zine-Eddine",
    role: "Chief Finance Officer",
    imageSrc: "/assets/team/SofiaZine-Eddine.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "sofia-zine-eddine",
  },
  {
    name: "Lamiaa El Amrani",
    role: "Investment Director",
    imageSrc: "/assets/team/lamiaaelamrani.png",
    description:
      "Yassine is the CEO of UM6P Ventures and the Director of Entrepreneurship and Venturing at Mohammed VI Polytechnic University. In these roles he is dedicated to driving innovation and fostering entrepreneurship in Morocco, Africa and beyond. Yassine Laghzioui is also an entrepreneur with extensive experience in both corporate and startup environments.  Yassine is the founder of Phova Tech, a leading hard tech startup.  Prior to his current positions Yassine served as the General Manager of Jorf Fertilizers Company V. He also held leadership positions in the Association of Change Management Professionals where he played a key role in building the global Certified Change Management Professional (CCMP) credential.  Yassine holds a Master of Science in Industrial Engineering from ENSAM and a Master of Science in Management from Stanford University.",
    slug: "lamiaa-el-amrani",
  },
];

const TeamMemberProfilePage = () => {
  const { slug } = useParams();

  // Find the team member based on the slug from the URL
  const member = teamMembers.find((member) => member.slug === slug);

  if (!member) {
    return <p>Team member not found!</p>; // Handle the case where no team member is found
  }

  return (
    <TeamMemberProfile
      name={member.name}
      role={member.role}
      imageSrc={member.imageSrc}
      description={member.description}
    />
  );
};

export default TeamMemberProfilePage;

type TeamMemberProfileProps = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
};

const TeamMemberProfile = ({
  name,
  role,
  imageSrc,
  description,
}: TeamMemberProfileProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[800px] w-full items-center justify-center">
        <div className="absolute flex h-full w-full gap-4">
          <Image
            src={imageSrc}
            alt={`Profile image of ${name}`}
            fill={true}
            className="relative h-full w-full object-cover object-[50%_12%]"
            priority
          />
          <div className="absolute h-full w-full bg-primary opacity-85" />
        </div>

        <div className="container relative mt-6 flex h-full flex-col items-center justify-center text-center font-medium text-black">
          <Title className="font-montserrat text-2xl font-light text-secondary">
            {role}
          </Title>
          <Subtitle className="font-montserrat text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl">
            {name}
          </Subtitle>
        </div>
      </div>

      {/* Team Member Profile Section */}
      <section className="container mx-auto px-4 pb-16 pt-16 text-left">
        <h2 className="mb-2 mt-6 h-1 w-20 bg-secondary" />

        <h3 className="text-xl font-bold text-primary">
          {"ABOUT " + name.toUpperCase()}
        </h3>
        <p className="mt-4 font-montserrat text-base font-normal text-black">
          {description}
        </p>
      </section>
    </main>
  );
};
