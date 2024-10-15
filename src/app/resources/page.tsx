"use client";

import Image from "next/image";
import React, { useState } from "react";
import Subtitle from "../_components/common/subtitle";
import { CircleChevronRight } from "lucide-react";

const images: { src: string; link: string; title: string }[] = [
  {
    src: "/assets/gallary/img2.png",
    link: "/deepecho",
    title: "Overview-UM6P Ventures' intro",
  },
  {
    src: "/assets/gallary/img3.png",
    link: "/jibly",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img1.png",
    link: "/climate-crop",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img4.png",
    link: "/wafr",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img5.png",
    link: "/smartprof",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img6.png",
    link: "/de-novo",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img1.png",
    link: "/deepika",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img3.png",
    link: "/hsabati",
    title: "Overview-UM6P Ventures' intro ",
  },
  {
    src: "/assets/gallary/img5.png",
    link: "/paylik",
    title: "Overview-UM6P Ventures' intro ",
  },
];

const categories = [
  "OFFERS",
  "WHITE PAPERS",
  "CASE STUDIES",
  "VIDEOS",
  "WEBINARS",
];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>("VIDEOS");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <div className="relative flex h-[500px] w-full items-center justify-center">
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4">
          <Image
            src="/assets/background/bg.jpeg"
            alt="Background of our ventures"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute h-full w-full bg-primary opacity-80" />
        </div>
        <div className="container relative mr-28 mt-20 flex h-full flex-col items-start justify-center text-center font-medium text-black">
          <div className="flex h-2 w-24 bg-orange-600" />
          <Subtitle className="font-montserrat text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Resources
          </Subtitle>
        </div>
      </div>

      {/* Horizontal Category Navigation */}
      <div className="flex w-full justify-center bg-[#f5f7fd] pb-8 pt-14">
        <nav className="flex gap-8 text-lg font-normal text-primary">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative mx-5 pb-2 font-montserrat text-primary ${
                selectedCategory === category
                  ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:bg-primary"
                  : "font-light"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid of Images with Titles and Buttons */}
      <div className="container flex w-full flex-col items-center justify-center gap-4 pb-16 pt-24">
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-3">
          {images.map(({ src, link, title }) => (
            <div
              key={src}
              className="flex flex-col items-start overflow-hidden rounded-md text-center shadow-lg"
            >
              <div className="h-40 w-full overflow-hidden">
                <Image
                  src={src}
                  alt={title}
                  width={400}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start justify-center bg-white p-4 pb-8">
                <h2 className="mt-4 font-montserrat text-lg font-semibold text-primary">
                  {title}
                </h2>
                <div
                  onClick={() => window.open(link, "_blank")}
                  className="mt-4 flex cursor-pointer items-center justify-center gap-2 bg-orange-600 px-4 py-2 text-white"
                >
                  <p
                    className="font-montserrat text-sm"
                    style={{ lineHeight: "1.5" }}
                  >
                    DISCOVER HERE
                  </p>
                  <CircleChevronRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
