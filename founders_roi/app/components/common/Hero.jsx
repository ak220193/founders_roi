"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden pt-24">
      {/* Glow Background */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 font-medium mb-4 tracking-wide">
            Scaling Ambitious Brands Worldwide
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn Your Business Into a{" "}
            <span className="text-orange-500">Revenue Engine</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            We build scalable marketing, sales, and technology systems that
            drive predictable growth and long-term revenue.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition"
            >
              Start Scaling
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-700 hover:border-orange-500 px-6 py-3 rounded-xl transition"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* ✅ RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] bg-orange-500 opacity-20 blur-[120px] rounded-full"></div>

          {/* Floating Animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/hero_image.png" // ⚠️ ensure correct path
              alt="Revenue Dashboard"
              width={420}
              height={420}
              className="relative rounded-2xl shadow-2xl border border-gray-800"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
