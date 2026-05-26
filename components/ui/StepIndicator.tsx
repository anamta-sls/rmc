import { cn } from "@/lib/utils";

interface Step {
  label: string;
  description?: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all",
                  isCompleted
                    ? "bg-[#0A2A76] text-white"
                    : isActive
                    ? "bg-[#0A2A76] text-white ring-4 ring-[#0A2A76]/20"
                    : "bg-[#F1F5F9] text-[#9CA3AF]"
                )}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium mt-1.5 text-center",
                  isActive ? "text-[#0A2A76]" : isCompleted ? "text-[#0A2A76]" : "text-[#9CA3AF]"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2 mb-5 transition-all",
                  isCompleted ? "bg-[#0A2A76]" : "bg-[#E2E8F0]"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
