import { useState } from "react";
import { Eye, Camera, Shield, Zap, Wifi, Users, Clock } from "lucide-react";
import { GalleryItem } from "../components/GalleryItem";
import { Lightbox } from "../components/Lightbox";

export interface GalleryItem {
  id: number;
  category: string;
  type: string;
  title: string;
  description: string;
  location: string;
  specs: string;
  thumbnail: string;
}

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
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

  const galleryItems: GalleryItem[] = [
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

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(
      (item: GalleryItem) => item.id === selectedImage?.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(
      (item: GalleryItem) => item.id === selectedImage?.id
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
