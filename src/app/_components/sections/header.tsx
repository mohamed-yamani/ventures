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

export default function Header() {
  return (
    <header className="fixed z-30 hidden w-screen bg-gradient-to-r from-[#ffffff] to-[#cbdeed] md:justify-center lg:flex lg:justify-center">
      <div className="container flex flex-row items-center justify-between py-4">
        <Image
          src="/assets/ventures.png"
          alt="Create T3 App Logo"
          width={100}
          height={100}
        />
        <div className="grid grid-cols-1 gap-4 text-primary sm:grid-cols-5 md:gap-8">
          <Link
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
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
              RESSOURCES
            </span>
          </Link>
        </div>

        {/* menu */}
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={24} />
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
