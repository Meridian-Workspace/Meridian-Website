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
      cta: (
        <Button as="a" href="/services" variant="outline">
          Explore the specs
        </Button>
      ),
    },
    {
      title: "Compass Pack",
      description:
        "A functional web solution built for growth and customer engagement. Perfect for local cafes, solo freelancers, and small service shops looking to move beyond a basic landing page.",
      cta: (
        <Button as="a" href="/services" variant="primary">
          Explore the specs
        </Button>
      ),
    },
  ];

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-20">
        <SectionHeader
          eyebrow="What we’re good at"
          title="We focus on what will actually help you grow."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left illustration placeholder to match mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-56 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-100 to-white">
              <div className="absolute left-6 top-10 h-28 w-28 rounded-full bg-orange-300/80 blur-md" />
              <div className="absolute bottom-10 left-8 h-28 w-64 rounded-xl bg-slate-950 shadow-lg" />
              <div className="absolute bottom-14 left-12 h-2 w-20 rounded bg-orange-400/80" />
              <div className="absolute bottom-14 left-36 h-2 w-24 rounded bg-cyan-300/50" />
              <div className="absolute bottom-20 left-12 h-2 w-44 rounded bg-white/20" />
            </div>
          </div>

          <div>
            <Accordion items={accordionItems} defaultOpenIndex={1} />
          </div>
        </div>
      </Container>
    </section>
  );
}
