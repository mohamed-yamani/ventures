import Link from "next/link";
import ActionButton from "../common/button";
import Image from "next/image";
import SocialIcons from "../common/SocialIcons";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import SubscribeToVentures from "./SubscribeToVentures";

const FooterSection = () => {
  return (
    <footer>
      <div className="relative flex h-auto w-screen flex-col items-center justify-center gap-20 bg-primary py-20">
        <div className="container grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-y-0 lg:grid-cols-3">
          <div className="flex flex-col md:items-start">
            <div className="flex flex-col items-start gap-4">
              <Image
                src="/assets/ventures.png"
                alt="ventures"
                width={200}
                height={120}
                className="-translate-x-4 object-cover"
              />
              <div className="h-1 w-44 -translate-y-3 bg-secondary font-semibold"></div>
              <p className="font-normal text-white">
                BUILDING THE FUTURE OF AFRICA
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start md:items-center">
            <div className="flex flex-col items-start gap-3 text-white">
              <h1 className="pb-4 text-lg text-white">
                <span>USEFUL LINKS</span>
              </h1>
              <Link
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
                className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
              >
                <span>ABOUT US</span>
              </Link>

              <Link
                href=""
                target="_blank"
                className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
              >
                <span>NEWS</span>
              </Link>
              <Link
                href=""
                target="_blank"
                className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
              >
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-3 text-white md:items-end">
              <Link href="" target="_blank">
                <span>UM6P VENTURES NEWSLETTER</span>
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <ActionButton className="transform bg-secondary p-6 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-secondary">
                    SUBSCRIBE TO NEWSLETTER
                  </ActionButton>
                </DialogTrigger>
                <DialogContent
                  className="flex w-full flex-col items-center justify-center rounded-none border-none bg-primary px-2 text-black md:min-w-max md:px-24 md:py-10"
                  closeIconClassName="text-white size-6"
                >
                  <SubscribeToVentures />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white bg-primary text-white">
        <div className="container flex flex-row items-center justify-between py-6">
          <p className="font-normal">
            © 2024 UM6P Ventures. All rights reserved
          </p>
          <div className="flex flex-row gap-4">
            <SocialIcons
              src="/assets/social_icons/instagram.png"
              alt="instagram"
            />

            <SocialIcons
              src="/assets/social_icons/linkedin.png"
              alt="linkedin.png"
            />

            <SocialIcons src="/assets/social_icons/play.png" alt="x" />
            <SocialIcons src="/assets/social_icons/x.png" alt="x" />

            <SocialIcons src="/assets/social_icons/facebook.png" alt="x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
