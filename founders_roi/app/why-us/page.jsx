"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <div className="bg-black text-white py-10">
      {/* 🔥 HERO SECTION */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-8 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Why <span className="text-orange-400">ROI?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl text-base md:text-lg"
        >
          <span className="block">
            Most brands don’t fail from lack of effort — they fail from lack of
            systems.
          </span>
          <span className="block mt-2">
            We go beyond ads and build complete growth ecosystems that scale
            through strategy, data, and execution.
          </span>
        </motion.p>
      </section>

      {/* 💡 HIGHLIGHT POINTS (UPDATED 🔥) */}
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
      </section>

      {/* 🚨 PROBLEM VS SOLUTION */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* ❌ PROBLEMS */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-5 text-red-400">
              The Problem
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Random Marketing Without Systems",
                  desc: "Disconnected campaigns without clear positioning lead to inconsistent growth.",
                },
                {
                  title: "Weak Brand Positioning",
                  desc: "Competing on price instead of authority reduces trust and value.",
                },
                {
                  title: "High Lead Costs & Low Conversion",
                  desc: "Poor targeting and weak funnels waste money.",
                },
                {
                  title: "No Scalable Infrastructure",
                  desc: "Lack of automation and systems prevents scaling.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="p-4 border border-red-900 bg-[#140000] rounded-lg"
                >
                  <h4 className="text-sm md:text-base font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ✅ SOLUTIONS */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-5 text-green-400">
              How Founders ROI Solves It
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Precise Multi-Layer Marketing",
                  desc: "We align platforms, creatives, and funnels for predictable growth.",
                },
                {
                  title: "Premium Brand Positioning",
                  desc: "We build authority and trust to increase perceived value.",
                },
                {
                  title: "Performance Focused Execution",
                  desc: "Every decision is backed by data and ROI metrics.",
                },
                {
                  title: "Scalable Growth Infrastructure",
                  desc: "Automation, CRM, and workflows built for long-term scale.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -6 }}
                  className="p-4 border border-green-900 bg-[#071400] rounded-lg"
                >
                  <h4 className="text-sm md:text-base font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-14 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Build Systems. Scale Predictably.
        </h2>

        <button className="mt-3 px-6 py-3 bg-orange-400 text-black rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </section>
    </div>
  );
}
