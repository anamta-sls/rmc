"use client";

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, fullWidth, className, id, ...props }, ref) => {
    const textareaId = id ?? `textarea_${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={textareaId} className="text-[13px] font-medium text-[#374151] mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-sm text-[#1A202C] placeholder-[#A0AEC0] transition-colors resize-none min-h-[100px]",
            "focus:outline-none focus:ring-2 focus:ring-[#2952C7]/20 focus:border-[#2952C7]",
            "disabled:bg-[#F7F8FA] disabled:text-[#A0AEC0] disabled:cursor-not-allowed",
            error
              ? "border-[#E53E3E] focus:ring-[#E53E3E]/20 focus:border-[#E53E3E]"
              : "border-[#E2E8F0] hover:border-[#CBD5E0]",
            className
          )}
          rows={4}
          {...props}
        />
        {error && <p className="text-[11px] text-[#E53E3E] mt-0.5">{error}</p>}
        {hint && !error && <p className="text-[11px] text-[#9CA3AF] mt-0.5">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
