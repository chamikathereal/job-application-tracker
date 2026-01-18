// client/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import api from "../lib/axios";
import { JobApplication } from "../types";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Jobs
  useEffect(() => {
    api.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Delete Job
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h1>
        
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">No jobs found. Start applying!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}