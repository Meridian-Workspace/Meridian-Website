import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/ui/Container";
import { Check } from "lucide-react";
import clsx from "clsx";

// --- Core Features ---
const originFeatures = [
  {
    title: "Premium Pages",
    description: "Includes a custom-designed Home and Services page.",
  },
  {
    title: "Fully Responsive & Custom UI",
    description:
      "Optimized for all devices with a brand-consistent color and typography system.",
  },
  {
    title: "Essential Visibility",
    description:
      "Includes On-Page SEO setup, Google Maps embed, and Social Media integration.",
  },
  {
    title: "Performance Ready",
    description:
      "Includes image and basic performance optimization plus SSL setup for security.",
  },
  {
    title: "Engagement",
    description:
      "A standard 'Email Only' contact form to receive inquiries directly.",
  },
];

const compassFeatures = [
  {
    title: "Premium Pages",
    description: "Expanded layout (e.g., dedicated FAQ or Testimonial page).",
  },
  {
    title: "Dynamic Content (CRUD)",
    description:
      "Includes a CMS and a Blog section where you can add or edit content yourself.",
  },
  {
    title: "Advanced Lead Gen",
    description:
      "Inquiries are not just emailed; they are saved in a Lead Database so you never lose a potential client.",
  },
  {
    title: "Interaction Tools",
    description:
      "Features a Basic Booking System, Newsletter integration, and basic Analytics to track visitors.",
  },
  {
    title: "Private Access",
    description:
      "Includes User Login and Role-Based Access (allowing specific people to view or edit certain parts of the site).",
  },
  {
    title: "Technical Edge",
    description:
      "Limited API integration and optional Payment Gateway support.",
  },
];

// --- Maintenance Features ---
const anchorFeatures = [
  {
    title: "Uptime Monitoring",
    description: "We check 24/7 to make sure your site never goes down.",
  },
  {
    title: "Monthly Security Scan",
    description: 'We run a "health check" to block hackers and malware.',
  },
  {
    title: "Monthly Cloud Backup",
    description:
      "We save a copy of your entire site off-site. If something breaks, we restore it for free.",
  },
  {
    title: "Software Updates",
    description:
      "We handle the technical updates (WordPress/Plugins) so you don't have to.",
  },
  {
    title: "Email Support",
    description: "Got a quick question? Send us an email anytime.",
  },
];

const navigatorFeatures = [
  { title: 'Everything Included in "The Anchor"', description: "" },
  {
    title: "Weekly Backups",
    description:
      'More frequent "snapshots" of your site to protect your database and leads.',
  },
  {
    title: "Content Updates (1 Hour/Mo)",
    description:
      "Want to change a price, swap a photo, or add a blog post? We do it for you.",
  },
  {
    title: "Database Cleanup",
    description:
      'We optimize your "Lead Database" and CRUD system to keep it fast.',
  },
  {
    title: "Monthly Performance Report",
    description:
      "A simple summary of how many people visited your site and sent inquiries.",
  },
  {
    title: "Priority Support",
    description: "Faster response times via WhatsApp or Messenger.",
  },
];

// --- Pack icons (assets in /public) ---
function PackIconImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-14 w-14 shrink-0 object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

// --- Card Components ---
function CorePackCard({ title, slogan, features, icon }) {
  return (
    <div className="rounded-[2rem] bg-[#052a83] p-3.5 shadow-sm flex flex-col h-full border border-white/10 transition-transform duration-300 hover:-translate-y-1">
      {/* Header Area: Fixed min-height ensures the blue section matches exactly */}
      <div className="px-4 py-5 md:px-5 md:py-6 text-white flex items-start gap-3 min-h-[120px]">
        <div className="shrink-0 mt-1.5">{icon}</div>
        <div className="min-w-0 flex-1 flex flex-col justify-center self-stretch">
          <h3 className="text-xl font-bold md:text-2xl tracking-tight leading-tight uppercase">
            {title}
          </h3>
          <p className="mt-1 text-[13px] text-white/80 md:text-sm leading-snug">
            {slogan}
          </p>
        </div>
      </div>

      {/* White Body: flex-1 forces this box to grow and match the neighboring card's height */}
      <div className="bg-white rounded-[1.6rem] p-5 md:p-7 flex-1 flex flex-col">
        <ul className="space-y-5">
          {features.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#052a83] text-white">
                <Check className="h-3 w-3" strokeWidth={4} />
              </span>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 leading-tight">
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-0.5 text-[12px] md:text-[13px] text-slate-500 font-medium leading-normal">
                    {item.description}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MaintenancePackCard({ title, slogan, features, icon }) {
  return (
    <div className="rounded-[2rem] bg-brand p-3.5 shadow-lg flex flex-col h-full border border-white/10 transition-transform duration-300 hover:-translate-y-1">
      {/* Header Area: Matches Core min-height for horizontal alignment */}
      <div className="px-4 py-5 md:px-5 md:py-6 text-white flex items-start gap-3 min-h-[120px]">
        <div className="mt-1.5 shrink-0">{icon}</div>
        <div className="min-w-0 flex-1 flex flex-col justify-center self-stretch">
          <h3 className="text-xl font-bold md:text-2xl tracking-tight leading-tight uppercase">
            {title}
          </h3>
          <p className="mt-1 text-[13px] text-white/80 md:text-sm leading-snug">
            {slogan}
          </p>
        </div>
      </div>

      {/* White Body: Stretches to fill vertical space */}
      <div className="bg-white rounded-[1.6rem] p-5 md:p-7 flex-1 flex flex-col">
        <ul className="space-y-5 text-left">
          {features.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Check className="h-3 w-3" strokeWidth={4} />
              </span>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 leading-tight">
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-0.5 text-[12px] md:text-[13px] text-slate-500 font-medium leading-normal">
                    {item.description}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CoreServicesSection() {
  const [mode, setMode] = useState("core");
  const isCore = mode === "core";

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        {/* Switch at top */}
        <div className="mb-10 flex justify-center">
          <div className="relative flex h-[54px] w-[320px] items-center rounded-full bg-white p-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-slate-200">
            <motion.div
              className={clsx(
                "absolute h-[42px] w-[150px] rounded-full shadow-md",
                isCore
                  ? "bg-gradient-to-b from-[#1e4ed8] to-[#052a83]"
                  : "bg-gradient-to-b from-[#fb923c] to-[#ea580c]",
              )}
              initial={false}
              animate={{ x: isCore ? 0 : 154 }}
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
            />
            <button
              onClick={() => setMode("core")}
              className={clsx(
                "relative z-10 flex h-full w-1/2 items-center justify-center text-sm font-bold transition-colors duration-300",
                isCore ? "text-white" : "text-slate-900",
              )}
            >
              Core
            </button>
            <button
              onClick={() => setMode("maintenance")}
              className={clsx(
                "relative z-10 flex h-full w-1/2 items-center justify-center text-sm font-bold transition-colors duration-300",
                !isCore ? "text-white" : "text-slate-900",
              )}
            >
              Maintenance
            </button>
          </div>
        </div>

        {/* Content Wrapper for Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            // Content slides in from the side it's moving towards
            initial={{ opacity: 0, x: isCore ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            // Content slides out in the direction of the switch
            exit={{ opacity: 0, x: isCore ? 50 : -50 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1], // A professional "cubic-bezier" ease
            }}
          >
            {/* Header Section */}
            <div className="mb-10">
              {isCore ? (
                <div className="flex items-start gap-2 justify-start">
                  <span className="h-5 w-5 shrink-0 rounded-full bg-[#01257F] mt-0.5" />
                  <div className="text-left">
                    <p className="font-[Inter] text-s tracking-[0.18em] text-black uppercase">
                      2 CORE SERVICES
                    </p>
                    <h2 className="mt-2 text-2xl font-[Epilogue] font-semibold tracking-tight text-black md:text-3xl">
                      <p>Design, Build, Scale</p>
                      <p>Built Specifically for You.</p>
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="w-full text-right">
                  <div className="font-[Inter] flex items-center gap-2 justify-end w-full">
                    <p className="text-s tracking-[0.18em] text-black uppercase">
                      2 MAINTENANCE SERVICES
                    </p>
                    <span className="h-5 w-5 shrink-0 rounded-full bg-brand" />
                  </div>
                  <h2 className="mt-2 text-2xl font-[Epilogue] font-semibold tracking-tight text-black md:text-3xl">
                    <p>Secure, Manage, Evolve</p>
                    <p>Your Site, Handled.</p>
                  </h2>
                </div>
              )}
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {isCore ? (
                <>
                  <CorePackCard
                    title="ORIGIN PACK"
                    slogan="For businesses staying visible, professional, and secure."
                    features={originFeatures}
                    icon={<PackIconImage src="/Origin.png" alt="Origin Pack" />}
                  />
                  <CorePackCard
                    title="COMPASS PACK"
                    slogan="For brands ready to engage deeper and manage their own digital evolution."
                    features={compassFeatures}
                    icon={
                      <PackIconImage
                        src="/Compass%20Pack.png"
                        alt="Compass Pack"
                      />
                    }
                  />
                </>
              ) : (
                <>
                  <MaintenancePackCard
                    title="THE ANCHOR"
                    slogan="For businesses staying online and secure."
                    features={anchorFeatures}
                    icon={<PackIconImage src="/Anchor.png" alt="The Anchor" />}
                  />
                  <MaintenancePackCard
                    title="THE NAVIGATOR"
                    slogan="For brands needing updates and lead management."
                    features={navigatorFeatures}
                    icon={
                      <PackIconImage src="/Navigator.png" alt="The Navigator" />
                    }
                  />
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
