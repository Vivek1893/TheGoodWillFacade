

import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaUser,
  FaLightbulb,
  FaTachometerAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

  return (
    <>
      {/* About Banner */}
      <section
        className="relative w-full  h-[60vh]  flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/slide3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-in"
      >
        {/* Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MNA</h1>
          <p className="text-lg md:text-xl">
            Discover our story, mission, and commitment to excellence in
            professional services.
          </p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section
        className="relative bg-cover bg-center py-20 px-6 md:px-12 lg:px-20"
        style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
        data-aos="fade-up"
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div
            className="md:w-1/2 w-full flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative group w-full max-w-md">
              <img
                src="/Structural-Glazing-Works.webp"
                alt="Who We Are"
                className="rounded-2xl  object-cover w-full h-auto  transform transition-transform duration-500 "
              />
              {/* Accent Shape */}
             {/* <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#EC7310] rounded-lg -z-10"></div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className="md:w-1/2 w-full text-gray-700 space-y-6"
            data-aos="fade-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#171755] leading-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-[#EC7310]">MNA</span>, a
              boutique capital advisory firm delivering strategic financial
              solutions at every stage of business growth.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              We blend expertise, innovation, and a personalized approach to
              provide exceptional services in{" "}
              <span className="font-medium"> 
                investment banking, corporate finance, governance,
              </span>{" "}
              and <span className="font-medium">compliance</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Acting as an extension of your team, we offer guidance and support
              for{" "}
              <span className="font-medium">
                capital raising, IPO preparation,
              </span>{" "}
              and <span className="font-medium">complex transactions</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Our goal is to unlock opportunities, reduce risks, and create
              lasting value for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Title and Subheading */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 lg:mt-0 max-w-xl text-gray-600 text-lg">
              We empower individuals, families, and businesses with tailored
              financial strategies that grow wealth.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div className="space-y-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Trustify, we believe that smart financial decisions begin
                with trust. As your dedicated financial partner, we bring
                decades of experience, personalized strategies.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Who We Are
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a team of certified financial advisors committed to
                  simplifying complex financial matters and delivering results
                  that align with your goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Why We Exist
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the financial compass for our clients — helping them
                  make informed decisions, reduce risks, and achieve lifelong
                  financial security.
                </p>
              </div>
            </div>

            {/* Right Images Section */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Team discussion"
                className="rounded-2xl object-cover w-full h-[400px]"
              />
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Financial planning meeting"
                className="rounded-2xl object-cover w-full mt-20 h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Vision */}
            <div className="space-y-6">
              <img
                src="/Our-Vision.webp"
                alt="Vision"
                className="w-full h-64 object-cover  shadow-md"
              />
              <h3 className="text-2xl font-bold text-blue-800 uppercase tracking-wide">
                Our Vision
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
              <p className="text-gray-700 leading-relaxed">
                To sustain the position of Glass Wall Systems (India) Limited as
                India’s leading facade company by creating values through
                socio-economic growth and stakeholders satisfaction.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6 mt-40">
              <img
                src="/ourmission.webp"
                alt="Mission"
                className="w-full h-64 object-cover  shadow-md"
              />
              <h3 className="text-2xl font-bold text-blue-800 uppercase tracking-wide">
                Our Mission
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
              <p className="text-gray-700 leading-relaxed">
                o provide client-centric solutions as ONE FIRM seamlessly around
                the globe by creating a sustainable business model. Whether
                you're a thrill-seeker, culture enthusiast, or a seeker of
                tranquility, our mission is to curate journeys that align with
                your passions and aspirations.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-6 mt-80">
              <img
                src="/ourvalue.webp"
                alt="Core Values"
                className="w-full h-64 object-cover  shadow-md"
              />
              <h3 className="text-2xl font-bold text-blue-800 uppercase tracking-wide">
                Core Values
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
              <p className="text-gray-700 leading-relaxed">
                Our growth and success are based upon ethical practices,
                integrity, respect, responsibility, safety, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>


       
    </>
  );
};

export default About;
