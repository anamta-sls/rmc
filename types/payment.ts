export type PaymentStatus = "pending" | "success" | "failed" | "refunded";
export type PaymentMethod = "upi" | "card" | "netbanking" | "wallet";

export interface Payment {
  id: string;
  transactionId: string;
  userId: string;
  serviceType: string;
  serviceId: string;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentData {
  method: PaymentMethod;
  upiId?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  cardName?: string;
}
