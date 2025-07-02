'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bell } from 'lucide-react';

const Header = () => {
  const notificationCount = 3; 

  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link href={"/dashboard"} className="text-2xl font-bold text-gray-800">Sendittoo</Link>

      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-700" />
          {notificationCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Profile with Dropdown */}
        <div className="relative group">
          <Image
            src="/assets/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />

          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">View Profile</Link>
              </li>
              <li>
                <Link href="/change-password" className="block px-4 py-2 hover:bg-gray-100">Change Password</Link>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
