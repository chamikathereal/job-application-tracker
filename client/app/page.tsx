// client/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import { JobApplication } from "../types";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import JobForm from "../components/JobForm";
import Footer from "../components/Footer"; 

export default function Home() {
  const router = useRouter();
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State for Form Visibility & Edit Mode
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (err: any) { // 3️⃣ Handle the Error
      console.error(err);
      
      // If server says "403 Forbidden" or "401 Unauthorized"
      if (err.response && (err.response.status === 403 || err.response.status === 401)) {
        router.push("/login"); // 👋 Kick user to Login page
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // --- Handlers ---

  const handleAddNew = () => {
    setEditingJob(null); // Clear previous edit data
    setShowForm(true);
  };

  const handleEdit = (job: JobApplication) => {
    setEditingJob(job); // Load job data into form
    setShowForm(true);
  };

  const handleSaved = () => {
    fetchJobs(); // Refresh list
    setShowForm(false);
    setEditingJob(null);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this application?")) return;
    try {
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter((j) => j.id !== id));
    } catch (error) {
      alert("Error deleting job");
    }
  };

  return (
    // 1️⃣ Added 'flex flex-col' so the footer pushes to the bottom
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* 2️⃣ Added 'flex-grow' and 'w-full' to take up available space */}
      <main className="max-w-5xl mx-auto px-6 py-10 flex-grow w-full">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          {!showForm && (
            <button 
              onClick={handleAddNew}
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              + Add New Job
            </button>
          )}
        </div>

        {/* Form Section */}
        {showForm && (
          <JobForm 
            onSaved={handleSaved}
            onCancel={() => setShowForm(false)}
            initialData={editingJob} // Pass data if editing
          />
        )}

        {/* List Section */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onDelete={handleDelete}
                onEdit={handleEdit} // Pass the handler
              />
            ))}
          </div>
        )}
      </main>

      {/* 3️⃣ Add the Footer here at the bottom */}
      <Footer />
    </div>
  );
}