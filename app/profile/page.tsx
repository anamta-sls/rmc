"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLayout from "@/components/layout/ServiceLayout";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import ToastContainer from "@/components/ui/Toast";
import { useToast } from "@/lib/hooks/useToast";
import { mockUser } from "@/data/mock/users";
import { wards } from "@/data/mock/services";
import { EditIcon, LogOutIcon } from "@/components/ui/Icons";

// Sidebar user card component
function UserSideCard({ name, phone, ward, email }: { name: string; phone: string; ward: string; email: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8EDF2] shadow-sm">
      {/* Blue top */}
      <div className="bg-gradient-to-br from-[#0A2A76] to-[#1a4aac] p-6 text-white">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3 border-2 border-white/30">
          <span className="font-bold text-[20px] text-white">{initials}</span>
        </div>
        <h2 className="font-bold text-[16px] leading-tight">{name}</h2>
        <div className="mt-2">
          <span className="inline-block text-[11px] bg-white/15 px-2.5 py-0.5 rounded-full font-medium border border-white/20">
            Citizen ID: RMC-8291
          </span>
        </div>
      </div>
      {/* Info rows */}
      <div className="p-4 space-y-3">
        {[
          { label: phone, icon: "📱" },
          { label: ward, icon: "🗂️" },
          { label: email, icon: "📧" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-xl px-3 py-2.5">
            <span className="text-sm">{item.icon}</span>
            <span className="text-[12px] text-[#4A5568] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    address: mockUser.address,
    ward: mockUser.ward,
    city: mockUser.city,
    state: mockUser.state,
    pincode: mockUser.pincode,
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSave = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setIsEditing(false);
    toast.success("Profile Updated", "Your profile has been saved successfully.");
  };

  return (
    <>
      <ServiceLayout title="User Dashboard">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <UserSideCard name={form.name} phone={form.phone} ward={form.ward} email={form.email} />

          {/* Main content */}
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#EBF0FF] rounded-xl p-4 text-center">
                <p className="text-[28px] font-bold text-[#0A2A76]">12</p>
                <p className="text-[12px] text-[#6B7280] font-medium">Total Bookings</p>
              </div>
              <div className="bg-[#DCFCE7] rounded-xl p-4 text-center">
                <p className="text-[28px] font-bold text-[#16A34A]">₹18.2k</p>
                <p className="text-[12px] text-[#6B7280] font-medium">Total Paid</p>
              </div>
            </div>

            {/* Menu items */}
            <div className="divide-y divide-[#F1F5F9]">
              {[
                { icon: "👤", label: "Edit Profile", sub: "Update your personal information", onClick: () => setIsEditing(!isEditing) },
                { icon: "📄", label: "My Documents", sub: "Aadhaar, PAN, certificates", href: "#" },
                { icon: "🕐", label: "Booking History", sub: "View past bookings & receipts", href: "/history" },
                { icon: "🔒", label: "Security Settings", sub: "Password, OTP preferences", href: "#" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick || undefined}
                  className="w-full flex items-center gap-4 py-4 hover:bg-[#F8FAFC] px-2 rounded-xl transition-colors text-left"
                >
                  <div className="w-10 h-10 bg-[#EBF0FF] rounded-xl flex items-center justify-center shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-[#1A202C]">{item.label}</p>
                    <p className="text-[12px] text-[#9CA3AF]">{item.sub}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              ))}

              {/* Logout */}
              <button
                onClick={() => router.push("/login")}
                className="w-full flex items-center gap-4 py-4 hover:bg-red-50 px-2 rounded-xl transition-colors text-left"
              >
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-red-500">Logout</p>
                  <p className="text-[12px] text-[#9CA3AF]">Sign out of Smart Ranchi</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </ServiceLayout>
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </>
  );
}
