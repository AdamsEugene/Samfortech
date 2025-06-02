import { CheckCircle } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Samfortech
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for comprehensive IT solutions and security
              systems in Ghana
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to provide cutting-edge security and IT
                  solutions, Samfortech has grown to become Ghana's leading
                  provider of professional installation services.
                </p>
                <p>
                  With over 8 years of experience, we have successfully
                  completed more than 100 automation projects and installed over
                  140 CCTV cameras across Ghana, serving both residential and
                  commercial clients.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer
                  satisfaction has earned us the trust of businesses and
                  homeowners throughout the region.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Expert installation and maintenance",
                  "24/7 customer support",
                  "Certified technicians",
                  "Latest technology solutions",
                  "Competitive pricing",
                  "Local expertise in Ghana",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide innovative, reliable, and affordable security and IT
                solutions that protect and empower our clients while
                contributing to Ghana's technological advancement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading provider of integrated security and IT
                solutions in West Africa, known for excellence, innovation, and
                exceptional customer service.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Samuel Forson", role: "Founder & CEO", avatar: "SF" },
                {
                  name: "Emmanuel Tech",
                  role: "Lead Technician",
                  avatar: "ET",
                },
                {
                  name: "Grace Mensah",
                  role: "Customer Relations",
                  avatar: "GM",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
