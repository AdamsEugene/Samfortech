import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import avatar1 from "../assets/images/testimonial1.jpeg";
import avatar2 from "../assets/images/testimonial2.jpeg";
import avatar3 from "../assets/images/testimonial3.jpeg";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "H.E. IMANE OUAADIL",
      role: "AMBASSADOR OF MOROCCO TO GHANA",
      company: "AMBASSADOR OF MOROCCO TO GHANA",
      rating: 5,
      text: "Samfortech installed our complete CCTV system. Professional work, excellent quality, and great customer service. Highly recommended!",
      avatar: avatar1,
    },
    {
      name: "Dr Randy Abbey",
      role: "Medical Director",
      company: "Osei Medical Center",
      rating: 5,
      text: "The electric fencing and gate automation has greatly improved our security. The team was professional and completed the work on time.",
      avatar: avatar2,
    },
    {
      name: "Adamu Musah Raha",
      role: "IT Manager",
      company: "Tech Solutions Ghana",
      rating: 5,
      text: "Outstanding networking setup for our office. Fast, reliable, and secure. The team provided excellent training for our staff.",
      avatar: avatar3,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 border border-slate-600">
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
                />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  title="Testimonial Indicator"
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-cyan-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
