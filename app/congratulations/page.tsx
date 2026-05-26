"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function CongratulationsContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") ?? "RMC-Hall-0245";
  const amount = searchParams.get("amount") ?? "6500";

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />

      {/* Page Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A2A76 0%, #0d3494 50%, #1648b8 100%)", minHeight: 140 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-[0.13]">
          <svg viewBox="0 0 400 140" width="100%" height="100%" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
            <path d="M120,140 L120,50 Q160,15 200,10 Q240,5 280,10 Q320,15 360,50 L360,140Z" fill="white"/>
            <ellipse cx="200" cy="10" rx="28" ry="14" fill="white"/>
            {[135,150,165,180,195,210,225,240,255,270,285,300,315,330,345].map((x,i)=>(
              <rect key={i} x={x} y={50} width="6" height="90" fill="white" opacity="0.7"/>
            ))}
            <rect x="60" y="80" width="45" height="60" fill="white" rx="1"/>
            <rect x="365" y="85" width="45" height="55" fill="white" rx="1"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-[32px] font-bold text-white leading-tight">Payment Complete</h1>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">

        {/* Green confirmation card */}
        <div className="bg-[#0D9E6C] rounded-2xl p-10 text-center mb-5">
          {/* Check circle */}
          <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center mx-auto mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          </div>
          <h2 className="text-[30px] font-bold text-white mb-2">Booking Confirmed!</h2>
          <p className="text-white/80 text-[15px] mb-6">Payment received successfully</p>
          <div className="border-t border-white/20 pt-5">
            <p className="text-white font-mono font-bold text-[18px] tracking-wider">TXN8823411</p>
          </div>
        </div>

        {/* Booking Receipt */}
        <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6 mb-5">
          <h3 className="text-[18px] font-bold text-[#1A202C] mb-5">Booking Receipt</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[15px] font-bold text-[#0A2A76]">{ref}</span>
            <span className="text-[12px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0]">
              Confirmed
            </span>
          </div>
          <div className="border-t border-[#F1F5F9] pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-bold text-[#1A202C]">Morabadi Community Hall</span>
              <span className="text-[13px] text-[#6B7280]">12 Jul, 6:00 PM – 10:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-[#1A202C]">Event</span>
              <span className="text-[13px] text-[#6B7280]">Wedding Reception</span>
            </div>
          </div>
        </div>

        {/* Amount Details */}
        <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6 mb-8">
          <h3 className="text-[18px] font-bold text-[#1A202C] mb-5">Amount Details</h3>
          <div className="space-y-4">
            {[
              { label: "Hall Rent", amount: "₹5,000" },
              { label: "Security Deposit", amount: "₹1,000" },
              { label: "Convenience Fee", amount: "₹50" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[14px] text-[#6B7280]">{item.label}</span>
                <span className="text-[14px] text-[#374151] font-medium">{item.amount}</span>
              </div>
            ))}
            <div className="border-t border-[#E8EDF2] pt-4 flex items-center justify-between">
              <span className="text-[16px] font-bold text-[#1A202C]">Total Payable</span>
              <span className="text-[24px] font-bold text-[#0A2A76]">₹ 6,500</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-8 py-3.5 border-2 border-[#0A2A76] text-[#0A2A76] font-bold text-[15px] rounded-full hover:bg-[#EBF0FF] transition-colors">
            Download Receipt
          </button>
          <Link href="/">
            <button className="px-8 py-3.5 bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[15px] rounded-full transition-colors">
              Go to Home
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CongratulationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>}>
      <CongratulationsContent />
    </Suspense>
  );
}
