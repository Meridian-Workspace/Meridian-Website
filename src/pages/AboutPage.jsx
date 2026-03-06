import Container from "../components/ui/Container";
import HeaderSection from "../sections/aboutus/HeaderSection";
import MissionVisionSection from "../sections/aboutus/MissionVIsionSection";
import PurposeSection from "../sections/aboutus/PurposeSection";
import StandSection from "../sections/aboutus/StandSection";
import TeamSection from "../sections/aboutus/TeamSection";

export default function AboutPage() {
  return (
    <div>
      <HeaderSection />
      <PurposeSection />
      <MissionVisionSection />
      <StandSection />
      <TeamSection />
    </div>

  );
}
