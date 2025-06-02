import { ArrowUp } from "lucide-react";

export const ScrollToTop = ({ scrollY }: { scrollY: number }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      title="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transform transition-all duration-300 z-50 ${
        scrollY > 400 ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } hover:scale-110`}
    >
      <ArrowUp className="w-6 h-6 mx-auto" />
    </button>
  );
};
