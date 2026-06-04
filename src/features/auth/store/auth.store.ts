// src/features/auth/store/auth.store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthUser } from "../schemas/auth.schema";

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false });
        window.location.href = "/login";
      },
    }),
    {
      name: "flexspace-auth", // unique name in localStorage
    }
  )
);