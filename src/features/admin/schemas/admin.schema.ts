// src/features/admin/schemas/admin.schema.ts
export interface AdminOwnerResponse {
  id: number;
  name: string;
  email: string;
  accountStatus: "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
  active: boolean;
}

export interface OwnerApprovalRequest {
  accountStatus: "APPROVED" | "REJECTED" | "SUSPENDED";
}