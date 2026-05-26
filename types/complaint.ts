export type ComplaintStatus =
  | "pending"
  | "in_progress"
  | "resolved"
  | "closed"
  | "reopened";

export type ComplaintCategory =
  | "road"
  | "water"
  | "sanitation"
  | "electricity"
  | "drainage"
  | "garbage"
  | "streetlight"
  | "encroachment"
  | "other";

export interface ComplaintTimelineEvent {
  id: string;
  status: ComplaintStatus;
  message: string;
  timestamp: string;
  officer?: string;
}

export interface Complaint {
  id: string;
  complaintNumber: string;
  userId: string;
  category: ComplaintCategory;
  subCategory: string;
  title: string;
  description: string;
  address: string;
  ward: string;
  status: ComplaintStatus;
  priority: "low" | "medium" | "high";
  images?: string[];
  timeline: ComplaintTimelineEvent[];
  assignedTo?: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
  paymentId?: string;
  canReopen: boolean;
  reopenReason?: string;
}

export interface ComplaintFilter {
  status?: ComplaintStatus;
  category?: ComplaintCategory;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface RegisterComplaintData {
  category: ComplaintCategory;
  subCategory: string;
  title: string;
  description: string;
  address: string;
  ward: string;
  images?: File[];
}
