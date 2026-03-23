import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#052a83]">
      <div className="flex items-center justify-between py-4 px-6 lg:px-10">
        <Link to="/" className="flex items-center">
          <img
            src="/Primary - White.svg"
            alt="Meridian Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  "relative text-sm font-bold transition-colors duration-200 py-2",
                  isActive ? "text-white" : "text-white/80 hover:text-white",
                )
              }
            >
              {({ isActive }) => (
                <div className="relative">
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[4px] rounded-full bg-gradient-to-r from-[#FAE11D] to-[#EB5733]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
          <Button as={Link} to="/contactus" variant="primary">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden z-50 inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay System */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed top-[73px] inset-x-0 bottom-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full z-50 border-t border-white/10 bg-[#052a83] shadow-2xl md:hidden"
            >
              <Container className="py-8">
                <div className="flex flex-col items-start gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        clsx(
                          "relative py-2 text-xl font-bold transition-all w-fit",
                          isActive ? "text-white pl-3" : "text-white/70 pl-0",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {isActive && (
                            <motion.div
                              layoutId="mobile-nav-indicator"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-3/5 rounded-full bg-gradient-to-b from-[#FAE11D] to-[#EB5733]"
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
                  <Button
                    as={Link}
                    to="/contactus"
                    variant="primary"
                    className="mt-4 w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </Button>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
