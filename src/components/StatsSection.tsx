import { useState, useEffect } from "react";
import { Camera, Shield, Users, Award } from "lucide-react";

export const StatsSection = () => {
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
