import { mockPayments } from "@/data/mock/payments";
import type { Payment, PaymentData } from "@/types/payment";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const paymentService = {
  async getPayments(userId: string): Promise<Payment[]> {
    await delay(600);
    return mockPayments.filter((p) => p.userId === userId);
  },

  async processPayment(
    serviceType: string,
    serviceId: string,
    amount: number,
    method: PaymentData
  ): Promise<{ success: boolean; payment?: Payment; message: string }> {
    await delay(1500);
    const payment: Payment = {
      id: `pay_${Date.now()}`,
      transactionId: `TXN-${Date.now()}`,
      userId: "usr_001",
      serviceType,
      serviceId,
      amount,
      status: "success",
      method: method.method,
      description: `Payment for ${serviceType} service`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { success: true, payment, message: "Payment processed successfully" };
  },
};
