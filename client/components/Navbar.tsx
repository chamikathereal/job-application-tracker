// client/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const userCookie = Cookies.get("user");
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 mb-8">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
          🚀 JobTracker
        </Link>
        
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="bg-gray-100 p-1 rounded-full">
                  <User size={16} />
                </div>
                <span className="font-medium text-sm">{user.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-600 transition flex items-center gap-1 text-sm font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-blue-600 hover:underline text-sm font-medium">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}