import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Input } from "../common/input";

const ContactUsSection = () => {
  return (
    <div>
      <div className="relative flex h-60 w-screen flex-col items-center justify-center bg-primary">
        <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-4 rounded-full bg-orange-500" />
        <div className="absolute right-6 top-6 h-12 w-12 rounded-full bg-slate-200" />
        <div className="container grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <ContactUsInfo
            title="Email"
            value="yamanii@gmail.com"
            lucideIcon={<Mail color="white" size="24" />}
          />
          <ContactUsInfo
            title="Phone"
            value="+212 6 00 00 00 00"
            lucideIcon={<Phone color="white" size="24" />}
          />
          <ContactUsInfo
            title="Address"
            value="Benguerir, Morocco"
            lucideIcon={<MapPin color="white" size="24" />}
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUsSection;

type ContactUsInfoProps = {
  title: string;
  value: string;
  lucideIcon: React.ReactNode;
};

const ContactUsInfo = ({ title, value, lucideIcon }: ContactUsInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-row items-center gap-4">
        {lucideIcon}
        <p className="font-montserrat font-semibold text-white">{title}</p>
      </div>
      <div className="h-0.5 w-32 bg-white" />
      <p className="font-montserrat font-normal text-white">{value}</p>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="relative w-screen bg-gradient-to-r from-white to-[#cbdeed]">
      <div className="container grid h-[50vh] w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <div className="relative ml-9 h-80 w-80 md:bg-primary">
          <Image
            src="/assets/contact_us.jpg"
            alt="um6p"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute -left-10 -top-10 h-20 w-20 bg-primary" />
          <div className="absolute left-4 top-4 h-10 w-10 bg-blue-500" />
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2"></div>
          <Input
            type="text"
            placeholder="FULL NAME"
            className="h-12 w-full border-b border-primary bg-transparent px-4 py-2 placeholder-primary"
          />
          <Input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="h-12 w-full border-b border-primary bg-transparent px-4 py-2 placeholder-primary"
          />

          <Input
            type="text"
            placeholder="SUBJECT"
            className="h-12 w-full border-b border-primary bg-transparent px-4 py-2 placeholder-primary"
          />

          {/* <textarea
            placeholder="MESSAGE"
            className="h-32 w-full border-b border-primary bg-transparent px-4 py-2 placeholder-primary "
          /> */}
          <Input
            type="text"
            placeholder="MESSAGE"
            className="h-12 w-full border-b border-primary bg-transparent px-4 py-2"
          />
          <button className="h-12 w-full rounded-md bg-primary font-montserrat font-normal text-white">
            SUBMIT MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
