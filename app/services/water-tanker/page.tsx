"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";
import ServiceInfoBanner from "@/components/ui/ServiceInfoBanner";

const WARDS = ["Ward 1 — Doranda","Ward 2 — Ratu Road","Ward 7 — Lalpur","Ward 14 — Doranda","Ward 21 — Tagore Hill"];
const iCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] focus:outline-none focus:border-[#0A2A76] bg-white";
const sCls = `${iCls} appearance-none`;
const lCls = "block text-[13px] text-[#6B7280] mb-1.5";

export default function WaterTankerPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name:"Rahul Kumar Singh", ward:"Ward 14 — Doranda", landmark:"Near RMC Primary School", mobile:"+91 98765 43210", address:"House No. 42, Sector B, Doranda, Ranchi" });
  const set = (f:string)=>(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setForm(v=>({...v,[f]:e.target.value}));
  return (
    <ServiceLayout title="Water Tanker Booking" subtitle="Step 1 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
          <ServiceSteps steps={[{label:"Citizen Details"},{label:"Service Details"},{label:"Pay"}]} current={1} />
          <ServiceInfoBanner icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>} title="Municipal Water Tanker Service" sla="SLA: Delivery within 24 hours" bg="bg-[#EFF6FF]" color="text-[#0369A1]"/>
          <h3 className="text-[16px] font-bold text-[#1A202C] mb-5">Citizen Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className={lCls}>Name*</label><input className={iCls} value={form.name} onChange={set("name")}/></div>
            <div><label className={lCls}>Ward Number *</label><div className="relative"><select className={sCls} value={form.ward} onChange={set("ward")}>{WARDS.map(w=><option key={w}>{w}</option>)}</select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
            <div><label className={lCls}>Landmark</label><input className={iCls} value={form.landmark} onChange={set("landmark")}/></div>
            <div><label className={lCls}>Mobile Number *</label><input className={iCls} value={form.mobile} onChange={set("mobile")}/></div>
          </div>
          <div className="mt-5"><label className={lCls}>Address *</label><textarea className={`${iCls} resize-none`} rows={4} value={form.address} onChange={set("address")}/></div>
          <button onClick={()=>router.push("/services/water-tanker/details")} className="w-full mt-6 bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[16px] py-4 rounded-full transition-colors">Save and Next</button>
        </div>
      </div>
    </ServiceLayout>
  );
}
