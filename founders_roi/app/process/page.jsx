"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaChartLine, FaRocket } from "react-icons/fa";

export default function ProcessPage() {
  const cards = [
    {
      icon: <FaLayerGroup size={28} />,
      title: "Layer 01",
      desc: "Build a strong foundation with clear positioning and messaging.",
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Layer 02",
      desc: "Scale with data-driven marketing and performance systems.",
    },
    {
      icon: <FaRocket size={28} />,
      title: "Layer 03",
      desc: "Accelerate growth with automation and creative expansion.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* ================= PROCESS SECTION ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE (STICKY) */}
          <div className="md:sticky md:top-32 h-fit">
            <p className="text-orange-500 font-semibold mb-3 tracking-wide uppercase">
              Our Process
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The <span className="text-orange-500">3 Layer</span> Growth
              Formula
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              We don’t rely on guesswork. Our structured 3-layer system ensures
              your brand grows with clarity, consistency, and scalability.
            </p>
          </div>

          {/* RIGHT SIDE (CARDS) */}
          <div className="space-y-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black"
              >
                <div className="mb-4 text-orange-500 group-hover:text-black transition">
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

                <p className="text-gray-400 group-hover:text-black transition">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED CASE STUDY ================= */}
      <section className="bg-black text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="md:sticky md:top-32 h-fit">
            <p className="text-orange-500 font-semibold mb-3 tracking-wide">
              FEATURED CASE STUDY
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Engineering Scalable{" "}
              <span className="text-orange-500">Growth Systems</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              We restructured fragmented marketing efforts into a unified
              performance system — combining data, creative strategy, and
              precision targeting to unlock consistent, scalable growth.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
            >
              <h3 className="text-gray-400 mb-2">Revenue Growth</h3>
              <p className="text-4xl font-bold text-orange-500">+420%</p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
            >
              <h3 className="text-gray-400 mb-2">Conversion Lift</h3>
              <p className="text-4xl font-bold text-orange-500">+280%</p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
            >
              <h3 className="text-gray-400 mb-2">Audience Expansion</h3>
              <p className="text-4xl font-bold text-orange-500">12M+</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
