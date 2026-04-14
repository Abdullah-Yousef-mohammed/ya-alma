"use client";

import React, { useState, useEffect } from "react";
import { API } from "../types";
import { useSession } from "next-auth/react";
import { UserCheck, Trash2, ShieldAlert, Edit2, Plus, X } from "lucide-react";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  provider: string;
  isApproved: boolean;
}

export default function UsersManager() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "EDITOR", isApproved: true });

  const openModal = (user: User | null = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({ username: user.username || "", email: user.email || "", password: "", role: user.role, isApproved: user.isApproved });
    } else {
      setEditingUser(null);
      setFormData({ username: "", email: "", password: "", role: "EDITOR", isApproved: true });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username && !formData.email) return alert("Must provide username or email.");
    
    // Ensure uniqueness fallback
    if (!formData.username) formData.username = formData.email;
    if (!formData.email) formData.email = formData.username;

    try {
      const isCreate = !editingUser;
      const endpoint = isCreate ? `${API}/users` : `${API}/users/${editingUser.id}`;
      const method = isCreate ? "POST" : "PUT";

      if (isCreate && !formData.password) return alert("Password is required for new local users.");

      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.accessToken || ""}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        closeModal();
        fetchUsers();
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to save user.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving user.");
    }
  };

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/users`, {
        headers: {
          "Authorization": `Bearer ${session?.accessToken || ""}`
        }
      });
      if (res.ok) {
        setUsers(await res.json());
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (session?.accessToken) {
      fetchUsers();
    }
  }, [session]);

  const approveUser = async (id: number) => {
    if (!confirm("Are you sure you want to approve this account? They will gain access to the control panel.")) return;
    try {
      const res = await fetch(`${API}/users/${id}/approve`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${session?.accessToken || ""}`
        }
      });
      if (res.ok) {
        fetchUsers();
      } else {
        alert("Failed to approve. Only SUPER_ADMIN might have rights, or session is invalid.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id: number) => {
    if (!confirm("Are you sure you want to PERMANENTLY DELETE this user?")) return;
    try {
      const res = await fetch(`${API}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${session?.accessToken || ""}`
        }
      });
      if (res.ok) {
        fetchUsers();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0b0f19] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <ShieldAlert className="text-[var(--color-brand-gold)]" />
          Pending Approvals & Users
        </h2>
        <div className="flex items-center gap-3">
          <button onClick={() => openModal()} className="flex items-center gap-2 bg-[var(--color-brand-gold)] text-[#0f172a] px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:scale-105 transition-transform">
            <Plus size={16} /> Add User
          </button>
          <button onClick={fetchUsers} className="text-sm font-semibold text-blue-600 hover:text-blue-800">Refresh</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-medium text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500">
              <th className="pb-3 px-4">ID</th>
              <th className="pb-3 px-4">Identifier / Email</th>
              <th className="pb-3 px-4">Provider</th>
              <th className="pb-3 px-4">Role</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} className="text-center py-8">Loading users...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={6} className="text-center py-8 text-gray-500">No users found.</td></tr>
            ) : (
              users.map(u => (
                <tr key={u.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-4 px-4">{u.id}</td>
                  <td className="py-4 px-4 text-gray-900 dark:text-gray-100 font-bold">{u.email || u.username}</td>
                  <td className="py-4 px-4">{u.provider}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${u.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 dark:bg-gray-700'}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {u.isApproved ? (
                      <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">Active</span>
                    ) : (
                      <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded text-xs font-bold">Pending</span>
                    )}
                  </td>
                  <td className="py-4 px-4 flex justify-end gap-2">
                    {!u.isApproved && (
                      <button onClick={() => approveUser(u.id)} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors" title="Approve">
                        <UserCheck size={16} />
                      </button>
                    )}
                    <button onClick={() => openModal(u)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors" title="Edit">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => deleteUser(u.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#0b0f19] w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="font-bold text-lg">{editingUser ? "Edit User" : "Add New User"}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-red-500"><X size={20}/></button>
            </div>
            <form onSubmit={handleSaveUser} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Username / Identifier</label>
                <input required type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email <span className="text-xs text-gray-500">(Optional if username is provided)</span></label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Role</label>
                <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 outline-none">
                  <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="EDITOR">EDITOR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Password {editingUser && <span className="text-xs text-gray-500">(Leave blank to keep same)</span>}</label>
                <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 outline-none" placeholder={editingUser ? "••••••••" : "Enter a secure password"} />
              </div>
              
              <div className="flex items-center gap-3 pt-2">
                <input type="checkbox" id="approvalToggle" checked={formData.isApproved} onChange={e => setFormData({...formData, isApproved: e.target.checked})} className="w-5 h-5 accent-[var(--color-brand-gold)]" />
                <label htmlFor="approvalToggle" className="font-semibold text-sm cursor-pointer">Account is Approved & Active</label>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={closeModal} className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700">Cancel</button>
                <button type="submit" className="flex-1 bg-[var(--color-brand-gold)] text-[#0f172a] font-bold py-3 rounded-xl hover:bg-yellow-500">Save User</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
