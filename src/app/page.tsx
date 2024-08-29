import LandingPage from "./_components/sections/landing_page";
import Companies from "./_components/sections/companies";
import ProgressInsights from "./_components/sections/ProgressInsights";
import DeeptechAndDigital from "./_components/sections/deeptechAndDigital";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      <LandingPage />
      <ProgressInsights />
      <Companies />
      <DeeptechAndDigital />
    </main>
  );
}
