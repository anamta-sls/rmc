import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidths = {
  sm: "max-w-sm",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export default function PageContainer({ children, className, maxWidth = "xl" }: PageContainerProps) {
  return (
    <main className={cn("flex-1 mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8", maxWidths[maxWidth], className)}>
      {children}
    </main>
  );
}
