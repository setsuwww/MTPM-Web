export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
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
