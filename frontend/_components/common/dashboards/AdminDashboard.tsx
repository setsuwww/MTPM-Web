import AdminLayout from "../dashboard-layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome, Admin</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">Total Users: 0</div>
        <div className="bg-white p-4 rounded shadow">Active Projects: 0</div>
        <div className="bg-white p-4 rounded shadow">Pending Leads: 0</div>
      </div>
    </AdminLayout>
  );
}
