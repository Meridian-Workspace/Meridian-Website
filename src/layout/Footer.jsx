import Container from "../components/ui/Container";
import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#052a83] text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-brand" />
            <div>
              <p className="font-semibold leading-tight">Meridian</p>
              <p className="text-xs text-white/70">
                Smart systems. Real growth.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Learn More</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a className="hover:text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#get-a-quote">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact Us</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/75">
              <Mail size={16} />
              <a
                className="hover:text-white"
                href="mailto:executive.meridian@gmail.com"
              >
                executive.meridian@gmail.com
              </a>
            </div>

            <p className="mt-6 text-sm font-semibold">Social</p>
            <div className="mt-3 flex items-center gap-4 text-white/80">
              <a aria-label="Facebook" href="#" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="hover:text-white">
                <Linkedin size={18} />
              </a>
              <a aria-label="Instagram" href="#" className="hover:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Meridian | All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}
