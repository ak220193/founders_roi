"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ArrowRight, Building2, Globe, Cpu, Zap, Activity, 
  ShieldCheck, Target, Camera, Briefcase, Star 
} from "lucide-react";

const marqueeRowOne = [
  { name: "Twinkle Holidays", icon: Globe },
  { name: "Triberry Studios", icon: Camera },
  { name: "Carnival Studios", icon: Star },
  { name: "AJ Uday Photography", icon: Activity },
  { name: "AK Photography", icon: Cpu },
  { name: "Lexa Holidays", icon: ShieldCheck },
  { name: "Fresh Frames Inn", icon: Zap },
  { name: "House Of Memoriez", icon: Briefcase },
  { name: "Candier Photography", icon: Target },
  { name: "Capicture Studios", icon: Building2 },
];

const marqueeRowTwo = [
  { name: "Vs Photography", icon: Camera },
  { name: "Lights & Hearts", icon: Star },
  { name: "Hi Proteins", icon: Activity },
  { name: "Elite Wedding Stories", icon: Sparkles },
  { name: "Magic Lens", icon: Cpu },
  { name: "Zero One Photography", icon: Globe },
  { name: "Chikmangalur Vibes", icon: Zap },
  { name: "Splash Eventia", icon: Briefcase },
  { name: "Studio 4 Creative", icon: Target },
  { name: "IFS - Infocus", icon: Building2 },
];

export default function ClientHero() {
  return (
    <section className="w-full bg-[#030202] text-white pt-36 pb-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-b border-neutral-900/60 max-w-7xl mx-auto">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-orange-500/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center space-y-8 mb-24">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner"
        >
          <Sparkles size={11} />
          <span>Proven Track Record</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Trusted by <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Ambitious Growing Brands
          </span>
        </h1>

        <p className="text-neutral-400 font-light text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          We partner with industry leaders to engineer robust technical workflows, premium authority market assets, and high-velocity acquisition systems.
        </p>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
          <a href="/contact" className="relative inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-xl group overflow-hidden">
            <span>Initiate Partnerships</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* MARQUEE SYSTEM */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 mt-12 z-10 max-w-[90rem] mx-auto py-10 bg-neutral-950/[0.05] backdrop-blur-3xl rounded-3xl border border-neutral-900/50">
        
        {/* ROW 1: LEFT */}
        <div className="flex w-max">
          <motion.div
            animate={{ x: [0, -500] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-6 pr-6"
          >
            {[...marqueeRowOne, ...marqueeRowOne].map((brand, idx) => (
              <div key={`r1-${idx}`} className="flex items-center gap-3 px-6 py-3 rounded-xl border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm text-neutral-400 hover:border-orange-500/30 transition-all duration-300">
                <brand.icon size={16} className="text-orange-500" />
                <span className="text-sm font-bold uppercase tracking-wider whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: RIGHT */}
        <div className="flex w-max justify-end">
          <motion.div
            animate={{ x: [-500, 0] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-6 pr-6"
          >
            {[...marqueeRowTwo, ...marqueeRowTwo].map((brand, idx) => (
              <div key={`r2-${idx}`} className="flex items-center gap-3 px-6 py-3 rounded-xl border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm text-neutral-400 hover:border-orange-500/30 transition-all duration-300">
                <brand.icon size={16} className="text-orange-500" />
                <span className="text-sm font-bold uppercase tracking-wider whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}