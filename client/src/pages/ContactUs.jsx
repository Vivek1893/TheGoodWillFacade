// src/components/ContactSection.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/contact.jpg"
          alt="Glass Railing System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark Overlay */}
        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your architectural vision? Contact us today for a
            consultation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 bg-white border border-yellow-600/20 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  placeholder="Your Name"
                  className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded outline-none transition"
                />
              </div>
              <input
                placeholder="Subject"
                className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded resize-none outline-none transition"
              />
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Offices */}
          <div className="space-y-10">
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

              <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-xl shadow-sm hover:shadow-md transition">
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

              <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Surat Office
                    </h5>
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

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3942498238756!2d72.94929187519115!3d19.13437948208821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b902f1adfd45%3A0xfbe26d1c6750c5a!2sMulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1695200000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
