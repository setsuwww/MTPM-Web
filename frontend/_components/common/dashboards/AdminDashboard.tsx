'use client'

import { ChartNoAxesCombined } from "lucide-react";
import AdminLayout from "../dashboard-layouts/AdminLayout";
import PageHeader from "../page-header";
import { useRouter } from "next/navigation";
import AreaDiagram from "@/app/(auth)/dashboard/admin/area-diagram";
import StatsDiagram from "@/app/(auth)/dashboard/admin/stats-diagram";

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <AdminLayout>
      <PageHeader
        icon={ChartNoAxesCombined}
        title="Daily statistic"
        description="View & record data on Daily"
        action={{
          label: "Add User",
          onClick: () => router.push("/admin/users/create")
        }}
      />

      <StatsDiagram />

      <div className="mt-4">
        <AreaDiagram />
      </div>
    </AdminLayout>
  );
}
