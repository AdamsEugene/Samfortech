import { useState } from "react";
import { ProjectCardFull } from "../components/ProjectCardFull";
import { ProjectModal } from "../components/ProjectModal";

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  value: string;
  description: string;
  image: string;
  features: string[];
  beforeAfter: boolean;
  testimonial: { text: string; author: string };
  timeline: string[];
}

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectCategories = [
    { id: "all", label: "All Projects", count: 24 },
    { id: "cctv", label: "CCTV Systems", count: 8 },
    { id: "automation", label: "Gate Automation", count: 6 },
    { id: "fencing", label: "Electric Fencing", count: 5 },
    { id: "networking", label: "Networking", count: 3 },
    { id: "intercom", label: "Video Intercoms", count: 2 },
  ];

  const projects: Project[] = [
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
      timeline: [],
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
      timeline: [],
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
      timeline: [],
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
              <ProjectCardFull
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
