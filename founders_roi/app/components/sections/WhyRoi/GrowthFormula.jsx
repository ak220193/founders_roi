"use client";

import { motion } from "framer-motion";
import { Layers, PenTool, BarChart3 } from "lucide-react";

const formula = [
  {
    icon: Layers,
    title: "Platform Optimization",
    desc: "Scaling the right channels with precision and intent-driven systems.",
  },
  {
    icon: PenTool,
    title: "Creative Optimization",
    desc: "Conversion-focused creatives built using psychology, storytelling, and data.",
  },
  {
    icon: BarChart3,
    title: "Campaign Optimization",
    desc: "Continuous optimization to maximize ROI, profitability, and scale.",
  },
];

export default function GrowthFormula() {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-xs mb-3">
            Our Approach
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-orange-500">3 Layer</span> Growth Formula
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            A structured system designed to drive consistent growth, higher
            conversions, and scalable performance.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {formula.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative p-[1px] rounded-xl 
                bg-gradient-to-br from-orange-500/30 to-transparent"
              >
                <div
                  className="bg-black/70 backdrop-blur-xl border border-white/10 
                rounded-xl p-6 h-full transition-all duration-300 
                group-hover:border-orange-500/40 group-hover:bg-white/5"
                >
                  {/* ICON */}
                  <div className="mb-4">
                    <Icon
                      className="text-orange-500 group-hover:scale-110 transition"
                      size={22}
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>

                  {/* HOVER LINE */}
                  <div
                    className="mt-5 h-[2px] w-0 bg-orange-500 
                  transition-all duration-300 group-hover:w-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full" />
    </section>
  );
}
