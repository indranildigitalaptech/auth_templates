'use client';

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sendittoo. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/terms" className="text-sm hover:text-blue-600">Terms of Service</Link>
          <Link href="/privacy" className="text-sm hover:text-blue-600">Privacy Policy</Link>
          <Link href="/contact" className="text-sm hover:text-blue-600">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
