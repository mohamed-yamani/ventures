import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <header className="fixed z-30 w-screen bg-gradient-to-r from-[#ffffff] to-[#cbdeed]">
      <div className="container flex flex-row items-center justify-between gap-4 py-4">
        <Image
          src="/assets/ventures.png"
          alt="Create T3 App Logo"
          width={100}
          height={100}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-8">
          <Link
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <span className="text-1xl font-bold text-primary">about us</span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="text-1xl font-bold text-primary">portfolio</span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="text-1xl font-bold text-primary">news</span>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <span className="text-1xl font-bold text-primary">ressources</span>
          </Link>
        </div>
        <Link href="https://create.t3.gg/en/introduction" target="_blank">
          <Button className="background text-1xl">Contact us</Button>
        </Link>
      </div>
    </header>
  );
}
