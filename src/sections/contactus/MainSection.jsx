import Container from "../../components/ui/Container";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import ContactCard from "../../components/ui/ContactCard";
import LightBandGlow from "../../components/ui/LightBandGlow";

export default function MainSection() {
  return (
    <section className="relative overflow-hidden bg-[#052a83] text-white">
      <LightBandGlow />

      <Container className="relative z-10 flex flex-col gap-[20px] p-2 mt-1 md:flex-row md:gap-[90px] justify-center md:px-0 md:py-20">
        <div className="md:flex md:items-center md:justify-center">
          <div className="mx-auto max-w-3xl text-left px-5 pt-1 pb-5 mt-2 md:pb-0">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="text-xs font-normal font-[Inter] tracking-tight pt-2 xl:text-[22px] pt-14"
            >
              We are here to help you
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-extrabold font-[Epilogue] tracking-tight xl:text-6xl pt-4"
            >
              Your vision is
              <br />
              one message
              <br />
              away from
              <br />
              reality.
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-medium font-[Inter] tracking-tight pt-7 xl:text-xl md:pt-14"
            >
              Email
            </motion.h4>

            <motion.a
              href="mailto:executive.meridian@gmail.com"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                text-sm xl:text-base
                font-medium font-[Inter]
                tracking-tight
                pb-7 md:pb-14
                hover:underline
                cursor-pointer
                break-all
                inline-block
              "
            >
              executive.meridian@gmail.com
            </motion.a>

            <motion.h4
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-medium font-[Inter] tracking-tight xl:text-xl"
            >
              Social Media
            </motion.h4>

            <motion.icon
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-3 flex items-center gap-4 text-white/80"
            >
              <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61582150155432" className="hover:text-white">
                <Facebook size={30} />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/merǐdian/" className="hover:text-white">
                <Linkedin size={30} />
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/meridian_web/" className="hover:text-white">
                <Instagram size={30} />
              </a>
            </motion.icon>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
