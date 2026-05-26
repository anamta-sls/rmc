"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSideCard from "@/components/layout/UserSideCard";
import PageHero from "@/components/layout/PageHero";

const inputCls = "w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[14px] text-[#9CA3AF] focus:outline-none focus:border-[#0A2A76] focus:ring-1 focus:ring-[#0A2A76] bg-white transition-colors";

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Complaint Registration Through Phone",
    body: (<>Contact our dedicated call center by dialing <strong>1800-570-1235</strong> from landline or mobile between 24*7 to raise complaint. Municipality/Corporation assures to provide a seamless support.</>),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "Complaint Registration Through Email",
    body: (<>Send an email to <strong>support@apnaranchi.in</strong> with your name, mobile number, problem description, and the location of the problem.<br/><br/>The call operator will check the email and register the complaint in the system. Operator may contact the citizen in case, information provided is insufficient or any clarification required.</>),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#E11D48">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
    title: "Complaint Registration Through WhatsApp",
    body: (<>To register a complaint, please send a message with the word <strong>&ldquo;Hi&rdquo;</strong> to our WhatsApp chatbot at <strong>+91 8141231235</strong>. You will then be guided through the complaint submission process by our automated system on the WhatsApp platform.</>),
  },
];

export default function ReopenComplaintPage() {
  const [complaintNo, setComplaintNo] = useState("");
  const [tokenNo, setTokenNo] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />
      <PageHero title="Complaint Re-Open" />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          <UserSideCard />

          <div className="space-y-5">
            {/* Search form */}
            <div className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-7">
              <h2 className="text-[20px] font-bold text-[#1A202C] mb-6">Complainant Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-[13px] text-[#374151] mb-1.5">Complaint No. :</label>
                  <input className={inputCls} placeholder="Enter your Complaint No." value={complaintNo} onChange={e => setComplaintNo(e.target.value)} />
                </div>
                <div>
                  <label className="block text-[13px] text-[#374151] mb-1.5">Token No. :</label>
                  <input className={inputCls} placeholder="Enter your Token No." value={tokenNo} onChange={e => setTokenNo(e.target.value)} />
                </div>
              </div>
              <button className="w-full bg-[#0A2A76] hover:bg-[#071E57] text-white font-bold text-[15px] py-4 rounded-full transition-colors">
                Search
              </button>
            </div>

            {/* Contact method cards */}
            {contactMethods.map((method, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E8EDF2] shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0">{method.icon}</div>
                  <h3 className="text-[16px] font-bold text-[#1A202C]">{method.title}</h3>
                </div>
                <p className="text-[14px] text-[#4A5568] leading-relaxed">{method.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
