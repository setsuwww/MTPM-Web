"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/_stores/auth";

import AdminDashboard from "@/_components/common/dashboards/AdminDashboard";
import PMDashboard from "@/_components/common/dashboards/PMDashboard";
import DevDashboard from "@/_components/common/dashboards/DeveloperDashboard";
import ClientDashboard from "@/_components/common/dashboards/ClientDashboard";

export default function DashboardPage() {
  const router = useRouter();
  const { user, restoreAuth, fetchCurrentUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await restoreAuth();              // restore dari localStorage
      await fetchCurrentUser();         // fetch dari backend
      setLoading(false);
    };
    init();
  }, [restoreAuth, fetchCurrentUser]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");            // redirect kalau ga ada user
    }
  }, [loading, user, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  switch (user.role) {
    case "SUPER_ADMIN":
    case "ADMIN":
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
