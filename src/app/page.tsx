import React from "react";
import LandingPage from "./_components/sections/landing_page";
import Companies from "./_components/sections/companies";
import DeepTransform from "~/components/ui/DeepTransform";

export default function HomePage() {
  return (
    <main className="mt-auto flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      <LandingPage />
      <Companies />
      <DeepTransform />
    </main>
  );
}
