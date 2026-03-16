import clsx from "clsx";
import Container from "../../components/ui/Container";
import LightBandGlow from "../../components/ui/LightBandGlow";

const steps = [
  {
    number: "01.",
    title: "Requirements Gathering",
    description: "Understanding your goals to build the right foundation.",
  },
  {
    number: "02.",
    title: "Analysis & Design",
    description: "Crafting clean, modern layouts tailored to your brand.",
  },
  {
    number: "03.",
    title: "Development",
    description: "Turning approved designs into a high-performance reality.",
  },
  {
    number: "04.",
    title: "Quality Assurance",
    description: "Rigorous checks to ensure every feature works flawlessly.",
  },
  {
    number: "05.",
    title: "Deployment & Handover",
    description: "Going live and giving you the keys to your new site.",
  },
];

export default function SimpleStepsSection() {
  return (
    <section className="relative overflow-hidden bg-[#052a83] py-16 md:py-24">
      <LightBandGlow />

      <Container className="relative z-10">
        {/* Header: top-left — orange dot, "5 Simple Steps" (light gray), then main title with line to the right */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
          <p className="text-xs font-medium tracking-[0.18em] text-slate-300">
            5 Simple Steps
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Simplified Tech,
            <br />
            Premium Solutions.
          </h2>
          <div
            className="h-px min-w-[120px] flex-1 bg-slate-400/80 sm:mb-2"
            aria-hidden
          />
        </div>

        {/* Cards: 3 top row, 2 bottom row centered; white, rounded, subtle shadow; Figma text layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={clsx(
                "rounded-2xl bg-white p-6 shadow-lg sm:p-8",
                index === 3 && "lg:col-start-2",
              )}
            >
              <span className="text-lg font-medium text-[#01257F] md:text-xl">
                {step.number}
              </span>
              <h3 className="mt-3 text-left text-base font-bold leading-tight text-[#01257F] md:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-left text-sm leading-relaxed text-[#01257F]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
