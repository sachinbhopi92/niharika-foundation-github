import { FaAward, FaIndustry, FaHandsHelping, FaUsers, FaGlobe } from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Quality Training",
      description:
        "Niharika Foundation is recognized for its quality training, offering an industry-relevant curriculum that equips students with essential skills for their careers.",
      icon: <FaAward size={40} className="text-blue-800 mb-4 mx-auto" />,
    },
    {
      title: "Industrial Partnership",
      description:
        "Strong partnerships with leading companies and organizations ensure that the training provided is relevant and prepares skilled workforce for job readiness in a competitive market.",
      icon: <FaIndustry size={40} className="text-blue-800 mb-4 mx-auto" />,
    },
    {
      title: "Social Impact",
      description:
        "The foundation makes significant contributions to social causes through various community initiatives aimed at uplifting marginalized groups.",
      icon: <FaHandsHelping size={40} className="text-blue-800 mb-4 mx-auto" />,
    },
    {
      title: "Rural and Tribal Youth",
      description:
        "Committed to empowering rural and tribal youth, the foundation provides skills and opportunities for growth, fostering self-sufficiency.",
      icon: <FaUsers size={40} className="text-blue-800 mb-4 mx-auto" />,
    },
    {
      title: "Adivasi Community",
      description:
        "Dedicated to the development of the Adivasi community, the institute promotes social activities that enhance their quality of life and social standing.",
      icon: <FaGlobe size={40} className="text-blue-800 mb-4 mx-auto" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:rotate-3 hover:transition-all"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center opacity-90 hover:opacity-100 transition-opacity">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
