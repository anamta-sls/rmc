"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, fullWidth, className, id, ...props }, ref) => {
    const inputId = id ?? `input_${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={inputId} className="text-[13px] font-medium text-[#374151] mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A0AEC0]">{leftIcon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-sm text-[#1A202C] placeholder-[#A0AEC0] transition-colors min-h-[44px]",
              "focus:outline-none focus:ring-2 focus:ring-[#2952C7]/20 focus:border-[#2952C7]",
              "disabled:bg-[#F7F8FA] disabled:text-[#A0AEC0] disabled:cursor-not-allowed",
              error
                ? "border-[#E53E3E] focus:ring-[#E53E3E]/20 focus:border-[#E53E3E]"
                : "border-[#E2E8F0] hover:border-[#CBD5E0]",
              leftIcon ? "pl-10" : undefined,
              rightIcon ? "pr-10" : undefined,
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A0AEC0]">{rightIcon}</span>
          )}
        </div>
        {error && <p className="text-[11px] text-[#E53E3E] flex items-center gap-1 mt-0.5">{error}</p>}
        {hint && !error && <p className="text-[11px] text-[#9CA3AF] mt-0.5">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
