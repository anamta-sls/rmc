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

export default function SepticTankDetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({ size:"Standard (Up to 5000L)", date:"12 Jun 2026", time:"Morning (8AM – 12PM)", note:"" });
  const set=(f:string)=>(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setForm(v=>({...v,[f]:e.target.value}));
  return (
    <ServiceLayout title="Septic Tank Cleaning" subtitle="Step 2 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Citizen Details"},{label:"Tank Details"},{label:"Pay"}]} current={2} />
            <ServiceInfoBanner icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>} title="Septic Tank Cleaning Service" sla="SLA: Service within 48 hours · GPS tracked" bg="bg-[#ECFDF5]" color="text-[#0E7490]"/>
            <h3 className="text-[16px] font-bold text-[#1A202C] mb-5">Tank Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className={lCls}>Tank Size *</label><div className="relative"><select className={sCls} value={form.size} onChange={set("size")}><option>Standard (Up to 5000L)</option><option>Large (5000L – 10000L)</option><option>Extra Large (10000L+)</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
              <div><label className={lCls}>Preferred Date</label><div className="relative"><input className={`${iCls} pr-10`} value={form.date} onChange={set("date")}/><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div></div>
              <div className="sm:col-span-2"><label className={lCls}>Preferred Time</label><div className="relative"><select className={sCls} value={form.time} onChange={set("time")}><option>Morning (8AM – 12PM)</option><option>Afternoon (12PM – 4PM)</option><option>Evening (4PM – 6PM)</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
            </div>
            <div className="mt-5"><label className={lCls}>Note</label><textarea className={`${iCls} resize-none`} rows={4} placeholder="Any special instructions..." value={form.note} onChange={set("note")}/></div>
          </div>
          <EstimatedPayable amount="₹1,200" onAction={()=>router.push("/services/septic-tank/payment")}/>
        </div>
      </div>
    </ServiceLayout>
  );
}
