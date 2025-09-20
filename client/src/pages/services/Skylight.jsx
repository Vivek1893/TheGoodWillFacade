import React from 'react';

const Skylight = () => {
   return (
    <div className="w-full font-sans">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[85vh]">
        <img
          src="/images/slide3.jpg"
          alt="ACP Cladding"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-blue-900 tracking-wide drop-shadow-lg animate-fadeIn">
            Skylight
          </h3>
        </div>
      </div>

      {/* 🔹 Intro Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose <span className="text-orange-600"> Skylight?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bullet Points */}
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li>✅ Lightweight, rigid, and durable for modern structures.</li>
            <li>✅ Ideal for building exteriors & signage with sleek designs.</li>
            <li>✅ Weatherproof, fade-resistant & highly economical.</li>
            <li>✅ Available in metallic, wood, and marble finishes.</li>
            <li>✅ Excellent heat & sound insulation properties.</li>
            <li>✅ High fire resistance for enhanced safety.</li>
          </ul>
          {/* Side Image */}
          <div className="relative group">
            <img
              src="/images/ser1.png"
              alt="ACP Example"
              className=" transition-transform w-[500px] h-[500px] duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  p-4">
              <p className="text-white font-medium">Modern  SkylightInstallation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Sample Designs */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Sample Designs for <span className="text-blue-800"> Skylight</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            "/images/project1.webp",
            "/images/project2.webp",
            "/images/project3.webp",
            "/images/project4.webp",
            "/images/project5.webp",
            "/images/project6.webp",
            "/images/project7.webp",
            "/images/project8.webp",
          ].map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
            >
              <img
                src={img}
                alt={`Design ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Design {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Reasons Section */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why <span className="text-orange-400">The GoodWill Facades?</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-4">
              REASONS TO CHOOSE US
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✔ Impressive Aesthetics</li>
              <li>✔ Persistent Durability</li>
              <li>✔ Innovative Technology</li>
            </ul>
          </div>
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-4">
              300+ Shade Options
            </h3>
            <p className="text-sm">
              Wide range of finishes and designs for both interiors and
              exteriors.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-4">Lead-Free Paints</h3>
            <p className="text-sm">
              Eco-friendly paints protect your health and the environment.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-4">
              Highest Gloss Retention
            </h3>
            <p className="text-sm">
              PVDF resin ensures brilliant surface finish & long-lasting gloss.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skylight;
