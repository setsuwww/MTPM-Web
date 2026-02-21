// app/_lib/services/user_service.ts
"use client";

import axios from "axios";
import { authService } from "../auth";
import { CreateUserPayload, UpdateUserPayload, User } from "@/types/User";


export class UserService {
  private apiUrl: string;

  constructor(baseUrl?: string) {
    this.apiUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  }

  // Get all users
  async getAll(): Promise<User[]> {
    const res = await axios.get(`${this.apiUrl}/users`, {
      headers: authService.getAuthHeader(),
    });
    return res.data.users || [];
  }

  // Get single user by ID
  async getById(id: number): Promise<User | null> {
    try {
      const res = await axios.get(`${this.apiUrl}/users/${id}`, {
        headers: authService.getAuthHeader(),
      });
      return res.data.user;
    } catch (err) {
      console.error("Failed to fetch user:", err);
      return null;
    }
  }

  // Create user
  async create(payload: CreateUserPayload): Promise<User | null> {
    try {
      const res = await axios.post(`${this.apiUrl}/users`, payload, {
        headers: authService.getAuthHeader(),
      });
      return res.data.user;
    } catch (err) {
      console.error("Failed to create user:", err);
      return null;
    }
  }

  // Update user
  async update(id: number, payload: UpdateUserPayload): Promise<User | null> {
    try {
      const res = await axios.put(`${this.apiUrl}/users/${id}`, payload, {
        headers: authService.getAuthHeader(),
      });
      return res.data.user;
    } catch (err) {
      console.error("Failed to update user:", err);
      return null;
    }
  }

  // Delete user
  async delete(id: number): Promise<boolean> {
    try {
      await axios.delete(`${this.apiUrl}/users/${id}`, {
        headers: authService.getAuthHeader(),
      });
      return true;
    } catch (err) {
      console.error("Failed to delete user:", err);
      return false;
    }
  }

  // Additional helpers
  async activate(id: number): Promise<User | null> {
    return this.update(id, { isActive: true });
  }

  async deactivate(id: number): Promise<User | null> {
    return this.update(id, { isActive: false });
  }
}

// Usage Example:
// const userService = new UserService();
// const users = await userService.getAll();
