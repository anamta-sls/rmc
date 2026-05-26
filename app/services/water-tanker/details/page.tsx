"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";
import ServiceInfoBanner from "@/components/ui/ServiceInfoBanner";
import EstimatedPayable from "@/components/ui/EstimatedPayable";

const iCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] focus:outline-none focus:border-[#0A2A76] bg-white";
const sCls = `${iCls} appearance-none`;
const lCls = "block text-[13px] text-[#6B7280] mb-1.5";

export default function WaterTankerDetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({ time:"Morning (8AM – 12PM)", date:"12 Jun 2026", qty:"10,000 Litres (1 tanker)", purpose:"Domestic / Drinking", note:"Emergency Requirement" });
  const set = (f:string)=>(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setForm(v=>({...v,[f]:e.target.value}));
  return (
    <ServiceLayout title="Water Tanker Booking" subtitle="Step 2 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Citizen Details"},{label:"Service Details"},{label:"Pay"}]} current={2} />
            <ServiceInfoBanner icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>} title="Municipal Water Tanker Service" sla="SLA: Delivery within 24 hours" bg="bg-[#EFF6FF]" color="text-[#0369A1]"/>
            <h3 className="text-[16px] font-bold text-[#1A202C] mb-5">Service Requirements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className={lCls}>Preferred Delivery Time</label><div className="relative"><select className={sCls} value={form.time} onChange={set("time")}><option>Morning (8AM – 12PM)</option><option>Afternoon (12PM – 4PM)</option><option>Evening (4PM – 8PM)</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
              <div><label className={lCls}>Date</label><div className="relative"><input className={`${iCls} pr-10`} value={form.date} onChange={set("date")}/><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div></div>
              <div><label className={lCls}>Quantity Required *</label><div className="relative"><select className={sCls} value={form.qty} onChange={set("qty")}><option>5,000 Litres (0.5 tanker)</option><option>10,000 Litres (1 tanker)</option><option>20,000 Litres (2 tankers)</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
              <div><label className={lCls}>Purpose Of Water *</label><div className="relative"><select className={sCls} value={form.purpose} onChange={set("purpose")}><option>Domestic / Drinking</option><option>Construction</option><option>Agriculture</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
            </div>
            <div className="mt-5"><label className={lCls}>Note</label><textarea className={`${iCls} resize-none`} rows={4} value={form.note} onChange={set("note")}/></div>
          </div>
          <EstimatedPayable amount="₹350" onAction={()=>router.push("/services/water-tanker/payment")}/>
        </div>
      </div>
    </ServiceLayout>
  );
}
