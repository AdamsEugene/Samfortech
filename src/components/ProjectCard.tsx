import { Play } from "lucide-react";
import type { Project } from "./FeaturedProjects";

export const ProjectCard = ({ project }: { project: Project }) => {
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
