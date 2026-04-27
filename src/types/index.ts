export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  basePrice: number;
  images: string[];
  features: string[];
  isActive: boolean;
  createdAt: Date;
}

export type ServiceCategory =
  | "birthday"
  | "anniversary"
  | "baby-shower"
  | "engagement"
  | "haldi"
  | "mehendi"
  | "corporate"
  | "custom";

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  serviceId: string;
  eventDate: Date;
  timeSlot: TimeSlot;
  venue: string;
  city: string;
  pincode: string;
  specialRequests?: string;
  totalAmount: number;
  advanceAmount: number;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: Date;
}

export type TimeSlot = "morning" | "afternoon" | "evening" | "night";

export type PaymentStatus = "pending" | "advance_paid" | "fully_paid" | "refunded";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role: "customer" | "admin";
  createdAt: Date;
}

export interface TimeSlotAvailability {
  date: string;
  slots: {
    morning: boolean;
    afternoon: boolean;
    evening: boolean;
    night: boolean;
  };
}

export interface AdminStats {
  totalBookings: number;
  pendingBookings: number;
  totalRevenue: number;
  monthlyRevenue: number;
  upcomingEvents: number;
}
