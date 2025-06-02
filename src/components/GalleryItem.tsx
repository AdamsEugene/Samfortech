import { MapPin, Camera, Play } from "lucide-react";
import type { GalleryItem as GalleryItemType } from "../pages/GalleryPage";

export const GalleryItem = ({
  item,
  onClick,
}: {
  item: GalleryItemType;
  onClick: () => void;
}) => {
  return (
    <div
      className="group relative bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-slate-700 hover:border-cyan-500/50"
      onClick={onClick}
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        {/* Media Type Indicator */}
        <div className="absolute top-3 left-3">
          {item.type === "video" ? (
            <div className="flex items-center space-x-1 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
              <Play className="w-3 h-3" />
              <span>Video</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
              <Camera className="w-3 h-3" />
              <span>Photo</span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-cyan-500 text-white text-xs font-medium rounded capitalize">
            {item.category}
          </span>
        </div>

        {/* Play Button for Videos */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {item.title}
        </h3>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <MapPin className="w-3 h-3" />
            <span>{item.location}</span>
          </div>

          <div className="text-xs text-cyan-400 font-medium">{item.specs}</div>
        </div>
      </div>
    </div>
  );
};
