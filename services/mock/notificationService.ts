import { mockNotifications } from "@/data/mock/notifications";
import type { Notification } from "@/types/notification";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const notificationService = {
  async getNotifications(userId: string): Promise<Notification[]> {
    await delay(400);
    return mockNotifications.filter((n) => n.userId === userId);
  },

  async markAsRead(id: string): Promise<{ success: boolean }> {
    await delay(200);
    return { success: true };
  },

  async markAllAsRead(userId: string): Promise<{ success: boolean }> {
    await delay(300);
    return { success: true };
  },

  async getUnreadCount(userId: string): Promise<number> {
    await delay(200);
    return mockNotifications.filter((n) => n.userId === userId && !n.isRead).length;
  },
};
