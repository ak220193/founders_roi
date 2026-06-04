"use client";

import { motion } from "framer-motion";

const data = [
  {
    title: "Vision",
    desc: "To become the growth infrastructure behind the world’s next generation of category-defining brands.",
  },
  {
    title: "Mission",
    desc: "To help ambitious founders scale category-defining brands through integrated growth systems across marketing, branding, sales, technology, and execution.",
  },
];
export default function MissionVision() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Our <span className="text-orange-500">Mission & Vision</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            We are committed to building scalable growth systems that help
            brands thrive in a competitive digital world.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/30 to-transparent"
            >
              {/* INNER CARD */}
              <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-orange-500/40">
                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-gray-400 leading-relaxed text-base">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="mt-6 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full" />
    </section>
  );
}
