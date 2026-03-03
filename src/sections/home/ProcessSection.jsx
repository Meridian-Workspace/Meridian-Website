import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";
import Button from "../../components/ui/Button";
import clsx from "clsx";

const steps = [
  { number: "01", title: "Requirements Gathering" },
  { number: "02", title: "Analysis & Design" },
  { number: "03", title: "Development" },
  { number: "04", title: "Testing" },
  { number: "05", title: "Deployment & Handover" },
];

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-20">
        <SectionHeader
          eyebrow="Our process"
          title="Simple from start to finish"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-center gap-5 rounded-2xl border border-[#052a83]/25 bg-white px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            >
              <div
                className={clsx(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
                  "bg-gradient-to-b from-yellow-400 to-orange-500",
                )}
              >
                {step.number}
              </div>

              <p className="text-sm font-semibold text-[#052a83] md:text-base">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as="a" href="/services" variant="primary" className="px-12">
            Learn More
          </Button>
        </div>

        {/* Anchor target for CTA buttons */}
        <div id="get-a-quote" className="pt-2" />
      </Container>
    </section>
  );
}
