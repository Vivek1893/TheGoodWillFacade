import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  items-stretch">
        {/* Map Section (2/3 width) */}
        <div className="md:col-span-2  overflow-hidden h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.934916255579!2d72.8288818752133!3d19.002866182184987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec832c8146f%3A0x9f39d22a98bbeb0c!2sGlass%20Wall%20Systems%20(India)%20Limited!5e0!3m2!1sen!2sin!4v1694770309476!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info (1/3 width) */}
        <div className="bg-white  p-8 lg:p-10 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-3">
              Contact Us
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="text-orange-600 w-6 h-6" />
                </div>
                <p className="text-gray-700">
                  503-504, 5th Floor, A Wing, Marathon Futurex, Mafatal Mills
                  Compound, N.M. Joshi Marg, Lower Parel (E), Mumbai 400 013.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <a
                  href="mailto:marketing@glasswallsystem.com"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  marketing@glasswallsystem.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="text-green-600 w-6 h-6" />
                </div>
                <a
                  href="tel:+912261033456"
                  className="text-gray-700 hover:text-green-600 transition"
                >
                  +91 22 6103 3456
                </a>
              </div>
            </div>
          </div>

          {/* Button aligned bottom */}
          <div className="mt-8">
            <a
              href="mailto:marketing@glasswallsystem.com"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-[#001F5F] transition"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
