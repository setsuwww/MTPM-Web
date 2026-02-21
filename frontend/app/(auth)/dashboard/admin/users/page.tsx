"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/table";
import { Checkbox } from "@/_components/ui/checkbox";
import { Button } from "@/_components/ui/button";
import { UsersRoundIcon, Trash2, Download, Users } from "lucide-react";
import { Badge } from "@/_components/ui/badge";
import { ROLE_COLORS } from "@/_constants/user";

import AdminLayout from "@/_components/common/dashboard-layouts/AdminLayout";
import PageHeader from "@/_components/common/page-header";

import { UserService } from "@/_lib/services/user_service";
import { useRouter } from "next/navigation";
import { User } from "@/types/User";

export default function AdminUsersTable() {
  const router = useRouter();
  const userService = new UserService();

  const [users, setUsers] = useState<User[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch users from backend
  const fetchUsers = async () => {
    setLoading(true);
    const data = await userService.getAll();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === users.length) setSelectedIds([]);
    else setSelectedIds(users.map(u => u.id));
  };

  const handleDeleteSelected = async () => {
    for (const id of selectedIds) {
      await userService.delete(id);
    }
    setSelectedIds([]);
    fetchUsers();
  };

  const handleDeleteAll = async () => {
    for (const user of users) {
      await userService.delete(user.id);
    }
    setSelectedIds([]);
    fetchUsers();
  };

  const handleExport = () => {
    console.log("Export selected:", selectedIds);
    // nanti bisa tambah logika export CSV / XLSX
  };

  return (
    <AdminLayout>
      <PageHeader
        icon={Users}
        title="Users"
        description="Manage all users"
        action={{
          label: "Add User",
          onClick: () => router.push("/admin/users/create"),
        }}
      />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Users</h2>
        <div className="flex gap-2">
          <Button
            onClick={handleExport}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Download size={16} /> Export
          </Button>
          <Button
            onClick={handleDeleteSelected}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Trash2 size={16} /> Delete Selected
          </Button>
          <Button
            onClick={handleDeleteAll}
            variant="destructive"
            size="sm"
            className="flex items-center gap-1"
          >
            <Trash2 size={16} /> Delete All
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedIds.length === users.length && users.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(user.id)}
                    onCheckedChange={() => toggleSelect(user.id)}
                  />
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <UsersRoundIcon size={16} />
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge className={`rounded-sm ${ROLE_COLORS[user.role]}`}>
                    {user.role.replaceAll("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.isActive ? "default" : "destructive"}>
                    {user.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={async () => {
                      await userService.delete(user.id);
                      fetchUsers();
                    }}
                  >
                    <Trash2 size={16} /> Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </AdminLayout>
  );
}
