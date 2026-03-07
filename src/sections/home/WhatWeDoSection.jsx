import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";
import Accordion from "../../components/ui/Accordion";
import Button from "../../components/ui/Button";

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

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Illustration - Ensure it scales large */}
          <div className="flex justify-center">
            <img
              src="/screen.svg"
              alt="Illustration"
              className="w-full max-w-xl object-contain"
            />
          </div>

          {/* Right Column: Content + Button */}
          <div className="flex flex-col">
            {/* IMPORTANT: Ensure your Accordion component doesn't have 
               internal padding/borders. It should look like flat text with lines.
            */}
            <Accordion
              items={accordionItems}
              defaultOpenIndex={1}
              className="w-full"
              titleClassName="text-2xl md:text-3xl font-bold text-[#002878] py-8 border-b border-slate-100"
              contentClassName="text-lg text-slate-700 leading-relaxed py-6"
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
