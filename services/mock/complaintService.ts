import { mockComplaints } from "@/data/mock/complaints";
import type { Complaint, ComplaintFilter, RegisterComplaintData } from "@/types/complaint";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const complaintService = {
  async getComplaints(filter?: ComplaintFilter): Promise<Complaint[]> {
    await delay(600);
    let results = [...mockComplaints];
    if (filter?.status) {
      results = results.filter((c) => c.status === filter.status);
    }
    if (filter?.category) {
      results = results.filter((c) => c.category === filter.category);
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      results = results.filter(
        (c) =>
          c.complaintNumber.toLowerCase().includes(q) ||
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      );
    }
    return results;
  },

  async getComplaintById(id: string): Promise<Complaint | null> {
    await delay(400);
    return mockComplaints.find((c) => c.id === id) ?? null;
  },

  async registerComplaint(data: RegisterComplaintData): Promise<{ success: boolean; complaint?: Complaint; message: string }> {
    await delay(1200);
    const complaint: Complaint = {
      id: `cmp_${Date.now()}`,
      complaintNumber: `VCC-2024-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      userId: "usr_001",
      category: data.category,
      subCategory: data.subCategory,
      title: data.title,
      description: data.description,
      address: data.address,
      ward: data.ward,
      status: "pending",
      priority: "medium",
      timeline: [
        {
          id: `tl_${Date.now()}`,
          status: "pending",
          message: "Complaint registered successfully",
          timestamp: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      canReopen: false,
    };
    return { success: true, complaint, message: "Complaint registered successfully" };
  },

  async reopenComplaint(id: string, reason: string): Promise<{ success: boolean; message: string }> {
    await delay(800);
    return { success: true, message: "Complaint reopened successfully" };
  },
};
