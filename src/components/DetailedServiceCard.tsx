import { CheckCircle, ChevronRight } from "lucide-react";

export const DetailedServiceCard = ({
  service,
  index,
  onClick,
}: {
  service: {
    id: string;
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    projects: string;
    gradient: string;
  };
  index: number;
  onClick: () => void;
}) => {
  return (
    <div
      data-index={index}
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
