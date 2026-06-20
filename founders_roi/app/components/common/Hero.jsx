"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import heroimg from "@/public/hero/ref1.png";
import Image from "next/image";

// 1. Counter Helper Component
function Counter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const spring = useSpring(0, { duration: 3, bounce: 0 });
  const display = useTransform(spring, (latest) => 
    `${latest % 1 === 0 ? Math.round(latest) : latest.toFixed(1)}${suffix}`
  );

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, spring, numericValue]);

  return (
    <div 
      ref={ref} 
      className="group relative flex flex-col justify-center items-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-neutral-900/20 backdrop-blur-md transition-all duration-300 hover:border-orange-500/20 hover:bg-neutral-900/40 text-center shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
      
      <motion.p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent mb-1 tracking-tight group-hover:from-orange-400 group-hover:to-amber-500 transition-all duration-300">
        {display}
      </motion.p>
      <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-bold group-hover:text-white/70 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const words = useMemo(() => ["Branding", "Consulting", "Sales Systems", "Tech Infrastructure"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullWord.substring(0, displayedText.length - 1)
            : fullWord.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-15 select-none mix-blend-screen"
        >
          <source src="/bg-vdo/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
        <div className="absolute top-1/4 lg:top-1/2 right-1/2 lg:right-[-5%] -z-10 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px] -translate-y-1/2 translate-x-1/2 lg:translate-x-0 rounded-full bg-orange-600/10 blur-[80px] sm:blur-[130px]" />
      </div>

      {/* MASTER CONTAINER */}
      <div className="w-full max-w-7xl relative z-10 flex flex-col gap-12 sm:gap-16 lg:gap-24">
        
        {/* UPPER CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT CONTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-6 shadow-inner">
              <Sparkles size={12} className="text-orange-400 shrink-0" />
              <span>Growth Engineering • Scale Ecosystem</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15] sm:leading-[1.1] mb-6">
              We Build NxtGen <br />
              <span className="relative inline-block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent min-h-[1.2em]">
                {displayedText}
                <span className="absolute -right-2 top-[5%] inline-block w-0.5 sm:w-1 h-[85%] bg-orange-500" />
              </span> <br />
              For Modern Brands.
            </h1>

            {/* Description */}
            <p className="max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 px-2 sm:px-0">
              Founders ROI helps businesses dominate through precise marketing, branding, sales systems, automation, creative strategy, business development, and scalable performance infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto px-4 sm:px-0">
              <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_4px_25px_rgba(249,115,22,0.25)] transition-all hover:scale-105 active:scale-95">
                Build Your Idea <ArrowUpRight size={16} />
              </Link>
              <Link href="/why-us" className="w-full sm:w-auto flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
                Our Strategy
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HERO IMAGE REF PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full h-[260px] sm:h-[380px] lg:h-[480px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] group order-2 lg:order-none"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
            <Image 
              src={heroimg} 
              alt="Founders ROI Infrastructure Reference" 
              fill
              priority
              className="object-contain p-4 sm:p-6 drop-shadow-[0_10px_30px_rgba(249,115,22,0.08)] transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </motion.div>

        </div>

        {/* BOTTOM SECTION: METRICS BENTO GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full border-t border-white/10 pt-10 sm:pt-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <Counter value="8X" label="Revenue Growth" />
            <Counter value="6000%" label="ROAS Delivered" />
            <Counter value="100M" label="Views Generated" />
            <Counter value="3.3 CR" label="Revenue Generated" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}