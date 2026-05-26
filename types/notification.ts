export type NotificationType =
  | "complaint_update"
  | "booking_confirmed"
  | "booking_completed"
  | "payment_success"
  | "payment_failed"
  | "service_reminder"
  | "general";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  link?: string;
  createdAt: string;
}
