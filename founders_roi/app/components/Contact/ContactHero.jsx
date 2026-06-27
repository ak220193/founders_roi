"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

export default function ContactHero() {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden text-center select-none">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-full bg-orange-500/2 blur-[120px] pointer-events-none" />

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
            <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
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
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.15 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-neutral-950/60 backdrop-blur-xl border border-neutral-800/80 hover:border-orange-500/30 text-left group overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] transition-colors duration-500 cursor-pointer"
        >
          {/* 🌟 ROLLING CONIC NEON BORDER LIGHT ENGINE 🌟 */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
            <div className="absolute -inset-full animate-spin-border bg-[conic-gradient(from_0deg,transparent_60%,#f97316_80%,#fbbf24_90%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-px bg-neutral-950/90 rounded-[23px] z-1" />
          </div>

          {/* 🌟 INTERACTIVE MOUSE-FOLLOWING SPOTLIGHT GLOW 🌟 */}
          {isHovered && (
            <div
              className="absolute pointer-events-none transition-opacity duration-300 rounded-[23px] z-2"
              style={{
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0) 70%)",
                left: `${mousePosition.x - 150}px`,
                top: `${mousePosition.y - 150}px`,
                transform: "translate3d(0, 0, 0)",
              }}
            />
          )}

          {/* Card Content Stack */}
          <div className="relative z-10 space-y-6">
            
            {/* Heading with Icon */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:rotate-12 transition-transform duration-500 shadow-md">
                <Quote size={14} className="fill-orange-400/10" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold tracking-wider text-neutral-300 group-hover:text-white transition-colors duration-300">
                Founder&apos;s Message to all Founders
              </span>
            </div>

            {/* Quote Body */}
            <p className="text-xl sm:text-2xl font-black text-white leading-relaxed select-text tracking-tight italic">
              “We’re not in the business of selling services. We’re in the business of building successful businesses.”
            </p>

            {/* Footer Row */}
            <div className="mt-8 flex items-center justify-between border-t border-neutral-850/60 pt-6">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                  Founders ROI
                </span>
              </div>
              <div className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest">
                Core Creed
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}