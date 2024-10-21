"use client";

import Image from "next/image";
import Title from "../_components/common/title";
import { Button } from "~/components/ui/button";
import { ChevronLeft } from "lucide-react";

// Reusable BackButton component
const BackButton = () => (
  <Button
    onClick={() => window.history.back()}
    className="mt-36 gap-3 rounded-none bg-secondary font-light text-primary text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary"
  >
    <ChevronLeft />
    <span>BACK TO NEWS</span>
  </Button>
);

// Reusable LinkedInLink component
const LinkedInLink = () => (
  <a
    href="https://www.linkedin.com/in/balaji-vasudevan/"
    className="linkedin-link text-primary underline hover:text-secondary"
  >
    https://www.linkedin.com/in/balaji-vasudevan/
  </a>
);

const sections = [
  "The UM6P Ventures’ Startup Showcase in collaboration with Plug and Play Morocco took place at University Mohamed 6 Polytechnic , StartGate at Ben Guerir, Morocco on October 18th, 2022. Preceded by a  reception the event kicked off with opening remarks made by Yasser Biaz, CEO of UM6P Ventures. Two panel sessions weretorganizedtfortthetevent.",
  "The first panel session in the morning focused on “UM6P Ventures’ scientific and research network engagement model and the technology licensing use case”. Panelists represented UM6P Ventures, the UC Davis African Plant Breeding Academy (AfPBA), the Partnership for Skills in Applied Sciences, Engineering and Technology (PASET), the UM6P Technology Licensing Office and the UM6P Institut Supérieur des Sciences Biologiques et Paramédicales (ISSB-P). Members of the panel discussed multiple topics related to the startup journey from its inception, funding, technology licensing, IP strategies, Venture Builder support and much more. The panel brainstormed various challenges faced by startups and the requirements for a startup to be successful on its journey with examples from specific use cases.",
  "The second panel convened after lunch and focused on “Insights into the Venture Builder Offer and real time Q&A with startups founders”. Panel members represented founders and C-suite executives from Agrobioscience startups (De Novo Dairy, Mogale Meat, Biotic, Maya Milk and ClimateCrop) and healthcare startups (Infiuss Health and Zuri Health). Panelists shared their thoughts and their own experiences working with UM6P Ventures. They highlighted how support from UM6P Ventures via capital and the Venture Builder Offer provides access to infrastructure, Subject Matter Expertise, Intellectual Property (IP), a vast partner and Venture Capital network, and access to scientific talent.",
  "Attendees also benefited from a noteworthy discussion on the selection of a VC as a strategic investment partner and the steps to follow as they build their startups and navigate those tough initial few years. Overall it was a much needed and very interesting panel for upcoming startups and aspiring entrepreneurs.",
  "The showcase event ended with a tour of the UM6P University campus facilities including the experimental farm, Agrobioscience Lab, the Material Science labs and others. Tours of the facilities showed that the infrastructure at UM6P is truly world class and on par with any leading globally reputed university. The startups expressed a lot of interest in using these facilities for their R&D projects.",
];

// Main ArticlePage component
export default function ArticlePage() {
  return (
    <main className="mt-auto flex min-h-screen flex-col items-start justify-start overflow-hidden bg-white pb-24">
      <HeroSection />

      <div className="container flex w-full flex-col items-start justify-center gap-20 pb-36">
        <BackButton />
        <LinkedInLink />

        {/* Introduction Section */}
        <Section title="Introduction">
          <p className="pt-12 font-montserrat">
            Being a startup founder is an enormous challenge. Many founders and
            entrepreneurs have great ideas with huge potential to transform
            science and tech into business ventures that can benefit society.
            However, more often than not, these startups and founders see their
            ideas fade away or die due to lack of support on multiple fronts
            including the lack of funding opportunities, infrastructure
            availability, IP support, regulatory understanding, subject matter
            exepertise and access to VCs. There are many venture firms out there
            that will support Deeptech ideas. Most of them are general and
            follow a conventional model of support while very few are trying to
            create programs and models specifically tailored to the challenges
            of agriculture and foodtech startups. UM6P Ventures is committed to
            offering 360o support to help and enable deeptech startups succeed
            in businesses. We brought together our latest cohort of startups and
            our Deeptech ecosystem this week. We showcased the innovative
            solutions being introduced to the market and exchanged ideas amongst
            professionals in the Agrobioscience and Healthcare industries. Here
            is a recap of the event in case you missed it.
          </p>
        </Section>

        {/* Startup Showcase Section */}
        <Section title="The Startup Showcase">
          <ArticleContent />
        </Section>

        {/* Summary and Road Ahead */}
        <Section title="Summary and Road Ahead">
          <div className="grid w-full grid-cols-1 gap-8 pt-16 sm:grid-cols-2">
            <ResponsiveImage src="/assets/article1.jpg" alt="ventures" />
            <ResponsiveImage src="/assets/article2.jpg" alt="ventures" />
          </div>
        </Section>

        <Section title="Summary and Road Ahead">
          <p className="pb-24 pt-10 font-montserrat">
            Our Agrobioscience and Healthcare cohort and startup showcase event
            clearly showed how much impact can be made when local and global
            businesses and entrepreneurs are given the type of support they
            need. However, there is still a lot of work and support that needs
            happen as these businesses continue on their path to reach full
            maturation. UM6P Ventures intends to there every step of the way and
            will continue to develop programs and resources that will be of
            value to these innovative startups.
          </p>
          <ResponsiveImage
            src="/assets/article3.jpg"
            alt="ventures"
            aspectRatio="video"
          />
        </Section>
      </div>
    </main>
  );
}

// Section Component
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="w-full">
    <Title className="font-montserrat text-3xl" color="text-primary">
      {title}
    </Title>
    {children}
  </section>
);

// HeroSection Component
function HeroSection() {
  return (
    <div className="relative h-[40rem] w-full items-center justify-center">
      <div className="absolute h-full w-full flex-col items-center justify-center gap-4">
        <Image
          src="/assets/background/bg.jpeg"
          alt="ventures"
          fill={true}
          className="object-cover"
        />
        <div className="absolute h-full w-full bg-primary opacity-90" />
      </div>

      <div className="absolute flex h-full w-full flex-col items-center justify-center text-center font-medium text-black">
        <div className="h-1 w-24 bg-secondary" />
        <Title className="mt-7 w-10/12 font-montserrat text-xl text-white sm:w-1/2 md:text-2xl">
          UM6P Ventures participates in the first edition of the “Call for
          Projects on Valorization of Research Findings / Innovation” (APVAR
          2021)
        </Title>
      </div>

      <p className="absolute bottom-4 w-full px-8 pb-4 pt-8 text-center text-gray-400">
        by Balaji Vasudevan | Oct 19, 2022
      </p>
    </div>
  );
}

// ArticleContent Component
function ArticleContent() {
  return (
    <div className="prose max-w-none pt-16 font-montserrat">
      {sections.map((section, index) => (
        <p key={index} className={index === sections.length - 1 ? "" : "pb-5"}>
          {section}
        </p>
      ))}
    </div>
  );
}

// Responsive Image Component
function ResponsiveImage({
  src,
  alt,
  aspectRatio = "square",
}: {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video";
}) {
  const aspectClasses =
    aspectRatio === "video" ? "aspect-video" : "aspect-square";
  return (
    <div className={`relative ${aspectClasses} w-full`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
