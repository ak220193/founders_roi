"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  "Twinkle Holidays", "Triberry studios", "Carnival studios", "AJ Uday Photography", 
  "AK Photography", "Lexa Holidays", "Fresh Frames Inn", "House Of Memoriez", 
  "Candier Photography", "Capicture studios", "Vs photography", "Lights & Hearts Photography", 
  "Hi Proteins", "Elite wedding stories", "Magic lens", "Zero one photography", 
  "Chikmangalur Vibes", "Splash Eventia", "Studio 4 Creative", "IFS - Infoucs the Studio"
];

export default function ClientLogos() {
  return (
    <section className="w-full bg-[#030202] text-white py-32 relative border-t border-neutral-900/60 overflow-hidden max-w-7xl mx-auto">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/[0.03] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Partners in <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Growth</span>
        </h2>
        <p className="text-neutral-500 max-w-lg mx-auto">
          A collective of ambitious brands we&apos;ve helped scale through precision engineering and creative strategy.
        </p>
      </div>

      {/* SINGLE CONTAINER CAROUSEL */}
      <div className="relative w-full max-w-[90rem] mx-auto py-12 bg-[#060606]/50 border-y border-neutral-900 backdrop-blur-xl">
        
        {/* Subtle Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030202] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030202] to-transparent z-10" />

        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i}
              className="flex items-center gap-4 px-8 py-4 bg-neutral-900/30 border border-neutral-800 rounded-full hover:border-orange-500/50 hover:bg-orange-950/10 transition-all duration-300 whitespace-nowrap cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-orange-500 group-hover:scale-110 transition-transform">
                {client.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}