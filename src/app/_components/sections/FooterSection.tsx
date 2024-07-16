import Link from "next/link";
import ActionButton from "../common/button";
import Image from "next/image";
import { Input } from "../common/input";
import SocialIcons from "../common/SocialIcons";

const FooterSection = () => {
  return (
    <footer>
      <div className="relative flex h-auto w-screen flex-col items-center justify-center gap-20 bg-primary py-20">
        <div className="container grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start gap-4">
              <div className="h-1 w-56 rounded-sm bg-secondary font-montserrat font-semibold"></div>
              <p className="font-montserrat font-normal text-white">
                We Invest and Build for the advancement of entrepreneurship and
                innovation in Africa and beyond
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-start gap-3 font-montserrat text-white">
              <Link
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
              >
                <span>ABOUT US</span>
              </Link>
              <Link href="" target="_blank">
                <span className="">PORTFOLIO</span>
              </Link>
              <Link href="" target="_blank">
                <span>EVENTS</span>
              </Link>
              <Link href="" target="_blank">
                <span>NEWS</span>
              </Link>
              <Link href="" target="_blank">
                <span>RESSOURCES</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-3 font-montserrat text-white">
              <Link href="" target="_blank">
                <span>SUBSCRIBE TO NEWSLETTER</span>
              </Link>
              {/* <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className="h-8 w-56 rounded-sm bg-white p-6"
              /> */}
              <Input
                type="text"
                placeholder="EMAIL ADDRESS"
                className="h-12 w-full rounded-md border-b border-primary bg-white px-4 py-2 placeholder-primary"
              />
              <ActionButton className="w-full transform bg-secondary p-6 font-montserrat text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-secondary">
                STAY UPDATED
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white bg-primary font-montserrat text-white">
        <div className="container flex flex-row items-center justify-between py-3">
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

            <SocialIcons src="/assets/social_icons/x.png" alt="x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
