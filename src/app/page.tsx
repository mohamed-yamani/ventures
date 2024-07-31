import LandingPage from "./_components/sections/landing_page";
import Companies from "./_components/sections/companies";
import Title from "./_components/common/title";
import Subtitle from "./_components/common/subtitle";
import OurTeam from "./_components/sections/OurTeam";
import SectionCard from "./_components/cards/SectionCard";
import TestimonialsSection from "./_components/sections/TestimonialsSection";
import GallarySection from "./_components/sections/GallarySection";
import PartnersSection from "./_components/sections/PartnersSection";
import ContactUsSection from "./_components/sections/ContactUsSection";
import FooterSection from "./_components/sections/FooterSection";
import ProgressInsights from "./_components/sections/ProgressInsights";
import DeeptechAndDigital from "./_components/sections/deeptechAndDigital";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      <LandingPage />

      <ProgressInsights />
      {/* <GallarySection /> */}
      <Companies />

      <DeeptechAndDigital />

      <FooterSection />
    </main>
  );
}
