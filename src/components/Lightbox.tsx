import { useEffect } from "react";
import {
  X,
  ChevronRight,
  Play,
  MapPin,
  CheckCircle,
  Clock,
} from "lucide-react";
import type { GalleryItem } from "../pages/GalleryPage";

export const Lightbox = ({
  item,
  onClose,
  onNext,
  onPrev,
}: {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        title="Close Lightbox"
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        title="Previous Image"
        onClick={onPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 rotate-180" />
      </button>

      <button
        title="Next Image"
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="max-w-6xl w-full max-h-full flex flex-col lg:flex-row gap-6">
        {/* Media */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-96 lg:h-[600px] bg-slate-800 rounded-lg overflow-hidden">
            {item.type === "video" ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-12 h-12 text-white ml-2" />
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600"></div>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:w-80 bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700">
          <div className="space-y-4">
            <div>
              <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full capitalize">
                {item.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white">{item.title}</h2>

            <p className="text-gray-300">{item.description}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Location</span>
              </div>
              <p className="text-gray-300 ml-8">{item.location}</p>

              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Specifications</span>
              </div>
              <p className="text-gray-300 ml-8">{item.specs}</p>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Media Type</span>
              </div>
              <p className="text-gray-300 ml-8 capitalize">{item.type}</p>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Request Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
