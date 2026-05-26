"use client";

import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  fullWidth?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, fullWidth, className, id, ...props }, ref) => {
    const selectId = id ?? `select_${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={selectId} className="text-[13px] font-medium text-[#374151] mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full appearance-none rounded-[10px] border bg-white px-3.5 py-2.5 text-sm text-[#1A202C] transition-colors min-h-[44px]",
              "focus:outline-none focus:ring-2 focus:ring-[#2952C7]/20 focus:border-[#2952C7]",
              "disabled:bg-[#F7F8FA] disabled:text-[#A0AEC0] disabled:cursor-not-allowed",
              error
                ? "border-[#E53E3E] focus:ring-[#E53E3E]/20 focus:border-[#E53E3E]"
                : "border-[#E2E8F0] hover:border-[#CBD5E0]",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#A0AEC0]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </span>
        </div>
        {error && <p className="text-[11px] text-[#E53E3E] mt-0.5">{error}</p>}
        {hint && !error && <p className="text-[11px] text-[#9CA3AF] mt-0.5">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
