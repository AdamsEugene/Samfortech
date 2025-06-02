import { CheckCircle, X } from "lucide-react";

export const ServiceModal = ({
  service,
  onClose,
}: {
  service: {
    id: string;
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    specifications: Record<string, string>;
    gradient: string;
    projects: string;
  };
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="text-cyan-400">{service.projects}</p>
              </div>
            </div>
            <button
              aria-label="Close Modal"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-300 text-lg mb-8">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Key Features
              </h3>
              <div className="space-y-3">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(service.specifications).map(
                  ([key, value], idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Request Quote for {service.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
