import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../assets/images/hero1.jpeg";
import hero2 from "../assets/images/hero2.jpeg";
import hero3 from "../assets/images/hero3.jpeg";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "Advanced CCTV Solutions",
      subtitle: "24/7 Monitoring & Security",
      description:
        "Professional CCTV installation with remote monitoring capabilities for complete peace of mind.",
      image: hero1,
    },
    {
      title: "Smart Gate Automation",
      subtitle: "Convenient Access Control",
      description:
        "Automated gate systems with remote control and safety features for modern security.",
      image: hero2,
    },
    {
      title: "Electric Fencing Systems",
      subtitle: "Perimeter Protection",
      description:
        "High-voltage electric fencing solutions for maximum property security and deterrence.",
      image: hero3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Slide Image */}
      <img
        src={heroSlides[currentSlide].image}
        alt={heroSlides[currentSlide].title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-700"
        style={{ opacity: 0.7 }}
      />
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/70 z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Your Trusted Partner for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              IT Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View Services
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                title="Slide Indicator"
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-cyan-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
