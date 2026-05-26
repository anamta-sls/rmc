"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSideCard from "@/components/layout/UserSideCard";

const problemTypes = [
  "Road Damage", "Water Supply", "Street Light", "Garbage Collection",
  "Drainage Issue", "Encroachment", "Noise Pollution", "Park Maintenance",
];

const areaOptions = [
  "Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6",
  "Ward 7", "Ward 8", "Ward 9", "Ward 10", "Ward 11", "Ward 12",
  "Ward 13", "Ward 14", "Ward 15",
];

/* Shared input style */
const inputCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-[14px] text-[#1A202C] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0A2A76] focus:ring-1 focus:ring-[#0A2A76] bg-white transition-colors";
const selectCls = `${inputCls} appearance-none cursor-pointer pr-10`;
const labelCls = "block text-[13px] text-[#374151] mb-1.5";
const requiredMark = <span className="text-red-500">*</span>;

function SelectField({ label, placeholder, options, value, onChange }: {
  label: React.ReactNode; placeholder: string; options: string[];
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <div className="relative">
        <select className={selectCls} value={value} onChange={e => onChange(e.target.value)}>
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  );
}

export default function RegisterComplaintPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    problem: "", area: "", name: "", mobile: "+91 12345 67890",
    email: "", contactPerson: "", address: "", tenement: "",
    remarks: "Emergency Requirement",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    router.push("/complaints/register/payment");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />

      {/* Page Hero */}
<div
  className="relative overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #12369F 0%, #0A2A76 100%)",
    minHeight: 140,
  }}
>

  

  {/* 2. Vignette / gradient overlay */}
  <div
    className="absolute inset-0 pointer-events-none z-[2]"
    style={{
      background:
        "radial-gradient(circle at center, rgba(18,54,159,0.0) 40%, rgba(10,42,118,0.65) 100%)",
    }}
  />
  

  {/* 2. Right side illustration (city image) */}
  <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden z-[3]">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: "url('/image20.png')",
         backgroundSize: "45%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        opacity: 0.25,
      }}
    />
  </div>
  {/* 3. Base texture (Rectangle137.png) */}
  <div className="absolute inset-0 pointer-events-none z-[1]">
    <img
      src="/Rectangle137.png"
      alt=""
      className="w-full h-full object-cover opacity-100"
    />
  </div>

  {/* 4. Content */}
  <div className="relative z-[10] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-44 pb-10">
    <h1 className="text-[32px] font-bold text-white leading-tight">
      Register Your Complaint
    </h1>
  </div>
</div>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Sidebar */}
          <UserSideCard />

          {/* Form panel */}
          <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-8">
            <h2 className="text-[22px] font-bold text-[#1A202C] mb-7">Complainant Details</h2>

            <div className="space-y-5">
              {/* Row 1: Problem + Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SelectField label={<>Problem :{requiredMark}</>} placeholder="Select" options={problemTypes} value={form.problem} onChange={v => setForm(f => ({ ...f, problem: v }))} />
                <SelectField label={<>Select Your Area :{requiredMark}</>} placeholder="Select" options={areaOptions} value={form.area} onChange={v => setForm(f => ({ ...f, area: v }))} />
              </div>

              {/* Row 2: Name + Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Name :{requiredMark}</label>
                  <input className={inputCls} placeholder="Enter Your Name" value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label className={labelCls}>Mobile No.</label>
                  <input className={inputCls} value={form.mobile} onChange={set("mobile")} />
                </div>
              </div>

              {/* Row 3: Email + Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Email ID :</label>
                  <input className={inputCls} placeholder="Enter your Email ID" value={form.email} onChange={set("email")} type="email" />
                </div>
                <div>
                  <label className={labelCls}>Contact Person No. :{requiredMark}</label>
                  <input className={inputCls} placeholder="Enter Contact Person No" value={form.contactPerson} onChange={set("contactPerson")} />
                </div>
              </div>

              {/* Row 4: Address + Tenement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Residential Address :</label>
                  <input className={inputCls} placeholder="Enter your Residential Address" value={form.address} onChange={set("address")} />
                </div>
                <div>
                  <label className={labelCls}>Tenament No. :</label>
                  <input className={inputCls} placeholder="Enter Tenament No" value={form.tenement} onChange={set("tenement")} />
                </div>
              </div>

              {/* Row 5: Remarks + Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Remarks :</label>
                  <textarea
                    className={`${inputCls} resize-none`}
                    rows={5}
                    value={form.remarks}
                    onChange={set("remarks")}
                  />
                </div>
                <div>
                  <label className={labelCls}>Upload Require Details</label>
                  <div className="h-[136px] border-2 border-dashed border-[#3B82F6] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 transition-colors">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                    </svg>
                    <div className="text-center">
                      <p className="text-[14px] font-semibold text-[#1A202C]">Upload ID & Address Proof</p>
                      <p className="text-[12px] text-[#9CA3AF]">PDF, PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[16px] py-4 rounded-full transition-colors"
                >
                  Register Complaint
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
