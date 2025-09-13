import React, { useRef, useEffect, useState } from "react";
import { Building, Shield, Layers, Wind, Cpu, Zap } from "lucide-react";

const ServicesAllInOne = () => {
  // First set of services (icon-based)
  const servicesIcons = [
    {
      icon: <Building className="h-10 w-10 text-vnv-gold" />,
      title: "ACP Cladding",
      description:
        "ACP cladding sheets are durable, weather and stain resistant. They serve as a solid barrier allowing the users to enjoy sound reduction from the outside environment.",
    },
    {
      icon: <Shield className="h-10 w-10 text-vnv-gold" />,
      title: "Glass Glazing",
      description:
        "Glazing can be mounted on the surface of a window sash or door stile, usually made of wood, aluminium or PVC.",
    },
    {
      icon: <Layers className="h-10 w-10 text-vnv-gold" />,
      title: "Spider Glazing",
      description:
        "Spider glazing is a major concept for facade glazing and elevation glazing using spider glass hardware.",
    },
    {
      icon: <Wind className="h-10 w-10 text-vnv-gold" />,
      title: "UPVC Fins",
      description:
        "UPVC Fins and Elliptical Louvers provide efficient and aesthetic screening while lending a sleek modern look.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-vnv-gold" />,
      title: "Metal Ceiling",
      description:
        "Metal ceiling systems are designed for commercial, institutional and retail projects in both interior and exterior.",
    },
    {
      icon: <Zap className="h-10 w-10 text-vnv-gold" />,
      title: "Aluminium Fins",
      description:
        "Aluminium fins provide strength, corrosion resistance, and thermal conductivity for all temperature applications.",
    },
  ];

  // Second set of services (image-based)
  const servicesImages = [
    {
      title: "Expertise and Experience",
      description:
        "Benefit from our team's extensive experience and deep industry knowledge across various sectors.",
      image: "/images/ser8.png",
      link: "https://example.com/expertise",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize your unique needs and goals, providing tailored solutions and dedicated support.",
      image: "https://picsum.photos/400/500?random=2",
      link: "https://example.com/client",
    },
    {
      title: "Strategy & Planning",
      description:
        "Making decisions on allocating resources to pursue any given strategy.",
      image: "https://picsum.photos/400/500?random=3",
      link: "https://example.com/strategy",
    },
    {
      title: "Innovation and Insight",
      description:
        "Stay ahead with our forward-thinking strategies and valuable market insights.",
      image: "https://picsum.photos/400/500?random=4",
      link: "https://example.com/innovation",
    },
  ];

  // Animation for image services
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Icon-based Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-vnv-gray mb-6">
              Our Services
            </h2>
            <p className="text-xl text-vnv-gray-light max-w-3xl mx-auto">
              Comprehensive facade solutions designed to meet the diverse needs
              of modern architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">
            {servicesIcons.map((service, index) => (
              <div
                key={index}
                className="p-8 min-h-[380px] hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-white rounded-xl border border-orange-200 hover:border-blue-300"
              >
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                  {/* Default orange, changes to blue on hover */}
                  <div className="text-orange-500 group-hover:text-blue-900">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-vnv-gray mb-4  transition-colors group-hover:text-blue-900">
                  {service.title}
                </h3>
                <p className="text-vnv-gray-light mt-10 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image-based Services */}
      <section
        ref={sectionRef}
        className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-20"
      >
        <div className="text-center mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 font-bold tracking-tight leading-tight"
            style={{
              background:
                "linear-gradient(90deg, #E86C0C 0%, #001F5F 70%, #C4C4C4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            More Services
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {servicesImages.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
                visible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-90 object-cover transform transition-all duration-700 brightness-90 group-hover:brightness-50 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <h3 className="relative font-bold text-lg sm:text-xl transition-opacity duration-500 group-hover:opacity-0 text-white drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="absolute px-6 text-sm sm:text-base leading-relaxed text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesAllInOne;
