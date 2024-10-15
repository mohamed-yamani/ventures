import { LucideIcon, Mail, MapPin } from "lucide-react";
import Subtitle from "../common/subtitle";
import Title from "../common/title";

const GetInTouch = () => {
  return (
    <div className="mt-10 w-full items-center justify-center text-center">
      <Title className="text-2xl font-light text-secondary">GET IN TOUCH</Title>
      <Subtitle className="text-5xl text-primary">
        Get In Touch With Us
      </Subtitle>
      <div className="mt-28 bg-primary">
        <div className="container grid grid-cols-1 items-start justify-center gap-4 py-20 sm:grid-cols-3">
          <ContactInfo
            icon={MapPin} //benguerir address
            title="BEN GUERIR ADDRESS"
            info="Lot 660, Hay Moulay Rachid – 43150 Benguerir"
          />
          <ContactInfo
            icon={MapPin} // casablanca address
            title="CASABLANCA ADDRESS"
            info="Complexe PARANFA, 2 Rue Koronfal – Anfa, Casablanca"
          />
          <ContactInfo
            icon={Mail} // OUR ADDRESS
            title="OUR ADDRESS"
            info=" contact@um6pventures.ma"
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
      <div className="my-5 w-9/12 border border-b-0 border-white" />
      <p className="w-9/12 text-start text-lg font-normal text-white">{info}</p>
    </div>
  );
}

export default GetInTouch;
