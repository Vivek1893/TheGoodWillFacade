import React, { useRef, useEffect, useState } from "react";

const WhyChooseUsv2 = () => {
  const services = [
    {
      title: "Expertise and Experience",
      description:
        "Benefit from our team's extensive experience and deep industry knowledge across various financial sectors.",
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
     {
      title: "Expertise and Experience",
      description:
        "Benefit from our team's extensive experience and deep industry knowledge across various financial sectors.",
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
    <section
      ref={sectionRef}
      className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-20"
    >
      {/* Heading */}
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
          Our Services
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
              visible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-90 object-cover transform gap-32 transition-all duration-700 brightness-90 group-hover:brightness-50 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              {/* Background gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Title (default visible, hides on hover) */}
              <h3
                className="relative font-bold text-lg sm:text-xl transition-opacity duration-500 group-hover:opacity-0"
                style={{
                  textShadow: "0px 2px 6px rgba(0,0,0,0.8)",
                  color: "#ffffff",
                }}
              >
                {item.title}
              </h3>

              {/* Description (hidden by default, shows on hover) */}
              <p className="absolute px-6 text-sm sm:text-base leading-relaxed text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsv2;
