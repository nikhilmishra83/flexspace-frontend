// src/features/admin/api/admin.api.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { AdminOwnerResponse, OwnerApprovalRequest } from "../schemas/admin.schema";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Fetch pending owners
export const usePendingOwners = () => {
  return useQuery({
    queryKey: ["admin", "owners", "pending"],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<AdminOwnerResponse[]>>("/admin/owners?status=PENDING");
      return response.data.data;
    },
  });
};

// Approve or Reject an owner
export const useUpdateOwnerStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ ownerId, data }: { ownerId: number; data: OwnerApprovalRequest }) => {
      const response = await apiClient.put<ApiResponse<void>>(`/admin/owners/${ownerId}/approval`, data);
      return response.data;
    },
    onSuccess: () => {
      // Refresh the pending owners list automatically after a successful action
      queryClient.invalidateQueries({ queryKey: ["admin", "owners", "pending"] });
    },
  });
};