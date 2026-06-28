"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const certificationsData = [
  {
    id: "google",
    title: "Google Ads Certified",
    badgeName: "Google Ads Measurement & Search Certified",
    subtitle: "Google Partners program validation",
    image: "/certifications/Google.PNG",
    gradient: "bg-[conic-gradient(from_0deg,transparent_50%,#4285F4_70%,#EA4335_80%,#FBBC05_90%,#34A853_95%,transparent_100%)]",
    glowColor: "rgba(66, 133, 244, 0.12)",
    accentText: "text-blue-400",
    bullets: [
      "Advanced Search campaign setup & algorithmic bidding",
      "Measurement, attribution modeling, & conversion setup",
      "Performance Max campaigns & smart bidding loops",
      "Display network targeting & YouTube video scaling"
    ]
  },
  {
    id: "meta",
    title: "Meta Certified Partner",
    badgeName: "Meta Certified Digital Marketing Associate",
    subtitle: "Meta Blueprint verified credentials",
    image: "/certifications/Meta3.PNG",
    gradient: "bg-[conic-gradient(from_0deg,transparent_50%,#0081FB_70%,#A437FF_85%,#00F2FE_95%,transparent_100%)]",
    glowColor: "rgba(0, 129, 251, 0.12)",
    accentText: "text-cyan-400",
    bullets: [
      "Meta Business Manager architecture & pixel security",
      "Conversions API (CAPI) & offline event matching",
      "A/B testing, custom audiences, & lookalike modelling",
      "Dynamic catalog ads & full-funnel creative execution"
    ]
  }
];

export default function Certifications() {
  return (
    <section className="max-w-7xl mx-auto w-full text-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-neutral-900/60">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-500/2 blur-[150px] pointer-events-none rounded-full" />
      
      {/* Dynamic scan line or grid for high-tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[4.5rem_4.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner mb-2">
            <Award size={11} className="animate-pulse" />
            <span>Accredited Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Verified Official <br />
            <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Advertising Partners</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light text-sm sm:text-base leading-relaxed">
            We operate in strict alignment with major platform ecosystems. Our campaigns are designed and monitored by certified professionals to protect and maximize your advertising capital.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 16 }}
              className="group relative rounded-3xl bg-neutral-900/40 border border-neutral-900/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md shadow-2xl min-h-[500px]"
            >
              {/* 🌟 CUSTOM CONIC BORDER GLOW 🌟 */}
              <div className="absolute inset-0 p-px rounded-3xl pointer-events-none z-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                  style={{ originX: "50%", originY: "50%" }}
                  className={`absolute -inset-full ${cert.gradient} opacity-25 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-px bg-neutral-950 rounded-[23px] z-1" />
              </div>

              {/* Volumetric backlight glow */}
              <div
                className="absolute inset-0 transition-opacity duration-500 rounded-3xl pointer-events-none z-0 blur-2xl opacity-0 group-hover:opacity-100"
                style={{
                  backgroundImage: `radial-gradient(circle, ${cert.glowColor} 0%, transparent 70%)`
                }}
              />

              {/* Top Details */}
              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${cert.accentText}`}>
                      {cert.title}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      {cert.badgeName}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${cert.accentText}`}>
                    <ShieldCheck size={18} />
                  </div>
                </div>

                {/* Styled Certificate Showcase Container */}
                <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/80 flex items-center justify-center p-2 group-hover:border-white/10 transition-colors duration-300">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} badge certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Competencies Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase block">Core Competencies Verified</span>
                  <ul className="space-y-2.5">
                    {cert.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed font-light">
                        <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${cert.accentText}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}