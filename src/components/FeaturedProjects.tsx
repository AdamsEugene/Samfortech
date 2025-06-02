import { ProjectCard } from "./ProjectCard";

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  stats: Record<string, string>;
}

export const FeaturedProjects = () => {
  const projects: Project[] = [
    {
      title: "Corporate Office Security",
      category: "CCTV Installation",
      image: "office-security",
      description: "32 camera CCTV system with central monitoring",
      stats: { cameras: "32", coverage: "100%", type: "IP Cameras" },
    },
    {
      title: "Residential Gate Automation",
      category: "Gate Automation",
      image: "gate-automation",
      description: "Smart sliding gate with mobile app control",
      stats: { type: "Sliding Gate", control: "Mobile App", backup: "Battery" },
    },
    {
      title: "Industrial Electric Fencing",
      category: "Electric Fencing",
      image: "electric-fence",
      description: "500m perimeter protection with alarm system",
      stats: { length: "500m", voltage: "8000V", zones: "4 Zones" },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest installations and see the quality of our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
