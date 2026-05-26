interface EstimatedPayableProps {
  amount: string;
  buttonLabel?: string;
  onAction?: () => void;
}

export default function EstimatedPayable({ amount, buttonLabel = "Continue to payment", onAction }: EstimatedPayableProps) {
  return (
    <div className="bg-[#0A2A76] rounded-2xl p-6 text-center mt-5">
      <p className="text-blue-200 text-[13px] mb-1">Estimated Payable</p>
      <p className="text-[40px] font-bold text-white mb-5">{amount}</p>
      <button
        onClick={onAction}
        className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-[16px] py-4 rounded-full flex items-center justify-center gap-3 transition-colors"
      >
        {buttonLabel}
        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </span>
      </button>
    </div>
  );
}
