import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 text-2xl font-bold border-b">Admin Panel</div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-gray-200">
          Dashboard
        </Link>
        <Link href="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-200">
          Users
        </Link>
        <Link href="/admin/projects" className="block px-4 py-2 rounded hover:bg-gray-200">
          Projects
        </Link>
        <Link href="/admin/leads" className="block px-4 py-2 rounded hover:bg-gray-200">
          Leads
        </Link>
        <Link href="/admin/settings" className="block px-4 py-2 rounded hover:bg-gray-200">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
