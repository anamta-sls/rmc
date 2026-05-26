"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSideCard from "@/components/layout/UserSideCard";
import PageHero from "@/components/layout/PageHero";

const FILTERS = ["All", "Hall Booking", "Septic Tank", "Water Tanker", "Waste Pickup", "Fogging Service"];

const bookings = [
  {
    id: "CHB1234567",
    title: "Community Hall Booking",
    meta: "CHB1234567 · Doranda Town Hall",
    date: "18 May 2024 · ₹11,500",
    status: "Confirmed",
    statusColor: "text-[#16A34A] bg-[#DCFCE7] border-[#BBF7D0]",
    iconBg: "bg-[#ECFDF5]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    id: "WTB4521",
    title: "Water Tanker",
    meta: "WTB4521 · 10,000L Delivery",
    date: "19 May 2024 · ₹350",
    status: "En Route",
    statusColor: "text-[#1D4ED8] bg-[#DBEAFE] border-[#BFDBFE]",
    iconBg: "bg-[#EFF6FF]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    id: "STC8820",
    title: "Septic Tank Cleaning",
    meta: "STC8820 · Ward 14 Doranda",
    date: "10 May 2024 · ₹1,200",
    status: "Completed",
    statusColor: "text-[#374151] bg-[#F3F4F6] border-[#E5E7EB]",
    iconBg: "bg-[#F0FDF4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    id: "FOG3210",
    title: "Fogging Service",
    meta: "FOG3210 · Sector B, Doranda",
    date: "3 hours ago",
    status: "Completed",
    statusColor: "text-[#374151] bg-[#F3F4F6] border-[#E5E7EB]",
    iconBg: "bg-[#F5F3FF]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.5 7a7 7 0 1 0-13.5 2.5"/><path d="M2 10h20M2 14h20M2 18h20" strokeDasharray="2 3"/>
      </svg>
    ),
  },
  {
    id: "CDW1120",
    title: "C&D Waste Pickup",
    meta: "CDW1120 · Lalpur",
    date: "28 Apr 2024 · ₹2,500",
    status: "Cancelled",
    statusColor: "text-[#DC2626] bg-[#FEE2E2] border-[#FECACA]",
    iconBg: "bg-[#FFF7ED]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
      </svg>
    ),
  },
];

export default function HistoryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />
      <PageHero title="History" />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          <UserSideCard />

          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm overflow-hidden">
            {/* Filter tabs */}
            <div className="flex items-center gap-2.5 p-5 overflow-x-auto border-b border-[#F1F5F9]">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors border-2 ${
                    activeFilter === f
                      ? "bg-[#0A2A76] text-white border-[#0A2A76]"
                      : "bg-white text-[#0A2A76] border-[#0A2A76] hover:bg-[#EBF0FF]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Booking list */}
            <div className="divide-y divide-[#F8FAFC]">
              {bookings.map(booking => (
                <div key={booking.id} className="flex items-center gap-4 px-6 py-5 hover:bg-[#F8FAFC] transition-colors">
                  <div className={`w-12 h-12 ${booking.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                    {booking.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-bold text-[#1A202C]">{booking.title}</p>
                    <p className="text-[12px] text-[#6B7280]">{booking.meta}</p>
                    <p className="text-[12px] text-[#9CA3AF]">{booking.date}</p>
                  </div>
                  <span className={`shrink-0 text-[12px] font-semibold px-3 py-1 rounded-full border ${booking.statusColor}`}>
                    {booking.status}
                  </span>
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
