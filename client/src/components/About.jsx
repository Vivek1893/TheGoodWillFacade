import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full bg-white">
      {/* 🔹 About Company Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left Side - Images */}
        <motion.div
          className="relative w-full flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="./Structural-Glazing-Works.webp"
            alt="Roof House"
            className="shadow-lg h-[300px] sm:h-[350px] md:h-[450px] w-full max-w-[600px] object-cover transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src="./pixlr.png"
            alt="Roof Worker"
            className="absolute bottom-[-40px] right-[-20px] sm:bottom-[-50px] sm:right-[-30px] md:bottom-[-60px] md:right-[-40px] h-[150px] sm:h-[200px] md:h-[300px] w-[150px] sm:w-[250px] md:w-[320px] shadow-lg transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3">
            ABOUT US
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Local <br /> Construction Partner in{" "}
            <span className="text-orange-500">India.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            THE GOODWILL FACADE is a specialist Facade Design & Engineering
            group providing extensive services to developers, architects, facade
            contractors, and main contractors in the field of architectural
            facades & building maintenance solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
