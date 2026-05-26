import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function PageHero({ title, subtitle, action }: PageHeroProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background:"linear-gradient(135deg,#0A2A76 0%,#0d3494 55%,#1648b8 100%)", minHeight:130 }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize:"22px 22px" }}/>
      {/* Building silhouette right */}
      <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-[0.12]">
        <svg viewBox="0 0 400 130" width="100%" height="100%" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
          <path d="M110,130 L110,48 Q160,12 200,8 Q240,4 280,8 Q325,14 370,48 L370,130Z" fill="white"/>
          <ellipse cx="200" cy="8" rx="26" ry="13" fill="white"/>
          <rect x="186" y="-5" width="28" height="16" fill="white" rx="2"/>
          {[130,145,160,175,190,205,220,235,250,265,280,295,310,330,350].map((x,i)=>(
            <rect key={i} x={x} y={48} width="5" height="82" fill="white" opacity="0.65"/>
          ))}
          <rect x="55"  y="78" width="42" height="52" fill="white" rx="1"/>
          <rect x="370" y="82" width="42" height="48" fill="white" rx="1"/>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] sm:text-[32px] font-bold text-white leading-tight">{title}</h1>
          {subtitle && <p className="text-blue-200 text-[12px] sm:text-[14px] mt-1">{subtitle}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
