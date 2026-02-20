import axios from "axios";

const API_BASE = "/admin/users"; // sesuai route Gin

// Optional: kalau pakai JWT dari cookie / localStorage
const getHeaders = () => {
  const token = localStorage.getItem("token"); // atau cookie
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// GET all users
export const getUsers = async () => {
  const res = await axios.get(API_BASE, { headers: getHeaders() });
  return res.data;
};

// GET user by id
export const getUserById = async (id: number) => {
  const res = await axios.get(`${API_BASE}/${id}`, { headers: getHeaders() });
  return res.data;
};

// CREATE user
export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: string;
  isActive?: boolean;
}) => {
  const res = await axios.post(API_BASE, data, { headers: getHeaders() });
  return res.data;
};

// UPDATE user
export const updateUser = async (
  id: number,
  data: {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    isActive?: boolean;
  }
) => {
  const res = await axios.patch(`${API_BASE}/${id}`, data, { headers: getHeaders() });
  return res.data;
};

// DELETE user
export const deleteUser = async (id: number) => {
  const res = await axios.delete(`${API_BASE}/${id}`, { headers: getHeaders() });
  return res.data;
};
