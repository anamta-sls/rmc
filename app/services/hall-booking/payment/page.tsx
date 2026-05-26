"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";

export default function HallBookingPaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState("upi");
  const methods = [
    { id:"upi", label:"UPI", sub:"Recommended", logo:<div className="font-black text-[12px] tracking-tight"><span style={{color:"#097939"}}>U</span><span style={{color:"#ED752E"}}>P</span><span style={{color:"#097939"}}>I</span></div> },
    { id:"card", label:"Debit / Credit Card", sub:"Visa, RuPay, Mastercard", logo:<svg width="26" height="18" viewBox="0 0 32 22" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="1" width="30" height="20" rx="3"/><line x1="1" y1="7" x2="31" y2="7"/><rect x="5" y="13" width="6" height="3" rx="1"/></svg> },
    { id:"netbanking", label:"Net Banking", sub:"All major Banks", logo:<svg width="24" height="22" viewBox="0 0 28 26" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l11-8 11 8"/><rect x="3" y="10" width="22" height="12"/><rect x="7" y="14" width="4" height="8"/><rect x="12" y="14" width="4" height="8"/><rect x="17" y="14" width="4" height="8"/><line x1="1" y1="22" x2="27" y2="22"/></svg> },
    { id:"wallet", label:"Wallet", sub:"Supported Wallets", logo:<svg width="24" height="22" viewBox="0 0 28 24" fill="none" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="26" height="18" rx="3"/><path d="M1 9h26"/><circle cx="21" cy="15" r="2"/></svg> },
  ];
  return (
    <ServiceLayout title="Payment" subtitle="Review and complete secure payment" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Hall"},{label:"Details"},{label:"Pay"}]} current={3} />
            <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Booking Summary</h2>
            <div className="flex items-center justify-between mb-3"><span className="text-[15px] font-bold text-[#0A2A76]">Hall-0245</span><span className="text-[12px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0]">Approved</span></div>
            <p className="text-[17px] font-bold text-[#1A202C] mb-1">Morabadi Community Hall</p>
            <p className="text-[13px] text-[#9CA3AF] mb-4">12 Jun, 6:00 PM – 10:00 PM</p>
            <div className="flex items-center gap-3"><div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden"><div className="h-full bg-[#0A2A76] rounded-full w-full"/></div><span className="text-[12px] text-[#9CA3AF] shrink-0">3 of 3</span></div>
          </div>
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Amount Details</h2>
            {[["Hall Rent","₹5,000"],["Security Deposit","₹1,000"],["Convenience Fee","₹50"]].map(([l,v])=>(
              <div key={l} className="flex items-center justify-between mb-4"><span className="text-[14px] text-[#6B7280]">{l}</span><span className="text-[14px] text-[#374151] font-medium">{v}</span></div>
            ))}
            <div className="border-t border-[#E8EDF2] pt-4 flex items-center justify-between"><span className="text-[16px] font-bold text-[#1A202C]">Total Payable</span><span className="text-[22px] font-bold text-[#0A2A76]">₹ 6,500</span></div>
          </div>
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Choose Payment Method</h2>
            <div className="space-y-3">
              {methods.map(m=>(
                <button key={m.id} onClick={()=>setMethod(m.id)} className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${method===m.id?"border-[#0A2A76]":"border-[#E8EDF2] hover:border-[#CBD5E0]"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method===m.id?"border-[#0A2A76]":"border-[#CBD5E0]"}`}>{method===m.id&&<div className="w-2.5 h-2.5 rounded-full bg-[#0A2A76]"/>}</div>
                    <div><p className="text-[14px] font-bold text-[#1A202C] text-left">{m.label}</p><p className="text-[12px] text-[#9CA3AF]">{m.sub}</p></div>
                  </div>
                  <div>{m.logo}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-[#0A2A76] rounded-2xl p-6 text-center">
            <p className="text-blue-200 text-[13px] mb-1">Estimated Payable</p>
            <p className="text-[38px] font-bold text-white mb-5">₹6,500</p>
            <button onClick={()=>router.push("/congratulations?type=hall_booking&ref=RMC-Hall-0245&amount=6500")} className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-[16px] py-4 rounded-full flex items-center justify-center gap-3 transition-colors">
              Confirm Payment
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
