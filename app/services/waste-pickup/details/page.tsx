"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";
import EstimatedPayable from "@/components/ui/EstimatedPayable";

const iCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] focus:outline-none focus:border-[#0A2A76] bg-white";
const sCls = `${iCls} appearance-none`;
const lCls = "block text-[13px] text-[#6B7280] mb-1.5";

export default function WastePickupDetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({ wasteType:"Construction Debris", qty:"1-5 Tonnes", date:"12 Jun 2026", time:"Morning (8AM – 12PM)", note:"" });
  const set=(f:string)=>(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setForm(v=>({...v,[f]:e.target.value}));
  return (
    <ServiceLayout title="C&D Waste Pickup" subtitle="Step 2 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Citizen Details"},{label:"Waste Details"},{label:"Pay"}]} current={2} />
            <h3 className="text-[16px] font-bold text-[#1A202C] mb-5">Waste Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className={lCls}>Waste Type *</label><div className="relative"><select className={sCls} value={form.wasteType} onChange={set("wasteType")}><option>Construction Debris</option><option>Demolition Waste</option><option>Renovation Waste</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
              <div><label className={lCls}>Approximate Quantity</label><div className="relative"><select className={sCls} value={form.qty} onChange={set("qty")}><option>1-5 Tonnes</option><option>5-10 Tonnes</option><option>10+ Tonnes</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
              <div><label className={lCls}>Preferred Date</label><input className={iCls} value={form.date} onChange={set("date")}/></div>
              <div><label className={lCls}>Preferred Time</label><div className="relative"><select className={sCls} value={form.time} onChange={set("time")}><option>Morning (8AM – 12PM)</option><option>Afternoon (12PM – 4PM)</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
            </div>
            <div className="mt-5"><label className={lCls}>Note</label><textarea className={`${iCls} resize-none`} rows={4} placeholder="Any special instructions..." value={form.note} onChange={set("note")}/></div>
          </div>
          <EstimatedPayable amount="₹2,500" onAction={()=>router.push("/services/waste-pickup/payment")}/>
        </div>
      </div>
    </ServiceLayout>
  );
}
