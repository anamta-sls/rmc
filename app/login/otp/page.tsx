"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function OTPContent() {
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone") ?? "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleVerify = async () => {
    if (otp.length < 4) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black/85 flex flex-col">
      <div className="absolute top-4 right-4">
        <Link href="/login" className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-white/70 hover:text-white transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 pt-8 pb-4">
            <h2 className="text-[22px] font-bold text-[#1A202C] mb-1">Enter 6-digit OTP</h2>
            <p className="text-[13px] text-[#718096] mb-6">Valid For 5:00 Minutes</p>

            <div className="flex items-center border border-[#E2E8F0] rounded-xl overflow-hidden focus-within:border-[#0A2A76] focus-within:ring-1 focus-within:ring-[#0A2A76] transition-all mb-4">
              <div className="flex items-center justify-center px-3 py-3 border-r border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A2A76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <input
                type={show ? "text" : "password"}
                placeholder="Enter the OTP"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g,"").slice(0,6))}
                onKeyDown={e => e.key === "Enter" && handleVerify()}
                className="flex-1 px-3 py-3 text-[14px] text-[#1A202C] placeholder-[#9CA3AF] focus:outline-none bg-transparent tracking-widest"
              />
              <button onClick={() => setShow(v => !v)} className="px-3 py-3 text-[#9CA3AF] hover:text-[#374151]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {show ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
                </svg>
              </button>
            </div>

            <button onClick={handleVerify} disabled={loading || otp.length < 4}
              className="w-full bg-[#0A2A76] hover:bg-[#071E57] disabled:opacity-50 text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors">
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>
          </div>

          <div className="relative h-36 overflow-hidden bg-gradient-to-b from-white to-[#EBF0FF]">
            <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full opacity-15">
              <rect x="5" y="50" width="30" height="90" fill="#0A2A76" rx="2"/><rect x="17" y="30" width="6" height="110" fill="#0A2A76" rx="1"/><rect x="45" y="22" width="42" height="118" fill="#0A2A76" rx="2"/><rect x="61" y="8" width="10" height="132" fill="#0A2A76" rx="1"/><rect x="95" y="58" width="26" height="82" fill="#0A2A76" rx="2"/><rect x="130" y="14" width="52" height="126" fill="#0A2A76" rx="2"/><rect x="148" y="0" width="16" height="140" fill="#0A2A76" rx="1"/><rect x="192" y="42" width="38" height="98" fill="#0A2A76" rx="2"/><rect x="240" y="10" width="48" height="130" fill="#0A2A76" rx="2"/><rect x="300" y="52" width="32" height="88" fill="#0A2A76" rx="2"/><rect x="340" y="26" width="42" height="114" fill="#0A2A76" rx="2"/><rect x="390" y="60" width="28" height="80" fill="#0A2A76" rx="2"/>
            </svg>
          </div>

          <div className="px-8 py-4 border-t border-[#F1F5F9] text-center bg-white">
            <Link href="/register" className="text-[14px] font-bold text-[#0A2A76]">New User? Create Account</Link>
            <p className="text-[11px] text-[#9CA3AF] mt-1">OTP Based Login With Encrypted Session.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black/85"/>}>
      <OTPContent/>
    </Suspense>
  );
}
