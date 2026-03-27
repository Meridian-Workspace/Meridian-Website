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
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold font-[Epilogue] text-[#01257F] mb-16 md:mb-20">
          What we stand for
        </h2>

        {/* Changed to Flex for perfect centering of the bottom row.
            Gap handles spacing between items.
        */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 lg:gap-x-16">
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
    /* Width Logic:
       - w-full: Mobile (1 column)
       - sm:w-[calc(50%-2rem)]: Large phones (2 columns)
       - md:w-[calc(33.33%-4rem)]: iPads/Desktop (3 columns)
    */
    <div className="text-center flex flex-col items-center w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.33%-4rem)] min-w-[280px] max-w-[350px]">
      
      {/* Reduced Image Container Size */}
      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-6 flex items-center justify-center">
        <img 
          src={icon} 
          alt="" 
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold font-[Epilogue] text-[#01257F] mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-sm md:text-base font-[Inter] text-[#01257F]/80 leading-relaxed px-4">
        {description}
      </p>
    </div>
  );
}