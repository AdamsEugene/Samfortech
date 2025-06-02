import { Award, CheckCircle, X } from "lucide-react";
import type { Course } from "../pages/TrainingPage";

export const CourseModal = ({
  course,
  onClose,
  onEnroll,
}: {
  course: Course;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-lg flex items-center justify-center`}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {course.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span
                    className={
                      course.level === "Beginner"
                        ? "text-green-400"
                        : course.level === "Intermediate"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }
                  >
                    {course.level}
                  </span>
                  <span>•</span>
                  <span className="text-cyan-400 font-bold">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
            <button
              title="Close Modal"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Course Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  What You'll Learn
                </h3>
                <div className="space-y-3">
                  {course.modules.map((module: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Prerequisites
                </h3>
                <div className="space-y-2">
                  {course.requirements.map((req: string, idx: number) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div className="bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Course Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-medium">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span
                      className={`font-medium ${
                        course.level === "Beginner"
                          ? "text-green-400"
                          : course.level === "Intermediate"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Investment:</span>
                    <span className="text-cyan-400 font-bold text-lg">
                      {course.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Start:</span>
                    <span className="text-white font-medium">
                      {course.nextStart}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Certification:</span>
                    <span className="text-white font-medium">Yes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-lg font-bold text-white mb-3">
                  Certificate
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Upon successful completion, you'll receive:
                </p>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">
                    {course.certification}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onEnroll(course.title)}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Enroll in This Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; // Services Page Component
