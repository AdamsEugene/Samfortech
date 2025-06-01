/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  Shield,
  Camera,
  Wifi,
  Phone,
  Zap,
  Users,
  Award,
  MapPin,
  Mail,
  ChevronRight,
  Play,
  Star,
  ArrowUp,
  Menu,
  X,
  CheckCircle,
  TrendingUp,
  Clock,
  Eye,
} from "lucide-react";

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

// Header Component
const Header = ({
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) => {
  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "training", label: "Training" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SAMFORTECH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? "text-cyan-400 bg-white/10"
                    : "text-white hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-800/95 backdrop-blur-lg border-b border-white/20">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-cyan-400 bg-white/10"
                      : "text-white hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Home Page Component
const HomePage = ({
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

// Hero Section Component
const HeroSection = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Advanced CCTV Solutions",
      subtitle: "24/7 Monitoring & Security",
      description:
        "Professional CCTV installation with remote monitoring capabilities for complete peace of mind.",
      image: "security-camera-bg",
    },
    {
      title: "Smart Gate Automation",
      subtitle: "Convenient Access Control",
      description:
        "Automated gate systems with remote control and safety features for modern security.",
      image: "gate-automation-bg",
    },
    {
      title: "Electric Fencing Systems",
      subtitle: "Perimeter Protection",
      description:
        "High-voltage electric fencing solutions for maximum property security and deterrence.",
      image: "electric-fence-bg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => setCurrentPage("services")}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View Services
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
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

// Stats Section Component
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    cameras: 0,
    projects: 0,
    clients: 0,
    years: 0,
  });

  const stats = [
    { label: "CCTV Cameras Installed", value: 140, icon: Camera, suffix: "+" },
    { label: "Automation Projects", value: 100, icon: Shield, suffix: "+" },
    { label: "Happy Clients", value: 85, icon: Users, suffix: "+" },
    { label: "Years Experience", value: 8, icon: Award, suffix: "" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCounts((prev) => ({
          cameras: prev.cameras < 140 ? prev.cameras + 2 : 140,
          projects: prev.projects < 100 ? prev.projects + 1 : 100,
          clients: prev.clients < 85 ? prev.clients + 1 : 85,
          years: prev.years < 8 ? prev.years + 1 : 8,
        }));
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-r from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-white mb-2">
                  {Object.values(counts)[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Overview Component
const ServicesOverview = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation",
      description:
        "Professional security camera systems with remote monitoring and high-definition recording.",
      features: ["HD Recording", "Remote Access", "24/7 Monitoring"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Gate Automation",
      description:
        "Smart automated gate systems with remote control and advanced safety features.",
      features: ["Remote Control", "Safety Sensors", "Backup Power"],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Zap,
      title: "Electric Fencing",
      description:
        "High-voltage perimeter security systems for maximum property protection.",
      features: ["High Voltage", "Alarm System", "Weather Resistant"],
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: Wifi,
      title: "Networking Solutions",
      description:
        "Complete IT infrastructure setup including LAN, WAN, and Wi-Fi solutions.",
      features: ["Fast Setup", "Secure Network", "Scalable"],
      gradient: "from-green-500 to-teal-400",
    },
    {
      icon: Phone,
      title: "IP Telephone Systems",
      description:
        "Modern VoIP communication systems with advanced call management features.",
      features: ["VoIP Technology", "Call Management", "Scalable System"],
      gradient: "from-indigo-500 to-purple-400",
    },
    {
      icon: Eye,
      title: "Video Intercoms",
      description:
        "Two-way communication systems with video monitoring for enhanced security.",
      features: ["Two-way Audio", "Video Monitoring", "Door Control"],
      gradient: "from-pink-500 to-rose-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions and security systems tailored to meet
            your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage("services")}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-slate-700 hover:border-cyan-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}
      ></div>

      <div className="relative z-10">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <service.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700">
          <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
            <span className="text-sm font-medium">Learn More</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Featured Projects Component
const FeaturedProjects = () => {
  const projects = [
    {
      title: "Corporate Office Security",
      category: "CCTV Installation",
      image: "office-security",
      description: "32 camera CCTV system with central monitoring",
      stats: { cameras: 32, coverage: "100%", type: "IP Cameras" },
    },
    {
      title: "Residential Gate Automation",
      category: "Gate Automation",
      image: "gate-automation",
      description: "Smart sliding gate with mobile app control",
      stats: { type: "Sliding Gate", control: "Mobile App", backup: "Battery" },
    },
    {
      title: "Industrial Electric Fencing",
      category: "Electric Fencing",
      image: "electric-fence",
      description: "500m perimeter protection with alarm system",
      stats: { length: "500m", voltage: "8000V", zones: "4 Zones" },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest installations and see the quality of our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="group bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-700 hover:border-cyan-500/50">
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="w-16 h-16 text-white/60 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="grid grid-cols-3 gap-2 text-sm">
          {Object.entries(project.stats).map(([key, value], idx) => (
            <div key={idx} className="text-center">
              <div className="text-cyan-400 font-bold">{value as string}</div>
              <div className="text-gray-400 capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Business Owner",
      company: "Asante Trading Ltd",
      rating: 5,
      text: "Samfortech installed our complete CCTV system. Professional work, excellent quality, and great customer service. Highly recommended!",
      avatar: "KA",
    },
    {
      name: "Dr. Ama Osei",
      role: "Medical Director",
      company: "Osei Medical Center",
      rating: 5,
      text: "The electric fencing and gate automation has greatly improved our security. The team was professional and completed the work on time.",
      avatar: "AO",
    },
    {
      name: "Michael Oppong",
      role: "IT Manager",
      company: "Tech Solutions Ghana",
      rating: 5,
      text: "Outstanding networking setup for our office. Fast, reliable, and secure. The team provided excellent training for our staff.",
      avatar: "MO",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 border border-slate-600">
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-cyan-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Secure Your Property?
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
          Get a free consultation and quote for your security and IT needs. Our
          expert team is ready to help you choose the best solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setCurrentPage("contact")}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Free Quote
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            Call: +233 XX XXX XXXX
          </button>
        </div>
      </div>
    </section>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Samfortech
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for comprehensive IT solutions and security
              systems in Ghana
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to provide cutting-edge security and IT
                  solutions, Samfortech has grown to become Ghana's leading
                  provider of professional installation services.
                </p>
                <p>
                  With over 8 years of experience, we have successfully
                  completed more than 100 automation projects and installed over
                  140 CCTV cameras across Ghana, serving both residential and
                  commercial clients.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer
                  satisfaction has earned us the trust of businesses and
                  homeowners throughout the region.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Expert installation and maintenance",
                  "24/7 customer support",
                  "Certified technicians",
                  "Latest technology solutions",
                  "Competitive pricing",
                  "Local expertise in Ghana",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide innovative, reliable, and affordable security and IT
                solutions that protect and empower our clients while
                contributing to Ghana's technological advancement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading provider of integrated security and IT
                solutions in West Africa, known for excellence, innovation, and
                exceptional customer service.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Samuel Forson", role: "Founder & CEO", avatar: "SF" },
                {
                  name: "Emmanuel Tech",
                  role: "Lead Technician",
                  avatar: "ET",
                },
                {
                  name: "Grace Mensah",
                  role: "Customer Relations",
                  avatar: "GM",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Services Page Component (Placeholder)
// const ServicesPage = () => {
//   return (
//     <div className="pt-20 min-h-screen bg-slate-900 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-white mb-4">Services Page</h1>
//         <p className="text-gray-300">Detailed services page coming soon...</p>
//       </div>
//     </div>
//   );
// };

// Projects Page Component (Placeholder)
// Projects Page Component
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    { id: "all", label: "All Projects", count: 24 },
    { id: "cctv", label: "CCTV Systems", count: 8 },
    { id: "automation", label: "Gate Automation", count: 6 },
    { id: "fencing", label: "Electric Fencing", count: 5 },
    { id: "networking", label: "Networking", count: 3 },
    { id: "intercom", label: "Video Intercoms", count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: "Corporate Headquarters Security Overhaul",
      category: "cctv",
      client: "Ghana Commercial Bank",
      location: "Accra",
      duration: "3 weeks",
      value: "GHS 45,000",
      description:
        "Complete CCTV system installation with 32 high-definition cameras, central monitoring station, and mobile app integration.",
      image: "corporate-cctv",
      features: [
        "32 HD Cameras",
        "Night Vision",
        "Mobile Monitoring",
        "Cloud Storage",
      ],
      beforeAfter: true,
      testimonial: {
        text: "Outstanding professional service. The system has greatly improved our security posture.",
        author: "John Mensah, Security Manager",
      },
      timeline: [
        "Site survey and assessment",
        "System design and planning",
        "Equipment procurement",
        "Installation and configuration",
        "Testing and handover",
        "Staff training",
      ],
    },
    {
      id: 2,
      title: "Luxury Residential Gate Automation",
      category: "automation",
      client: "Private Residence",
      location: "East Legon",
      duration: "1 week",
      value: "GHS 15,000",
      description:
        "Smart sliding gate system with biometric access control, mobile app integration, and backup power supply.",
      image: "residential-gate",
      features: [
        "Biometric Access",
        "Mobile Control",
        "Backup Power",
        "Safety Sensors",
      ],
      beforeAfter: true,
      testimonial: {
        text: "The convenience and security this system provides is exceptional. Highly recommended!",
        author: "Dr. Ama Osei, Homeowner",
      },
      timeline: [
        "Initial consultation",
        "Custom design",
        "Permit acquisition",
        "Installation",
        "System integration",
        "User training",
      ],
    },
    {
      id: 3,
      title: "Industrial Perimeter Security",
      category: "fencing",
      client: "Tema Oil Refinery",
      location: "Tema",
      duration: "4 weeks",
      value: "GHS 80,000",
      description:
        "2.5km electric fencing system with alarm integration, CCTV monitoring, and 24/7 security response.",
      image: "industrial-fence",
      features: [
        "2.5km Coverage",
        "8000V System",
        "Alarm Integration",
        "24/7 Monitoring",
      ],
      beforeAfter: true,
      testimonial: {
        text: "Professional installation that exceeded our expectations. Zero security breaches since installation.",
        author: "Emmanuel Asante, Facility Manager",
      },
      timeline: [
        "Security assessment",
        "Regulatory approvals",
        "Perimeter mapping",
        "Installation phases",
        "System testing",
        "Security integration",
      ],
    },
    {
      id: 4,
      title: "Medical Center CCTV & Access Control",
      category: "cctv",
      client: "Ridge Hospital",
      location: "Accra",
      duration: "2 weeks",
      value: "GHS 25,000",
      description:
        "Comprehensive security system with 18 cameras, access control for sensitive areas, and integration with hospital management system.",
      image: "medical-cctv",
      features: [
        "18 IP Cameras",
        "Access Control",
        "System Integration",
        "Privacy Compliance",
      ],
      beforeAfter: false,
      testimonial: {
        text: "The team understood our unique healthcare security requirements perfectly.",
        author: "Dr. Grace Amponsah, Administrator",
      },
    },
    {
      id: 5,
      title: "Shopping Mall Network Infrastructure",
      category: "networking",
      client: "Accra City Mall",
      location: "Accra",
      duration: "2 weeks",
      value: "GHS 35,000",
      description:
        "Complete network infrastructure setup with fiber optic backbone, Wi-Fi coverage, and POS system integration.",
      image: "mall-network",
      features: [
        "Fiber Optic",
        "Mall-wide Wi-Fi",
        "POS Integration",
        "Scalable Design",
      ],
      beforeAfter: false,
      testimonial: {
        text: "Seamless internet connectivity throughout the mall. Customers and tenants are very satisfied.",
        author: "Michael Owusu, Mall Manager",
      },
    },
    {
      id: 6,
      title: "Residential Estate Security Package",
      category: "automation",
      client: "Trassaco Valley",
      location: "East Legon",
      duration: "6 weeks",
      value: "GHS 120,000",
      description:
        "Complete security solution for 50-home estate including automated gates, CCTV, and intercom systems.",
      image: "estate-security",
      features: [
        "50 Automated Gates",
        "Estate CCTV",
        "Intercom Network",
        "Central Control",
      ],
      beforeAfter: true,
      testimonial: {
        text: "Transformed our estate security. Property values have increased significantly.",
        author: "Robert Nkrumah, Estate Chairman",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our portfolio of successful installations across Ghana.
              From small residential projects to large corporate
              implementations.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400">140+</div>
                <div className="text-sm text-gray-300">CCTV Cameras</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-sm text-gray-300">Automation Projects</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400">85+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400">8</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === category.id
                      ? "bg-white/20"
                      : "bg-slate-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCardP
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
                projectCategories={projectCategories}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

// Enhanced Project Card Component
const ProjectCardP = ({
  project,
  index,
  onClick,
  projectCategories,
}: {
  project: any;
  index: number;
  onClick: () => void;
  projectCategories: any;
}) => {
  return (
    <div
      className="group bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-700 hover:border-cyan-500/50 cursor-pointer"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">
            {projectCategories.find((cat: any) => cat.id === project.category)
              ?.label || "Project"}
          </span>
        </div>

        {/* Before/After Badge */}
        {project.beforeAfter && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2 py-1 bg-purple-500 text-white text-xs font-medium rounded">
              B/A
            </span>
          </div>
        )}

        {/* Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Eye className="w-16 h-16 text-white/60 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 mx-auto mb-2" />
            <div className="text-white/60 text-sm">View Project</div>
          </div>
        </div>

        {/* Project Value */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="text-cyan-400 font-bold text-sm">
              {project.value}
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{project.location}</span>
            <span className="text-gray-500">•</span>
            <span>{project.duration}</span>
          </div>
          <div className="text-sm text-gray-400">Client: {project.client}</div>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.slice(0, 3).map((feature: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded"
            >
              {feature}
            </span>
          ))}
          {project.features.length > 3 && (
            <span className="px-2 py-1 bg-slate-700 text-xs text-cyan-400 rounded">
              +{project.features.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform text-sm font-medium">
          <span>View Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "features", label: "Features", icon: CheckCircle },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "testimonial", label: "Testimonial", icon: Star },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </span>
              <span>{project.duration}</span>
              <span className="text-cyan-400 font-medium">{project.value}</span>
            </div>
          </div>
          <button
            title="Close Modal"
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-cyan-400 border-b-2 border-cyan-400 bg-slate-700/50"
                  : "text-gray-400 hover:text-white hover:bg-slate-700/30"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Eye className="w-20 h-20 text-white/40 mx-auto mb-4" />
                  <div className="text-white/60">Project Image</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Project Value:</span>
                      <span className="text-cyan-400 font-medium">
                        {project.value}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "timeline" && project.timeline && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Project Timeline
              </h3>
              <div className="space-y-4">
                {project.timeline.map((phase: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 pb-8 border-l border-slate-700 pl-6 ml-4">
                      <p className="text-gray-300 capitalize">{phase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "testimonial" && project.testimonial && (
            <div className="text-center">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed">
                  "{project.testimonial.text}"
                </blockquote>

                <div className="text-center">
                  <div className="text-white font-bold text-lg mb-1">
                    {project.testimonial.author}
                  </div>
                  <div className="text-cyan-400">{project.client}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Gallery Page Component
const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Media", icon: Eye },
    { id: "cctv", label: "CCTV Systems", icon: Camera },
    { id: "gates", label: "Gate Automation", icon: Shield },
    { id: "fencing", label: "Electric Fencing", icon: Zap },
    { id: "networking", label: "Networking", icon: Wifi },
    { id: "training", label: "Training & Events", icon: Users },
    { id: "progress", label: "Work in Progress", icon: Clock },
  ];

  const galleryItems = [
    // CCTV Systems
    {
      id: 1,
      category: "cctv",
      type: "image",
      title: "Corporate Office CCTV Installation",
      description: "32-camera system with central monitoring station",
      location: "East Legon, Accra",
      specs: "4K Resolution, Night Vision, Remote Access",
      thumbnail: "cctv-office-1",
    },
    {
      id: 2,
      category: "cctv",
      type: "image",
      title: "Residential Security Setup",
      description: "16-camera perimeter monitoring system",
      location: "Airport Residential Area",
      specs: "HD Cameras, Motion Detection, Mobile App",
      thumbnail: "cctv-home-1",
    },
    {
      id: 3,
      category: "cctv",
      type: "video",
      title: "Hospital CCTV Network",
      description: "Multi-floor surveillance with access control",
      location: "Ridge Hospital",
      specs: "48 Cameras, Facial Recognition, Cloud Storage",
      thumbnail: "cctv-hospital-1",
    },
    {
      id: 4,
      category: "cctv",
      type: "image",
      title: "Shopping Mall Security",
      description: "Comprehensive retail surveillance system",
      location: "Accra Mall",
      specs: "64 Cameras, Analytics, POS Integration",
      thumbnail: "cctv-mall-1",
    },

    // Gate Automation
    {
      id: 5,
      category: "gates",
      type: "image",
      title: "Smart Sliding Gate Installation",
      description: "Automated sliding gate with smartphone control",
      location: "Tema Community 25",
      specs: "Remote Control, Safety Sensors, Battery Backup",
      thumbnail: "gate-sliding-1",
    },
    {
      id: 6,
      category: "gates",
      type: "video",
      title: "Swing Gate Automation",
      description: "Dual swing gates with intercom integration",
      location: "East Airport",
      specs: "Dual Motors, Video Intercom, Access Cards",
      thumbnail: "gate-swing-1",
    },
    {
      id: 7,
      category: "gates",
      type: "image",
      title: "Industrial Gate System",
      description: "Heavy-duty gate for warehouse facility",
      location: "Spintex Industrial Area",
      specs: "High Torque Motor, Loop Detectors, Barrier",
      thumbnail: "gate-industrial-1",
    },

    // Electric Fencing
    {
      id: 8,
      category: "fencing",
      type: "image",
      title: "Residential Electric Fence",
      description: "200m perimeter electric fencing system",
      location: "Adenta Housing Estate",
      specs: "8000V, 6 Zones, Alarm Integration",
      thumbnail: "fence-residential-1",
    },
    {
      id: 9,
      category: "fencing",
      type: "image",
      title: "Commercial Property Fencing",
      description: "High-security electric fence installation",
      location: "Osu Business District",
      specs: "10000V, Weather Resistant, Remote Monitoring",
      thumbnail: "fence-commercial-1",
    },
    {
      id: 10,
      category: "fencing",
      type: "video",
      title: "School Security Fence",
      description: "Safe electric fencing for educational facility",
      location: "Achimota School",
      specs: "Child-Safe Design, Multiple Zones, Backup Power",
      thumbnail: "fence-school-1",
    },

    // Networking
    {
      id: 11,
      category: "networking",
      type: "image",
      title: "Office Network Infrastructure",
      description: "Complete LAN setup with Wi-Fi coverage",
      location: "Osu Oxford Street",
      specs: "Gigabit Network, Enterprise Wi-Fi, Server Room",
      thumbnail: "network-office-1",
    },
    {
      id: 12,
      category: "networking",
      type: "image",
      title: "Hotel Wi-Fi Installation",
      description: "Guest network with management portal",
      location: "Airport City Hotel",
      specs: "Guest Portal, Bandwidth Control, 24/7 Monitoring",
      thumbnail: "network-hotel-1",
    },

    // Training & Events
    {
      id: 13,
      category: "training",
      type: "image",
      title: "CCTV Installation Training",
      description: "Hands-on training session for new technicians",
      location: "Samfortech Training Center",
      specs: "Certification Program, Practical Skills, Theory",
      thumbnail: "training-cctv-1",
    },
    {
      id: 14,
      category: "training",
      type: "image",
      title: "Industry Conference 2024",
      description: "Security technology conference presentation",
      location: "Accra International Conference Centre",
      specs: "Latest Trends, Product Demos, Networking",
      thumbnail: "conference-2024-1",
    },
    {
      id: 15,
      category: "training",
      type: "video",
      title: "Apprenticeship Graduation",
      description: "Graduation ceremony for technical apprentices",
      location: "Samfortech Headquarters",
      specs: "Skills Assessment, Certification, Career Placement",
      thumbnail: "graduation-2024-1",
    },

    // Work in Progress
    {
      id: 16,
      category: "progress",
      type: "image",
      title: "Mall CCTV Installation - Day 1",
      description: "Beginning of large-scale CCTV project",
      location: "West Hills Mall",
      specs: "Planning Phase, Cable Routing, Camera Positioning",
      thumbnail: "progress-mall-1",
    },
    {
      id: 17,
      category: "progress",
      type: "image",
      title: "Electric Fence Installation",
      description: "Team installing perimeter security system",
      location: "Private Residence, Trasacco",
      specs: "Post Installation, Wire Tensioning, Testing",
      thumbnail: "progress-fence-1",
    },
    {
      id: 18,
      category: "progress",
      type: "video",
      title: "Gate Automation Setup",
      description: "Installation process of automated gate system",
      location: "Residential Complex, Dzorwulu",
      specs: "Motor Installation, Control Panel Setup, Testing",
      thumbnail: "progress-gate-1",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: any) => {
    setSelectedImage(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(
      (item: any) => item.id === selectedImage?.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(
      (item: any) => item.id === selectedImage?.id
    );
    const prevIndex =
      currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Media{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our completed projects, work in progress, and
              behind-the-scenes moments
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">140+</div>
              <div className="text-gray-300">CCTV Cameras</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Gate Systems</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Electric Fences</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <Lightbox
          item={selectedImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

// Gallery Item Component
const GalleryItem = ({ item, onClick }: { item: any; onClick: () => void }) => {
  return (
    <div
      className="group relative bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-slate-700 hover:border-cyan-500/50"
      onClick={onClick}
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        {/* Media Type Indicator */}
        <div className="absolute top-3 left-3">
          {item.type === "video" ? (
            <div className="flex items-center space-x-1 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
              <Play className="w-3 h-3" />
              <span>Video</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
              <Camera className="w-3 h-3" />
              <span>Photo</span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-cyan-500 text-white text-xs font-medium rounded capitalize">
            {item.category}
          </span>
        </div>

        {/* Play Button for Videos */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {item.title}
        </h3>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <MapPin className="w-3 h-3" />
            <span>{item.location}</span>
          </div>

          <div className="text-xs text-cyan-400 font-medium">{item.specs}</div>
        </div>
      </div>
    </div>
  );
};

// Lightbox Component
const Lightbox = ({
  item,
  onClose,
  onNext,
  onPrev,
}: {
  item: any;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        title="Close Lightbox"
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        title="Previous Image"
        onClick={onPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 rotate-180" />
      </button>

      <button
        title="Next Image"
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="max-w-6xl w-full max-h-full flex flex-col lg:flex-row gap-6">
        {/* Media */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-96 lg:h-[600px] bg-slate-800 rounded-lg overflow-hidden">
            {item.type === "video" ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-12 h-12 text-white ml-2" />
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600"></div>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:w-80 bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700">
          <div className="space-y-4">
            <div>
              <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full capitalize">
                {item.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white">{item.title}</h2>

            <p className="text-gray-300">{item.description}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Location</span>
              </div>
              <p className="text-gray-300 ml-8">{item.location}</p>

              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Specifications</span>
              </div>
              <p className="text-gray-300 ml-8">{item.specs}</p>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Media Type</span>
              </div>
              <p className="text-gray-300 ml-8 capitalize">{item.type}</p>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Request Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to secure your property? Get in touch for a free
              consultation and quote
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-gray-300">+233 XX XXX XXXX</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-300">info@samfortech.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-300">Accra, Ghana</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Request Quote
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    title="Service Needed"
                  >
                    <option value="">Select a service</option>
                    <option value="cctv">CCTV Installation</option>
                    <option value="gate">Gate Automation</option>
                    <option value="fence">Electric Fencing</option>
                    <option value="network">Networking</option>
                    <option value="phone">IP Telephone</option>
                    <option value="intercom">Video Intercom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project..."
                    title="Message"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  title="Send Message"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  const services = [
    "CCTV Installation",
    "Gate Automation",
    "Electric Fencing",
    "Networking",
    "IP Telephone",
    "Video Intercoms",
  ];

  const quickLinks = [
    { label: "About Us", page: "about" },
    { label: "Services", page: "services" },
    { label: "Projects", page: "projects" },
    { label: "Training", page: "training" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SAMFORTECH</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for IT solutions, security systems & smart
              installations in Ghana.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Icons - Placeholder */}
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage("services")}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@samfortech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Samfortech. All rights reserved. | Professional IT Solutions
            & Security Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

// Training Page Component
const TrainingPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const courses = [
    {
      id: "cctv-basics",
      title: "CCTV Installation Fundamentals",
      duration: "2 Weeks",
      level: "Beginner",
      price: "GHS 800",
      description:
        "Learn the basics of CCTV camera installation, configuration, and maintenance.",
      modules: [
        "Camera Types and Selection",
        "Installation Techniques",
        "Network Configuration",
        "Recording Systems",
        "Troubleshooting",
        "Customer Service",
      ],
      requirements: ["Basic electrical knowledge", "Willingness to learn"],
      certification: "CCTV Installation Certificate",
      nextStart: "April 15, 2024",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: "gate-automation",
      title: "Gate Automation Specialist",
      duration: "3 Weeks",
      level: "Intermediate",
      price: "GHS 1200",
      description:
        "Master the installation and maintenance of automated gate systems.",
      modules: [
        "Motor Selection & Installation",
        "Control Systems",
        "Safety Features",
        "Remote Controls & Apps",
        "Maintenance Procedures",
        "Business Development",
      ],
      requirements: [
        "Basic mechanical knowledge",
        "Previous electrical experience preferred",
      ],
      certification: "Gate Automation Specialist Certificate",
      nextStart: "May 1, 2024",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: "networking-pro",
      title: "Network Infrastructure Professional",
      duration: "4 Weeks",
      level: "Advanced",
      price: "GHS 1500",
      description:
        "Comprehensive training in network design, installation, and management.",
      modules: [
        "Network Planning & Design",
        "Cable Installation & Management",
        "Router & Switch Configuration",
        "Wi-Fi Systems",
        "Network Security",
        "Troubleshooting & Maintenance",
      ],
      requirements: [
        "IT background preferred",
        "Understanding of basic networking",
      ],
      certification: "Network Infrastructure Professional Certificate",
      nextStart: "April 22, 2024",
      gradient: "from-green-500 to-teal-400",
    },
    {
      id: "security-systems",
      title: "Integrated Security Systems",
      duration: "5 Weeks",
      level: "Advanced",
      price: "GHS 2000",
      description:
        "Complete training in integrated security solutions including CCTV, access control, and alarms.",
      modules: [
        "System Integration",
        "Access Control Systems",
        "Alarm Systems",
        "Video Analytics",
        "Project Management",
        "Client Consultation",
      ],
      requirements: [
        "Previous security system experience",
        "Technical background",
      ],
      certification: "Security Systems Integration Certificate",
      nextStart: "June 1, 2024",
      gradient: "from-orange-500 to-red-400",
    },
  ];

  const apprenticeshipProgram = {
    title: "Apprenticeship Program",
    duration: "6 Months",
    description:
      "Hands-on learning with experienced technicians on real projects.",
    benefits: [
      "Learn while earning",
      "Work on real projects",
      "Mentorship from experts",
      "Job placement assistance",
      "Industry certifications",
      "Tool allowance provided",
    ],
    requirements: [
      "Age 18-30",
      "Basic education completed",
      "Physical fitness for fieldwork",
      "Commitment to 6-month program",
    ],
  };

  const successStories = [
    {
      name: "Kwame Asante",
      course: "CCTV Installation Fundamentals",
      year: "2023",
      story:
        "Started my own security installation business after completing the course. Now employing 3 technicians.",
      currentRole: "Business Owner",
    },
    {
      name: "Ama Osei",
      course: "Network Infrastructure Professional",
      year: "2022",
      story:
        "Got promoted to IT Manager at my company after gaining these skills. Increased my salary by 150%.",
      currentRole: "IT Manager",
    },
    {
      name: "Michael Oppong",
      course: "Apprenticeship Program",
      year: "2023",
      story:
        "Joined as apprentice and now full-time technician with Samfortech. Learning new skills every day.",
      currentRole: "Senior Technician",
    },
  ];

  const handleEnrollment = () => {
    console.log("Enrollment submitted:", enrollmentForm);
    alert(
      "Thank you for your interest! We will contact you soon with enrollment details."
    );
    setEnrollmentForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Training &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Develop your skills in IT solutions and security systems with our
              professional training programs
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                onClick={() => setSelectedCourse(course)}
              />
            ))}
          </div>

          {/* Apprenticeship Program */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {apprenticeshipProgram.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {apprenticeshipProgram.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Program Benefits
                </h3>
                <div className="space-y-3">
                  {apprenticeshipProgram.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Requirements
                </h3>
                <div className="space-y-3">
                  {apprenticeshipProgram.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() =>
                  setEnrollmentForm({
                    ...enrollmentForm,
                    course: "Apprenticeship Program",
                  })
                }
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                Apply for Apprenticeship
              </button>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {story.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">{story.currentRole}</p>
                    <p className="text-gray-400 text-xs">
                      Graduate {story.year}
                    </p>
                  </div>

                  <blockquote className="text-gray-300 text-sm italic mb-4">
                    "{story.story}"
                  </blockquote>

                  <div className="text-xs text-gray-400 text-center">
                    Course: {story.course}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment Form */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Enroll Now
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={enrollmentForm.name}
                    onChange={(e) =>
                      setEnrollmentForm({
                        ...enrollmentForm,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={enrollmentForm.phone}
                    onChange={(e) =>
                      setEnrollmentForm({
                        ...enrollmentForm,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.email}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Course of Interest
                </label>
                <select
                  title="Select course of interest"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.course}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      course: e.target.value,
                    })
                  }
                >
                  <option value="">Select a course</option>
                  <option value="Apprenticeship Program">
                    Apprenticeship Program
                  </option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Previous Experience
                </label>
                <select
                  title="Select experience level"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.experience}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      experience: e.target.value,
                    })
                  }
                >
                  <option value="">Select experience level</option>
                  <option value="none">No previous experience</option>
                  <option value="basic">Basic knowledge</option>
                  <option value="intermediate">Some experience</option>
                  <option value="advanced">Experienced</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.message}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us about your goals or any questions..."
                />
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleEnrollment}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Submit Enrollment Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={(courseTitle: string) => {
            setEnrollmentForm({ ...enrollmentForm, course: courseTitle });
            setSelectedCourse(null);
          }}
        />
      )}
    </div>
  );
};

// Course Card Component
const CourseCard = ({
  course,
  index,
  onClick,
}: {
  course: any;
  index: number;
  onClick: () => void;
}) => {
  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: "text-green-400",
      Intermediate: "text-yellow-400",
      Advanced: "text-red-400",
    };
    return colors[level] || "text-gray-400";
  };

  return (
    <div
      className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${course.gradient} rounded-lg flex items-center justify-center`}
        >
          <Award className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{course.price}</div>
          <div className="text-sm text-gray-400">{course.duration}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {course.title}
      </h3>

      <div className="flex items-center space-x-4 mb-3">
        <span className={`text-sm font-medium ${getLevelColor(course.level)}`}>
          {course.level}
        </span>
        <span className="text-sm text-gray-400">Next: {course.nextStart}</span>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{course.description}</p>

      <div className="space-y-2 mb-6">
        <div className="text-sm font-medium text-white">Key Modules:</div>
        {course.modules.slice(0, 3).map((module: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">{module}</span>
          </div>
        ))}
        {course.modules.length > 3 && (
          <div className="text-sm text-cyan-400">
            +{course.modules.length - 3} more modules
          </div>
        )}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
        <span className="text-sm text-gray-400">
          Certificate: {course.certification}
        </span>
        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

// Course Modal Component
const CourseModal = ({
  course,
  onClose,
  onEnroll,
}: {
  course: any;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-lg flex items-center justify-center`}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {course.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span
                    className={
                      course.level === "Beginner"
                        ? "text-green-400"
                        : course.level === "Intermediate"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }
                  >
                    {course.level}
                  </span>
                  <span>•</span>
                  <span className="text-cyan-400 font-bold">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Course Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  What You'll Learn
                </h3>
                <div className="space-y-3">
                  {course.modules.map((module: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Prerequisites
                </h3>
                <div className="space-y-2">
                  {course.requirements.map((req: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div className="bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Course Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-medium">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span
                      className={`font-medium ${
                        course.level === "Beginner"
                          ? "text-green-400"
                          : course.level === "Intermediate"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Investment:</span>
                    <span className="text-cyan-400 font-bold text-lg">
                      {course.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Start:</span>
                    <span className="text-white font-medium">
                      {course.nextStart}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Certification:</span>
                    <span className="text-white font-medium">Yes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-lg font-bold text-white mb-3">
                  Certificate
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Upon successful completion, you'll receive:
                </p>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">
                    {course.certification}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onEnroll(course.title)}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Enroll in This Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; // Services Page Component

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: "cctv",
      icon: Camera,
      title: "CCTV Installation",
      description:
        "Professional security camera systems with remote monitoring capabilities",
      features: [
        "HD/4K Camera Options",
        "Night Vision Technology",
        "Remote Mobile Access",
        "24/7 Cloud Recording",
        "Motion Detection Alerts",
        "Professional Installation",
      ],
      specifications: {
        "Camera Types": "Dome, Bullet, PTZ",
        Resolution: "Up to 4K Ultra HD",
        Storage: "Local DVR/NVR + Cloud",
        Viewing: "Mobile App & Web Portal",
      },
      gradient: "from-blue-500 to-cyan-400",
      projects: "45+ Installations",
    },
    {
      id: "gate",
      icon: Shield,
      title: "Gate Automation",
      description:
        "Smart automated gate systems with advanced safety and security features",
      features: [
        "Sliding & Swing Gates",
        "Remote Control Access",
        "Safety Obstacle Detection",
        "Battery Backup System",
        "Mobile App Integration",
        "Access Control Systems",
      ],
      specifications: {
        "Gate Types": "Sliding, Swing, Barrier",
        Control: "Remote, Mobile, Keypad",
        Power: "AC Motor with Battery Backup",
        Safety: "Photocell & Loop Detectors",
      },
      gradient: "from-purple-500 to-pink-400",
      projects: "30+ Installations",
    },
    {
      id: "fence",
      icon: Zap,
      title: "Electric Fencing",
      description:
        "High-voltage perimeter security systems for maximum property protection",
      features: [
        "High Voltage Deterrent",
        "Perimeter Alarm System",
        "Weather Resistant Design",
        "Zone-based Monitoring",
        "Battery Backup Power",
        "Professional Maintenance",
      ],
      specifications: {
        Voltage: "6000V - 10000V",
        Zones: "Multi-zone Monitoring",
        Power: "Solar & AC Options",
        Length: "Unlimited Expandable",
      },
      gradient: "from-orange-500 to-red-400",
      projects: "25+ Installations",
    },
    {
      id: "network",
      icon: Wifi,
      title: "Computer Networking",
      description:
        "Complete IT infrastructure setup including LAN, WAN, and Wi-Fi solutions",
      features: [
        "LAN/WAN Configuration",
        "Wireless Network Setup",
        "Server Installation",
        "Network Security",
        "Cable Management",
        "Performance Optimization",
      ],
      specifications: {
        Speed: "Up to 10 Gigabit",
        Coverage: "Enterprise Grade Wi-Fi",
        Security: "WPA3 & Enterprise Security",
        Management: "Centralized Control",
      },
      gradient: "from-green-500 to-teal-400",
      projects: "60+ Networks",
    },
    {
      id: "phone",
      icon: Phone,
      title: "IP Telephone Systems",
      description:
        "Modern VoIP communication systems with advanced call management",
      features: [
        "VoIP Technology",
        "Call Recording",
        "Conference Calling",
        "Mobile Integration",
        "Auto Attendant",
        "Scalable System",
      ],
      specifications: {
        Technology: "SIP/VoIP Protocol",
        Capacity: "2-500+ Extensions",
        Features: "Full PBX Functionality",
        Integration: "CRM & Mobile Apps",
      },
      gradient: "from-indigo-500 to-purple-400",
      projects: "20+ Systems",
    },
    {
      id: "intercom",
      icon: Eye,
      title: "Video Intercoms",
      description:
        "Two-way communication systems with video monitoring for enhanced security",
      features: [
        "HD Video Communication",
        "Two-way Audio",
        "Door Release Control",
        "Multiple Monitor Support",
        "Recording Capability",
        "Mobile Connectivity",
      ],
      specifications: {
        Display: '7" - 10" Touch Screen',
        Resolution: "Full HD 1080p",
        Audio: "Noise Cancellation",
        Power: "PoE or AC Adapter",
      },
      gradient: "from-pink-500 to-rose-400",
      projects: "15+ Systems",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions and security systems designed to protect
              and connect your world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <DetailedServiceCard
                key={service.id}
                service={service}
                index={index}
                onClick={() => setSelectedService(service as any)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

// Detailed Service Card Component
const DetailedServiceCard = ({
  service,
  index,
  onClick,
}: {
  service: any;
  index: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <service.icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
        <span className="text-cyan-400 text-sm font-medium">
          {service.projects}
        </span>
        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

// Service Modal Component
const ServiceModal = ({
  service,
  onClose,
}: {
  service: any;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="text-cyan-400">{service.projects}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-300 text-lg mb-8">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Key Features
              </h3>
              <div className="space-y-3">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(service.specifications).map(
                  ([key, value], idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Request Quote for {service.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scroll to Top Component
const ScrollToTop = ({ scrollY }: { scrollY: number }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transform transition-all duration-300 z-50 ${
        scrollY > 400 ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } hover:scale-110`}
    >
      <ArrowUp className="w-6 h-6 mx-auto" />
    </button>
  );
};

export default SamfortechWebsite;
