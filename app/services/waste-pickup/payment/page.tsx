"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";

export default function WastePaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState("upi");
  return (
    <ServiceLayout title="Payment" subtitle="Review and complete secure payment">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Citizen Details"},{label:"Waste Details"},{label:"Pay"}]} current={3} />
            <h2 className="text-[18px] font-bold mb-5">Amount Details</h2>
            {[["Pickup Charge","₹2,000"],["Vehicle Fee","₹400"],["Convenience Fee","₹100"]].map(([l,v])=>(
              <div key={l} className="flex items-center justify-between mb-4"><span className="text-[14px] text-[#6B7280]">{l}</span><span className="text-[14px] font-medium">{v}</span></div>
            ))}
            <div className="border-t border-[#E8EDF2] pt-4 flex justify-between"><span className="text-[16px] font-bold">Total Payable</span><span className="text-[22px] font-bold text-[#0A2A76]">₹ 2,500</span></div>
          </div>
          <div className="bg-[#0A2A76] rounded-2xl p-6 text-center">
            <p className="text-blue-200 text-[13px] mb-1">Estimated Payable</p>
            <p className="text-[38px] font-bold text-white mb-5">₹2,500</p>
            <button onClick={()=>router.push("/congratulations?type=waste_pickup&ref=CDW1120&amount=2500")} className="w-full bg-[#16A34A] text-white font-bold text-[16px] py-4 rounded-full flex items-center justify-center gap-3">
              Confirm Payment <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
