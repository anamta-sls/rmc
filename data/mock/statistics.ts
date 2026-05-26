export const mockDashboardStats = {
  totalComplaints: 4,
  pendingComplaints: 1,
  resolvedComplaints: 2,
  inProgressComplaints: 1,
  totalBookings: 4,
  activeBookings: 1,
  totalPayments: 5,
  totalAmountPaid: 3650,
  unreadNotifications: 2,
};

export const mockRecentActivities = [
  {
    id: "act_001",
    type: "complaint_update",
    title: "Complaint Status Updated",
    description: "Your complaint VCC-2024-001234 is now in progress",
    timestamp: "2024-11-03T14:30:00Z",
    icon: "alert-circle",
    color: "text-amber-600 bg-amber-50",
  },
  {
    id: "act_002",
    type: "booking_confirmed",
    title: "Hall Booking Confirmed",
    description: "Community Hall A booked for 15 Nov 2024",
    timestamp: "2024-11-01T14:00:00Z",
    icon: "check-circle",
    color: "text-[#0A2A76] bg-blue-50",
  },
  {
    id: "act_003",
    type: "payment_success",
    title: "Payment Successful",
    description: "₹500 paid for Septic Tank Cleaning",
    timestamp: "2024-10-28T11:30:00Z",
    icon: "credit-card",
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: "act_004",
    type: "complaint_resolved",
    title: "Complaint Resolved",
    description: "Water supply complaint VCC-2024-001189 resolved",
    timestamp: "2024-10-22T16:00:00Z",
    icon: "check-circle",
    color: "text-[#0A2A76] bg-blue-50",
  },
  {
    id: "act_005",
    type: "service_completed",
    title: "Service Completed",
    description: "Fogging service completed at your address",
    timestamp: "2024-10-15T17:00:00Z",
    icon: "check-circle",
    color: "text-[#0A2A76] bg-blue-50",
  },
];

export const monthlyStats = [
  { month: "Jun", complaints: 2, resolved: 1 },
  { month: "Jul", complaints: 3, resolved: 2 },
  { month: "Aug", complaints: 1, resolved: 1 },
  { month: "Sep", complaints: 2, resolved: 2 },
  { month: "Oct", complaints: 4, resolved: 3 },
  { month: "Nov", complaints: 3, resolved: 1 },
];
