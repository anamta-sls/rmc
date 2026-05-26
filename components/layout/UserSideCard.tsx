"use client";

export default function UserSideCard() {
  return (
    <div className="lg:sticky lg:top-[120px] bg-white rounded-2xl overflow-hidden border border-[#E8EDF2] shadow-sm">
      {/* Blue gradient top */}
      <div className="bg-gradient-to-br from-[#0A2A76] to-[#1a4aac] p-5">
        {/* Avatar */}
        <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center mb-3">
          <span className="text-white font-bold text-[15px]">RK</span>
        </div>
        <p className="text-white font-bold text-[16px] sm:text-[17px] leading-tight mb-2">Rahul Kumar Singh</p>
        <div className="inline-flex items-center bg-white/15 border border-white/20 text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-full">
          Citizen ID: RMC-8291
        </div>
      </div>

      {/* Info rows */}
      <div className="p-3 sm:p-4 space-y-2">
        {[
          { icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A2A76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, text:"+91 98765 43210" },
          { icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A2A76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, text:"Ward 14" },
          { icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A2A76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, text:"rahul@example.com" },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-xl px-3 py-2.5">
            <div className="shrink-0">{row.icon}</div>
            <span className="text-[12px] text-[#374151] font-medium truncate">{row.text}</span>
          </div>
        ))}
      </div>

      {/* Cityscape illustration */}
      <div className="px-4 pb-4 opacity-[0.12]">
        <svg viewBox="0 0 200 80" width="100%" xmlns="http://www.w3.org/2000/svg">
          <rect x="2"  y="40" width="14" height="40" stroke="#0A2A76" strokeWidth="1.2" fill="none" rx="1"/>
          <rect x="20" y="20" width="20" height="60" stroke="#0A2A76" strokeWidth="1.4" fill="none" rx="1"/>
          <rect x="45" y="10" width="24" height="70" stroke="#0A2A76" strokeWidth="1.4" fill="none" rx="1"/>
          <rect x="52" y="2"  width="10" height="78" stroke="#0A2A76" strokeWidth="1"   fill="none" rx="1"/>
          <rect x="75" y="30" width="16" height="50" stroke="#0A2A76" strokeWidth="1"   fill="none" rx="1"/>
          <rect x="96" y="14" width="22" height="66" stroke="#0A2A76" strokeWidth="1.4" fill="none" rx="1"/>
          <rect x="124" y="32" width="16" height="48" stroke="#0A2A76" strokeWidth="1"  fill="none" rx="1"/>
          <rect x="144" y="18" width="20" height="62" stroke="#0A2A76" strokeWidth="1.2" fill="none" rx="1"/>
          <rect x="170" y="44" width="14" height="36" stroke="#0A2A76" strokeWidth="1"  fill="none" rx="1"/>
          <rect x="188" y="28" width="10" height="52" stroke="#0A2A76" strokeWidth="1"  fill="none" rx="1"/>
        </svg>
      </div>
    </div>
  );
}
