export type PlatformRole = "SUPER_ADMIN" | "ADMIN" | "USER";

export interface User {
  ID: number;
  Name: string;
  Email: string;
  Role: PlatformRole;
  IsActive: boolean;
  CreatedAt: string;
  UpdatedAt: string;
}

// Payload untuk create user
export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role?: PlatformRole;
}

// Payload untuk update user
export interface UpdateUserPayload {
  name?: string;
  email?: string;
  role?: PlatformRole;
  isActive?: boolean;
  password?: string;
}
