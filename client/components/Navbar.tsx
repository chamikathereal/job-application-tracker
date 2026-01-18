// client/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          🚀 JobTracker
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            + Add Job
          </button>
        </div>
      </div>
    </nav>
  );
}