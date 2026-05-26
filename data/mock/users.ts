import type { User } from "@/types/user";

export const mockUser: User = {
  id: "usr_001",
  name: "Rajesh Kumar Sharma",
  email: "rajesh.sharma@gmail.com",
  phone: "9876543210",
  address: "B-12, Shanti Nagar, Near City Mall",
  ward: "Ward 14",
  city: "Vadodara",
  state: "Gujarat",
  pincode: "390015",
  isVerified: true,
  createdAt: "2024-01-15T10:30:00Z",
};

export const mockUsers: User[] = [
  mockUser,
  {
    id: "usr_002",
    name: "Priya Patel",
    email: "priya.patel@gmail.com",
    phone: "9876543211",
    address: "A-5, Alkapuri Society",
    ward: "Ward 7",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "390007",
    isVerified: true,
    createdAt: "2024-02-10T09:00:00Z",
  },
];
