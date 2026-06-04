import React from "react";

const SecondCta = () => {
  <section className="py-8 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
      {[
        "Most Brands Don’t Have A Growth System",
        "Random Marketing Without Strategy",
        "Scaling Feels Unpredictable",
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, y: -4 }}
          className="relative overflow-hidden p-5 border border-gray-800 rounded-lg bg-[#111] group cursor-pointer hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
        >
          {/* 🔥 Sliding Background */}
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

          {/* 🔥 Content */}
          <h3 className="relative z-10 text-sm md:text-base font-medium text-white group-hover:text-black transition-colors duration-500">
            {item}
          </h3>
        </motion.div>
      ))}
    </div>
  </section>;
};

export default SecondCta;
