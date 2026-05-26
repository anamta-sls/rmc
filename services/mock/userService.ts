import { mockUser } from "@/data/mock/users";
import type { User, RegisterData } from "@/types/user";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const userService = {
  async login(phone: string): Promise<{ success: boolean; message: string }> {
    await delay(800);
    if (phone.length === 10) {
      return { success: true, message: "OTP sent successfully" };
    }
    return { success: false, message: "Invalid phone number" };
  },

  async verifyOTP(phone: string, otp: string): Promise<{ success: boolean; user?: User; message: string }> {
    await delay(1000);
    if (otp === "1234" || otp.length === 6) {
      return { success: true, user: mockUser, message: "Login successful" };
    }
    return { success: false, message: "Invalid OTP. Please try again." };
  },

  async register(data: RegisterData): Promise<{ success: boolean; user?: User; message: string }> {
    await delay(1200);
    const newUser: User = {
      id: `usr_${Date.now()}`,
      ...data,
      isVerified: false,
      createdAt: new Date().toISOString(),
    };
    return { success: true, user: newUser, message: "Registration successful" };
  },

  async getProfile(): Promise<User> {
    await delay(500);
    return mockUser;
  },

  async updateProfile(data: Partial<User>): Promise<{ success: boolean; user: User; message: string }> {
    await delay(800);
    const updated = { ...mockUser, ...data };
    return { success: true, user: updated, message: "Profile updated successfully" };
  },
};
