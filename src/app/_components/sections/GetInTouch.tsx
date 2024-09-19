import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import Subtitle from "../common/subtitle";
import Title from "../common/title";

const GetInTouch = () => {
  return (
    <div className="w-full items-center justify-center text-center">
      <Title
        className="text-2xl font-light text-secondary"
        children={"GET IN TOUCH"}
      />
      <Subtitle
        className="text-5xl text-primary"
        children={"Get In Touch With Us"}
      />
      <div className="mb-28 mt-16 bg-primary">
        <div className="container grid grid-cols-1 items-center justify-center gap-4 p-14 sm:grid-cols-3">
          <ContactInfo
            icon={Mail}
            title="OUR EMAIL"
            info="contact@um6pventures.ma"
          />
          <ContactInfo icon={Phone} title="OUR PHONE" info="+212762887465438" />
          <ContactInfo
            icon={MapPin}
            title="OUR ADDRESS"
            info=" Lot 660, Ben Guerir 43150"
          />
        </div>
      </div>
    </div>
  );
};

// function for this info like mail and phone number and address
interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  info: string;
}

function ContactInfo({ icon: Icon, title, info }: ContactInfoProps) {
  return (
    <div className="">
      <div className="flex items-center justify-start gap-4">
        <Icon className="text-white" size={24} /> {/* Render the icon */}
        <p className="text-lg font-normal text-white">{title}</p>
      </div>
      <div className="my-5 w-2/3 border border-b-0 border-white" />
      <p className="text-start text-lg font-normal text-white">{info}</p>
    </div>
  );
}

export default GetInTouch;
