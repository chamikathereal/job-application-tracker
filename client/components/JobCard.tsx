// client/components/JobCard.tsx
import { JobApplication } from "../types";

interface JobCardProps {
  job: JobApplication;
  onDelete: (id: number) => void;
  onEdit: (job: JobApplication) => void; // New Prop!
}

export default function JobCard({ job, onDelete, onEdit }: JobCardProps) {
  const statusColors: any = {
    Applied: "bg-gray-100 text-gray-800",
    Interviewing: "bg-blue-100 text-blue-800",
    Rejected: "bg-red-100 text-red-800",
    Offer: "bg-green-100 text-green-800",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{job.company}</h3>
          <p className="text-gray-500">{job.position}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[job.status] || statusColors.Applied}`}>
          {job.status}
        </span>
      </div>
      
      <div className="flex justify-between items-center text-sm mt-4 border-t pt-4">
        <span className="text-gray-400">
          {new Date(job.dateApplied).toLocaleDateString()}
        </span>
        <div className="flex gap-3">
          <button 
            onClick={() => onEdit(job)} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(job.id)} 
            className="text-red-400 hover:text-red-600 font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}