// src/features/spaces/api/space.api.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { CreateSpaceData, SpaceResponse } from "../schemas/space.schema";
import { useRouter } from "next/navigation";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const useCreateSpace = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateSpaceData) => {
      const response = await apiClient.post<ApiResponse<SpaceResponse>>("/spaces", data);
      return response.data.data;
    },
    onSuccess: () => {
      // Refresh the spaces list
      queryClient.invalidateQueries({ queryKey: ["owner", "spaces"] });
      // Redirect to the properties list
      router.push("/owner/spaces");
    },
  });
};