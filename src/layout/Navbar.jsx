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
  const location = useLocation();

  const isHome = useMemo(() => location.pathname === "/", [location.pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b",
        isHome ? "border-white/10 bg-[#052a83]" : "border-slate-200 bg-white",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          {/* Replace with your real logo asset later */}
          <div className="h-8 w-8 rounded-md bg-brand" />
          <span
            className={clsx(
              "font-semibold tracking-tight",
              isHome ? "text-white" : "text-slate-900",
            )}
          >
            Meridian
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium transition",
                  isHome
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-slate-900",
                  isActive && (isHome ? "text-white" : "text-slate-900"),
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
            isHome
              ? "text-white hover:bg-white/10"
              : "text-slate-900 hover:bg-slate-100",
          )}
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isMobileMenuOpen ? (
        <div
          className={clsx(
            "md:hidden border-t",
            isHome
              ? "border-white/10 bg-[#052a83]"
              : "border-slate-200 bg-white",
          )}
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
                      "py-2 text-sm font-medium",
                      isHome ? "text-white/80" : "text-slate-700",
                      isActive && (isHome ? "text-white" : "text-slate-900"),
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
