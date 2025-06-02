import { useState } from "react";
import { Camera, Shield, Zap, Wifi, Phone, Eye } from "lucide-react";
import { DetailedServiceCard } from "../components/DetailedServiceCard";
import { ServiceModal } from "../components/ServiceModal";

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  gradient: string;
  projects: string;
}

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
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
                onClick={() => setSelectedService(service)}
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
