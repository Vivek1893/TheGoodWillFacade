// src/components/ContactSection.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to transform your architectural vision? Contact us today for a
            consultation
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="p-6 sm:p-8 bg-white border border-yellow-600/20 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  placeholder="Your Name"
                  className="w-full border border-yellow-600/30 focus:border-yellow-600 p-3 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-yellow-600/30 focus:border-yellow-600 p-3 rounded"
                />
              </div>
              <input
                placeholder="Subject"
                className="w-full border border-yellow-600/30 focus:border-yellow-600 p-3 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full border border-yellow-600/30 focus:border-yellow-600 p-3 rounded resize-none"
              />
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Offices */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 22-20817777</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">Thegoodwill@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-800">
                Our Offices
              </h4>

              <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-lg shadow-sm">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Mumbai Office
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Disha C.H.S., Opp. Joggers Park, Chikoowadi, Borivali
                      West, Mumbai - 400 092.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-lg shadow-sm">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Surat</h5>
                    <p className="text-gray-600 leading-relaxed">
                      342, The Galleria Shopping Hub, Near Sanjivkumar
                      Auditorium, Opp. kitchen 37, Rto, Pal, Surat - 395009
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
