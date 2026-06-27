"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Zap, Clock, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import GoogleMeetLogo from "@/public/contact/google-meet-logo-png_seeklogo-406884-removebg-preview.png";
import TeamsLogo from "@/public/contact/microsoft-teams-logo-png_seeklogo-370282-removebg-preview.png";

export default function ContactHub() {
  return (
    <section className="w-full py-32 px-6 bg-[#020202] text-white relative overflow-hidden select-none">
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 relative z-10">

        {/* LEFT: DOMINANT CHANNEL HUB */}
        <div className="lg:col-span-8 p-[1px] rounded-[32px] bg-gradient-to-br from-neutral-800 via-orange-500/20 to-transparent">
          <div className="h-full p-8 sm:p-16 rounded-[31px] bg-[#060606]/90 backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black tracking-widest uppercase">
                <Zap size={12} fill="currentColor" className="animate-pulse" /> Direct Connection
              </div>
              <h2 className="text-4xl sm:text-7xl font-black tracking-tighter leading-[1] sm:leading-[0.9] text-white">
                Let&apos;s build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">the future.</span>
              </h2>
              <p className="text-neutral-400 text-lg sm:text-xl max-w-lg leading-relaxed font-light">
                Connect with our team instantly to schedule a direct audit or discuss business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 sm:mt-16">
              <ChannelCard
                icon={Mail}
                title="Secure Mailbox"
                value="foundersroi.in@gmail.com"
                href="mailto:foundersroi.in@gmail.com?subject=Briefing%20Request%20-%20Founders%20ROI"
              />
              <ChannelCard
                icon={FaWhatsapp}
                title="Instant WhatsApp"
                value="+91 87545 82502"
                href="https://wa.me/918754582502?text=Hello%20Founders%20ROI%2C%20I%20would%20like%20to%20discuss%20our%20business%20growth%20objectives."
              />
            </div>
          </div>
        </div>

        {/* RIGHT: COMPACT ACTION BAR */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-[#060606] p-8 sm:p-10 rounded-[32px] border border-neutral-800/60 flex flex-col justify-center gap-6 shadow-2xl">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-neutral-500">Book Discovery</h3>
              <p className="text-xs text-neutral-600 mt-1">Select a platform to initiate secure video briefing</p>
            </div>

            <PlatformButton
              image={GoogleMeetLogo}
              name="Google Meet"
              href="/contact#contact-form"
            />
            <PlatformButton
              image={TeamsLogo}
              name="Microsoft Teams"
              href="/contact#contact-form"
            />
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-transparent flex items-center gap-4 border border-neutral-900">
            <div className="p-3 bg-orange-500/10 rounded-full"><Clock size={18} className="text-orange-500" /></div>
            <div>
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Operational Status</p>
              <p className="text-white text-sm font-bold">Online & Responding <span className="text-neutral-500 font-normal ml-1">within 24h</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ icon: Icon, title, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-8 rounded-3xl bg-neutral-950/40 border border-neutral-900/60 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer block"
    >
      {/* Ambient hover flare */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

      <div>
        <div className="w-14 h-14 rounded-2xl bg-neutral-900/60 flex items-center justify-center mb-6 border border-neutral-800 group-hover:border-orange-500/30 group-hover:bg-neutral-900 transition-all duration-300">
          <Icon size={24} className="text-orange-500 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">{title}</p>
        <p className="font-bold text-lg sm:text-xl mt-2 text-white group-hover:text-orange-400 transition-colors duration-300 break-all sm:break-normal">{value}</p>
      </div>

      <div className="flex items-center gap-1.5 mt-8 text-neutral-500 group-hover:text-orange-500 transition-colors duration-300 text-xs font-bold uppercase tracking-wider ml-auto">
        <span>Initiate</span>
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>
  );
}

function PlatformButton({ image, name, href }) {
  return (
    <Link
      href={href}
      className="w-full p-5 rounded-2xl bg-neutral-950 border border-neutral-900/60 hover:border-orange-500/30 hover:bg-neutral-900/30 transition-all duration-300 group flex items-center gap-4 cursor-pointer block"
    >
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        <Image
          src={image}
          alt={`${name} integration gateway`}
          fill
          sizes="40px"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest group-hover:text-neutral-400">Request Meeting via</p>
        <p className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors duration-300">{name}</p>
      </div>
    </Link>
  );
}