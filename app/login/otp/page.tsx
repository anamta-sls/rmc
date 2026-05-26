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
      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <Link
          href="/login"
          className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Link>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Form */}
          <div className="px-8 pt-8 pb-4">
            <h2 className="text-[22px] font-bold text-[#1A202C] mb-1">
              Enter 6-digit OTP
            </h2>
            <p className="text-[13px] text-[#718096] mb-6">
              Valid For 5:00 Minutes
            </p>

            {/* OTP Input */}
            <div className="flex items-center border border-[#E2E8F0] rounded-xl overflow-hidden focus-within:border-[#0A2A76] focus-within:ring-1 focus-within:ring-[#0A2A76] transition-all mb-4">
              
              

              <input
                type={show ? "text" : "password"}
                placeholder="Enter the OTP"
                value={otp}
                onChange={e =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                onKeyDown={e => e.key === "Enter" && handleVerify()}
                className="flex-1 px-3 py-3 text-[14px] text-[#1A202C] placeholder-[#9CA3AF] focus:outline-none bg-transparent tracking-widest"
              />

              <button
                onClick={() => setShow(v => !v)}
                className="px-3 py-3 text-[#9CA3AF] hover:text-[#374151]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {show ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Verify Button */}
            <button
  onClick={handleVerify}
  disabled={loading || otp.length < 4}
  className={`w-full flex items-center justify-center font-bold text-[15px] py-3.5 px-5 rounded-full transition-colors ${
    loading || otp.length < 6
      ? "bg-[#4A5568] text-white opacity-60"
      : "bg-[#12369F] hover:bg-[#0F2E85] text-white"
  }`}
>
  {loading ? "Verifying..." : "Verify & Continue"}
</button>
          </div>

          {/* Bottom Illustration */}
          <div className="relative h-36 overflow-hidden">
            <img
              src="/image-21.png"
              alt=""
              className="absolute inset-0 m-auto h-[120%] w-auto object-contain opacity-100"
            />
          </div>

          {/* Footer */}
          <div className="px-8 py-4 border-t border-[#F1F5F9] text-center bg-white">
            <Link href="/register" className="text-[14px] font-bold text-[#0A2A76]">
              New User? Create Account
            </Link>
            <p className="text-[11px] text-[#9CA3AF] mt-1">
              OTP Based Login With Encrypted Session.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black/85" />}>
      <OTPContent />
    </Suspense>
  );
}