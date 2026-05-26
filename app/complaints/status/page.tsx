"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSideCard from "@/components/layout/UserSideCard";
import PageHero from "@/components/layout/PageHero";

const inputCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[14px] text-[#9CA3AF] focus:outline-none focus:border-[#0A2A76] focus:ring-1 focus:ring-[#0A2A76] bg-white transition-colors";

const TABS = ["Search Complaint", "All Complaints", "Resolved", "In Progress"];

export default function ComplaintStatusPage() {
  const [activeTab, setActiveTab] = useState("Search Complaint");
  const [form, setForm] = useState({ complaintNo: "", tokenNo: "", email: "", mobile: "" });

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />
      <PageHero title="Complaint Status" />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          <UserSideCard />

          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-7">
            {/* Tab pills */}
            <div className="flex items-center gap-2.5 mb-7 flex-wrap">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold border-2 transition-colors ${
                    activeTab === tab
                      ? "bg-[#0A2A76] text-white border-[#0A2A76]"
                      : "bg-white text-[#0A2A76] border-[#0A2A76] hover:bg-[#EBF0FF]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form fields */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] text-[#374151] mb-1.5">Complaint No. :</label>
                  <input className={inputCls} placeholder="Enter your Complaint No." value={form.complaintNo} onChange={e => setForm(f=>({...f,complaintNo:e.target.value}))} />
                </div>
                <div>
                  <label className="block text-[13px] text-[#374151] mb-1.5">Token No. :</label>
                  <input className={inputCls} placeholder="Enter your Token No." value={form.tokenNo} onChange={e => setForm(f=>({...f,tokenNo:e.target.value}))} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] text-[#374151] mb-1.5">Email ID :</label>
                  <input className={inputCls} placeholder="Enter your  Email ID" value={form.email} onChange={e => setForm(f=>({...f,email:e.target.value}))} type="email"/>
                </div>
                <div>
                  <label className="block text-[13px] text-[#374151] mb-1.5">Mobile No. :</label>
                  <input className={inputCls} placeholder="Enter your Mobile No." value={form.mobile} onChange={e => setForm(f=>({...f,mobile:e.target.value}))} />
                </div>
              </div>
              <button className="w-full bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[15px] py-4 rounded-full transition-colors mt-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
