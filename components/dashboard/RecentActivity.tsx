import Card from "@/components/ui/Card";
import { timeAgo } from "@/lib/utils";
import { CheckCircleIcon, AlertCircleIcon, CreditCardIcon, InfoIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "check-circle": CheckCircleIcon,
  "alert-circle": AlertCircleIcon,
  "credit-card": CreditCardIcon,
  info: InfoIcon,
};

interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
  icon: string;
  color: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card>
      <h2 className="text-[15px] font-semibold text-[#1A202C] mb-4">Recent Activity</h2>
      <div className="divide-y divide-[#F7F8FA]">
        {activities.map((activity) => {
          const Icon = iconMap[activity.icon] ?? InfoIcon;
          return (
            <div key={activity.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5", activity.color)}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#1A202C]">{activity.title}</p>
                <p className="text-[12px] text-[#718096] mt-0.5 leading-relaxed">{activity.description}</p>
              </div>
              <time className="text-[11px] text-[#9CA3AF] shrink-0">{timeAgo(activity.timestamp)}</time>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
