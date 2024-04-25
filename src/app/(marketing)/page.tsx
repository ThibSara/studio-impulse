import { Design } from "@/components/home/design";
import { Discover } from "@/components/home/discover";
import { FounderMessage } from "@/components/home/founder-message";
import { HeroSection } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { NavBar } from "@/components/home/nav-bar";
import { Pricing } from "@/components/home/pricing";
import { Resources } from "@/components/home/resources";


export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <NavBar />
      <Discover />
      <Design />
      <Resources />
      <Pricing />
      <FounderMessage />
    </div>
  );
}
