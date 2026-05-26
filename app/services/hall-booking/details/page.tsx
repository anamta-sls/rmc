"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";
import EstimatedPayable from "@/components/ui/EstimatedPayable";

const iCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] focus:outline-none focus:border-[#0A2A76] focus:ring-1 focus:ring-[#0A2A76] bg-white";
const sCls = `${iCls} appearance-none`;
const lCls = "block text-[13px] text-[#6B7280] mb-1.5";

export default function HallBookingDetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({ eventName:"Marriage Reception", date:"12 Jun 2026", timeSlot:"6 PM - 10 PM", eventType:"Family function", crowd:"350", organizer:"Amit Kumar", mobile:"+91 0987654321" });
  const set = (f:string) => (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setForm(v=>({...v,[f]:e.target.value}));

  return (
    <ServiceLayout title="Book Hall" subtitle="Step 2 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            <ServiceSteps steps={[{label:"Hall"},{label:"Details"},{label:"Pay"}]} current={2} />

            {/* Hall summary */}
            <div className="bg-[#EBF0FF] rounded-xl p-4 flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A2A76" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[15px] font-bold text-[#1A202C]">Morabadi hall</p>
                    <p className="text-[12px] text-[#6B7280]">Near Tagore Hill, Ward 21</p>
                  </div>
                  <span className="text-[12px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#BBF7D0]">Available</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-[22px] font-bold text-[#1A202C]">₹6,500 <span className="text-[12px] font-normal text-[#9CA3AF]">Rent/Day</span></p>
                  <span className="text-[12px] font-semibold text-amber-600">Capacity: 500</span>
                </div>
              </div>
            </div>

            <h3 className="text-[16px] font-bold text-[#1A202C] mb-5">Event Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={lCls}>Event Name</label>
                <div className="relative"><select className={sCls} value={form.eventName} onChange={set("eventName")}><option>Marriage Reception</option><option>Birthday Party</option><option>Corporate Event</option><option>Cultural Program</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div>
              </div>
              <div>
                <label className={lCls}>Date</label>
                <div className="relative"><input className={`${iCls} pr-10`} value={form.date} onChange={set("date")}/><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
              </div>
              <div>
                <label className={lCls}>Time Slot</label>
                <div className="relative"><input className={`${iCls} pr-10`} value={form.timeSlot} onChange={set("timeSlot")}/><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              </div>
              <div>
                <label className={lCls}>Event Type</label>
                <div className="relative"><select className={sCls} value={form.eventType} onChange={set("eventType")}><option>Family function</option><option>Corporate</option><option>Social</option></select><svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg></div>
              </div>
              <div>
                <label className={lCls}>Expected Crowd</label>
                <input className={iCls} value={form.crowd} onChange={set("crowd")}/>
              </div>
              <div>
                <label className={lCls}>Organizer Name</label>
                <input className={iCls} value={form.organizer} onChange={set("organizer")}/>
              </div>
              <div>
                <label className={lCls}>Mobile Number</label>
                <input className={iCls} value={form.mobile} onChange={set("mobile")}/>
              </div>
              <div>
                <label className={lCls}>Identity Proof (Optional)</label>
                <div className="border-2 border-dashed border-[#3B82F6] rounded-xl flex flex-col items-center justify-center gap-1.5 py-4 cursor-pointer hover:bg-blue-50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
                  <p className="text-[12px] font-semibold text-[#374151]">Upload ID & Address Proof</p>
                  <p className="text-[11px] text-[#9CA3AF]">PDF, PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <EstimatedPayable amount="₹6,500" onAction={()=>router.push("/services/hall-booking/payment")}/>
        </div>
      </div>
    </ServiceLayout>
  );
}
