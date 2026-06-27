"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

export default function VideoTestimonial() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Sync mute state directly with video DOM property for cross-browser compatibility (e.g. Safari)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Synchronize playing state if video is paused by browser/system
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Video playback blocked or failed:", error);
          });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 relative border-t border-neutral-900/60 overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner mb-2">
          <Sparkles size={11} className="animate-pulse" />
          <span>Partner Video Review</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
          Hear it from <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Our Partners</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative group">

        {/* Glow border backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-md opacity-20 group-hover:opacity-35 transition duration-1000 pointer-events-none" />

        <div
          onClick={togglePlay}
          className="relative rounded-3xl overflow-hidden bg-neutral-950 shadow-2xl cursor-pointer aspect-video"
        >
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src="/testimonial/Capicture Testimonial.MP4"
            className="w-full h-full object-cover"
            loop
            playsInline
            webkit-playsinline="true"
            muted={true}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
          />

          {/* Initial Play Overlay - Shows if not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 z-10">
              <div className="p-5 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500 hover:border-orange-400 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <Play size={36} className="text-white fill-white ml-1" />
              </div>
            </div>
          )}

          {/* Hover Play/Pause Overlay - Shows on hover if playing */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-orange-500 transition-all duration-300 transform scale-95 group-hover:scale-100">
                <Pause size={36} className="text-white fill-white" />
              </div>
            </div>
          )}

          {/* Mute/Unmute Control Pill */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Avoid triggering play/pause toggle
              setIsMuted(!isMuted);
            }}
            className="absolute bottom-6 right-6 p-3 rounded-full bg-neutral-950/80 backdrop-blur border border-white/10 hover:border-orange-500 text-white transition-all duration-300 z-20 shadow-lg hover:scale-105"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Custom Timeline Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-20">
            <div
              className="h-full bg-linear-to-r from-orange-500 to-amber-500 transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}