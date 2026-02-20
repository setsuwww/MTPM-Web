"use client";

import { create } from "zustand";
import axios from "axios";

import { getToken } from "@/_lib/auth";
import { Role } from "@/_constants/user";

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  resetAuth: () => void;
  restoreAuth: () => void;
  fetchCurrentUser: () => Promise<User | null>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  user: null,

  setAuth: (token, user) => {
    set({ token, user });
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  },

  resetAuth: () => {
    set({ token: null, user: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  restoreAuth: async () => {
    if (typeof window === "undefined") return null;

    const token = localStorage.getItem("token");
    let user: User | null = null;

    try {
      const userStr = localStorage.getItem("user");
      if (userStr && userStr !== "undefined") {
        user = JSON.parse(userStr);
      }
    } catch (err) {
      console.warn("Failed to parse user from localStorage", err);
      localStorage.removeItem("user");
    }

    if (token && user) {
      set({ token, user });
      return user;
    }
    return null;
  },

  fetchCurrentUser: async () => {
    const token = getToken();
    if (!token) return null;

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.data || !res.data.user) return null;

      const { id, name, email, role } = res.data.user;
      get().setAuth(token, { id, name, email, role });
      return { id, name, email, role };
    } catch (err) {
      console.error("Failed to fetch current user:", err);
      get().resetAuth();
      return null;
    }
  },
}));

// Helper untuk Authorization header
export const getAuthHeader = () => {
  const token = useAuthStore.getState().token;
  return token ? { Authorization: `Bearer ${token}` } : {};
};
