import React, { useEffect, useState } from "react";
import { getCurrentUser } from "@/_lib/auth";

export default function AdminHeader() {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      if (user) setUserName(user.name);
    })();
  }, []);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="font-medium">{userName}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
    </header>
  );
}
