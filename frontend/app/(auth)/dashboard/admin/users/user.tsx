"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserService } from "@/_lib/services/user_service";
import { User } from "@/types/User";
import UserHeader from "./user-header";
import UserTable from "./user-table";
import AdminLayout from "@/_components/common/dashboard-layouts/AdminLayout";

export default function UsersPage() {
  const router = useRouter();
  const userService = new UserService();

  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchUsers = async () => {
    setLoading(true);
    const data = await userService.getAll();
    setUsers(data);
    setFilteredUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = [...users];

    if (searchQuery) {
      filtered = filtered.filter(
        user =>
          user.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.Email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (roleFilter !== "all") {
      filtered = filtered.filter(user => user.Role === roleFilter);
    }

    if (statusFilter !== "all") {
      const isActive = statusFilter === "active";
      filtered = filtered.filter(user => user.IsActive === isActive);
    }

    setFilteredUsers(filtered);
  }, [searchQuery, roleFilter, statusFilter, users]);

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredUsers.length) setSelectedIds([]);
    else setSelectedIds(filteredUsers.map(u => u.ID));
  };

  const handleDeleteSelected = async () => {
    if (!confirm(`Delete ${selectedIds.length} selected users?`)) return;

    for (const id of selectedIds) {
      await userService.delete(id);
    }
    setSelectedIds([]);
    fetchUsers();
  };

  const handleDeleteAll = async () => {
    if (!confirm(`Delete all ${users.length} users?`)) return;

    for (const user of users) {
      await userService.delete(user.ID);
    }
    setSelectedIds([]);
    fetchUsers();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this user?")) return;
    await userService.delete(id);
    fetchUsers();
  };

  const handleExport = () => {
    const dataToExport = selectedIds.length > 0
      ? users.filter(u => selectedIds.includes(u.ID))
      : users;

    console.log("Exporting:", dataToExport);
  };

  return (
    <AdminLayout>
      <div className="max-w-10xl mx-auto space-y-6">
        <UserHeader
          selectedCount={selectedIds.length}
          totalUsers={users.length}
          onSearch={setSearchQuery}
          onFilterRole={setRoleFilter}
          onFilterStatus={setStatusFilter}
          onExport={handleExport}
          onDeleteSelected={handleDeleteSelected}
          onDeleteAll={handleDeleteAll}
          onRefresh={fetchUsers}
          onAddUser={() => router.push("/admin/users/create")}
        />

        <UserTable
          users={filteredUsers}
          selectedIds={selectedIds}
          loading={loading}
          onToggleSelect={toggleSelect}
          onToggleSelectAll={toggleSelectAll}
          onDelete={handleDelete}
          onRefresh={fetchUsers}
        />
      </div>
    </AdminLayout>
  );
}
