import React from "react";
import clsx from "clsx";

export default function PurposeSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      {/* Grid stays 1 column on mobile, switches to 2 columns at 'lg' (1024px).
          'items-center' keeps the illustration and text vertically aligned.
      */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-24 items-center">

        {/* Illustration: Scaled for mobile per image_898d0e.png */}
        <div className="flex justify-center lg:justify-center order-1">
          <img
            src="/AboutUs_Purpose.svg" 
            alt="Meridian purpose illustration"
            className="w-full max-w-[280px] md:max-w-md lg:max-w-[480px] -rotate-[10deg] lg:-rotate-[15deg] transition-transform hover:rotate-0"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col order-2 lg:order-2">
          {/* Label: Adjusted to 14px on mobile, 24px on desktop */}
          <p className="text-lg md:text-2xl font-[Inter] text-[#01257F] tracking-tight mb-2 md:mb-4 font-bold uppercase lg:normal-case">
            OUR PURPOSE
          </p>

          {/* Heading: Responsive font sizes to prevent overflow on mobile */}
          <h2 className="text-4xl md:text-6xl font-[Epilogue] text-[#01257F] font-extrabold mb-4 leading-relaxed leading-[1.1]">
            Bridging 
            <br className="hidden md:block"/> 
            {" "}the Digital Gap
        </h2>

          {/* Subheader/Intro */}
          <p className="text-lg md:text-2xl font-[Inter] text-[#052a83] mb-6 leading-snug">
            We built Meridian for individuals and businesses that are ready to level up.
          </p>

          {/* Body Text */}
          <p className="text-base md:text-2xl font-[Inter] leading-relaxed">
            Meridian offers a third option: professional, high-quality websites built for growth.
            We handle the tech and the design, so you can focus on your business.
          </p>
        </div>

      </div>
    </section>
  );
}