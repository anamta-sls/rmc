import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { formatDate, getStatusColor, getStatusLabel, truncate } from "@/lib/utils";
import type { Complaint } from "@/types/complaint";
import { ChevronRightIcon, MapPinIcon, CalendarIcon } from "@/components/ui/Icons";

interface ComplaintCardProps {
  complaint: Complaint;
}

const categoryLabels: Record<string, string> = {
  road: "Road & Infrastructure",
  water: "Water Supply",
  sanitation: "Sanitation",
  electricity: "Electricity",
  drainage: "Drainage",
  garbage: "Garbage & Waste",
  streetlight: "Street Lights",
  encroachment: "Encroachment",
  other: "Other",
};

const statusVariantMap: Record<string, "default" | "success" | "warning" | "error" | "info"> = {
  pending: "warning",
  in_progress: "info",
  resolved: "success",
  closed: "default",
  reopened: "error",
};

export default function ComplaintCard({ complaint }: ComplaintCardProps) {
  return (
    <Link
      href={`/complaints/status?id=${complaint.id}`}
      className="block rounded-2xl border border-[#EEF2F7] bg-white p-5 hover:border-[#C7D4F0] hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-mono text-[#9CA3AF] mb-1">{complaint.complaintNumber}</p>
          <h3 className="text-[14px] font-semibold text-[#1A202C] leading-snug">
            {truncate(complaint.title, 70)}
          </h3>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <Badge variant={statusVariantMap[complaint.status] ?? "default"}>
            {getStatusLabel(complaint.status)}
          </Badge>
          <ChevronRightIcon size={16} className="text-[#9CA3AF]" />
        </div>
      </div>

      <p className="text-[12px] text-[#718096] mb-3 leading-relaxed">
        {truncate(complaint.description, 100)}
      </p>

      <div className="flex items-center gap-4 text-[11px] text-[#9CA3AF]">
        <span className="inline-flex items-center gap-1">
          <MapPinIcon size={12} />
          {complaint.ward}
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarIcon size={12} />
          {formatDate(complaint.createdAt)}
        </span>
        <span className="bg-[#F1F5F9] text-[#475569] px-2 py-0.5 rounded-full">
          {categoryLabels[complaint.category] ?? complaint.category}
        </span>
      </div>
    </Link>
  );
}
