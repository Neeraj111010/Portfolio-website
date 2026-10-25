import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollSection from "@/components/ScrollSection";
import ScrollProgress from "@/components/ScrollProgress";
import { useCardSpotlight } from "@/hooks/use-card-spotlight";

const Index = () => {
  useCardSpotlight();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <ParticleField />
      <Navbar />
      <HeroSection />
      <ScrollSection><AboutSection /></ScrollSection>
      <ScrollSection><SkillsSection /></ScrollSection>
      <ScrollSection><ExperienceSection /></ScrollSection>
      <ScrollSection><ProjectsSection /></ScrollSection>
      <ScrollSection><ContactSection /></ScrollSection>
      <Footer />
    </div>
  );
};

export default Index;