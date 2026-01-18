// client/components/JobForm.tsx
"use client";
import { useState, useEffect } from "react";
import api from "../lib/axios";
import { JobApplication } from "../types";

interface JobFormProps {
  onSaved: () => void;  // Trigger reload after save
  onCancel: () => void;
  initialData?: JobApplication | null; // Optional: If provided, we are in "Edit Mode"
}

export default function JobForm({ onSaved, onCancel, initialData }: JobFormProps) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
  });
  const [loading, setLoading] = useState(false);

  // If initialData exists (Edit Mode), pre-fill the form
  useEffect(() => {
    if (initialData) {
      setFormData({
        company: initialData.company,
        position: initialData.position,
        status: initialData.status,
      });
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (initialData) {
        // EDIT MODE: Send PUT request
        await api.put(`/jobs/${initialData.id}`, formData);
      } else {
        // ADD MODE: Send POST request
        await api.post("/jobs", formData);
      }
      onSaved(); // Refresh list
      onCancel(); // Close form
    } catch (error) {
      alert("Error saving job. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-blue-100 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {initialData ? "Edit Application" : "Add New Application"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          Cancel
        </button>
        <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
          {loading ? "Saving..." : initialData ? "Update Job" : "Save Job"}
        </button>
      </div>
    </form>
  );
}