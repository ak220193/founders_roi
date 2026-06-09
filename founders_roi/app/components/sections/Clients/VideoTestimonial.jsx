"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoTestimonial() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Lazy Autoplay Logic: Start playing when video enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 relative border-t border-neutral-900/60">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Hear it from <span className="text-orange-500">Our Partners</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative group">
        {/* Border Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
        
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-[#060606] shadow-2xl">
          <video
            ref={videoRef}
            src="/testimonial/Capicture Testimonial.MP4"
            className="w-full aspect-video object-cover"
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
          />

          {/* Custom Overlay Controls */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => {
                if (isPlaying) videoRef.current?.pause();
                else videoRef.current?.play();
                setIsPlaying(!isPlaying);
              }}
              className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-orange-500 transition-all"
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
          </div>

          {/* Mute/Unmute Toggle */}
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 p-2 rounded-full bg-black/40 backdrop-blur border border-white/10 hover:border-orange-500 transition-all z-20"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
}