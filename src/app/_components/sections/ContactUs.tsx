import { Input } from "../common/input";
import Button from "../common/button";
import { Textarea } from "../common/textarea";

const ContactUsSection = () => {
  return (
    <div className="container relative p-4 sm:w-screen">
      <div className="mt-4 min-w-max items-center justify-center gap-4 py-6">
        <form className="mb-0 flex w-full flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-14   sm:gap-y-2 md:grid-cols-2">
            <Input
              type="text"
              placeholder="FIRST NAME"
              className="mb-6 h-10 w-full border-b border-white bg-transparent text-sm placeholder-white"
            />
            <Input
              type="text"
              placeholder="LAST NAME"
              className="mb-6 h-10 w-full border-b border-white bg-transparent py-1 text-sm placeholder-white"
            />
            <Input
              type="text"
              placeholder="SUBJECT"
              className="mb-6 h-10 w-full border-b border-white bg-transparent py-1 text-sm placeholder-white sm:col-span-2"
            />
            <div className="flex flex-col gap-1 sm:col-span-2">
              <Textarea
                placeholder="MESSAGE"
                className="h-20 w-full rounded-none bg-transparent py-1 text-sm text-white placeholder-white focus:outline-none focus:ring-0 focus-visible:ring-transparent"
              />
            </div>

            <Button className="mt-3 w-full translate-y-1 rounded-none border-none bg-secondary p-1.5 text-sm font-normal text-white sm:col-span-2 md:col-span-2">
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;
