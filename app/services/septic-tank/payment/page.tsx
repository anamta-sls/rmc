"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";

export default function SepticPaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState("upi");
  const methods = ["UPI","Debit / Credit Card","Net Banking","Wallet"];
  return (
    <ServiceLayout title="Payment" subtitle="Review and complete secure payment">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Citizen Details"},{label:"Tank Details"},{label:"Pay"}]} current={3} />
            <h2 className="text-[18px] font-bold text-[#1A202C] mb-5">Amount Details</h2>
            {[["Cleaning Charge","₹1,000"],["Service Fee","₹150"],["Convenience Fee","₹50"]].map(([l,v])=>(
              <div key={l} className="flex items-center justify-between mb-4"><span className="text-[14px] text-[#6B7280]">{l}</span><span className="text-[14px] font-medium">{v}</span></div>
            ))}
            <div className="border-t border-[#E8EDF2] pt-4 flex items-center justify-between"><span className="text-[16px] font-bold">Total Payable</span><span className="text-[22px] font-bold text-[#0A2A76]">₹ 1,200</span></div>
          </div>
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <h2 className="text-[18px] font-bold mb-5">Choose Payment Method</h2>
            <div className="space-y-3">
              {methods.map(m=>(
                <button key={m} onClick={()=>setMethod(m)} className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${method===m?"border-[#0A2A76]":"border-[#E8EDF2]"}`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${method===m?"border-[#0A2A76]":"border-[#CBD5E0]"}`}>{method===m&&<div className="w-2.5 h-2.5 rounded-full bg-[#0A2A76]"/>}</div>
                  <p className="text-[14px] font-bold">{m}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-[#0A2A76] rounded-2xl p-6 text-center">
            <p className="text-blue-200 text-[13px] mb-1">Estimated Payable</p>
            <p className="text-[38px] font-bold text-white mb-5">₹1,200</p>
            <button onClick={()=>router.push("/congratulations?type=septic_tank&ref=STC8820&amount=1200")} className="w-full bg-[#16A34A] text-white font-bold text-[16px] py-4 rounded-full flex items-center justify-center gap-3">
              Confirm Payment <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
