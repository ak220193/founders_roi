"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden text-center select-none">

      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-full bg-orange-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">

        {/* Main Heading Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner mb-2">
            <Sparkles size={11} className="animate-pulse" />
            <span>Connect With Us</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
            Start a <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Conversation.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            Our engineering team is ready to scale your vision.
            Book a briefing to discuss your technical architecture and growth goals.
          </p>
        </motion.div>

        {/* Highlighted Founders Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative max-w-2xl mx-auto p-8 rounded-3xl bg-neutral-900/10 backdrop-blur-md border-l-2 border-orange-500/80 text-left group overflow-hidden shadow-2xl transition-all duration-300 hover:bg-neutral-900/15"
        >
          {/* Subtle ambient internal hover glow */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed italic select-text">
            “We’re not in the business of selling services. We’re in the business of building successful businesses.”
          </p>

          <div className="mt-6 flex items-center justify-center border-t border-neutral-900/60 pt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              — Founders ROI
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}