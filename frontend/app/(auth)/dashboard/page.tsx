"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/_stores/auth";

import AdminDashboard from "@/_components/common/dashboards/AdminDashboard";
import PMDashboard from "@/_components/common/dashboards/PMDashboard";
import DevDashboard from "@/_components/common/dashboards/DeveloperDashboard";
import ClientDashboard from "@/_components/common/dashboards/ClientDashboard";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuthStore(); // user = { name, email, role }

  useEffect(() => {
    if (!user) {
      router.push("/login"); // redirect kalau belum login
    }
  }, [user, router]);

  if (!user) return null; // loading atau redirect

  switch (user.role) {
    case "SUPER_ADMIN":
    case "COMPANY_ADMIN":
      return <AdminDashboard />;
    case "PROJECT_MANAGER":
      return <PMDashboard />;
    case "DEVELOPER":
      return <DevDashboard />;
    case "CLIENT":
      return <ClientDashboard />;
    default:
      return <div>Unauthorized</div>;
  }
}
