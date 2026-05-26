"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  unreadCount?: number;
  userName?: string;
  isAuthenticated?: boolean;
}

const navLinks = [
  { href: "/",                      label: "Home" },
  { href: "/complaints/register",   label: "Complaint Registration" },
  { href: "/complaints/reopen",     label: "Re-Open Complaint" },
  { href: "/complaints/status",     label: "Complaint Status" },
  { href: "/contact",               label: "Support" },
  { href: "/contact",               label: "Contact" },
  { href: "/history",               label: "History" },
];

export default function Header({ unreadCount = 0, userName, isAuthenticated = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">

      {/* ── Top Bar ─────────────────────────────────────────────── */}
      <div className="bg-[#0A2A76]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] sm:h-[80px]">

            {/* Logo — uses the horizontal logo.png on dark bg */}
            <Link href="/" className="shrink-0 flex items-center gap-3">
              {/* RMC circular seal */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/rmc-logo.jpeg" alt="RMC"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/25 shrink-0"/>
              {/* Brand text */}
              <div className="leading-tight">
                <span className="block text-white font-bold text-[17px] sm:text-[19px] tracking-tight leading-none">
                  Apna Ranchi
                </span>
                <span className="block text-[#60A5FA] text-[11px] sm:text-[12px] font-medium leading-tight mt-0.5">
                  Citizen App by RMC
                </span>
              </div>
            </Link>

            {/* Right: lang + icon buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language selector — hidden on small screens */}
              <button className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white text-[13px] font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                English
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {/* Bell */}
              <Link href="/notifications" aria-label="Notifications"
                className="relative w-10 h-10 sm:w-11 sm:h-11 bg-[#163880] hover:bg-[#1e4499] rounded-xl flex items-center justify-center text-white transition-colors border border-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-[#22C55E] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#0A2A76]">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </Link>

              {/* User */}
              <Link href={isAuthenticated ? "/profile" : "/login"} aria-label="Profile"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-[#163880] hover:bg-[#1e4499] rounded-xl flex items-center justify-center text-white transition-colors border border-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </Link>

              {/* Hamburger (mobile only) */}
              <button onClick={() => setMobileOpen(v => !v)} aria-label="Menu"
                className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
                {mobileOpen
                  ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Nav Bar ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#E2E8F0] shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between h-[50px]">
            <nav className="flex items-center">
              {navLinks.map((link, i) => (
                <Link key={`nav-${i}`} href={link.href}
                  className="text-[13px] font-medium text-[#374151] hover:text-[#0A2A76] hover:bg-[#EBF0FF] rounded-md px-3 py-2 transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </nav>
            {isAuthenticated ? (
              <Link href="/profile" className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-[#EBF0FF] transition-colors">
                <div className="w-7 h-7 bg-[#0A2A76] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-[10px]">
                    {userName ? userName.split(" ").map(n=>n[0]).join("").slice(0,2) : "RK"}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#374151] truncate max-w-[100px]">{userName ?? "Profile"}</span>
              </Link>
            ) : (
              <Link href="/login"
                className="px-5 py-2 bg-[#16A34A] text-white text-[13px] font-bold rounded-full hover:bg-[#15803D] transition-colors shadow-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#EEF2F7] shadow-xl">
          <nav className="px-4 py-3 space-y-0.5">
            {navLinks.map((link, i) => (
              <Link key={`mob-${i}`} href={link.href} onClick={() => setMobileOpen(false)}
                className="flex items-center px-3 py-3 text-[14px] font-medium text-[#374151] hover:bg-[#EBF0FF] hover:text-[#0A2A76] rounded-xl transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#F1F5F9] mt-1">
              <Link href="/login" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center px-3 py-3 text-[14px] font-bold bg-[#16A34A] text-white rounded-xl hover:bg-[#15803D] transition-colors">
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
