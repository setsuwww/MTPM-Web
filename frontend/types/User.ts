export interface User {
  ID: number;
  Name: string;
  Email: string;
  Role: string | "SUPER_ADMIN" | "ADMIN" | "PROJECT_MANAGER" | "DEVELOPER" | "CLIENT";
  IsActive: boolean;
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  role?: string;
  isActive?: boolean;
}
