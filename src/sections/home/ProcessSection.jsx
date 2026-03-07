import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";
import Button from "../../components/ui/Button";
import clsx from "clsx";

const steps = [
  { number: "01", title: "Requirements Gathering" },
  { number: "02", title: "Analysis & Design" },
  { number: "03", title: "Development" },
  { number: "04", title: "Testing" },
  { number: "05", title: "Deployment & Handover" }, // Matching the Turnover text from the mockup
];

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <Container className="py-12 md:py-20">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="Simple from start to finish"
          className="text-[#052a83]"
        />

        {/* Added horizontal padding on mobile to prevent circles from hitting screen edge */}
        <div className="mx-auto mt-12 max-w-2xl space-y-4 md:space-y-6 px-4 md:px-0">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-6 md:pl-10">
              {/* Responsive Number Circle: smaller on mobile (h-14), larger on desktop (h-20) */}
              <div
                className={clsx(
                  "absolute left-0 top-1/2 -translate-y-1/2 z-10",
                  "flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full",
                  "bg-gradient-to-b from-[#ffb133] to-[#ed6a32]",
                  "text-lg md:text-2xl font-bold text-white shadow-lg border-2 border-white",
                )}
              >
                {step.number}
              </div>

              {/* Responsive Card: Reduced min-height and padding on mobile */}
              <div className="flex min-h-[70px] md:min-h-[100px] items-center rounded-2xl border-2 border-[#052a83] bg-white py-4 md:py-6 pl-12 md:pl-16 pr-6 md:pr-8">
                <p className="text-base font-bold text-[#052a83] md:text-2xl leading-tight">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center px-6">
          <Button
            as="a"
            href="/services"
            className="bg-[#e85a37] hover:bg-[#d44d2d] text-white px-8 md:px-16 py-3 md:py-4 rounded-xl w-3/4 md:w-80 text-center text-base md:text-lg transition-colors font-bold"
          >
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}
