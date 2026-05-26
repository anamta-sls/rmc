"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showDraft?: boolean;
}

export default function ServiceLayout({ children, title, subtitle, showDraft }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8]">
      <Header isAuthenticated={true} userName="Rahul Kumar Singh" unreadCount={2} />
      <PageHero title={title} subtitle={subtitle} action={showDraft ? (
        <button className="bg-white text-[#0A2A76] font-bold text-[14px] px-6 py-2.5 rounded-full border-2 border-white hover:bg-blue-50 transition-colors">
          Draft
        </button>
      ) : undefined} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
