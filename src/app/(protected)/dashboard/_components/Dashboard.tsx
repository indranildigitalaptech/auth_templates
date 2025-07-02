'use client';

import React from 'react';
import { Banknote, Zap, Phone, ArrowRightLeft, Loader2, Settings, CheckCircle } from 'lucide-react';

const dashboardItems = [
  {
    title: 'Transaction History',
    icon: <Banknote className="w-6 h-6 text-blue-600" />,
    description: 'View and manage all your transaction logs.',
  },
  {
    title: 'Electricity Purchase',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    description: 'Buy prepaid electricity tokens or pay bills.',
  },
  {
    title: 'Airtime Purchase',
    icon: <Phone className="w-6 h-6 text-green-500" />,
    description: 'Top up mobile airtime across all networks.',
  },
  {
    title: 'Money Transfer',
    icon: <ArrowRightLeft className="w-6 h-6 text-purple-600" />,
    description: 'Send money to bank accounts or wallets.',
  },
  {
    title: 'Payment Processing',
    icon: <Loader2 className="w-6 h-6 text-orange-500" />,
    description: 'Manage and automate payment collection.',
  },
  {
    title: 'Back-office Management',
    icon: <Settings className="w-6 h-6 text-gray-700" />,
    description: 'Admin tools and user management.',
  },
  {
    title: 'Transaction Status Management',
    icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
    description: 'Track and resolve transaction states.',
  },
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
