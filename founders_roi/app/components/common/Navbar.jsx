"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Logs } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Why ROI", path: "/why-us" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4 lg:px-6 lg:py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] rounded-2xl px-4 lg:px-6 h-20">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-xl">
            <Image src={Logo} alt="Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-start text-white">
            <span className="text-lg lg:text-xl font-bold tracking-wider">FOUNDERS_ROI</span>
            <span className="hidden lg:block text-xs font-semibold text-indigo-200/70">Building Brands beyond Sales</span>
          </div>
        </Link>

        {/* Desktop & Tablet Menu (Hidden on smaller screens, shown from md/lg) */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="px-3 py-2 rounded-lg text-sm lg:text-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Area */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#BFF747] text-black text-sm font-bold hover:bg-green-300 transition-all"
          >
            Get Started
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle (Visible on md and below) */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Logs  size={28} />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 border border-white/10 bg-black/80 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium p-4 text-white hover:bg-white/10 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}