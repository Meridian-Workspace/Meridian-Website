import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <section className="relative overflow-hidden bg-[#052a83] text-white">
      {/* moving white light band (like Figma) */}
      <div className="pointer-events-none absolute inset-0 hero-bottom-glow">
        {/* Band A: Increased height back to h-64 but moved lower */}
        <div 
          className="hero-lightband hero-lightband--a absolute bottom-[-180px] left-[-30vw] h-64 w-[1200px] opacity-80 md:h-80 md:w-[1500px]" 
          style={{ 
            background: 'radial-gradient(ellipse at center, #0EE1FE 0%, transparent 75%)',
            filter: 'blur(40px)' // Softens the top edge significantly
          }} 
        />

        {/* Band B: Increased height back to h-64 but moved lower */}
        <div 
          className="hero-lightband hero-lightband--b absolute bottom-[-210px] right-[-30vw] h-64 w-[1200px] opacity-70 md:h-80 md:w-[1500px]" 
          style={{ 
            background: 'radial-gradient(ellipse at center, #0EE1FE 0%, transparent 75%)',
            filter: 'blur(40px)' 
          }}
        />
      </div>

      {/* existing soft glows (keep for depth like mockup) */}
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
