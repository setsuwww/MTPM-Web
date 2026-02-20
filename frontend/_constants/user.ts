export type Role =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "PROJECT_MANAGER"
  | "DEVELOPER"
  | "CLIENT";

export const ROLE_COLORS: Record<Role, string> = {
  SUPER_ADMIN:
    "bg-purple-100 text-purple-700 border border-purple-200",
  ADMIN:
    "bg-rose-100 text-rose-700 border border-rose-200",
  PROJECT_MANAGER:
    "bg-amber-100 text-amber-700 border border-amber-200",
  DEVELOPER:
    "bg-yellow-100 text-yellow-700 border border-yellow-200",
  CLIENT:
    "bg-green-100 text-green-700 border border-green-200",
};
