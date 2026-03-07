import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <section className="relative overflow-hidden bg-[#052a83] text-white">
      {/* moving white light band (like Figma) */}
      <div className="pointer-events-none absolute inset-0 hero-bottom-glow">
        {/* Band A: left -> right */}
        <div className="hero-lightband hero-lightband--a absolute bottom-[-140px] left-[-40vw] h-64 w-[1200px] opacity-90 md:h-80 md:w-[1500px]" />

        {/* Band B: right -> left */}
        <div className="hero-lightband hero-lightband--b absolute bottom-[-170px] right-[-40vw] h-64 w-[1200px] opacity-75 md:h-80 md:w-[1500px]" />
      </div>

      {/* existing soft glows (keep for depth like mockup) */}
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Epilogue] text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            About
          </motion.h1>

        </div>
      </Container>
    </section>
  );
}
