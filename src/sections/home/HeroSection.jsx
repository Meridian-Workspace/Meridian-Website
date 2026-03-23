import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#052a83] text-white">
      {/* moving white light band (like Figma) */}
      <div className="pointer-events-none absolute inset-0 hero-bottom-glow">
        {/* Band A: left -> right */}
        <div className="hero-lightband hero-lightband--a absolute bottom-[-140px] left-[-40vw] h-64 w-[1200px] opacity-100 md:h-80 md:w-[1500px]" />

        {/* Band B: right -> left */}
        <div className="hero-lightband hero-lightband--b absolute bottom-[-170px] right-[-40vw] h-64 w-[1200px] opacity-100 md:h-80 md:w-[1500px]" />
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
            className="font-[Epilogue] text-[clamp(1.5rem,6.5vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-6xl md:text-6xl"
          >
            <span className="block whitespace-nowrap">Where Smart Systems</span>
            <span className="block whitespace-nowrap">
              Meet Scalable Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl font-[Inter] text-base leading-relaxed text-white/80 md:text-lg"
          >
            We simplify complex tech into high-performance foundations that
            drive your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="mt-10 flex justify-center px-1 md:block md:px-0"
          >
            <Button
              as="a"
              href="/contactus"
              variant="primary"
              className={[
                "h-12 min-h-[48px] w-full max-w-[20rem] rounded-xl px-6 text-base font-semibold text-white",
                "md:h-14 md:max-w-none md:w-1/2 md:px-32",
                "transition-[background-image,background-color,box-shadow,transform,border-radius,filter] duration-300 ease-out",
                "md:hover:!bg-[radial-gradient(ellipse_110%_140%_at_50%_52%,#FFF7A8_0%,#FAE11D_0%,#F2A318_16%,#EB5733_48%,#C42E12_82%,#9A220E_100%)]",
                "md:hover:!shadow-[inset_0_-2px_0_0_rgba(45,16,6,0.45),inset_6px_-6px_18px_rgba(120,45,18,0.22),0_0_0_1px_#052a83,0_0_1px_1px_rgba(125,180,255,0.48)]",
                "md:hover:!brightness-[1.03] md:hover:!scale-[1.02]",
              ].join(" ")}
            >
              Let’s Collaborate!
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
