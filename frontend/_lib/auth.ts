import axios from "axios";
import { useAuthStore } from "@/_stores/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export interface LoginData {
  email: string;
  password: string;
  agree: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
  agree: boolean;
}

export const authService = {
  login: async (data: LoginData) => {
    const res = await axios.post(`${API_URL}/login`, data);
    const { token, user } = res.data;
    useAuthStore.getState().setAuth(token, user);
    return res.data;
  },

  register: async (data: RegisterData) => {
    return axios.post(`${API_URL}/register`, data);
  },

  logout: () => {
    useAuthStore.getState().resetAuth();
  },

  getAuthHeader: () => {
    const token = useAuthStore.getState().token;
    return { Authorization: `Bearer ${token}` };
  },
};
