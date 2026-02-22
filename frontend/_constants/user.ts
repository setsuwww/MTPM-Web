import { OrganizationRole } from "@/types/Organization";
import { PlatformRole } from "@/types/User";

export const PLATFORM_ROLE_COLORS: Record<PlatformRole, string> = {
  SUPER_ADMIN: "bg-purple-50 text-purple-700 border border-purple-300/60",
  ADMIN: "bg-rose-50 text-rose-700 border border-rose-300/60",
  USER: "bg-green-50 text-green-700 border border-green-300/60",
};

export const ORG_ROLE_COLORS: Record<OrganizationRole, string> = {
  OWNER: "bg-purple-50 text-purple-700 border border-purple-300/60",
  ADMIN: "bg-rose-50 text-rose-700 border border-rose-300/60",
  PROJECT_MANAGER: "bg-sky-50 text-sky-700 border border-sky-300/60",
  MEMBER: "bg-yellow-50 text-yellow-700 border border-yellow-300/60",
  VIEWER: "bg-green-50 text-green-700 border border-green-300/60",
};
