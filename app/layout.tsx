import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: { default: "Apna Ranchi | Citizen App by RMC", template: "%s | Apna Ranchi" },
  description: "Ranchi Municipal Corporation — your one-stop portal for all municipal services including complaints, bookings, water supply and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F0F4F8]">{children}</body>
    </html>
  );
}
