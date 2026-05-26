"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSideCard from "@/components/layout/UserSideCard";

function PaymentContent() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState("upi");

  const paymentMethods = [
    {
      id: "upi",
      label: "UPI",
      sub: "Recommended",
      logo: (
        <div className="flex items-center gap-0.5">
          <span className="font-black text-[#097939] text-[13px] tracking-tight">U</span>
          <span className="font-black text-[#ED752E] text-[13px] tracking-tight">P</span>
          <span className="font-black text-[#097939] text-[13px] tracking-tight">I</span>
        </div>
      ),
    },
    {
      id: "card",
      label: "Debit / Credit Card",
      sub: "Visa, RuPay, Mastercard",
      logo: (
        <svg width="28" height="20" viewBox="0 0 32 22" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="1" width="30" height="20" rx="3"/>
          <line x1="1" y1="7" x2="31" y2="7"/>
          <rect x="5" y="13" width="6" height="3" rx="1"/>
        </svg>
      ),
    },
    {
      id: "netbanking",
      label: "Net Banking",
      sub: "All major Banks",
      logo: (
        <svg width="26" height="24" viewBox="0 0 28 26" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10l11-8 11 8"/><rect x="3" y="10" width="22" height="12" rx="0"/>
          <rect x="7" y="14" width="4" height="8"/><rect x="12" y="14" width="4" height="8"/><rect x="17" y="14" width="4" height="8"/>
          <line x1="1" y1="22" x2="27" y2="22"/>
        </svg>
      ),
    },
    {
      id: "wallet",
      label: "Wallet",
      sub: "Supported Wallets",
      logo: (
        <svg width="26" height="24" viewBox="0 0 28 24" fill="none" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="26" height="18" rx="3"/>
          <path d="M1 9h26"/><circle cx="21" cy="15" r="2"/>
        </svg>
      ),
    },
  ];

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
          <h1 className="text-[32px] font-bold text-white leading-tight">Payment</h1>
          <p className="text-blue-200 text-[14px] mt-1">Review and complete secure payment</p>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          <UserSideCard />

          <div className="space-y-5">
            {/* Step Indicator */}
            <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                {[
                  { n: 1, label: "Citizen Details" },
                  { n: 2, label: "Request Details" },
                  { n: 3, label: "Pay" },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0A2A76] text-white font-bold text-[15px] flex items-center justify-center shadow-sm">
                        {step.n}
                      </div>
                      <span className="text-[11px] text-[#6B7280] mt-1.5 whitespace-nowrap">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 h-0.5 bg-[#0A2A76] mx-2 mt-[-18px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
              <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Booking Summary</h2>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[15px] font-bold text-[#0A2A76]">Fogging-0245</span>
                <span className="text-[12px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0]">
                  Approved
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-[#1A202C] mb-1.5">Mosquito Infestation</h3>
              <p className="text-[13px] text-[#9CA3AF] mb-4">12 June, 2026</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0A2A76] rounded-full w-full" />
                </div>
                <span className="text-[12px] text-[#9CA3AF] shrink-0">3 of 3</span>
              </div>
            </div>

            {/* Amount Details */}
            <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
              <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Amount Details</h2>
              <div className="space-y-4">
                {[
                  { label: "Fogging Charge", amount: "₹5,000" },
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
                  <span className="text-[22px] font-bold text-[#0A2A76]">₹ 6,500</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
              <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Choose Payment Method</h2>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left ${
                      selectedMethod === method.id
                        ? "border-[#0A2A76] bg-white"
                        : "border-[#E8EDF2] bg-white hover:border-[#CBD5E0]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Radio */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedMethod === method.id ? "border-[#0A2A76]" : "border-[#CBD5E0]"}`}>
                        {selectedMethod === method.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0A2A76]" />
                        )}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-[#1A202C]">{method.label}</p>
                        <p className="text-[12px] text-[#9CA3AF]">{method.sub}</p>
                      </div>
                    </div>
                    <div>{method.logo}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm Payment CTA */}
            <div className="bg-[#0A2A76] rounded-2xl p-6 text-center">
              <p className="text-blue-200 text-[13px] mb-1">Estimated Payable</p>
              <p className="text-[38px] font-bold text-white mb-5">₹6,500</p>
              <button
                onClick={() => router.push("/congratulations?type=complaint&ref=RMC-Hall-0245&amount=6500")}
                className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-[16px] py-4 rounded-full flex items-center justify-center gap-3 transition-colors"
              >
                Confirm Payment
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ComplaintPaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>}>
      <PaymentContent />
    </Suspense>
  );
}
