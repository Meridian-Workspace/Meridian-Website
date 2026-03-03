import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#052a83] text-white">
      {/* soft radial glow (like the mockup) */}
      <div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-cyan-400/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight md:text-5xl"
          >
            Where Smart Systems
            <br />
            Meet Scalable Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            We simplify complex tech into high-performance foundations that
            drive your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="mt-8"
          >
            <Button
              as="a"
              href="#get-a-quote"
              variant="primary"
              className="px-10"
            >
              Let’s Collaborate!
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
