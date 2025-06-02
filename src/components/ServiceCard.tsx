// import { useState } from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import type { Service } from "./ServicesOverview";

export const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
//   const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-slate-700 hover:border-cyan-500/50"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
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
