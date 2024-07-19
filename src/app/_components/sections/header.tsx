"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { ROUTES } from "~/utils/constants/routes";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-30 hidden w-screen transition-colors duration-300 md:justify-center lg:flex lg:justify-center ${
        isScrolled
          ? "bg-gradient-to-r from-white to-primary opacity-95"
          : "bg-transparent"
      }`}
    >
      <div className="container flex flex-row items-center justify-between py-4">
        <Image
          src={isScrolled ? "/assets/ventures.png" : "/assets/ventures.png"}
          alt="Create T3 App Logo"
          width={80}
          height={80}
        />
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-5 md:gap-8 ${
            isScrolled ? "text-white" : "text-primary"
          }`}
        >
          <Link href={ROUTES.ABOUT}>
            <span className="transition-all hover:text-orange-500 hover:underline">
              ABOUT US
            </span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="transition-all hover:text-orange-500 hover:underline">
              PORTFOLIO
            </span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="transition-all hover:text-orange-500 hover:underline">
              EVENTS
            </span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="transition-all hover:text-orange-500 hover:underline">
              NEWS
            </span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="transition-all hover:text-orange-500 hover:underline">
              RESOURCES
            </span>
          </Link>
        </div>

        {/* menu */}
        <Sheet>
          <SheetTrigger>
            <MenuIcon
              size={24}
              className={`${
                isScrolled ? "text-white" : "text-primary"
              } cursor-pointer`}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
              <div className="flex justify-end gap-4">
                <Button className="bg-primary text-white">Delete</Button>
                <Button className="bg-secondary text-white">Cancel</Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* search */}
      </div>
    </header>
  );
}
