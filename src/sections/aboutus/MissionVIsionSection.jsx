import React from "react";
import clsx from "clsx";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      {/* Container: max-w-[1400px] ensures it matches the Purpose section 
        and minimizes the "orange space" (side margins) on wide screens.
      */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-x-32 items-center">

        {/* ILLUSTRATION: order-1 (Top on mobile), lg:order-2 (Right on desktop) */}
        <div className="flex justify-center lg:justify-center order-1 lg:order-2">
          <img
            src="/MissionVision.svg"
            alt="Mission and vision illustration"
            /* Mobile: max-w-[280px] to match the Purpose image scale 
               Desktop: Increased to lg:max-w-[550px] for better visual balance
            */
            className="w-full max-w-[260px] md:max-w-sm lg:max-w-[400px] rotate-[6deg] lg:rotate-[10deg] transition-transform duration-500 hover:rotate-0"
          />
        </div>

        {/* TEXT: order-2 (Bottom on mobile), lg:order-1 (Left on desktop) */}
        <div className="flex flex-col order-2 lg:order-1 text-left">
          <p className="text-sm md:text-xl font-[Inter] text-[#01257F] tracking-widest mb-2 md:mb-4 font-bold uppercase">
            MISSION & VISION
          </p>

          <h2 className="text-4xl md:text-6xl font-[Epilogue] text-[#01257F] font-extrabold leading-[1.1] mb-6">
            Complex
            <br className="hidden md:block" />{" "}
            <span className="whitespace-nowrap">
              Tech, <span className="text-[#EB5733]">Simplified.</span>
            </span>
          </h2>

          <p className="text-base md:text-2xl font-[Inter] leading-relaxed text-gray-700">
            We envision a future where refined design is accessible to everyone,
            ensuring that every technical asset we build is a long-term engine
            for your growth.
          </p>
        </div>

      </div>
    </section>
  );
}