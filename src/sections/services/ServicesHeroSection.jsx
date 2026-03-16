import Container from "../../components/ui/Container";
import LightBandGlow from "../../components/ui/LightBandGlow";

export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-[#052a83] text-white">
      <LightBandGlow />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[Epilogue] text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Built for Quality.
            <br />
            Maintained for Growth.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-[Inter] text-base leading-relaxed text-white/90 md:text-lg">
            Select a service category below to explore our expertise and find the
            right fit for your project.
          </p>
        </div>
      </Container>
    </section>
  );
}
