"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      {/* Modal card */}
      <div className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <Link
          href="/"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-[#E2E8F0] flex items-center justify-center text-[#9CA3AF] hover:text-[#374151] hover:border-[#374151] transition-colors z-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>

        {/* Form area */}
        <div className="px-8 pt-8 pb-4 relative z-10">
          <h2 className="text-[22px] font-bold text-[#1A202C] mb-1">{title}</h2>
          {subtitle && <p className="text-[13px] text-[#718096] mb-6">{subtitle}</p>}
          {children}
        </div>

        {/* Cityscape decoration at bottom */}
        <div className="relative h-40 overflow-hidden bg-gradient-to-b from-white to-[#EBF0FF]">
          <svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full opacity-20">
            <rect x="10" y="50" width="30" height="110" fill="#0A2A76" rx="2"/>
            <rect x="20" y="30" width="10" height="130" fill="#0A2A76" rx="1"/>
            <rect x="50" y="30" width="40" height="130" fill="#0A2A76" rx="2"/>
            <rect x="62" y="15" width="16" height="145" fill="#0A2A76" rx="1"/>
            <rect x="100" y="60" width="25" height="100" fill="#0A2A76" rx="2"/>
            <rect x="135" y="20" width="50" height="140" fill="#0A2A76" rx="2"/>
            <rect x="150" y="5" width="20" height="155" fill="#0A2A76" rx="1"/>
            <rect x="195" y="45" width="35" height="115" fill="#0A2A76" rx="2"/>
            <rect x="240" y="15" width="45" height="145" fill="#0A2A76" rx="2"/>
            <rect x="255" y="0" width="15" height="160" fill="#0A2A76" rx="1"/>
            <rect x="295" y="55" width="30" height="105" fill="#0A2A76" rx="2"/>
            <rect x="335" y="30" width="40" height="130" fill="#0A2A76" rx="2"/>
            <rect x="350" y="15" width="10" height="145" fill="#0A2A76" rx="1"/>
            <rect x="385" y="60" width="25" height="100" fill="#0A2A76" rx="2"/>
          </svg>
        </div>

        {/* Register CTA */}
        <div className="px-8 py-4 border-t border-[#F1F5F9] text-center bg-white relative z-10">
          <Link
            href="/register"
            className="text-[14px] font-bold text-[#0A2A76] hover:text-[#071E57] transition-colors"
          >
            New User? Create Account
          </Link>
          <p className="text-[11px] text-[#9CA3AF] mt-1">OTP Based Login With Encrypted Session.</p>
        </div>
      </div>
    </div>
  );
}
