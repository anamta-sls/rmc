"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import UserSideCard from "@/components/layout/UserSideCard";
import ServiceSteps from "@/components/ui/ServiceSteps";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const TIME_SLOTS = ["9AM–12PM","11AM–2PM","2PM–5PM","5PM–8PM","9AM–6PM","Full Day"];

const HALLS = ["Marriage Reception","Community Event","Corporate Meeting","Birthday Party","Cultural Program"];

export default function HallBookingPage() {
  const router = useRouter();
  const [hall, setHall] = useState("Marriage Reception");
  const [selectedDate, setSelectedDate] = useState(18);
  const [selectedSlot, setSelectedSlot] = useState("11AM–2PM");
  const year = 2026; const month = 5;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const bookedDays = [6, 11, 25, 26];
  const blockedDays = [8, 16, 21, 29];

  return (
    <ServiceLayout title="Book Hall" subtitle="Step 1 of 3: Booking details" showDraft>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
        <UserSideCard />
        <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
          <ServiceSteps steps={[{label:"Hall"},{label:"Details"},{label:"Pay"}]} current={1} />

          {/* Sub-tabs */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {["Book Now","My Bookings","Check Rent","Manage Booking","Refund Status"].map(t=>(
              <button key={t} className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${t==="Book Now"?"border-[#0A2A76] text-[#0A2A76] bg-white":"border-[#E2E8F0] text-[#374151] hover:border-[#0A2A76]"}`}>{t}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <h3 className="text-[15px] font-bold text-[#1A202C] mb-1">Filters</h3>
              <p className="text-[12px] text-[#6B7280] mb-3">Event Hall List</p>
              <div className="relative mb-5">
                <select className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#374151] focus:outline-none focus:border-[#0A2A76] appearance-none" value={hall} onChange={e=>setHall(e.target.value)}>
                  {HALLS.map(h=><option key={h}>{h}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px] font-bold text-[#1A202C]">June 2026</h3>
                <div className="flex gap-2">
                  <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#EBF0FF] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></button>
                  <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#EBF0FF] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map(d=><div key={d} className="text-[11px] text-[#9CA3AF] text-center font-medium py-1">{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({length: firstDay}).map((_,i)=><div key={`e${i}`}/>)}
                {Array.from({length: daysInMonth}).map((_,i)=>{
                  const d = i+1;
                  const isBooked = bookedDays.includes(d);
                  const isBlocked = blockedDays.includes(d);
                  const isSun = new Date(year, month, d).getDay() === 0;
                  const isSat = new Date(year, month, d).getDay() === 6;
                  const isSelected = d === selectedDate;
                  return (
                    <button key={d} onClick={()=>!isBooked&&!isBlocked&&setSelectedDate(d)}
                      className={`aspect-square text-[12px] font-medium rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? "bg-[#0A2A76] text-white" :
                        isBooked ? "text-red-400 cursor-default" :
                        isBlocked ? "text-[#D1D5DB] cursor-default" :
                        isSun || isSat ? "text-red-400 hover:bg-red-50" :
                        "text-[#374151] hover:bg-[#EBF0FF]"
                      }`}>
                      {d}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#0A2A76] inline-block"></span><span className="text-[11px] text-[#6B7280]">Selected</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span><span className="text-[11px] text-[#6B7280]">Booked</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] inline-block"></span><span className="text-[11px] text-[#6B7280]">Blocked</span></div>
              </div>
            </div>

            {/* Time slots */}
            <div>
              <h3 className="text-[15px] font-bold text-[#1A202C] mb-4">Available Time Slots – 18 May</h3>
              <div className="grid grid-cols-2 gap-3">
                {TIME_SLOTS.map(slot=>(
                  <button key={slot} onClick={()=>setSelectedSlot(slot)}
                    className={`py-3 text-[13px] font-semibold rounded-xl border-2 transition-colors ${
                      selectedSlot===slot ? "border-[#0A2A76] bg-[#EBF0FF] text-[#0A2A76]" : "border-[#E2E8F0] text-[#374151] hover:border-[#0A2A76]"
                    }`}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={()=>router.push("/services/hall-booking/details")}
            className="w-full mt-8 bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[16px] py-4 rounded-full transition-colors">
            Confirm Date & Slot
          </button>
        </div>
      </div>
    </ServiceLayout>
  );
}
