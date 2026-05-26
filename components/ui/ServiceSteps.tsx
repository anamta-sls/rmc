interface ServiceStepsProps {
  steps: { label: string }[];
  current: number; // 1-based
}

export default function ServiceSteps({ steps, current }: ServiceStepsProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      {steps.map((step, i) => {
        const num = i + 1;
        const done = num < current;
        const active = num === current;
        return (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] shadow-sm ${
                done || active ? "bg-[#0A2A76] text-white" : "bg-[#E5E7EB] text-[#9CA3AF]"
              }`}>
                {done ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : num}
              </div>
              <span className={`text-[11px] mt-1.5 whitespace-nowrap ${active ? "text-[#0A2A76] font-semibold" : "text-[#9CA3AF]"}`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 mb-5 ${num < current ? "bg-[#0A2A76]" : "bg-[#E5E7EB]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
