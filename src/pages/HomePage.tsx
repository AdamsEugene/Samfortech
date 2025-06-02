import { CTASection } from "../components/CTASection";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { HeroSection } from "../components/HeroSection";
import { ServicesOverview } from "../components/ServicesOverview";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

export const HomePage = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <StatsSection />
      <ServicesOverview setCurrentPage={setCurrentPage} />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection setCurrentPage={setCurrentPage} />
    </>
  );
};
