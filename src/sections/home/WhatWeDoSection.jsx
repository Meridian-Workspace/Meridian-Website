import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";
import Accordion from "../../components/ui/Accordion";
import Button from "../../components/ui/Button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function WhatWeDoSection() {
  const accordionItems = [
    {
      title: "Origin Pack",
      description:
        "A clean, high-converting landing page built for credibility and clarity. Best for validating ideas and launching fast.",
    },
    {
      title: "Compass Pack",
      description:
        "A functional web solution built for growth and customer engagement. Perfect for local cafes, solo freelancers, and small service shops looking to move beyond a basic landing page.",
    },
  ];

  return (
    <section className="bg-white">
      <Container className="py-24 md:py-32">
        <SectionHeader
          eyebrow="WHAT WE’RE GOOD AT"
          title="We focus on what will actually help you grow."
          // Mockup uses very bold, dark navy text
          titleClassName="text-3xl md:text-5xl font-bold text-[#002878] mt-4"
          eyebrowClassName="text-sm font-bold tracking-widest text-slate-500"
        />

        <div className="mt-2 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex justify-center">
            <img
              src="/screen.svg"
              alt="Illustration"
              className="w-full max-w-xl object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Column: Content + Button */}
          <div className="flex flex-col">
            {/* IMPORTANT: Ensure your Accordion component doesn't have 
               internal padding/borders. It should look like flat text with lines.
            */}
            <Accordion
              items={accordionItems}
              defaultOpenIndex={0}
              className="w-full rounded-2xl border border-slate-200 shadow-sm"
              titleClassName="text-xl md:text-2xl font-semibold text-[#002878] py-6 px-8 flex justify-between items-center"
              contentClassName="bg-[#F8F9FA] text-slate-600 py-8 px-8 border-t border-slate-100"
              activeIcon={
                <div className="bg-[#EF5931] rounded-full p-1 text-white flex items-center justify-center">
                  <ChevronUp size={20} />
                </div>
              }
              // The simple navy chevron for the closed state
              inactiveIcon={
                <ChevronDown size={24} className="text-[#002878]" />
              }
            />

            {/* Button Placement & Sizing */}
            <div className="mt-10 flex justify-center">
              <Button
                as="a"
                href="/services"
                className="h-14 w-3/4 inline-flex items-center justify-center rounded-xl bg-brand px-20 text-lg font-bold text-white shadow-md transition-all hover:bg-[#d94e2c] hover:shadow-lg"
              >
                Explore the specs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
