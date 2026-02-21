export type Role =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "PROJECT_MANAGER"
  | "DEVELOPER"
  | "CLIENT";

export const ROLE_COLORS: Record<Role | string, string> = {
  SUPER_ADMIN:
    "bg-purple-50 text-purple-700 border border-purple-300/60",
  ADMIN:
    "bg-rose-50 text-rose-700 border border-rose-300/60",
  PROJECT_MANAGER:
    "bg-sky-50 text-sky-700 border border-sky-300/60",
  DEVELOPER:
    "bg-yellow-50 text-yellow-700 border border-yellow-300/60",
  CLIENT:
    "bg-green-50 text-green-700 border border-green-300/60",
};
