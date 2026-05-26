import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BuildingIcon, DropletIcon, TruckIcon, TrashIcon, WindIcon, FileTextIcon, ChevronRightIcon
} from "@/components/ui/Icons";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  building: BuildingIcon,
  droplets: DropletIcon,
  truck: TruckIcon,
  trash: TrashIcon,
  wind: WindIcon,
  "file-text": FileTextIcon,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, color, href }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? FileTextIcon;

  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[#EEF2F7] bg-white p-5 hover:border-[#A8C0F0] hover:shadow-md transition-all flex flex-col"
    >
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", color)}>
        <Icon size={22} />
      </div>
      <div className="flex-1">
        <h3 className="text-[15px] font-semibold text-[#1A202C] mt-3">
          {title}
        </h3>
        <p className="text-[12px] text-[#718096] mt-1 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center text-[12px] font-medium text-[#0A2A76] gap-1 mt-3 group-hover:gap-2 transition-all">
        Get Started <ChevronRightIcon size={14} />
      </div>
    </Link>
  );
}
