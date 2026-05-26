export type ServiceType =
  | "hall_booking"
  | "septic_tank"
  | "water_tanker"
  | "waste_pickup"
  | "fogging";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface Hall {
  id: string;
  name: string;
  capacity: number;
  location: string;
  amenities: string[];
  pricePerDay: number;
  images: string[];
  isAvailable: boolean;
}

export interface HallBookingData {
  hallId: string;
  date: string;
  timeSlot: string;
  purpose: string;
  expectedAttendees: number;
  personalDetails: {
    name: string;
    phone: string;
    email: string;
    address: string;
    idProof: string;
    idNumber: string;
  };
}

export interface SepticTankData {
  address: string;
  ward: string;
  tankSize: string;
  preferredDate: string;
  preferredTime: string;
  contactName: string;
  contactPhone: string;
  additionalNotes?: string;
}

export interface WaterTankerData {
  address: string;
  ward: string;
  quantity: string;
  purpose: string;
  preferredDate: string;
  preferredTime: string;
  contactName: string;
  contactPhone: string;
}

export interface WastePickupData {
  address: string;
  ward: string;
  wasteType: string;
  quantity: string;
  preferredDate: string;
  preferredTime: string;
  contactName: string;
  contactPhone: string;
  specialInstructions?: string;
}

export interface FoggingData {
  address: string;
  ward: string;
  areaType: string;
  areaSize: string;
  preferredDate: string;
  preferredTime: string;
  contactName: string;
  contactPhone: string;
  reason?: string;
}

export interface ServiceBooking {
  id: string;
  bookingNumber: string;
  userId: string;
  serviceType: ServiceType;
  status: BookingStatus;
  data: HallBookingData | SepticTankData | WaterTankerData | WastePickupData | FoggingData;
  paymentId?: string;
  amount: number;
  scheduledDate: string;
  createdAt: string;
  updatedAt: string;
}
