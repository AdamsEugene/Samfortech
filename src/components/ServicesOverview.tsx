import { Camera, Shield, Zap, Wifi, Phone, Eye } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const ServicesOverview = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  const services: Service[] = [
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
