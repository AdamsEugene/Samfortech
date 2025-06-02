import { ChevronRight, Eye, Clock, MapPin } from "lucide-react";
import type { Project } from "../pages/ProjectsPage";

export const ProjectCardFull = ({
  project,
  index,
  onClick,
  projectCategories,
}: {
  project: Project;
  index: number;
  onClick: () => void;
  projectCategories: { id: string; label: string }[];
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
            {projectCategories.find((cat) => cat.id === project.category)
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
