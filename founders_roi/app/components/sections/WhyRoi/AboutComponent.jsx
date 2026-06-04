"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutComponent = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose <span className="text-orange-500">Founders ROI</span>
        </h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          <span className="block">
            Most brands don’t fail from lack of effort — they fail from lack of
            systems.
          </span>

          <span className="block mt-3">
            We go beyond ads and build complete growth ecosystems that scale
            through strategy, data, and execution.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default AboutComponent;
