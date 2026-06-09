"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const row1 = [
  { name: "Aliens Photography", logo: "/clientImages/AlienPhotography.png" },
  { name: "Candier Photography", logo: "/clientImages/CandierPhotography.png" },
  { name: "Capicture", logo: "/clientImages/capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalurVibes.jpg" },
  { name: "EWS Logo", logo: "/clientImages/EWS logo.png" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.in.jpg" },
];

const row2 = [
  { name: "Hi Proteins", logo: "/clientImages/Hiprotein.png" },
  { name: "House of Memories", logo: "/clientImages/HouseofMemories.jpeg" },
  { name: "L & H", logo: "/clientImages/L&H.png" },
  { name: "Lexa Holidays", logo: "/clientImages/Lexa Holidays.jpeg" },
  { name: "S4C", logo: "/clientImages/S4C.png" },
  { name: "Splash Eventia", logo: "/clientImages/SplashEventia.jpg" },
  { name: "TH", logo: "/clientImages/TH.png" },
  { name: "Triberry Studios", logo: "/clientImages/triberrystudioslogo.png" },
];

// Double items to create a continuous seamless marquee rail
const loopRow1 = [...row1, ...row1, ...row1];
const loopRow2 = [...row2, ...row2, ...row2];

export default function ClientsCarousel() {
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  return (
    <section className="relative w-full  py-28 px-4 overflow-hidden select-none">
      
      {/* Background Structural Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-tr from-orange-500/5 via-transparent to-transparent blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-4 shadow-inner"
          >
            <Sparkles size={11} className="animate-pulse" />
            <span>Proven Track Record</span>
          </motion.div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]">
            Brands We’ve <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Delivered For</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl font-light leading-relaxed">
            Trusted by fast-scaling startups and modern enterprises to build predictable growth systems.
          </p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full flex flex-col gap-10 py-20 ">
          
          {/* Deep Cinematic Edge Vignette Fades */}
   
          {/* ROW 1: RUNNING LEFT FROM RIGHT */}
          <div 
            className="relative flex  overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHoveredRow1(true)}
            onMouseLeave={() => setIsHoveredRow1(false)}
          >
            <motion.div
              className="flex gap-10 shrink-0 pr-8 "
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                duration: isHoveredRow1 ? 90 : 32, // Adjusted speed for larger card dimensions
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopRow1.map((client, i) => (
                <LargeInteractiveLogoCard key={`track1-${i}`} client={client} />
              ))}
            </motion.div>
          </div>

          {/* ROW 2: RUNNING REVERSED (RIGHT FROM LEFT) */}
          <div 
            className="relative flex w-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHoveredRow2(true)}
            onMouseLeave={() => setIsHoveredRow2(false)}
          >
            <motion.div
              className="flex gap-10 shrink-0 pr-8 min-w-full"
              animate={{ x: ["-33.33%", "0%"] }}
              transition={{
                duration: isHoveredRow2 ? 95 : 35, // Balanced speed offsets
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopRow2.map((client, i) => (
                <LargeInteractiveLogoCard key={`track2-${i}`} client={client} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= LARGE LUXURY 3D INTERACTIVE LOGO CARD ================= */
function LargeInteractiveLogoCard({ client }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  // Dynamic 3D tilt calculations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

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
      // ✅ SIGNIFICANTLY LARGER CONTAINER SIZE: W: 240px, H: 130px (Responsive scaling down gracefully via Tailwind)
      className="w-[200px] sm:w-[240px] h-[100px] sm:h-[130px] shrink-0 [perspective:1000px]"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="group relative w-full h-full flex items-center justify-center rounded-2xl  hover:border-orange-500/30  p-8 sm:p-8 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-md">
        
        {/* Dynamic Spotlight Glow Aura */}
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/[0.09] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Bottom Border Highlight Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent group-hover:via-orange-500/50 transition-all duration-500" />

        {/* ✅ ENLARGED LOGO INNER WRAPPER: Increased bounding restrictions to make logos clear and visible */}
        <div className="relative w-full h-full max-w-[150px] sm:max-w-[180px] transition-all duration-500 group-hover:scale-105">
          <Image
            src={encodeURI(client.logo)}
            alt={`${client.name} reference brand asset`}
            fill
            sizes="(max-w-640px) 150px, 180px"
            // ✅ IMPROVED LEGIBILITY: Bumped up default grayscale visibility to 55% opacity for easier viewing
            className="object-contain  opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </motion.div>
  );
}