"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";
import ServiceInfoBanner from "@/components/ui/ServiceInfoBanner";
import EstimatedPayable from "@/components/ui/EstimatedPayable";

const REQUEST_TYPES = [
  { id:"mosquito", emoji:"🦟", label:"Mosquito Infestation", sub:"High mosquito density" },
  { id:"dengue", emoji:"🔴", label:"Dengue Prevention", sub:"Preventive fogging" },
  { id:"malaria", emoji:"🟢", label:"Malaria Prevention", sub:"Standing water nearby" },
  { id:"emergency", emoji:"🚨", label:"Emergency Fogging", sub:"Outbreak reported" },
];

const iCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] focus:outline-none focus:border-[#0A2A76] bg-white";
const sCls = `${iCls} appearance-none`;
const lCls = "block text-[13px] text-[#6B7280] mb-1.5";

export default function FoggingDetailsPage() {
  const router = useRouter();
  const [requestType, setRequestType] = useState("mosquito");
  const [severity, setSeverity] = useState("Low");
  const [date, setDate] = useState("12 Jun 2026");

  return (
    <ServiceLayout title="Fogging Service Request" subtitle="Step 2 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Citizen Details"},{label:"Request Details"},{label:"Pay"}]} current={2} />
            <ServiceInfoBanner icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 7a7 7 0 1 0-13.5 2.5"/><path d="M2 10h20M2 14h20M2 18h20" strokeDasharray="2 3"/></svg>} title="Mosquito Fogging Service" sla="SLA: Service within 48 hours" bg="bg-[#F5F3FF]" color="text-[#7C3AED]"/>

            <h3 className="text-[15px] font-bold text-[#1A202C] mb-4">Request Type *</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {REQUEST_TYPES.map(rt=>(
                <button key={rt.id} onClick={()=>setRequestType(rt.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-colors ${requestType===rt.id?"border-[#0A2A76] bg-[#EBF0FF]":"border-[#E2E8F0] hover:border-[#0A2A76]"}`}>
                  <span className="text-xl block mb-1">{rt.emoji}</span>
                  <p className="text-[13px] font-bold text-[#1A202C]">{rt.label}</p>
                  <p className="text-[11px] text-[#9CA3AF]">{rt.sub}</p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div><label className={lCls}>Severity Level</label><div className="relative"><select className={sCls} value={severity} onChange={e=>setSeverity(e.target.value)}><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>
              <div><label className={lCls}>Date</label><div className="relative"><input className={`${iCls} pr-10`} value={date} onChange={e=>setDate(e.target.value)}/><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div></div>
            </div>
          </div>
          <EstimatedPayable amount="₹200" onAction={()=>router.push("/services/fogging/payment")}/>
        </div>
      </div>
    </ServiceLayout>
  );
}
