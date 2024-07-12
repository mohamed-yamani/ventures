import Link from "next/link";
import ActionButton from "../common/button";
import Image from "next/image";

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
                <span>
                  {/* subscribe to newsletter */}
                  SUBSCRIBE TO NEWSLETTER
                </span>
              </Link>
              {/* text field for email */}
              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className="h-8 w-56 rounded-sm bg-white p-6"
              />
              <ActionButton className="bg-secondary font-montserrat text-white">
                CHECK OUR PORTFOLIO
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
            <Image
              src="/assets/social_icons/instagram.png"
              alt="instagram"
              width={30}
              height={30}
            />
            <Image
              src="/assets/social_icons/linkedin.png"
              alt="linkedin.png"
              width={30}
              height={30}
            />
            <Image
              src="/assets/social_icons/x.png"
              alt="x"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
