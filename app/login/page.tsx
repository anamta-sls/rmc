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

            <button onClick={handleSendOTP} disabled={loading || phone.length < 10}
              className="w-full flex items-center justify-between bg-[#4A5568] hover:bg-[#374151] disabled:opacity-50 text-white font-bold text-[14px] px-5 py-3.5 rounded-xl transition-colors mb-2">
              <span>{loading ? "Sending..." : "Send OTP"}</span>
              <div className="w-8 h-8 bg-[#16A34A] rounded-full flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
            </button>
          </div>

          {/* Cityscape illustration */}
          <div className="relative h-36 overflow-hidden bg-gradient-to-b from-white to-[#EBF0FF]">
            <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full opacity-15">
              <rect x="5" y="50" width="30" height="90" fill="#0A2A76" rx="2"/>
              <rect x="17" y="30" width="6" height="110" fill="#0A2A76" rx="1"/>
              <rect x="45" y="22" width="42" height="118" fill="#0A2A76" rx="2"/>
              <rect x="61" y="8" width="10" height="132" fill="#0A2A76" rx="1"/>
              <rect x="95" y="58" width="26" height="82" fill="#0A2A76" rx="2"/>
              <rect x="130" y="14" width="52" height="126" fill="#0A2A76" rx="2"/>
              <rect x="148" y="0" width="16" height="140" fill="#0A2A76" rx="1"/>
              <rect x="192" y="42" width="38" height="98" fill="#0A2A76" rx="2"/>
              <rect x="240" y="10" width="48" height="130" fill="#0A2A76" rx="2"/>
              <rect x="257" y="-2" width="14" height="142" fill="#0A2A76" rx="1"/>
              <rect x="300" y="52" width="32" height="88" fill="#0A2A76" rx="2"/>
              <rect x="340" y="26" width="42" height="114" fill="#0A2A76" rx="2"/>
              <rect x="357" y="12" width="8" height="128" fill="#0A2A76" rx="1"/>
              <rect x="390" y="60" width="28" height="80" fill="#0A2A76" rx="2"/>
            </svg>
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
