"use client";

import { useState } from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

/* ── Small helpers ─────────────────────────────────────── */
function QSIcon({ href, icon, label, bg }: { href:string; icon:React.ReactNode; label:string; bg:string }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-2 sm:gap-3 group flex-shrink-0 w-[60px] sm:w-[80px]">
      <div className={`w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-[18px] sm:rounded-[20px] flex items-center justify-center ${bg} group-hover:scale-105 transition-transform shadow-sm`}>
        {icon}
      </div>
      <span className="text-[10px] sm:text-[12px] font-medium text-[#374151] text-center leading-tight group-hover:text-[#0A2A76] transition-colors">{label}</span>
    </Link>
  );
}

/* Benefit card — left border accent on left side, right on right side */
function BCard({ icon, text, side }: { icon:React.ReactNode; text:string; side:"left"|"right" }) {
  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-sm
      border border-[#E8EDF2]
      ${side==="left" ? "border-l-[4px] border-l-[#0A2A76]" : "border-r-[4px] border-r-[#0A2A76]"}`}>
      <img
  src="/benefit1.png"
  alt=""
  className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
/>
      <p className="text-[12px] sm:text-[13px] text-[#374151] leading-relaxed">{text}</p>
    </div>
  );
}

/* SVG icon shortcuts */
const Ico = ({ d, c="#0A2A76", s=1.8 }: { d:string; c?:string; s?:number }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <MainLayout>

      {/* ════════════════════ HERO ════════════════════════════════ */}
<section
  className="relative overflow-hidden"
  style={{ minHeight: "clamp(300px,42vw,420px)" }}
>

  {/* Main background image */}
  <img
    src="/image.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay for readability */}
  <div
  className="absolute inset-0 z-[1]"
  style={{
    background:
      "radial-gradient(circle at center, rgba(19,54,159,0.0) 35%, rgba(0,27,94,0.75) 100%)"
  }}
/>

  {/* Building texture layer */}
  <img
    src="/Rectangle138.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-30 z-[2]"
  />

  {/* Dot texture */}
  <img
    src="/Rectangle137.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none z-[3]"
  />

  {/* Content */}
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-36 sm:pt-40 lg:pt-44 pb-24 sm:pb-28 text-center">    <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-white mb-2 tracking-tight leading-tight">
      Namaste, Citizen
    </h1>

    <p className="text-[#C7D8FF] text-[14px] sm:text-[17px] mb-8 sm:mb-10">
      What can we help you with today?
    </p>

    {/* Search bar */}
    <div className="max-w-[780px] mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden p-1.5 gap-1">

        <svg
          className="ml-3 sm:ml-4 shrink-0"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          type="text"
          placeholder="Search Hall, Tanker, Fogging...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 text-[13px] sm:text-[15px] text-[#374151] placeholder-[#9CA3AF] focus:outline-none py-2.5 px-2 sm:px-3 bg-transparent"
        />

        <div className="hidden sm:block h-6 w-px bg-[#E5E7EB]" />

        <select className="hidden sm:block bg-transparent text-[#374151] text-[13px] px-3 py-2.5 focus:outline-none cursor-pointer appearance-none">
          <option>All Categories</option>
          <option>Hall Booking</option>
          <option>Water Tanker</option>
          <option>Septic Tank</option>
          <option>Waste Pickup</option>
          <option>Fogging Service</option>
        </select>

        <button className="bg-[#00B100] hover:bg-[#15803D] text-white font-bold text-[13px] sm:text-[15px] px-5 sm:px-8 py-3 rounded-full transition-colors whitespace-nowrap">
          Search
        </button>
      </div>
    </div>

  </div>
</section>
      {/* ════════════════════ QUICK SERVICES ═════════════════════ */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-5 sm:p-7">
          <h2 className="text-[15px] sm:text-[17px] font-bold text-[#1A202C] mb-5">Quick Services</h2>
          <div className="flex items-start justify-between gap-2 sm:gap-4 overflow-x-auto pb-1 scrollbar-hide">
       <QSIcon
  href="/services/hall-booking"
  label="Hall Booking"
  bg="bg-[#EBF0FF]"
  icon={
    <img
      src="/s1.png"
      alt="Hall Booking"
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  }
/>

<QSIcon
  href="/services/septic-tank"
  label="Septic Tank"
  bg="bg-[#ECFEFF]"
  icon={
    <img
      src="/s2.png"
      alt="Septic Tank"
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  }
/>

<QSIcon
  href="/services/water-tanker"
  label="Water Tanker"
  bg="bg-[#E0F2FE]"
  icon={
    <img
      src="/s3.png"
      alt="Water Tanker"
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  }
/>

<QSIcon
  href="/services/waste-pickup"
  label="Waste Pickup"
  bg="bg-[#FFF0EB]"
  icon={
    <img
      src="/s4.png"
      alt="Waste Pickup"
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  }
/>

<QSIcon
  href="/services/fogging"
  label="Fogging Service"
  bg="bg-[#F5F3FF]"
  icon={
    <img
      src="/s5.png"
      alt="Fogging Service"
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  }
/>

<QSIcon
  href="/history"
  label="View All"
  bg="bg-[#F3F4F6]"
  icon={
    <img
      src="/s6.png"
      alt="View All"
      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
    />
  }
/>
          </div>
        </div>
      </div>

      {/* ════════════════════ 3-CARD ROW ══════════════════════════ */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

          {/* Due Today */}
<div className="bg-[#F8F1F7] rounded-2xl border border-[#F1E4EE] p-5 sm:p-6 shadow-sm relative overflow-hidden">     
         <img
    src="/image6.png"
    alt=""
    className="absolute top-0 right-0 w-20 h-20 object-contain opacity-13 pointer-events-none"
  />
         <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block"/>
              <span className="text-[11px] font-bold text-red-500">Due Today</span>
            </div>
            <p className="text-[12px] text-[#6B7280] mb-1">Property Tax: Holding #12345</p>
            <p className="text-[30px] sm:text-[34px] font-bold text-[#1A202C] leading-tight mb-4">₹6,302</p>
            <Link href="/history"
              className="inline-flex items-center gap-1.5 bg-[#2565DF] hover:bg-[#071E57] text-white text-[12px] font-bold px-4 py-2 rounded-full transition-colors">
              Pay
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </Link>
            {/* QR ghost */}
            <div className="absolute bottom-3 right-3 opacity-10">
              <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
                <rect x="0" y="0" width="12" height="12" rx="2" stroke="#0A2A76" strokeWidth="2" fill="none"/><rect x="3" y="3" width="6" height="6" fill="#0A2A76"/>
                <rect x="18" y="0" width="12" height="12" rx="2" stroke="#0A2A76" strokeWidth="2" fill="none"/><rect x="21" y="3" width="6" height="6" fill="#0A2A76"/>
                <rect x="0" y="18" width="12" height="12" rx="2" stroke="#0A2A76" strokeWidth="2" fill="none"/><rect x="3" y="21" width="6" height="6" fill="#0A2A76"/>
                <rect x="18" y="18" width="5" height="5" fill="#0A2A76"/><rect x="25" y="18" width="5" height="5" fill="#0A2A76"/>
                <rect x="18" y="25" width="5" height="5" fill="#0A2A76"/><rect x="25" y="25" width="5" height="5" fill="#0A2A76"/>
              </svg>
            </div>
          </div>

          {/* ── Water Tanker — gradient bg + TEXT ONLY (no image) ── */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ minHeight: 168 }}>
            {/* Rectangle_152.png as pure background */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tanker-gradient.png" alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover"/>
            {/* Text content */}
            <div className="relative z-10 h-full p-5 sm:p-6 flex flex-col justify-between" style={{ minHeight:168 }}>
              {/* Tanker icon + label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/15 rounded-xl border border-white/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2"/>
                    <path d="M16 8h4l3 3v5h-7V8z"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <span className="text-blue-200 text-[13px] font-semibold">Water Tanker</span>
              </div>

              {/* "Arriving in / 45 / mins" */}
              <div className="mt-auto">
                <p className="text-blue-200 text-[13px] sm:text-[14px] font-medium mb-0.5">Arriving in</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[46px] sm:text-[52px] font-extrabold text-white leading-none">45</span>
                  <span className="text-[18px] sm:text-[20px] font-semibold text-blue-200">mins</span>
                </div>
              </div>

              {/* Decorative water drop */}
              <div className="absolute bottom-4 right-5 opacity-15">
                <svg width="28" height="36" viewBox="0 0 24 30" fill="white">
                  <path d="M12 2C12 2 4 10 4 17a8 8 0 0 0 16 0c0-7-8-15-8-15z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Complaint Modules */}
<div className="bg-white rounded-2xl border border-[#E8EDF2] p-5 sm:p-6 shadow-sm">
  <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] mb-4">
    Complaint Modules
  </h3>

  <div className="grid grid-cols-3 gap-2 sm:gap-3">
    {[
      {
        href: "/complaints/register",
        label: "Register Complaint",
        icon: "/c1.png",
      },
      {
        href: "/complaints/reopen",
        label: "Re – Open Complaint",
        icon: "/c2.png",
      },
      {
        href: "/complaints/status",
        label: "Complaint Status",
        icon: "/c3.png",
      },
    ].map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="flex flex-col items-center gap-2 group"
      >
       <div
  className="
    w-12 h-12 sm:w-14 sm:h-14
    bg-[#F0F5FF]
    rounded-2xl
    flex items-center justify-center
    border border-[#E8EDF2]
    shadow-sm
    group-hover:scale-105
    transition-transform duration-200
  "
>
  <img
    src={item.icon}
    alt={item.label}
    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
  />
</div>

<span className="text-[9px] sm:text-[11px] font-medium text-[#4A5568] text-center leading-tight transition-colors duration-200 group-hover:text-[#0A2A76]">
  {item.label}
</span>
        
      </Link>
    ))}
  </div>
</div>
        </div>
      </div>

      {/* ════════════════════ NOTICE ROW ══════════════════════════ */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-5 mb-6 sm:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

          {/* Public Notice */}
          <div className="rounded-2xl p-5 sm:p-6 shadow-sm bg-[#FFF9EE] border border-[#FDE68A]">
            <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] mb-3">Public Notice</h3>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#FEF3C7] rounded-full flex items-center justify-center shrink-0 border-2 border-[#FDE68A]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#1A202C] mb-1">Hall approval SLA</p>
                <p className="text-[11px] sm:text-[12px] text-[#6B7280] leading-relaxed">Community hall requests are reviewed within 24 hours after submission.</p>
              </div>
            </div>
          </div>

          {/* Latest Booking */}
          <div className="bg-white rounded-2xl border border-[#E8EDF2] p-5 sm:p-6 shadow-sm">
            <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] mb-3">Your Latest Booking</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[12px] font-bold text-[#0A2A76]">RMC-Hall-0245</span>
              <span className="text-[10px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">Pending approval</span>
            </div>
            <p className="text-[13px] sm:text-[15px] font-bold text-[#1A202C] mb-1">Morabadi Community Hall</p>
            <p className="text-[11px] text-[#9CA3AF] mb-4">12 Jul, 6:00 PM – 10:00 PM</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#0A2A76] w-1/2"/>
              </div>
              <span className="text-[11px] text-[#9CA3AF] shrink-0">2 of 4</span>
            </div>
          </div>

          {/* Toll-free */}
          <div className="rounded-2xl p-5 sm:p-6 shadow-sm bg-[#EFF6FF] border border-[#BFDBFE]">
            <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] mb-3">Toll-free Number</h3>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[#BFDBFE]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <p className="text-[20px] sm:text-[22px] font-bold text-[#0A2A76] tracking-tight">1800–570–1235</p>
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#6B7280] leading-relaxed">For all municipal complaints, please call the toll-free number provided above.</p>
          </div>
        </div>
      </div>

      {/* ════════════════════ ABOUT ═══════════════════════════════ */}
<section className="relative overflow-hidden py-14 sm:py-20 text-center bg-[#0A2A76]">

  {/* Base blue gradient background */}
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(180deg, #0A2A76 40%, #12369F 70%)",
  }}
/>

{/* darksection.png overlay */}
<img
  src="/darksection.png"
  alt=""
  aria-hidden
  className="absolute inset-0 w-full h-full object-cover opacity-90"
/>

{/* image20.png on right half */}
<img
  src="/image20.png"
  alt=""
  aria-hidden
  className="absolute right-0 top-0 h-full w-[45%] object-contain object-right opacity-40 pointer-events-none"
/>

  {/* Optional slight dark overlay for readability */}
  <div className="absolute inset-0 bg-black/15" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
    
    <div className="inline-flex items-center gap-2 bg-[#1648b8]/70 text-blue-200 text-[10px] sm:text-[11px] font-semibold px-4 py-1.5 rounded-full mb-5 border border-blue-400/30">
      <span className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full"/>
      About
    </div>

    <h2 className="text-[22px] sm:text-[32px] lg:text-[38px] font-bold text-white mb-4 leading-tight">
      RMC – Unified Booking &amp; Payment
      <br className="hidden sm:block"/>
      Management System (UBPMS)
    </h2>

    <p className="text-blue-200 text-[12px] sm:text-[14px] leading-relaxed mb-7 max-w-2xl mx-auto">
      Welcome to Ranchi Municipal Corporation. R.M.C is best known for its mammoth service to the citizen of Ranchi. We always attempt to provide best services to our people of Ranchi. The objective of Smart Ranchi operating Connect center is to provide instant redressal of grievance &amp; management of citizen complaints from a central point by use of various communication and digital platforms on 24x7 basis.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center gap-3 border border-white/30 text-white font-semibold text-[13px] sm:text-[14px] px-6 sm:px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
    >
      Read More

      <span className="w-8 h-8 bg-white/15 border border-white/25 rounded-full flex items-center justify-center">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </span>
    </Link>
  </div>
</section>

      {/* ════════════════════ BENEFITS ════════════════════════════ */}
<section className="bg-[#F0F4F8] py-12 sm:py-16">
  <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
    
    <h2 className="text-[26px] sm:text-[34px] font-bold text-[#0A2A76] text-center mb-10 sm:mb-14">
      Benefits
    </h2>

    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_320px_1fr] lg:gap-10 items-center gap-6">

      {/* Mobile-only image */}
      <div className="flex lg:hidden justify-center w-full">
        <img
          src="/city-illustration.png"
          alt="Smart city"
          className="w-[240px] sm:w-[280px] h-auto object-contain"
        />
      </div>

      {/* Left cards */}
      <div className="space-y-4 sm:space-y-5 w-full">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm border border-[#E8EDF2] border-l-[4px] border-l-[#12369F]">
          <img
            src="/benefit1.png"
            alt=""
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
          />

          <p className="text-[12px] sm:text-[13px] text-[#374151] leading-relaxed">
            The application is designed in such a way that focuses or emphases on the timeline. Each complaint will be treated within the stipulated time
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm border border-[#E8EDF2] border-l-[4px] border-l-[#12369F]">
          <img
            src="/benefit2.png"
            alt=""
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
          />

          <p className="text-[12px] sm:text-[13px] text-[#374151] leading-relaxed">
            It's a sheer right of a complainant to know the progress or status of their complaints. Complainant can check their complaint status through phone, online, mobile app and WhatsApp bot.
          </p>
        </div>

      </div>

      {/* Center illustration */}
      <div className="hidden lg:flex items-center justify-center">
        <img
          src="/city-illustration.png"
          alt="Smart city illustration"
          className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Right cards */}
      <div className="space-y-4 sm:space-y-5 w-full">

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm border border-[#E8EDF2] border-r-[4px] border-r-[#12369F]">
          <img
            src="/benefit3.png"
            alt=""
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
          />

          <p className="text-[12px] sm:text-[13px] text-[#374151] leading-relaxed">
            The acknowledgement for the complaints will be given to the citizens through SMS, email, notification on mobile app or a printed receipt from the ward
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm border border-[#E8EDF2] border-r-[4px] border-r-[#12369F]">
          <img
            src="/benefit4.png"
            alt=""
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
          />

          <p className="text-[12px] sm:text-[13px] text-[#374151] leading-relaxed">
            It provides the capability and flexibility to add attachments as proofs to the tickets, facilitates complaint reopening, and gathers citizen feedback.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* ════════════════════ SERVICES & SOLUTIONS ════════════════ */}
      <section className="bg-[#12369F] py-12 sm:py-14">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-white text-center mb-8 sm:mb-10">Services &amp; Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { img:"/service-city.png",         title:"Responsive to citizens needs – Communication channels to meet diversity of citizens." },
              { img:"/service-stakeholders.png", title:"Connect all stakeholders with accurate information in the quickest possible timeline." },
              { img:"/service-mobile.png",        title:"Enable quick decision capability Mobile apps with decision support capability." },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:scale-[1.015] transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} className="w-full object-cover" style={{ height:200 }}/>
                <div className="p-4 sm:p-5">
                  <p className="text-[12px] sm:text-[14px] text-[#1A202C] text-center leading-snug">{c.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2.5 mt-7">
            {[0,1,2].map(i=>(
              <span key={i} className={`w-2.5 h-2.5 rounded-full ${i===0?"bg-white":"bg-white/30"}`}/>
            ))}
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
