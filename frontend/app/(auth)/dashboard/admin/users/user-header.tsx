"use client";

import React from "react";
import { Card, CardContent } from "@/_components/ui/card";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { Download, Trash2, Users, Search, Filter, RefreshCw } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/_components/ui/select";
import PageHeader from "@/_components/common/page-header";

interface UserHeaderProps {
  selectedCount: number;
  totalUsers: number;
  onSearch: (query: string) => void;
  onFilterRole: (role: string) => void;
  onFilterStatus: (status: string) => void;
  onExport: () => void;
  onDeleteSelected: () => void;
  onDeleteAll: () => void;
  onRefresh: () => void;
  onAddUser: () => void;
}

export default function UserHeader({ selectedCount, totalUsers,
  onSearch, onFilterRole, onFilterStatus,
  onExport,
  onDeleteSelected, onDeleteAll,
  onRefresh,
  onAddUser,
}: UserHeaderProps) {
  return (
    <div className="space-y-4">
      <PageHeader
        icon={Users}
        title="Users"
        description="Manage and organize your users"
        action={{
          label: "Add User",
          onClick: onAddUser,
        }}
      />

      {/* Search and Filters Card */}
      <Card className="border border-gray-200 dark:border-gray-800">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users..."
                onChange={(e) => onSearch(e.target.value)}
                className="pl-9 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <Select onValueChange={onFilterRole}>
                <SelectTrigger className="w-[140px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="USER">User</SelectItem>
                  <SelectItem value="MANAGER">Manager</SelectItem>
                  <SelectItem value="GUEST">Guest</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={onFilterStatus}>
                <SelectTrigger className="w-[140px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="icon"
                onClick={onRefresh}
                className="border-gray-200 dark:border-gray-800 hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-950"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {selectedCount} of {totalUsers} user(s) selected
            </p>
            <div className="flex gap-2">
              <Button
                onClick={onExport}
                variant="outline"
                size="sm"
                className="border-gray-200 dark:border-gray-800 hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-950"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>

              <Button
                onClick={onDeleteSelected}
                variant="outline"
                size="sm"
                disabled={selectedCount === 0}
                className="border-gray-200 dark:border-gray-800 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950 disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
              </Button>

              <Button
                onClick={onDeleteAll}
                variant="destructive"
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
