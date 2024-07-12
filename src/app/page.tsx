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
import EventsSection from "./_components/sections/EventsSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      <LandingPage />

      <div className="container flex h-full w-full flex-col gap-4 bg-white py-12 text-center">
        <Title>OUR MISSION</Title>
        <Subtitle>Investing in the Future of Innovation</Subtitle>
      </div>
      <div className="flex h-full w-full flex-col gap-4 bg-primary px-12 pb-14 font-montserrat text-white">
        <div className="right-0 top-0 h-14 w-14 -translate-x-12 -translate-y-8 bg-secondary" />
        <div className="right-0 top-0 h-8 w-8 -translate-x-2 -translate-y-16 bg-blue-500" />
        <p className="container">
          UM6P Ventures is the investment arm of University Mohammed VI
          Polytechnic, founded as a vehicle for the university to advance
          entrepreneurship and accelerate scientific innovation in Morocco and
          Africa. It is an early-stage ventures firm operating two funds ; a
          Digital TransformationStartupfundandaDeeptechVenturesfund.
        </p>
        <p className="container">
          UM6P Ventures invests in pre-seed and seed Digital Transformation
          startups alongside partners from its vast network of native and
          international programs including incubators, accelerators,
          andinvestorssuchasBusinessAngelsandventurecapitalists.
        </p>
        <p className="container">
          UM6P Ventures provides Deeptech Ventures with capital and advanced
          talent sourcing, subject domain expertise, and the ability to access
          specialized equipment and infrastructure. UM6P Ventures has a robust
          ecosystem and an investment portfolio actively invested in
          Agriculture, Chemicals, GreenTech and Healthtech.
        </p>
      </div>

      <GallarySection />
      <Companies />
      <OurTeam />
      <PartnersSection />

      <div className="grid grid-cols-1 gap-8 py-20 sm:grid-cols-2 md:w-3/5 lg:grid-cols-3">
        <SectionCard
          imageSrc="/assets/um6p.jpg"
          altText="Create T3 App Logo"
          overlayText="UNIVERSITIES"
        />
        <SectionCard
          imageSrc="/assets/research.webp"
          altText="Create T3 App Logo"
          overlayText="RESEARCH INSTITUTIONS"
        />
        <SectionCard
          imageSrc="/assets/co-workers.jpg"
          altText="co workers"
          overlayText="INCUBATORS & ACCELERATORS"
        />
        <SectionCard
          imageSrc="/assets/blog-virtual-meeting-video-conferencing.webp"
          altText="Create T3 App Logo"
          overlayText="COMMUNITY BUILDERS"
          span="sm:col-span-1 lg:col-span-2"
        />
        <SectionCard
          imageSrc="/assets/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting 1200x700.jpg"
          altText="Create T3 App Logo"
          overlayText="VCS & BUSINESS ANGELS"
        />
      </div>

      <TestimonialsSection />
      <ContactUsSection />
      <FooterSection />

      <EventsSection />
    </main>
  );
}
