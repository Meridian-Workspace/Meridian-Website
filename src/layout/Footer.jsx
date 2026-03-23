import Container from "../components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#052a83] text-white">
      <Container className="py-10 md:py-10">
        {" "}
        {/* Reduced mobile padding further */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Logo Section */}
          <div className="md:col-span-5 flex justify-start">
            <img
              src="/Primary - White.svg"
              alt="Meridian Logo"
              className="h-10 md:h-20 w-auto"
            />
          </div>

          {/* Wrapper for Columns to sit side-by-side on mobile */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Learn More Column */}
            <div className="md:col-span-2">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-6">
                Learn More
              </h3>
              <ul className="space-y-2 text-sm font-medium text-white/90">
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

            {/* Social Column */}
            <div className="md:col-span-2">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-6">
                Social
              </h3>
              <div className="flex items-center gap-4">
                {/* Facebook Link */}
                <a
                  href="https://www.facebook.com/profile.php?id=61582150155432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6 object-contain"
                  />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/company/merǐdian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain"
                  />
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/meridian_web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Contact Column — col-span-2 on mobile so it is not stuck in half-width grid cell */}
            <div className="col-span-2 min-w-0 md:col-span-3">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-6">
                Contact Us
              </h3>
              <div className="flex w-full min-w-0 items-start gap-3 text-sm font-medium">
                <a
                  href="mailto:executive.meridian@gmail.com"
                  className="flex min-w-0 max-w-full items-start gap-3 hover:underline"
                >
                  <img
                    src="/email.png"
                    alt="Email"
                    className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                  />
                  <span className="min-w-0 break-all text-[13px] sm:text-sm">
                    executive.meridian@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-5 md:mt-24 text-center text-[10px] md:text-sm font-medium text-white/60 border-t border-white/10 pt-6">
          <p>© 2026 Meridian | All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}
