import { mockServiceBookings } from "@/data/mock/services";
import type { ServiceBooking, ServiceType } from "@/types/service";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const serviceBookingService = {
  async getBookings(userId: string): Promise<ServiceBooking[]> {
    await delay(600);
    return mockServiceBookings.filter((b) => b.userId === userId);
  },

  async getBookingById(id: string): Promise<ServiceBooking | null> {
    await delay(400);
    return mockServiceBookings.find((b) => b.id === id) ?? null;
  },

  async createBooking(
    serviceType: ServiceType,
    data: unknown,
    amount: number
  ): Promise<{ success: boolean; booking?: ServiceBooking; message: string }> {
    await delay(1000);
    const prefixes: Record<ServiceType, string> = {
      hall_booking: "HB",
      septic_tank: "ST",
      water_tanker: "WT",
      waste_pickup: "WP",
      fogging: "FG",
    };
    const booking: ServiceBooking = {
      id: `bk_${Date.now()}`,
      bookingNumber: `${prefixes[serviceType]}-2024-${String(Math.floor(Math.random() * 900) + 100)}`,
      userId: "usr_001",
      serviceType,
      status: "confirmed",
      data: data as ServiceBooking["data"],
      amount,
      scheduledDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { success: true, booking, message: "Booking confirmed successfully" };
  },
};
