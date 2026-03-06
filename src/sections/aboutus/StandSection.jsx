import React from "react";
import clsx from "clsx";

const values = [
  {
    title: (
      <>
        Operational
        <br className="hidden lg:block" />{" "}
        Excellence
      </>
    ),
    description: "Professional, organized, and on schedule.",
    icon: "/OperationalExcellence.svg",
  },
  {
    title: "Quality",
    description: "Clean, modern, and high-end designs that help our clients stand out.",
    icon: "/Quality.svg",
  },
  {
    title: (
      <>
        Purpose
        <br className="hidden lg:block" />{" "}
        Built
      </>
    ),
    description: "Practical tools focused on what you actually need.",
    icon: "/PurposeBuilt.svg",
  },
  {
    title: (
      <>
        Radical
        <br className="hidden lg:block" />{" "}
        Integrity
      </>
    ),
    description: "Transparent pricing and clear, honest communication.",
    icon: "/RadicalIntegrity.svg",
  },
  {
    title: (
      <>
        Innovative
        <br className="hidden lg:block" />{" "}
        Growth
      </>
    ),
    description: "Modern tech to keep your brand ahead of the curve.",
    icon: "/InnovativeGrowth.svg",
  },
];

export default function StandSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold font-[Epilogue] text-[#01257F] mb-20">
          What we stand for
        </h2>

        {/* Responsive Flex Container */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-20">
          {values.map((value, index) => (
            <Card key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, icon }) {
  return (
    <div className="text-center flex flex-col items-center w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2.5rem)] max-w-[320px]">
      <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
        <img 
          src={icon} 
          alt="" /* Decorative icon */
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
        />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold font-[Epilogue] text-[#01257F] mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-sm md:text-base font-[Inter] text-[#01257F]/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}