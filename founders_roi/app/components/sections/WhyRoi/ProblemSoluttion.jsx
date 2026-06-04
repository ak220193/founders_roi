"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingDown,
  DollarSign,
  Workflow,
  Layers,
  Crown,
  BarChart3,
  Cpu,
} from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Random Marketing",
    desc: "Disconnected campaigns without positioning lead to inconsistent growth.",
  },
  {
    icon: Crown,
    title: "Weak Branding",
    desc: "Competing on price instead of authority reduces trust and value.",
  },
  {
    icon: DollarSign,
    title: "High Costs",
    desc: "Poor targeting and weak funnels waste budget and lower conversions.",
  },
  {
    icon: Workflow,
    title: "No Systems",
    desc: "Lack of automation and CRM limits scalability.",
  },
];

const solutions = [
  {
    icon: Layers,
    title: "Layered Marketing",
    desc: "Integrated systems for consistent and predictable growth.",
  },
  {
    icon: Crown,
    title: "Premium Positioning",
    desc: "Authority-driven branding that boosts trust and conversions.",
  },
  {
    icon: BarChart3,
    title: "ROI Execution",
    desc: "Data-backed strategies focused on profitability.",
  },
  {
    icon: Cpu,
    title: "Automation Systems",
    desc: "Tech-driven workflows built for scale.",
  },
];

const ProblemSoluttion = () => {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-xs mb-3">
            Problem & Solution
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            From <span className="text-red-400">Zero</span> to{" "}
            <span className="text-orange-500">Scalable Growth</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            We turn broken marketing into structured, high-performance growth
            systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* PROBLEMS */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-red-400">
              The Problem
            </h3>

            <div className="space-y-4">
              {problems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.04 }}
                    className="group flex items-start gap-3 p-4 rounded-lg 
                    bg-white/5 border border-white/10 
                    hover:border-red-400/40 hover:bg-white/10 
                    transition-all duration-300"
                  >
                    <Icon
                      className="text-red-400 mt-1 group-hover:scale-110 transition"
                      size={18}
                    />

                    <div>
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-orange-500">
              The Solution
            </h3>

            <div className="space-y-4">
              {solutions.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.04 }}
                    className="group flex items-start gap-3 p-4 rounded-lg 
                    bg-white/5 border border-white/10 
                    hover:border-orange-500/50 hover:bg-white/10 
                    transition-all duration-300"
                  >
                    <Icon
                      className="text-orange-500 mt-1 group-hover:scale-110 transition"
                      size={18}
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full" />
    </section>
  );
};

export default ProblemSoluttion;
