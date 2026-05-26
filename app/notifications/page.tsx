"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSideCard from "@/components/layout/UserSideCard";
import PageHero from "@/components/layout/PageHero";

const TABS = ["All", "Bookings", "Payments", "Alerts"];

const notifications = [
  {
    id:1, type:"booking", icon:(
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    ), iconBg:"bg-[#DCFCE7]", title:"Booking Confirmed — CHB1234567",
    body:"Your Community Hall booking for 18 May has been confirmed. Check-in: 11:00 AM", time:"2 min ago", unread:true,
  },
  {
    id:2, type:"payment", icon:(
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A2A76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ), iconBg:"bg-[#EBF0FF]", title:"Payment Successful — ₹3,500",
    body:"Txn ID: TXN8823411. Receipt available for download.", time:"21 min ago", unread:true,
  },
  {
    id:3, type:"alert", icon:(
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    ), iconBg:"bg-[#FEF3C7]", title:"Property Tax Due — ₹4,250",
    body:"Your property tax is due today. Pay now to avoid late fees.", time:"1 hour ago", unread:false,
  },
  {
    id:4, type:"booking", icon:(
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ), iconBg:"bg-[#ECFEFF]", title:"Water Tanker Assigned — WTB4521",
    body:"Driver: Suresh Kumar · ETA 45 minutes · Track live", time:"3 hours ago", unread:false,
  },
  {
    id:5, type:"alert", icon:(
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
    ), iconBg:"bg-[#FEE2E2]", title:"Grievance Update — GRV-2024-0812",
    body:"Your complaint regarding road damage has been escalated to Supervisor.", time:"Yesterday", unread:false,
  },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = notifications.filter(n => {
    if (activeTab === "All") return true;
    if (activeTab === "Bookings") return n.type === "booking";
    if (activeTab === "Payments") return n.type === "payment";
    if (activeTab === "Alerts") return n.type === "alert";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />
      <PageHero title="Notifications" />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          <UserSideCard />

          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm overflow-hidden">
            {/* Tabs + Mark all read */}
            <div className="flex items-center justify-between p-5 border-b border-[#F1F5F9]">
              <div className="flex gap-2.5">
                {TABS.map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                      activeTab === tab ? "bg-[#0A2A76] text-white" : "border border-[#E2E8F0] text-[#374151] hover:border-[#0A2A76] hover:text-[#0A2A76]"
                    }`}>
                    {tab}
                  </button>
                ))}
              </div>
              <button className="text-[13px] text-[#0A2A76] font-semibold border border-[#E2E8F0] px-4 py-2 rounded-full hover:bg-[#EBF0FF] transition-colors">
                Mark all read
              </button>
            </div>

            {/* Notification list */}
            <div className="divide-y divide-[#F8FAFC]">
              {filtered.map(notif => (
                <div key={notif.id} className={`flex items-start gap-4 px-6 py-4 ${notif.unread ? "bg-[#F8FAFF]" : ""} hover:bg-[#F8FAFC] transition-colors`}>
                  <div className={`w-11 h-11 ${notif.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                    {notif.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-bold text-[#1A202C] mb-0.5">{notif.title}</p>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{notif.body}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-1.5">{notif.time}</p>
                  </div>
                  {notif.unread && (
                    <div className="w-2.5 h-2.5 bg-[#0A2A76] rounded-full shrink-0 mt-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
