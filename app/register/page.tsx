"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

const WARDS = ["Ward 1 — Doranda","Ward 2 — Ratu Road","Ward 7 — Lalpur","Ward 14 — Doranda","Ward 21 — Tagore Hill"];
const iCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] focus:outline-none focus:border-[#0A2A76] focus:ring-1 focus:ring-[#0A2A76] bg-white transition-colors";
const sCls = `${iCls} appearance-none`;
const lCls = "block text-[13px] text-[#6B7280] mb-1.5";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name:"Rahul Kumar Singh", mobile:"", email:"", ward:"Ward 14 — Doranda", pin:"" });
  const set=(f:string)=>(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>setForm(v=>({...v,[f]:e.target.value}));

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={false} />
      <PageHero title="Create Account" />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-8">
          <h2 className="text-[20px] font-bold text-[#1A202C] mb-7">Register as a Apna Ranchi Citizen</h2>

          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={lCls}>Full Name *</label>
                <input className={iCls} value={form.name} onChange={set("name")} placeholder="Enter your full name"/>
              </div>
              <div>
                <label className={lCls}>Mobile Number *</label>
                <div className="flex border border-[#E2E8F0] rounded-xl overflow-hidden focus-within:border-[#0A2A76] focus-within:ring-1 focus-within:ring-[#0A2A76] transition-all bg-white">
                  <div className="flex items-center gap-1.5 px-3 py-3 border-r border-[#E2E8F0] bg-[#F8FAFC] shrink-0 text-[13px] font-semibold text-[#374151]">
                    🇮🇳 +91
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                  <input className="flex-1 px-3 py-3 text-[14px] focus:outline-none bg-transparent" placeholder="Enter your mobile number" value={form.mobile} onChange={set("mobile")}/>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={lCls}>Email ID</label>
                <input className={iCls} placeholder="abc@example.com" value={form.email} onChange={set("email")} type="email"/>
              </div>
              <div>
                <label className={lCls}>Ward Number *</label>
                <div className="relative">
                  <select className={sCls} value={form.ward} onChange={set("ward")}>
                    {WARDS.map(w=><option key={w}>{w}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={lCls}>PIN Code</label>
                <input className={iCls} placeholder="Enter pin code" value={form.pin} onChange={set("pin")}/>
              </div>
              <div>
                <label className={lCls}>Identity Proof (Optional)</label>
                <div className="border-2 border-dashed border-[#3B82F6] rounded-xl flex flex-col items-center justify-center gap-1.5 py-4 cursor-pointer hover:bg-blue-50 transition-colors h-[52px] flex-row gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
                  <div>
                    <p className="text-[12px] font-semibold text-[#374151]">Upload ID & Address Proof</p>
                    <p className="text-[11px] text-[#9CA3AF]">PDF, PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={()=>router.push("/login")} className="w-full bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[16px] py-4 rounded-full transition-colors mt-2">
              Create Account
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
