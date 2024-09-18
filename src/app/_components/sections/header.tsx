"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, Search, ArrowUpRight } from "lucide-react";
import { ROUTES } from "~/utils/constants/routes";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import SearchSection from "./searchSection";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../common/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Set the initial state based on the scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-screen border-b border-gray-200 border-opacity-50 transition-colors duration-300 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="container flex flex-row items-center justify-between py-2 transition-all duration-300">
        <Link href={ROUTES.HOME}>
          <Image
            src="/assets/ventures.png"
            alt="ventures logo"
            width={200}
            height={120}
            className="-translate-x-4 transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <div
          className={`hidden grid-cols-1 gap-4 text-center sm:grid-cols-3 md:grid md:gap-8 ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          <Link
            href={ROUTES.ABOUT}
            className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
          >
            ABOUT US
          </Link>
          <Link
            href={ROUTES.TEAM}
            className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
          >
            TEAM
          </Link>
          <Link
            href={ROUTES.PORTFOLIO}
            className="transition-transform duration-300 hover:scale-110 hover:text-secondary"
          >
            PORTFOLIO
          </Link>
        </div>

        <div className="flex flex-row gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex w-12 cursor-pointer justify-center rounded-full border border-white p-1 transition-transform duration-300 hover:scale-110">
                <Search size={16} className="text-white" />
              </div>
            </DialogTrigger>
            <DialogContent
              className="flex w-full flex-col items-center justify-center rounded-none border-none bg-primary px-2 text-black md:min-w-max md:px-24 md:py-10"
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
                } cursor-pointer transition-transform duration-300 hover:scale-110`}
              />
            </SheetTrigger>

            <SheetContent className="glassmorphism rounded-none border border-transparent border-opacity-10 bg-black bg-opacity-60">
              <SheetHeader className="flex h-full w-full flex-col items-start justify-between gap-4">
                <div className="mt-24 flex w-full flex-col items-start justify-center gap-4">
                  <Link
                    href={ROUTES.ABOUT}
                    className="flex w-full flex-row items-center justify-between transition-transform duration-300 hover:scale-105 md:hidden"
                  >
                    <span className="text-white transition-all hover:text-secondary">
                      ABOUT US
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight
                        size={24}
                        className="text-white transition-colors duration-300 hover:text-secondary"
                      />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white md:hidden" />
                  <Link
                    href={ROUTES.TEAM}
                    className="flex w-full flex-row items-center justify-between transition-transform duration-300 hover:scale-105 md:hidden"
                  >
                    <span className="text-white transition-all hover:text-secondary">
                      TEAM
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white md:hidden" />
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between transition-transform duration-300 hover:scale-105 md:hidden"
                  >
                    <span className="text-white transition-all hover:text-secondary">
                      PORTFOLIO
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white md:hidden" />
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between text-white transition-transform duration-300 hover:scale-105 hover:text-secondary"
                  >
                    <span className="transition-colors duration-300">
                      NETWORK
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight
                        size={24}
                        className="transition-colors duration-300"
                      />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between text-white transition-transform duration-300 hover:scale-105 hover:text-secondary"
                  >
                    <span className="transition-colors duration-300">
                      RESOURCES
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight
                        size={24}
                        className="transition-colors duration-300"
                      />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                  <Link
                    href={ROUTES.PORTFOLIO}
                    className="flex w-full flex-row items-center justify-between text-white transition-transform duration-300 hover:scale-105 hover:text-secondary"
                  >
                    <span className="transition-colors duration-300">NEWS</span>
                    <div className="h-4 w-4">
                      <ArrowUpRight
                        size={24}
                        className="transition-colors duration-300"
                      />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                  <Link
                    href={ROUTES.EVENTS}
                    className="flex w-full flex-row items-center justify-between text-white transition-transform duration-300 hover:scale-105 hover:text-secondary"
                  >
                    <span className="transition-colors duration-300">
                      EVENTS
                    </span>
                    <div className="h-4 w-4">
                      <ArrowUpRight
                        size={24}
                        className="transition-colors duration-300"
                      />
                    </div>
                  </Link>

                  <div className="h-0.125 w-full -translate-y-2 bg-white" />
                </div>

                <div className="flex w-full -translate-y-10 flex-row items-center justify-between gap-4 text-white">
                  <Link href={ROUTES.CONTACT}>
                    <span className="underline transition-transform duration-300 hover:scale-105 hover:text-secondary">
                      CONTACT US
                    </span>
                  </Link>
                  <Image
                    src="/assets/ventures.png"
                    alt="Create T3 App Logo"
                    width={120}
                    height={60}
                    className="transition-transform duration-300 hover:scale-105"
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
