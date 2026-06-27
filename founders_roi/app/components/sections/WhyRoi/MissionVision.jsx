"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";

const corporateDirectives = [
  {
    title: "Vision",
    icon: Eye,
    desc: "To become the growth infrastructure behind the world’s next generation of category-defining brands.",
    glow: "group-hover:from-orange-500/[0.07]"
  },
  {
    title: "Mission",
    icon: Target,
    desc: "To help ambitious founders scale category-defining brands through integrated growth systems across marketing, branding, sales, technology, and execution.",
    glow: "group-hover:from-amber-500/[0.07]"
  }
];

export default function MissionVision() {
  // ✅ Tracks which card border is actively animating (0 = Vision, 1 = Mission)
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const animationDuration = 6000; // 6 seconds per border crawl phase

  useEffect(() => {
    // Sets up the sequential live scheduling loop engine
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, animationDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-bg-primary text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-b border-neutral-900/40">
      
      {/* ================= BACKGROUND GRADIENT MESH ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-linear-to-tr from-orange-500/3 via-purple-500/1 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= MODULE HEADER ================= */}
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-4 shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>Corporate Philosophy</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl leading-[1.15] mb-5">
            Our <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Mission & Vision</span>
          </h2>

          <p className="text-neutral-400 font-light max-w-xl text-sm sm:text-base leading-relaxed">
            We are committed to building scalable growth systems that help premium brands thrive inside competitive global spaces.
          </p>
        </div>

        {/* ================= 3D INTERACTIVE CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {corporateDirectives.map((item, i) => (
            <SequentialBorderCard 
              key={i} 
              item={item} 
              index={i} 
              isLive={activeCardIndex === i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= SEQUENTIAL LIVE BORDER & 3D INTERACTIVE CARD ================= */
function SequentialBorderCard({ item, index, isLive }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 240, damping: 22 });
  const springY = useSpring(y, { stiffness: 240, damping: 22 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 70, damping: 16, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ y: -4 }}
      className="w-full h-full perspective-[1000px] cursor-pointer"
    >
      {/* Container Bento Body Frame */}
      <div className="relative w-full h-full rounded-2xl bg-neutral-950/20 p-8 sm:p-10 flex flex-col justify-between overflow-hidden backdrop-blur-md shadow-2xl group border border-neutral-900/40">
        
        {/* 🌟 SEQUENTIAL LIVE BORDER GLOW LIGHT ENGINE 🌟 */}
        <div className="absolute inset-0 p-px rounded-2xl pointer-events-none z-0">
          <motion.div 
            animate={isLive ? { rotate: 360 } : { rotate: 0 }}
            transition={isLive ? {
              duration: 6, // Rices around exactly once within the 6-second slot window
              ease: "linear",
              repeat: Infinity,
            } : { duration: 0 }}
            style={{ originX: "50%", originY: "50%" }}
            className={`absolute -inset-full bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] transition-opacity duration-700 ${isLive ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Inside Content Mask */}
          <div className="absolute inset-px bg-[#070707]/95 rounded-[15px] z-1" />
        </div>

        {/* Content Structure Layer Wrapper */}
        <div className="space-y-6 relative z-10">
          
          {/* Dynamic Ambient Spotlights that brighten when the border turns active */}
          <div className={`absolute inset-0 bg-linear-to-br ${item.glow} to-transparent opacity-0 transition-opacity duration-700 pointer-events-none rounded-xl ${isLive ? 'opacity-100' : ''}`} />

          {/* Icon Box Frame */}
          <div className={`inline-block p-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-md transition-all duration-500 ${isLive ? 'text-orange-400 border-orange-500/20 bg-neutral-900/80 scale-105' : 'text-neutral-500'}`}>
            <item.icon size={22} className={`transition-transform duration-500 ${isLive ? 'rotate-6' : ''}`} />
          </div>

          <div className="space-y-3">
            <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${isLive ? 'text-orange-400' : 'text-white'}`}>
              {item.title}
            </h3>
            <p className={`font-light text-sm sm:text-base leading-relaxed transition-colors duration-500 ${isLive ? 'text-neutral-200' : 'text-neutral-400'}`}>
              {item.desc}
            </p>
          </div>
        </div>

        {/* Bottom Interactive Progress Indicator */}
        <div className="relative mt-8 w-full h-px bg-neutral-900 overflow-hidden z-10">
          <div className={`absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 transition-all ease-out ${isLive ? 'w-full duration-6000' : 'w-0 duration-300'}`} />
        </div>

      </div>
    </motion.div>
  );
}