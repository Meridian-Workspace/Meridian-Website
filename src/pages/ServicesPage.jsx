import ServicesHeroSection from "../sections/services/ServicesHeroSection";
import CoreServicesSection from "../sections/services/CoreServicesSection";
import SimpleStepsSection from "../sections/services/SimpleStepsSection";
import CompareServicesSection from "../sections/services/CompareServicesSection";

export default function ServicesPage() {
  return (
    <div>
      <ServicesHeroSection />
      <CoreServicesSection />
      <SimpleStepsSection />
      <CompareServicesSection />
    </div>
  );
}
