import UmbrellaNavbar from "@/components/umbrella/Navbar";
import UmbrellaHero from "@/components/umbrella/Hero";
import TelemetryStrip from "@/components/umbrella/TelemetryStrip";
import CustomEngineering from "@/components/umbrella/CustomEngineering";
import FlagshipBento from "@/components/umbrella/FlagshipBento";
import CoreCapabilities from "@/components/umbrella/CoreCapabilities";
import IndustrialCTA from "@/components/umbrella/IndustrialCTA";
import TechnicalFooter from "@/components/umbrella/TechnicalFooter";

export default function Home() {
  return (
    <>
      <UmbrellaNavbar />
      <main className="flex-1">
        <UmbrellaHero />
        <TelemetryStrip />
        <CustomEngineering />
        <FlagshipBento />
        <CoreCapabilities />
        <IndustrialCTA />
      </main>
      <TechnicalFooter />
    </>
  );
}
