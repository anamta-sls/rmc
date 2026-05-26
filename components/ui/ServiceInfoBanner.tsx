interface ServiceInfoBannerProps {
  icon: React.ReactNode;
  title: string;
  sla: string;
  color?: string;
  bg?: string;
}

export default function ServiceInfoBanner({ icon, title, sla, color = "text-[#0A2A76]", bg = "bg-[#EBF0FF]" }: ServiceInfoBannerProps) {
  return (
    <div className={`${bg} rounded-xl p-4 flex items-center gap-4 mb-6 border border-[#E8EDF2]`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shrink-0 shadow-sm`}>
        {icon}
      </div>
      <div>
        <p className={`text-[14px] font-bold ${color}`}>{title}</p>
        <p className="text-[12px] text-[#6B7280]">{sla}</p>
      </div>
    </div>
  );
}
