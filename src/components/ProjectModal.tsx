import { useState, useEffect } from "react";
import { Eye, CheckCircle, Clock, Star, MapPin, X } from "lucide-react";
import type { Project } from "../pages/ProjectsPage";

export const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
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
