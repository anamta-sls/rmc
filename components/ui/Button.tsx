"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] tracking-wide transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2952C7] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary: "bg-[#0A2A76] text-white hover:bg-[#071E57] active:bg-[#05163E] shadow-sm",
      secondary: "bg-[#F1F5F9] text-[#374151] hover:bg-[#E2E8F0] active:bg-[#CBD5E0]",
      outline: "border-2 border-[#0A2A76] text-[#0A2A76] hover:bg-[#EBF0FF] active:bg-[#D6E0FF] bg-transparent",
      ghost: "text-[#4A5568] hover:bg-[#F1F5F9] active:bg-[#E2E8F0] bg-transparent",
      destructive: "bg-[#E53E3E] text-white hover:bg-[#C53030] active:bg-[#9B2C2C] shadow-sm",
      success: "bg-[#16A34A] text-white hover:bg-[#15803D] active:bg-[#166534] shadow-sm",
    };

    const sizes = {
      sm: "text-xs px-3 h-8",
      md: "text-sm px-4 h-10",
      lg: "text-sm font-semibold px-6 h-12",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        {...props}
      >
        {isLoading && (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
