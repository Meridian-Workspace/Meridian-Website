import Container from "../../components/ui/Container";
import LightBandGlow from "../../components/ui/LightBandGlow";
import { motion } from "framer-motion"; // Ensure motion is imported

export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-[#052a83] text-white">
      <LightBandGlow />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Animated H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Epilogue] text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
          >
            Built for Quality.
            <br />
            Maintained for Growth.
          </motion.h1>

          {/* Animated Paragraph with the same delay as reference */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl font-[Inter] text-base leading-relaxed text-white/90 md:text-lg"
          >
            Select a service category below to explore our expertise and find
            the right fit for your project.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
