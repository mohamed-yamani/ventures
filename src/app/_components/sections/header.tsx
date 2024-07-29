"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { MenuIcon, Search, ArrowUpRight } from "lucide-react";
import { ROUTES } from "~/utils/constants/routes";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import SearchSection from "./searchSection";

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
      className={`fixed z-30 w-screen border-b border-gray-200 border-opacity-50 transition-colors duration-300 md:justify-center lg:flex lg:justify-center ${
        isScrolled
          ? "bg-gradient-to-r from-white to-primary opacity-95"
          : "bg-transparent"
      }`}
    >
      <div className="container flex flex-row items-center justify-between py-2">
        <Link href={ROUTES.HOME}>
          <Image
            src="/assets/ventures.png"
            alt="Create T3 App Logo"
            width={200}
            height={120}
            className="-translate-x-4 transition-all hover:scale-110"
          />
        </Link>
        <div
          className={`hidden grid-cols-1 gap-4 text-center sm:grid-cols-3 md:grid md:gap-8 ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          <Link
            href={ROUTES.ABOUT}
            className="transition-all hover:scale-110 hover:text-orange-500 hover:underline"
          >
            <span className="transition-all hover:text-orange-500 hover:underline">
              ABOUT US
            </span>
          </Link>
          <Link href={ROUTES.TEAM}>
            <span className="transition-all hover:text-orange-500 hover:underline">
              TEAM
            </span>
          </Link>
          <Link href={ROUTES.PORTFOLIO}>
            <span className="transition-all hover:text-orange-500 hover:underline">
              PORTFOLIO
            </span>
          </Link>
        </div>

        <div className="flex flex-row gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex w-12 cursor-pointer justify-center rounded-full border border-white p-1">
                <Search size={16} className="text-white" />
              </div>
            </DialogTrigger>
            <DialogContent
              className="flex min-w-max flex-col items-center justify-center rounded-none border-none bg-primary font-montserrat text-black"
              closeIconClassName="text-white size-6"
            >
              <SearchSection />
            </DialogContent>
          </Dialog>

          <Sheet modal={false}>
            <SheetTrigger>
              <MenuIcon
                size={24}
                className={`${
                  isScrolled ? "text-white" : "text-white"
                } cursor-pointer`}
              />
            </SheetTrigger>

            <SheetContent className="glassmorphism rounded-none border border-black border-opacity-10 bg-black bg-opacity-30">
              <SheetHeader className="flex h-full w-full flex-col items-start justify-between gap-4">
                <div className="mt-24 flex w-full flex-col items-start justify-center gap-4">
                  <Link
                    href={ROUTES.ABOUT}
                    className="flex w-full flex-row items-center justify-between md:hidden"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      ABOUT US
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  {/* devider  */}
                  <div className="h-0.125 w-full -translate-y-2 bg-white md:hidden" />
                  <Link
                    href={ROUTES.TEAM}
                    className="flex w-full flex-row items-center justify-between md:hidden"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      TEAM
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  <div className="h-0.125 w-full -translate-y-2 bg-white md:hidden" />
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between md:hidden"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      PORTFOLIO
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  <div className="h-0.125 w-full -translate-y-2 bg-white md:hidden" />
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      NETWORK
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                  {/* resources */}
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      RESOURCES
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                  {/* news */}
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      NEWS
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                  {/* events */}
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between"
                  >
                    <span className="text-white transition-all hover:text-orange-500">
                      EVENTS
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>
                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                </div>

                <div className="flex w-full -translate-y-10 flex-row items-center justify-between gap-4 text-white">
                  <Link href={ROUTES.CONTACT}>
                    <span className="underline transition-all hover:text-orange-500">
                      CONTACT US
                    </span>
                  </Link>
                  <Image
                    src="/assets/ventures.png"
                    alt="Create T3 App Logo"
                    width={120}
                    height={60}
                    className="transition-all hover:scale-110"
                  />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        {/* search */}
      </div>
    </header>
  );
}
