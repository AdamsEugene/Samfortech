import { Award, CheckCircle, ChevronRight } from "lucide-react";
import type { Course } from "../pages/TrainingPage";

export const CourseCard = ({
  course,
  index,
  onClick,
}: {
  course: Course;
  index: number;
  onClick: () => void;
}) => {
  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: "text-green-400",
      Intermediate: "text-yellow-400",
      Advanced: "text-red-400",
    };
    return colors[level as keyof typeof colors] || "text-gray-400";
  };

  return (
    <div
      style={{ animationDelay: `${index * 0.1}s` }}
      className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${course.gradient} rounded-lg flex items-center justify-center`}
        >
          <Award className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{course.price}</div>
          <div className="text-sm text-gray-400">{course.duration}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {course.title}
      </h3>

      <div className="flex items-center space-x-4 mb-3">
        <span className={`text-sm font-medium ${getLevelColor(course.level)}`}>
          {course.level}
        </span>
        <span className="text-sm text-gray-400">Next: {course.nextStart}</span>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{course.description}</p>

      <div className="space-y-2 mb-6">
        <div className="text-sm font-medium text-white">Key Modules:</div>
        {course.modules.slice(0, 3).map((module: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">{module}</span>
          </div>
        ))}
        {course.modules.length > 3 && (
          <div className="text-sm text-cyan-400">
            +{course.modules.length - 3} more modules
          </div>
        )}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
        <span className="text-sm text-gray-400">
          Certificate: {course.certification}
        </span>
        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};
