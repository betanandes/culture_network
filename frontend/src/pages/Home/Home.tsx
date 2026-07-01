import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <ProgramsSection />

      <TeamSection />

      <CollectionSection />

      <CTASection />
    </>
  );
}
