import React from "react";
import Image from "next/image";

export default function CompanyDetailsPopup() {
  return (
    <div className="relative h-full w-full">
      {/* Container for the popup */}
      <div className="flex h-full w-full flex-col items-center justify-between bg-white">
        {/* Company Logo */}
        <div className="mb-4 mt-20 flex items-center justify-center">
          <Image
            src="/assets/companies/de_novo.png"
            alt="De Novo Foodlabs"
            width={200}
            height={160}
          />
        </div>

        {/* Information Section */}
        <div className="bottom-0 w-full max-w-5xl bg-[#E8EEEF] px-14 py-10 text-left">
          <div className="mb-10 grid grid-cols-1 gap-y-4 text-lg">
            {/* First Row */}
            <div className="flex justify-between">
              <span className="font-semibold text-primary">NAME</span>
              <span>DE NOVO FOODLABS</span>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <span className="font-semibold text-primary">FOCUS AREA</span>
              <span>DEEPTECH</span>
            </div>

            {/* Third Row */}
            <div className="flex justify-between">
              <span className="font-semibold text-primary">SECTOR</span>
              <span>AGRICULTURE</span>
            </div>

            {/* Fourth Row */}
            <div className="flex justify-between">
              <span className="font-semibold text-primary">
                INVESTMENT STAGE
              </span>
              <span>SEED</span>
            </div>

            {/* Fifth Row */}
            <div className="flex justify-between">
              <span className="font-semibold text-primary">LOCATION</span>
              <span>UK</span>
            </div>
          </div>

          {/* line  */}
          <div className="mb-8 w-full border-t border-gray-300 bg-gray-300"></div>

          {/* Founders Section */}
          <div className="mb-6 flex items-start justify-between">
            <h3 className="font-semibold text-orange-600">FOUNDERS</h3>
            <ul className="mt-2 list-none text-end">
              <li>JEAN LOUWRENS - CEO</li>
              <li>LEAH BESSA - CTO</li>
              <li>RICHARD GRIEVES - COO</li>
            </ul>
          </div>

          {/* Company Description */}
          <p className="mb-10 font-montserrat text-lg text-black">
            De Novo Foodlabs uses precision fermentation to produce cruelty-free
            animal-based proteins that respond better to human nutritional
            needs, as they contain higher protein concentrations than natural
            cow milk. De Novo Foodlabs is also developing the human.
          </p>

          {/* Link to Website */}
          <a
            href="https://your-website.com"
            className="text-orange-600 underline transition hover:text-orange-500"
          >
            VISIT OUR WEBSITE
          </a>
        </div>
      </div>
    </div>
  );
}
