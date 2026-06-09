"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Aman Gupta",
    role: "Founder, Triberry Studios",
    text: "The technical architecture they implemented didn't just scale our operations—it completely redefined our conversion benchmarks. Absolutely world-class engineering.",
    platform: "Google",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Lead, Lexa Holidays",
    text: "Before partnering with them, our funnel was leaking high-intent traffic. Now, our acquisition costs have dropped by 50% while revenue has tripled.",
    platform: "Trustpilot",
  },
  {
    name: "Vikram R.",
    role: "Director, Carnival Studios",
    text: "Most agencies give you fluff. These guys gave us a growth engine. The systems are robust, secure, and built for enterprise-level scale.",
    platform: "Google",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden border-t border-neutral-900/60">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-orange-500/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Loved by <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-neutral-500 font-medium">Real results from partners who scaled their vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative p-8 rounded-3xl bg-[#060606] border border-neutral-900 hover:border-orange-500/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* STAR RATING */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* TESTIMONIAL TEXT */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-8 flex-grow">
                &quot;{t.text}&quot;
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between border-t border-neutral-800/50 pt-6">
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mt-0.5">{t.role}</p>
                </div>
                
                {/* TRUST BADGE */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
                  <ShieldCheck size={12} className="text-orange-500" />
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{t.platform}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}