import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  color?: string;
  trend?: { value: number; label: string };
}

export default function StatCard({ title, value, subtitle, icon, color = "bg-blue-50 text-[#0A2A76]", trend }: StatCardProps) {
  return (
    <div className="p-5 rounded-2xl border border-[#EEF2F7] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <p className="text-[12px] font-medium text-[#718096] uppercase tracking-wide">{title}</p>
        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0", color)}>
          {icon}
        </div>
      </div>
      <div>
        <p className="text-[28px] font-bold text-[#1A202C] mt-1">{value}</p>
        {subtitle && <p className="text-[11px] text-[#9CA3AF] mt-0.5">{subtitle}</p>}
      </div>
      {trend && (
        <div className="flex items-center gap-1">
          <span className={cn("text-xs font-medium", trend.value >= 0 ? "text-[#0A2A76]" : "text-red-500")}>
            {trend.value >= 0 ? "+" : ""}{trend.value}%
          </span>
          <span className="text-xs text-[#9CA3AF]">{trend.label}</span>
        </div>
      )}
    </div>
  );
}
