import React from "react";
import { Building, Shield, Layers, Wind, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ServicesAllInOne = () => {
  const servicesIcons = [
    {
      icon: <Building className="h-10 w-10 text-vnv-gold" />,
      title: "ACP Cladding",
      description:
        "ACP Cladding (Aluminium Composite Panel Cladding) is widely used in modern architecture for its durability, lightweight nature, and elegant appearance. It offers resistance to harsh weather conditions, provides insulation against noise and heat, and adds a premium finish to both exterior and interior spaces.",
    },
    {
      icon: <Shield className="h-10 w-10 text-vnv-gold" />,
      title: "Aluminum Windows",
      description:
        "Aluminum windows are known for their strength, low maintenance, and sleek design. They provide excellent thermal and sound insulation while allowing maximum natural light. Ideal for both residential and commercial projects, they enhance security and durability while maintaining a modern look.",
    },
    {
      icon: <Layers className="h-10 w-10 text-vnv-gold" />,
      title: "MS Structure",
      description:
        "MS (Mild Steel) Structures are the backbone of industrial and commercial construction. They provide high tensile strength, flexibility, and cost-effectiveness. MS structures are widely used in frameworks, warehouses, bridges, and facades, ensuring long-lasting stability and support.",
    },
    {
      icon: <Wind className="h-10 w-10 text-vnv-gold" />,
      title: "Railings",
      description:
        "Railings are essential for safety and aesthetics, crafted in stainless steel, glass, or aluminum for durability. They provide support and safety on staircases, balconies, and terraces while enhancing the overall architectural appeal with modern and stylish designs.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-vnv-gold" />,
      title: "Stone Cladding",
      description:
        "Stone Cladding brings a natural and elegant finish to buildings by using thin layers of natural or artificial stone. It enhances durability, adds thermal insulation, and provides resistance against weathering, making it a timeless choice for both interiors and exteriors.",
    },
    {
      icon: <Zap className="h-10 w-10 text-vnv-gold" />,
      title: "Structural Glazing",
      description:
        "Structural Glazing is an advanced facade solution that uses high-strength glass bonded with aluminum frames. It provides a seamless, sleek, and modern exterior while ensuring natural light, energy efficiency, and weather resistance for commercial and residential buildings.",
    },
  ];

  // 🔹 Variants for parent (grid)
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.25, // ek-ek karke delay
      },
    },
  };

  // 🔹 Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div>
      {/* Icon-based Services */}
      <section id="services" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-vnv-gray mb-4 md:mb-6">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-vnv-gray-light max-w-3xl mx-auto px-4">
              Comprehensive facade solutions designed to meet the diverse needs
              of modern architecture
            </p>
          </div>

          {/* 🔹 Animated Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-x-20 lg:gap-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesIcons.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 sm:p-8 min-h-[300px] sm:min-h-[380px] hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-white rounded-xl border border-orange-200 hover:border-blue-300"
                variants={cardVariants}
              >
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                  <div className="text-orange-500 group-hover:text-blue-900">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-vnv-gray mb-3 md:mb-4 transition-colors group-hover:text-blue-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-vnv-gray-light mt-6 md:mt-10 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAllInOne;
