import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { TrainingPage } from "./pages/TrainingPage";
import { HomePage } from "./pages/HomePage";

// Main App Component
const SamfortechWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "gallery" && <GalleryPage />}
        {currentPage === "training" && <TrainingPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Scroll to Top Button */}
      <ScrollToTop scrollY={scrollY} />
    </div>
  );
};

export default SamfortechWebsite;
