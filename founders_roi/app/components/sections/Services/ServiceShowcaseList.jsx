"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Megaphone, TrendingUp, Palette, Code, 
  ArrowUpRight, Target, Zap, TrendingUp as GrowthIcon 
} from "lucide-react";

// Optimized data mapping client case-studies to pure value statements
const comprehensiveServices = [
  {
    id: "marketing",
    icon: Megaphone,
    title: "Performance Marketing Platforms",
    subtitle: "Intent-driven acquisition matrices built for rapid scaling.",
    desc: "We skip vanity impressions. Your acquisition funnel is engineered around quantitative performance metrics across search, paid socials, and programmatic ad systems to pull high-ticket accounts consistently.",
    deliverables: ["Meta Custom Scaling", "Google Ads Architecture", "Retargeting Matrices"],
    metrics: [
      { value: "4,488%", label: "Average ROAS" },
      { value: "₹43.4L+", label: "Pipeline Revenue" },
      { value: "10k+", label: "Leads Generated" }
    ],
    highlight: "₹44 Generated on every ₹1 spent",
    imgSrc: "/Services/Capicure.jpeg" 
  },
  {
    id: "sales",
    icon: Target,
    title: "High-Ticket Funnel Architectures",
    subtitle: "Automated pipelines designed to eradicate conversion drag points.",
    desc: "Turn raw traffic into highly qualified corporate booking volume. We deploy technical funnel handoffs, custom lead filters, and precise tracking structures to maximize close velocity.",
    deliverables: ["Routing Infrastructure", "Lead Qualification Logic", "Funnel Automation"],
    metrics: [
      { value: "5,067%", label: "Peak Campaign ROAS" },
      { value: "₹43.3L", label: "Closed Revenue" },
      { value: "₹39", label: "Avg Cost / Lead" }
    ],
    highlight: "₹50 Generated on every ₹1 spent",
    imgSrc: "/clientImages/capicture.jpg"
  },
  {
    id: "growth",
    icon: Zap,
    title: "Velocity Scale & Hyper-Growth",
    subtitle: "Accelerating user adoption pipelines with engineering speed.",
    desc: "Replace slow, legacy multi-month processes with high-velocity engineering. We optimize mobile funnels and application infrastructure to trigger compound scale and month-over-month volume expansion.",
    deliverables: ["140% MoM App Growth", "30% MoM Order Scale", "Acquisition Acceleration"],
    metrics: [
      { value: "8X Speed", label: "vs Legacy Growth" },
      { value: "19.6k", label: "Completed Orders" },
      { value: "₹88.2L", label: "Gross Revenue" }
    ],
    highlight: "Hit 8 months of growth in only 30 days",
    imgSrc: "/clientImages/carnival.png"
  },
  {
    id: "branding",
    icon: Palette,
    title: "Premium Authority Branding",
    subtitle: "Command premium pricing by establishing category dominance.",
    desc: "Break free from basic commoditized price wars. We create definitive design guidelines, brand positioning matrices, and technical layouts that position your ecosystem as the absolute authority.",
    deliverables: ["Market Positioning Matrix", "Luxury Interface Language", "Asset Layout Systems"],
    metrics: [
      { value: "Top-Tier", label: "Brand Command" },
      { value: "100%", label: "Market Authority" },
      { value: "Custom", label: "Design Systems" }
    ],
    highlight: "Dominate conversions without competing on cost",
    imgSrc: "/clientImages/TH.png"
  }
];

export default function ServiceShowcaseList() {
  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-orange-500/[0.03] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-amber-500/[0.02] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-40">
        
        {comprehensiveServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
            >
              {/* IMAGE / METRIC DISPLAY SIDE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 18 }}
                className={`lg:col-span-6 flex flex-col gap-4 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {/* Main Bounding Container */}
                <div className="relative w-full aspect-[16/10] rounded-3xl border border-white/5 bg-neutral-900/10 backdrop-blur-md overflow-hidden group shadow-2xl">
                  {/* Performance glow hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute inset-4 rounded-2xl bg-black/40 border border-white/[0.02] overflow-hidden flex items-center justify-center p-6">
                    <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.03]">
                      <Image
                        src={encodeURI(service.imgSrc)}
                        alt={`${service.title} architectural visualization interface`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Absolute Value Pill Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/5 bg-neutral-950/80 backdrop-blur-lg flex items-center gap-3 shadow-2xl">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                      <GrowthIcon size={14} />
                    </div>
                    <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
                      {service.highlight}
                    </span>
                  </div>
                </div>

                {/* Micro Bento Data Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  {service.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl border border-white/5 bg-neutral-900/20 backdrop-blur-sm text-center">
                      <p className="text-lg sm:text-xl font-black bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent tracking-tight">
                        {metric.value}
                      </p>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* COPY CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 16 }}
                className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-orange-500 shadow-inner">
                    <service.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                    System Architecture // 0{index + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-[1.15]">
                    {service.title}
                  </h2>
                  <h3 className="text-base font-semibold text-orange-400/90 tracking-wide">
                    {service.subtitle}
                  </h3>
                </div>

                <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>

                {/* Deliverable Micro Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.deliverables.map((pill) => (
                    <span 
                      key={pill} 
                      className="px-3 py-1.5 rounded-lg border border-white/5 bg-neutral-900/30 text-xs font-semibold text-neutral-400 hover:text-white hover:border-orange-500/20 transition-colors duration-300 cursor-default"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}