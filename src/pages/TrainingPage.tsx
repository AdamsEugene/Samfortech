import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CourseCard } from "../components/CourseCard";
import { CourseModal } from "../components/CourseModal";

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  modules: string[];
  requirements: string[];
  certification: string;
  nextStart: string;
  gradient: string;
}

export const TrainingPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const courses: Course[] = [
    {
      id: "cctv-basics",
      title: "CCTV Installation Fundamentals",
      duration: "2 Weeks",
      level: "Beginner",
      price: "GHS 800",
      description:
        "Learn the basics of CCTV camera installation, configuration, and maintenance.",
      modules: [
        "Camera Types and Selection",
        "Installation Techniques",
        "Network Configuration",
        "Recording Systems",
        "Troubleshooting",
        "Customer Service",
      ],
      requirements: ["Basic electrical knowledge", "Willingness to learn"],
      certification: "CCTV Installation Certificate",
      nextStart: "April 15, 2024",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: "gate-automation",
      title: "Gate Automation Specialist",
      duration: "3 Weeks",
      level: "Intermediate",
      price: "GHS 1200",
      description:
        "Master the installation and maintenance of automated gate systems.",
      modules: [
        "Motor Selection & Installation",
        "Control Systems",
        "Safety Features",
        "Remote Controls & Apps",
        "Maintenance Procedures",
        "Business Development",
      ],
      requirements: [
        "Basic mechanical knowledge",
        "Previous electrical experience preferred",
      ],
      certification: "Gate Automation Specialist Certificate",
      nextStart: "May 1, 2024",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: "networking-pro",
      title: "Network Infrastructure Professional",
      duration: "4 Weeks",
      level: "Advanced",
      price: "GHS 1500",
      description:
        "Comprehensive training in network design, installation, and management.",
      modules: [
        "Network Planning & Design",
        "Cable Installation & Management",
        "Router & Switch Configuration",
        "Wi-Fi Systems",
        "Network Security",
        "Troubleshooting & Maintenance",
      ],
      requirements: [
        "IT background preferred",
        "Understanding of basic networking",
      ],
      certification: "Network Infrastructure Professional Certificate",
      nextStart: "April 22, 2024",
      gradient: "from-green-500 to-teal-400",
    },
    {
      id: "security-systems",
      title: "Integrated Security Systems",
      duration: "5 Weeks",
      level: "Advanced",
      price: "GHS 2000",
      description:
        "Complete training in integrated security solutions including CCTV, access control, and alarms.",
      modules: [
        "System Integration",
        "Access Control Systems",
        "Alarm Systems",
        "Video Analytics",
        "Project Management",
        "Client Consultation",
      ],
      requirements: [
        "Previous security system experience",
        "Technical background",
      ],
      certification: "Security Systems Integration Certificate",
      nextStart: "June 1, 2024",
      gradient: "from-orange-500 to-red-400",
    },
  ];

  const apprenticeshipProgram = {
    title: "Apprenticeship Program",
    duration: "6 Months",
    description:
      "Hands-on learning with experienced technicians on real projects.",
    benefits: [
      "Learn while earning",
      "Work on real projects",
      "Mentorship from experts",
      "Job placement assistance",
      "Industry certifications",
      "Tool allowance provided",
    ],
    requirements: [
      "Age 18-30",
      "Basic education completed",
      "Physical fitness for fieldwork",
      "Commitment to 6-month program",
    ],
  };

  const successStories = [
    {
      name: "Kwame Asante",
      course: "CCTV Installation Fundamentals",
      year: "2023",
      story:
        "Started my own security installation business after completing the course. Now employing 3 technicians.",
      currentRole: "Business Owner",
    },
    {
      name: "Ama Osei",
      course: "Network Infrastructure Professional",
      year: "2022",
      story:
        "Got promoted to IT Manager at my company after gaining these skills. Increased my salary by 150%.",
      currentRole: "IT Manager",
    },
    {
      name: "Michael Oppong",
      course: "Apprenticeship Program",
      year: "2023",
      story:
        "Joined as apprentice and now full-time technician with Samfortech. Learning new skills every day.",
      currentRole: "Senior Technician",
    },
  ];

  const handleEnrollment = () => {
    console.log("Enrollment submitted:", enrollmentForm);
    alert(
      "Thank you for your interest! We will contact you soon with enrollment details."
    );
    setEnrollmentForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Training &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Develop your skills in IT solutions and security systems with our
              professional training programs
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                onClick={() => setSelectedCourse(course)}
              />
            ))}
          </div>

          {/* Apprenticeship Program */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {apprenticeshipProgram.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {apprenticeshipProgram.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Program Benefits
                </h3>
                <div className="space-y-3">
                  {apprenticeshipProgram.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Requirements
                </h3>
                <div className="space-y-3">
                  {apprenticeshipProgram.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() =>
                  setEnrollmentForm({
                    ...enrollmentForm,
                    course: "Apprenticeship Program",
                  })
                }
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                Apply for Apprenticeship
              </button>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {story.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">{story.currentRole}</p>
                    <p className="text-gray-400 text-xs">
                      Graduate {story.year}
                    </p>
                  </div>

                  <blockquote className="text-gray-300 text-sm italic mb-4">
                    "{story.story}"
                  </blockquote>

                  <div className="text-xs text-gray-400 text-center">
                    Course: {story.course}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment Form */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Enroll Now
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={enrollmentForm.name}
                    onChange={(e) =>
                      setEnrollmentForm({
                        ...enrollmentForm,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={enrollmentForm.phone}
                    onChange={(e) =>
                      setEnrollmentForm({
                        ...enrollmentForm,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.email}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Course of Interest
                </label>
                <select
                  title="Select course of interest"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.course}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      course: e.target.value,
                    })
                  }
                >
                  <option value="">Select a course</option>
                  <option value="Apprenticeship Program">
                    Apprenticeship Program
                  </option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Previous Experience
                </label>
                <select
                  title="Select experience level"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.experience}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      experience: e.target.value,
                    })
                  }
                >
                  <option value="">Select experience level</option>
                  <option value="none">No previous experience</option>
                  <option value="basic">Basic knowledge</option>
                  <option value="intermediate">Some experience</option>
                  <option value="advanced">Experienced</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={enrollmentForm.message}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us about your goals or any questions..."
                />
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleEnrollment}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Submit Enrollment Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={(courseTitle: string) => {
            setEnrollmentForm({ ...enrollmentForm, course: courseTitle });
            setSelectedCourse(null);
          }}
        />
      )}
    </div>
  );
};
