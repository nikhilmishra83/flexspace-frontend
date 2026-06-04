// src/features/auth/api/auth.api.ts
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { LoginData, RegisterData, AuthResponse } from "../schemas/auth.schema";
import { useAuthStore } from "../store/auth.store";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // <-- Add this import

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>("/auth/login", data);
      return response.data.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      
      setUser({
        userId: data.userId,
        email: data.email,
        role: data.role,
        accountStatus: data.accountStatus,
      });

      toast.success("Successfully signed in!"); // <-- Success Toast

      if (data.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (data.role === "OWNER") {
        if (data.accountStatus === "PENDING") {
          router.push("/owner/pending");
        } else {
          router.push("/owner/dashboard");
        }
      } else {
        router.push("/user/dashboard");
      }
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Invalid credentials."); // <-- Error Toast
    }
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const { roleType, ...payload } = data;
      const endpoint = roleType === "OWNER" ? "/auth/register/owner" : "/auth/register/user";
      
      const response = await apiClient.post<ApiResponse<AuthResponse>>(endpoint, payload);
      return response.data.data;
    },
    onSuccess: (data, variables) => {
      // <-- Success Toast
      toast.success("Account created successfully! Please sign in."); 
      router.push(`/login?email=${encodeURIComponent(variables.email)}`);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to create account."); // <-- Error Toast
    }
  });
};