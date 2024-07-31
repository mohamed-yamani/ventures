import Image from "next/image";
import { Input } from "../common/input";

const ContactUsSection = () => {
  return (
    <div className="relative">
      <div className="container grid grid-cols-1 items-center justify-center gap-4 py-9 sm:grid-cols-2">
        <div className="relative ml-9 h-80 w-80 md:bg-primary">
          <Image
            src="/assets/contact_us.jpg"
            alt="um6p"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute -left-10 -top-10 h-20 w-20 bg-secondary" />
          <div className="absolute left-4 top-4 h-10 w-10 bg-blue-500" />
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2"></div>
          <p>
            <span className="font-normal text-white">
              SUBSCRIBE TO UM6P VENTURES NEWSLETTER
            </span>
          </p>
          <div className="mb-8 mt-6 grid grid-cols-2 gap-x-8 gap-y-2">
            <Input
              type="text"
              placeholder="FIRST NAME"
              className="h-12 w-full border-b border-white bg-transparent py-2 placeholder-white"
            />
            <Input
              type="text"
              placeholder="LAST NAME"
              className="h-12 w-full border-b border-white bg-transparent py-2 placeholder-white"
            />
            <Input
              type="title"
              placeholder="TITLE"
              className="h-12 w-full border-b border-white bg-transparent py-2 placeholder-white"
            />
            <Input
              type="company"
              placeholder="COMPANY"
              className="h-12 w-full border-b border-white bg-transparent py-2 placeholder-white"
            />
            <Input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="h-12 w-full border-b border-white bg-transparent py-2 placeholder-white"
            />
            <button className="w-full translate-y-2 rounded-none bg-secondary p-2 font-normal text-white">
              STAY UPDATED
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;
