export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  ward: string;
  city: string;
  state: string;
  pincode: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  phone: string;
}

export interface OTPVerification {
  phone: string;
  otp: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  address: string;
  ward: string;
  city: string;
  state: string;
  pincode: string;
}
