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
      style={{
        background:
          "linear-gradient(135deg,#0A2A76 0%,#0d3494 55%,#1648b8 100%)",
        minHeight: 130,
      }}
    >
      {/* 1. Base texture */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <img
          src="/Rectangle137.png"
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* 2. Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(18,54,159,0.0) 40%, rgba(10,42,118,0.65) 100%)",
        }}
      />

      {/* 3. Right side illustration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden z-[3]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/image20.png')",
            backgroundSize: "45%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            opacity: 0.25,
          }}
        />
      </div>

      {/* 4. Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-44 pb-10 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] sm:text-[32px] font-bold text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-blue-200 text-[12px] sm:text-[14px] mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}