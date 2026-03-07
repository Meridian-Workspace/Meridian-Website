import Container from "../components/ui/Container";
import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#052a83] text-white">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Logo Section - Spans more columns */}
          <div className="md:col-span-5">
            <img
              src="/Primary - White.svg" // Using the same logo from your Navbar
              alt="Meridian Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Learn More Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Learn More</h3>
            <ul className="space-y-3 text-sm font-medium text-white/90">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#get-a-quote" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="flex items-center gap-3 text-sm font-medium">
              <Mail size={20} fill="currentColor" className="text-white" />
              <a
                href="mailto:executive.meridian@gmail.com"
                className="hover:underline"
              >
                executive.meridian@gmail.com
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Social</h3>
            <div className="flex items-center gap-4">
              <button
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity bg-none border-none cursor-pointer p-0"
              >
                <Facebook size={24} fill="white" strokeWidth={0} />
              </button>
              <button
                aria-label="LinkedIn"
                className="hover:opacity-80 transition-opacity bg-none border-none cursor-pointer p-0"
              >
                <Linkedin size={24} fill="white" strokeWidth={0} />
              </button>
              <button
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity bg-none border-none cursor-pointer p-0"
              >
                <Instagram size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 text-center text-sm font-medium text-white/80">
          <p>© 2026 Meridian | All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}
