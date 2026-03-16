import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { Check } from "lucide-react";
import clsx from "clsx";

// --- Core Features ---
const originFeatures = [
  { title: "Premium Pages", description: "Includes a custom-designed Home and Services page." },
  { title: "Fully Responsive & Custom UI", description: "Optimized for all devices with a brand-consistent color and typography system." },
  { title: "Essential Visibility", description: "Includes On-Page SEO setup, Google Maps embed, and Social Media integration." },
  { title: "Performance Ready", description: "Includes image and basic performance optimization plus SSL setup for security." },
  { title: "Engagement", description: "A standard 'Email Only' contact form to receive inquiries directly." },
];

const compassFeatures = [
  { title: "Premium Pages", description: "Expanded layout (e.g., dedicated FAQ or Testimonial page)." },
  { title: "Dynamic Content (CRUD)", description: "Includes a CMS and a Blog section where you can add or edit content yourself." },
  { title: "Advanced Lead Gen", description: "Inquiries are not just emailed; they are saved in a Lead Database so you never lose a potential client." },
  { title: "Interaction Tools", description: "Features a Basic Booking System, Newsletter integration, and basic Analytics to track visitors." },
  { title: "Private Access", description: "Includes User Login and Role-Based Access (allowing specific people to view or edit certain parts of the site)." },
  { title: "Technical Edge", description: "Limited API integration and optional Payment Gateway support." },
];

// --- Maintenance Features ---
const anchorFeatures = [
  { title: "Uptime Monitoring", description: "We check 24/7 to make sure your site never goes down." },
  { title: "Monthly Security Scan", description: 'We run a "health check" to block hackers and malware.' },
  { title: "Monthly Cloud Backup", description: "We save a copy of your entire site off-site. If something breaks, we restore it for free." },
  { title: "Software Updates", description: "We handle the technical updates (WordPress/Plugins) so you don't have to." },
  { title: "Email Support", description: "Got a quick question? Send us an email anytime." },
];

const navigatorFeatures = [
  { title: 'Everything Included in "The Anchor"', description: "" },
  { title: "Weekly Backups", description: 'More frequent "snapshots" of your site to protect your database and leads.' },
  { title: "Content Updates (1 Hour/Mo)", description: "Want to change a price, swap a photo, or add a blog post? We do it for you." },
  { title: "Database Cleanup", description: 'We optimize your "Lead Database" and CRUD system to keep it fast.' },
  { title: "Monthly Performance Report", description: "A simple summary of how many people visited your site and sent inquiries." },
  { title: "Priority Support", description: "Faster response times via WhatsApp or Messenger." },
];

// --- Icons ---
function PackIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" />
    </svg>
  );
}

function AnchorIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><circle cx="12" cy="5" r="3" />
    </svg>
  );
}

function NavigatorIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="m12 6 3 9-3 3-3-9 3-3z" />
    </svg>
  );
}

// --- Card Components ---
function CorePackCard({ title, slogan, features, icon }) {
  return (
    <div className="rounded-2xl border-2 border-[#052a83] overflow-hidden bg-white shadow-sm">
      <div className="bg-[#052a83] px-6 py-5 md:px-8 md:py-6 text-white">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-white/90 md:text-base">{slogan}</p>
      </div>
      <div className="border-t border-slate-200 bg-white p-6 md:p-8">
        <ul className="space-y-4">
          {features.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#052a83] text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <div>
                <span className="font-semibold text-slate-900">{item.title}:</span>{" "}
                {item.description && <span className="text-slate-600">{item.description}</span>}
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
    <div className="overflow-hidden rounded-3xl border-2 border-brand bg-white shadow-lg">
      <div className="bg-brand px-6 py-5 md:px-8 md:py-6 text-white">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-bold uppercase md:text-2xl">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-white/90 md:text-base">{slogan}</p>
      </div>
      <div className="border-t-2 border-brand bg-white p-6 md:p-8">
        <ul className="space-y-4 text-left">
          {features.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <div>
                <span className="font-semibold text-slate-900">{item.title}</span>
                {item.description && <>: <span className="text-slate-600">{item.description}</span></>}
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
                  : "bg-gradient-to-b from-[#fb923c] to-[#ea580c]"
              )}
              initial={false}
              animate={{ x: isCore ? 0 : 154 }}
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
            />
            <button
              onClick={() => setMode("core")}
              className={clsx(
                "relative z-10 flex h-full w-1/2 items-center justify-center text-sm font-bold transition-colors duration-300",
                isCore ? "text-white" : "text-slate-900"
              )}
            >
              Core
            </button>
            <button
              onClick={() => setMode("maintenance")}
              className={clsx(
                "relative z-10 flex h-full w-1/2 items-center justify-center text-sm font-bold transition-colors duration-300",
                !isCore ? "text-white" : "text-slate-900"
              )}
            >
              Maintenance
            </button>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          {isCore ? (
            <div className="flex items-start gap-2 justify-start">
              <span className="h-2 w-2 shrink-0 rounded-full mt-1.5 bg-[#052a83]" />
              <div className="text-left">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">2 CORE SERVICES</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#052a83] md:text-3xl">
                  Design, Build, Scale Built Specifically for You.
                </h2>
              </div>
            </div>
          ) : (
            <div className="w-full text-right">
              <div className="flex items-center gap-2 justify-end w-full">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">2 MAINTENANCE SERVICES</p>
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 md:text-3xl">
                Secure, Manage, Evolve Your Site, Handled.
              </h2>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {isCore ? (
            <>
              <CorePackCard title="ORIGIN PACK" slogan="For businesses staying visible, professional, and secure." features={originFeatures} icon={<PackIcon className="h-8 w-8 text-white" />} />
              <CorePackCard title="COMPASS PACK" slogan="For brands ready to engage deeper and manage their own digital evolution." features={compassFeatures} icon={<PackIcon className="h-8 w-8 text-white" />} />
            </>
          ) : (
            <>
              <MaintenancePackCard title="THE ANCHOR" slogan="For businesses staying online and secure." features={anchorFeatures} icon={<AnchorIcon className="h-8 w-8 text-white" />} />
              <MaintenancePackCard title="THE NAVIGATOR" slogan="For brands needing updates and lead management." features={navigatorFeatures} icon={<NavigatorIcon className="h-8 w-8 text-white" />} />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}