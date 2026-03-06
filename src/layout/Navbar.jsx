import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium transition",
                  "text-white/80 hover:text-white",
                  isActive && "text-white",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Button as="a" href="#get-a-quote" variant="primary">
            Get a Quote
          </Button>
        </nav>

        <button
          type="button"
          className={clsx(
            "md:hidden inline-flex items-center justify-center rounded-lg p-2 transition",
            "text-white/80 hover:text-white",
          )}
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div
          className={clsx("md:hidden border-t", "text-white hover:bg-white/10")}
        >
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "py-2 text-sm font-medium text-white/80 hover:text-white",
                      isActive && "text-white",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                as="a"
                href="#get-a-quote"
                variant="primary"
                className="mt-2"
              >
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
