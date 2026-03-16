import Container from "../../components/ui/Container";
import { Check, X } from "lucide-react";

const features = [
  { name: "Responsive Design", origin: true, compass: true },
  { name: "Custom UI Design", origin: true, compass: true },
  { name: "Brand Color & Typography System", origin: true, compass: true },
  { name: "Basic Animations / Microinteractions", origin: true, compass: true },
  { name: "Contact Form (Email Only)", origin: true, compass: true },
  { name: "On-Page SEO Setup", origin: true, compass: true },
  { name: "Social Media Integration", origin: true, compass: true },
  { name: "Google Maps Embed", origin: true, compass: true },
  { name: "Image Optimization", origin: true, compass: true },
  { name: "Basic Performance Optimization", origin: true, compass: true },
  { name: "Domain & Hosting Setup", origin: true, compass: true },
  { name: "SSL Setup", origin: true, compass: true },
  { name: "Content Management System (CMS)", origin: false, compass: true },
  { name: "Blog", origin: false, compass: true },
  { name: "Editable Content", origin: false, compass: true },
  { name: "Database-Stored Leads", origin: false, compass: true },
  { name: "Booking System", origin: false, compass: true },
  { name: "Newsletter Integration", origin: false, compass: true },
  { name: "Basic Analytics Dashboard", origin: false, compass: true },
  { name: "User Login", origin: false, compass: true },
  { name: "Role-Based Access", origin: false, compass: true },
  {
    name: "API Integration",
    origin: false,
    compass: "limited",
  },
  {
    name: "Payment Gateway",
    origin: false,
    compass: "optional",
  },
];

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
        <X className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="text-sm font-medium text-brand">{value}</span>
  );
}

export default function CompareServicesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-[#052a83] md:text-4xl">
          Compare our services
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Find the right fit for your vision. Compare our tiers to see how we
          deliver premium execution at every level.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border-2 border-[#052a83]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#052a83] text-white">
                <th className="px-4 py-4 font-semibold md:px-6">Feature</th>
                <th className="px-4 py-4 font-semibold md:px-6">Origin</th>
                <th className="px-4 py-4 font-semibold md:px-6">Compass</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.name}
                  className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}
                >
                  <td className="border-t border-slate-200 px-4 py-3 text-slate-800 md:px-6">
                    {row.name}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3 md:px-6">
                    <Cell value={row.origin} />
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3 md:px-6">
                    <Cell value={row.compass} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
