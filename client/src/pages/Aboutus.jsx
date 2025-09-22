import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* 🔹 About Banner */}
      <section
        className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/aboutimg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-5xl font-bold mb-4">
            About Thegoodwill
          </h3>
          {/* <p className="text-base md:text-xl">
            Discover our story, mission, and commitment to excellence in
            professional services.
          </p> */}
        </motion.div>
      </section>

      {/* 🔹 WHO WE ARE */}
      <section
        className="relative bg-cover bg-center py-16 px-6 md:px-12 lg:px-20"
        style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative group w-full max-w-md">
              <img
                src="/Structural-Glazing-Works.webp"
                alt="Who We Are"
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 w-full text-gray-700 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#171755] leading-tight">
              About Us
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-[#EC7310]">
                THE GOODWILL FACADE
              </span>
              is A Specialist Facade Design & Engineering Group Providing
              Extensive Services To Developers, Architects, Facade Contactors
              And Main Contactor In The Field Of Architectural Facades &
              Building Maintenance Solutions.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Our team brings together innovation, precision, and global
              expertise to deliver high-performance façade systems. We focus on
              design excellence and engineering accuracy to create sustainable,
              durable, and visually striking building envelopes.{" "}
              <span className="font-medium"></span>{" "}
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              With a client-centric approach, we provide end-to-end solutions —
              from concept design to execution.{" "}
              <span className="font-medium">
                At THE GOODWILL FACADE, we aim to transform architectural
                visions into reality while maintaining the highest standards of
              </span>{" "}
              and{" "}
              <span className="font-medium">
                safety, quality, and efficiency.
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 OUR STORY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="mt-4 lg:mt-0 max-w-xl text-gray-600 text-base md:text-lg">
              At THE GOODWILL FACADE, we redefine architectural elegance with
              cutting-edge façade engineering and design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Text */}
            <div className="space-y-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Founded with a vision to transform skylines, THE GOODWILL FACADE
                brings together innovation, craftsmanship, and engineering
                precision. Our team specializes in delivering sustainable and
                modern façade systems that enhance both functionality and
                aesthetics.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Who We Are
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a specialist façade design and engineering group
                  committed to providing extensive services to developers,
                  architects, contractors, and builders in the field of
                  architectural façades and building maintenance solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Why We Exist
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to blend design excellence with engineering
                  accuracy — helping clients create iconic structures that stand
                  the test of time while maintaining the highest standards of
                  safety, quality, and efficiency.
                </p>
              </div>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=500&q=80"
                alt="Team discussion"
                className="rounded-2xl object-cover w-full h-48 md:h-80 lg:h-[400px]"
              />
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80"
                alt="Financial planning meeting"
                className="rounded-2xl object-cover w-full h-48 md:h-80 lg:h-[400px] mt-6 md:mt-12 lg:mt-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Vision | Mission | Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Vision */}
            <div className="space-y-6">
              <img
                src="/Our-Vision.webp"
                alt="Vision"
                className="w-full h-48 sm:h-64 lg:h-72 object-cover shadow-md rounded-lg"
              />
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 uppercase tracking-wide">
                Our Vision
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                See Farther To Seek Out Competitive Business Advantages For Our
                Clients Through The Innovative Use Of Technology And To Help
                Them Achieve Long-term Success And Prosperity
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <img
                src="/ourmission.webp"
                alt="Mission"
                className="w-full h-48 sm:h-64 lg:h-72 object-cover shadow-md rounded-lg"
              />
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 uppercase tracking-wide">
                Our Mission
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To Deliver Best To The Our Clients Through Innovative Use Of New
                Technologies, Support, Services And Customer Referrals; And Also
                To Be The Best Facade Company In Our Markets
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <img
                src="/ourvalue.webp"
                alt="Core Values"
                className="w-full h-48 sm:h-64 lg:h-72 object-cover shadow-md rounded-lg"
              />
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 uppercase tracking-wide">
                Core Values
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
