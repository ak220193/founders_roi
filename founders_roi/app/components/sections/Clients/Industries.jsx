"use client";

import React from "react";
import { 
  Camera, CalendarDays, ShoppingBag, Plane, Building2, Sparkles, ArrowRight 
} from "lucide-react";

const industries = [
  { name: "Wedding & Photography", icon: Camera, focus: "Visual Storytelling" },
  { name: "Event Management", icon: CalendarDays, focus: "Operational Flow" },
  { name: "D2C Consumer Brands", icon: ShoppingBag, focus: "Market Penetration" },
  { name: "Travel & Holidays", icon: Plane, focus: "Experience Design" },
  { name: "Hospitality & Resorts", icon: Building2, focus: "Guest Acquisition" },
  { name: "Custom Solutions", icon: Sparkles, focus: "Scalable Systems" },
];

export default function Industries() {
  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black">
            Sector-Specific <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Growth Intelligence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <IndustryCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative rounded-2xl p-[1px] bg-transparent transition-all duration-300 hover:scale-[1.02]">
      {/* 🌟 ROLLING BORDER ENGINE 🌟 */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-[-100%] animate-spin-border bg-[conic-gradient(from_0deg,transparent_70%,#f97316_85%,#fbbf24_95%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative rounded-2xl p-8 bg-[#060606] h-full flex flex-col justify-between z-10">
        <div className="space-y-8">
          <div className="p-3 w-fit rounded-xl border bg-neutral-900 border-neutral-800 text-orange-400 group-hover:rotate-3 transition-transform duration-300">
            <Icon size={22} />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
            {item.name}
          </h3>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-neutral-800/50 pt-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-0.5">Focus Area</span>
            <span className="text-xs font-medium text-neutral-300">{item.focus}</span>
          </div>
          <div className="p-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-500 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}