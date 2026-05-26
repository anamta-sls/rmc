import { formatDateTime } from "@/lib/utils";
import type { ComplaintTimelineEvent } from "@/types/complaint";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, ClockIcon, InfoIcon } from "@/components/ui/Icons";

interface StatusTimelineProps {
  events: ComplaintTimelineEvent[];
}

const statusConfig: Record<string, { color: string; icon: React.ComponentType<{ size?: number }> }> = {
  pending: { color: "text-amber-500 bg-amber-50 border-amber-200", icon: ClockIcon },
  in_progress: { color: "text-blue-500 bg-blue-50 border-blue-200", icon: InfoIcon },
  resolved: { color: "text-[#0A2A76] bg-[#EBF0FF] border-[#A8C0F0]", icon: CheckCircleIcon },
  closed: { color: "text-[#718096] bg-[#F7F8FA] border-[#E2E8F0]", icon: CheckCircleIcon },
  reopened: { color: "text-orange-500 bg-orange-50 border-orange-200", icon: ClockIcon },
};

export default function StatusTimeline({ events }: StatusTimelineProps) {
  return (
    <div className="space-y-0">
      {events.map((event, index) => {
        const config = statusConfig[event.status] ?? statusConfig.pending;
        const Icon = config.icon;
        const isLast = index === events.length - 1;

        return (
          <div key={event.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0", config.color)}>
                <Icon size={14} />
              </div>
              {!isLast && (
                <div className={cn("w-0.5 flex-1 my-1", index < events.length - 1 && events[index].status === "resolved" ? "bg-[#0A2A76]" : "bg-[#E2E8F0]")} />
              )}
            </div>
            <div className={cn("pb-6", isLast && "pb-0")}>
              <p className="text-[13px] font-semibold text-[#1A202C] leading-tight">{event.message}</p>
              {event.officer && (
                <p className="text-[12px] text-[#718096] mt-0.5">by {event.officer}</p>
              )}
              <time className="text-[11px] text-[#9CA3AF] mt-1 block">{formatDateTime(event.timestamp)}</time>
            </div>
          </div>
        );
      })}
    </div>
  );
}
