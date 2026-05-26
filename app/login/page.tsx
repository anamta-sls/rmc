"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    router.push(`/login/otp?phone=${phone}`);
  };

  return (
    <div className="min-h-screen bg-black/85 flex flex-col">
      <div className="absolute top-4 right-4">
        <Link href="/" className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Form area */}
          <div className="px-8 pt-8 pb-4">
            <h2 className="text-[22px] font-bold text-[#1A202C] mb-1">Login to Continue</h2>
            <p className="text-[13px] text-[#718096] mb-6">Use Your Registered Mobile Number</p>

            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Mobile Number</label>
            <div className="flex items-center border border-[#E2E8F0] rounded-xl overflow-hidden focus-within:border-[#0A2A76] focus-within:ring-1 focus-within:ring-[#0A2A76] transition-all mb-4">
              <div className="flex items-center gap-1.5 px-3 py-3 border-r border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                <span className="text-base leading-none">🇮🇳</span>
                <span className="text-[13px] font-semibold text-[#374151]">+91</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <input
                type="tel" placeholder="Enter your mobile number" maxLength={10}
                value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g,""))}
                onKeyDown={e => e.key === "Enter" && handleSendOTP()}
                className="flex-1 px-3 py-3 text-[14px] text-[#1A202C] placeholder-[#9CA3AF] focus:outline-none bg-transparent"
              />
            </div>

            <button
  onClick={handleSendOTP}
  disabled={loading || phone.length < 10}
  className={`w-full flex items-center justify-center gap-3 font-bold text-[14px] px-5 py-3.5 rounded-full transition-colors mb-2 ${
    loading || phone.length < 10
      ? "bg-[#4A5568] text-white opacity-60"
      : "bg-[#12369F] hover:bg-[#0F2E85] text-white"
  }`}
>
  <span className="text-center flex-1">
    {loading ? "Sending..." : "Send OTP"}
  </span>

  {/* WhatsApp Icon */}
  <img
    src="/whatsappicon.png"
    alt="WhatsApp"
    className="w-7 h-7 shrink-0"
  />
</button>
          </div>

         {/* Cityscape illustration */}
<div className="relative h-36 overflow-hidden">
  <img
    src="/image-21.png"
    alt=""
    className="absolute inset-0 m-auto h-[120%] w-auto object-contain opacity-100"
  />
</div>

          {/* Footer */}
          <div className="px-8 py-4 border-t border-[#F1F5F9] text-center bg-white">
            <Link href="/register" className="text-[14px] font-bold text-[#0A2A76] hover:text-[#071E57] transition-colors">
              New User? Create Account
            </Link>
            <p className="text-[11px] text-[#9CA3AF] mt-1">OTP Based Login With Encrypted Session.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
