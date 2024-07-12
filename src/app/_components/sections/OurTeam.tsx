import Subtitle from "../common/subtitle";
import TeamMember from "../common/TeamMember";
import Title from "../common/title";

const OurTeam = () => {
  return (
    <div className="container mx-auto md:w-3/5">
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div className="py-12">
          <Title>OUR TEAM</Title>
          <Subtitle>Get to Know Us Better</Subtitle>
        </div>
        <TeamMember
          name="Yassine Laghzioui"
          role="CEO"
          imageSrc="/assets/team/yassinelaghzioui.png"
        />
        <TeamMember
          name="Sofia Zine-Eddine"
          role="Chief Finance Officer"
          imageSrc="/assets/team/SofiaZine-Eddine.png"
        />
        <TeamMember
          name="Lamiaa El Amrani"
          role="Investment Director"
          imageSrc="/assets/team/lamiaaelamrani.png"
        />
        <TeamMember
          name="Yassine Laghzioui"
          role="CEO"
          imageSrc="/assets/team/yassinelaghzioui.png"
        />
        <TeamMember
          name="Sofia Zine-Eddine"
          role="Chief Finance Officer"
          imageSrc="/assets/team/SofiaZine-Eddine.png"
        />
        <TeamMember
          name="Lamiaa El Amrani"
          role="Investment Director"
          imageSrc="/assets/team/lamiaaelamrani.png"
        />
        <TeamMember
          name="Sofia Zine-Eddine"
          role="Chief Finance Officer"
          imageSrc="/assets/team/SofiaZine-Eddine.png"
        />
        <TeamMember
          name="Lamiaa El Amrani"
          role="Investment Director"
          imageSrc="/assets/team/lamiaaelamrani.png"
        />
      </div>
    </div>
  );
};

export default OurTeam;
