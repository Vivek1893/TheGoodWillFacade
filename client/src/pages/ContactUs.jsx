import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call us directly",
      description: "+91 9892118052",
      action: "tel:+91 9892118052",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-100",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp us",
      description: "Start a conversation",
      action: "https://wa.me/919892118052",
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: Mail,
      title: "Email us",
      description: "thegoodwillfacade@gmail.com",
      action: "mailto:thegoodwillfacade@gmail.com",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      hoverColor: "hover:bg-purple-100",
    },
  ];

  const offices = [
    {
      city: "Mumbai Office",
      address:
        "Society No -374 , Gala no - D45, AKASH CHSL , SECTOR 3 , PUNJAB NATIONAL BANK LANE , CHARKOP, KANDIVALI WEST , MUMBAI - 400 067",
      mapUrl:
        "https://maps.google.com/maps?q=Society+No+-374,+Gala+no+-+D45,+AKASH+CHSL,+SECTOR+3,+PUNJAB+NATIONAL+BANK+LANE,+CHARKOP,+KANDIVALI+WEST,+MUMBAI+-+400+067",
    },
    {
      city: "Surat Office",
      address:
        "55, The Galleria Shopping Hub, Near Sanjivkumar Auditorium, Opp. kitchen 37, Rto, Pal, Surat - 395009",
      mapUrl:
        "https://maps.google.com/maps?q=55,+The+Galleria+Shopping+Hub,+Near+Sanjivkumar+Auditorium,+Opp.+kitchen+37,+Rto,+Pal,+Surat+-+395009",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 -mt-8 to-blue-50/30">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] min-h-[600px] overflow-hidden">
        {/* Logo Branding - Top Right */}
        <div className="absolute top-6 right-6 z-30">
          <img
            src="/logo.png"
            alt="The Goodwill Facades Logo"
            className="h-18 md:h-25 bg-white w-auto"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 z-10" />
        <img
          src="/contact us.jpg"
          alt="Glass Railing System"
          className="w-full h-full object-cover"
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Get In <span className="text-orange-400">Touch</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Let's discuss your project and bring your vision to life
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto"
            ></motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith("http") ? "_blank" : "_self"}
              rel={
                method.action.startsWith("http") ? "noopener noreferrer" : ""
              }
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center block border-2 ${method.borderColor} ${method.hoverColor} group relative overflow-hidden`}
            >
              {/* Background Effect */}
              <div
                className={`absolute inset-0 ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <method.icon className={`${method.iconColor} w-10 h-10`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 group-hover:text-gray-700 transition-colors">
                  {method.description}
                </p>
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center text-sm font-semibold ${method.iconColor} group-hover:translate-x-2 transition-transform duration-300`}
                  >
                    Connect with us
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Offices & Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
                Our <span className="text-blue-600">Offices</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offices.map((office, index) => (
                  <motion.a
                    key={index}
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                          {office.city}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {office.address}
                        </p>
                        <div className="mt-4">
                          <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                            View on map
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-lg border border-orange-100 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Opening Hours
                </h3>
                <p className="text-gray-600">We're here when you need us</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/50 pt-4 pb-4 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      Monday – Saturday
                    </span>
                    <span className="text-orange-600 font-bold">
                      9:30 AM – 6:30 PM
                    </span>
                  </div>
                </div>
                <div className="bg-white/80 p-4 rounded-xl shadow-sm border border-red-100">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Sunday</span>
                    <span className="text-red-500 font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 p-4 bg-white/50 rounded-xl border border-orange-200">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold text-orange-600">Note:</span> Feel free to reach out outside business hours. We'll get back to you as soon as possible.
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] overflow-hidden"
        >
          <iframe
            title="Google Map - AKASH CHSL, Kandivali West"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d72.844321!3d19.205456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a5a6a6a6a6%3A0x3be7b7a5a6a6a6a6!2sSociety%20No%20-374%20%2C%20Gala%20no%20-%20D45%2C%20AKASH%20CHSL%20%2C%20SECTOR%203%20%2C%20PUNJAB%20NATIONAL%20BANK%20LANE%20%2C%20CHARKOP%2C%20KANDIVALI%20WEST%20%2C%20MUMBAI%20-%20400%20067!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Map Pins/Overlays for Addresses */}
          <div className="absolute top-1/4 left-1/4 z-20">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-2xl border border-blue-200 max-w-xs"
            >
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">
                    Mumbai Office
                  </h4>

                  <a
                    href={offices[0].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 font-semibold mt-1 inline-block hover:text-blue-700"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-1/3 right-1/3 z-20">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-2xl border border-green-200 max-w-xs"
            >
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">
                    Surat Office
                  </h4>

                  <a
                    href={offices[1].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-600 font-semibold mt-1 inline-block hover:text-green-700"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Controls Overlay */}
          <div className="absolute top-6 left-6 z-20">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-800">
                  Our Locations
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
