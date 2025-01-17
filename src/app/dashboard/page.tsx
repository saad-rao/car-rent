"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import Navbar from '@/components/Navbar';

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Sidebar = ({ isMobile = false }) => (

    
    <div className={`space-y-8 ${isMobile ? 'p-6' : ''}`}>
      <div className="space-y-6">
        <h3 className="text-[16px] font-semibold text-[#94A7CB66]">MAIN MENU</h3>
        <nav className="space-y-4">
          <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-600 text-white">
            <Image src="/images/home.png" alt="home" width={24} height={24} />
            <span className="text-[16px] font-weight-[500px] cursor-pointer  ">Dashboard</span>
          </div>
          
          {[
            { name: 'Car Rent', icon: '/images/dashboard-car.png' },
            { name: 'Insight', icon: '/images/chart.png' },
            { name: 'Reimburse', icon: '/images/empty-wallet-change.png' },
            { name: 'Inbox', icon: '/images/message.png' },
            { name: 'Calendar', icon: '/images/calendar.png' }
          ].map((item) => (
            <div key={item.name} className="flex items-center text-[16px] text-[#90A3BF] space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Image src={item.icon} alt={item.name.toLowerCase()} width={24} height={24} />
              <span className="text-[16px] text-[#90A3BF] ">{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        <h3 className="text-[16px] font-semibold text-[#94A7CB66] ">PREFERENCES</h3>
        <nav className="space-y-4">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
            <Image src="/images/setting.png" alt="settings" width={24} height={24} />
            <span className="text-[16px] text-[#90A3BF] ">Settings</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
            <Image src="/images/info-circle.png" alt="help" width={24} height={24} />
            <span className="text-[16px] text-[#90A3BF] ">Help & Center</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <Image src="/images/briefcase.png" alt="dark mode" width={24} height={24} />
              <span className="text-[16px] text-[#90A3BF] ">Dark Mode</span>
            </div>
            <button onClick={toggleDarkMode} className="flex items-center space-x-2">
              <Image src="/images/light.png" alt="light" width={24} height={24} />
              <Image src="/images/dark (1).png" alt="dark" width={24} height={24} />
            </button>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
            <Image src="/images/logout.png" alt="logout" width={24} height={24} />
            <span className="text-[16px] text-[#90A3BF] ">Log Out</span>
          </div>
        </nav>
      </div>
    </div>
  );

  return (
    <>
    <Navbar/>
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white p-4 flex justify-between items-center shadow-sm">
        <button onClick={toggleMobileMenu} className="p-2 rounded-lg hover:bg-gray-100">
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
        <h1 className="text-lg font-semibold">Car Rental Dashboard</h1>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 bg-white">
          <div className="pt-20">
            <Sidebar isMobile={true} />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-screen p-6 gap-6 pt-20 lg:pt-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white rounded-xl p-6">
          <Sidebar />
        </aside>

        {/* Middle Section - Details Rental */}
        <main className="flex-grow max-w-3xl space-y-6 bg-white rounded-xl p-6">
          <h2 className="text-[20px] text-[#1A202C] font-bold mb-6">Details Rental</h2>
          
          <Image src="/images/Maps.png" alt="maps" className="w-full rounded-lg mb-6" width={800} height={200} />

          <div className="flex items-center space-x-4 mb-6 bg-white rounded-xl p-4">
            <Image src="/images/View 1.png" alt="car" width={120} height={80} className="rounded-lg" />
            <div>
              <h3 className="text-[24px] text-[#1A202C] font-bold">Nissan GT-R</h3>
              <p className="text-[#3D5278] text-[14px] ">Sport Car</p>
            </div>
          </div>    

          <div className="space-y-6">
            {['Pick-Up', 'Drop-Off'].map((section) => (
              <div key={section} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <h4 className="font-medium">{section}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Locations', value: 'Kota Semarang' },
                    { label: 'Date', value: '20 July 2024' },
                    { label: 'Time', value: '07:00' }
                  ].map((field) => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-sm text-gray-500">{field.label}</label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">{field.value}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-[20px] text-[#1A202C] ">Total Rental Price</h3>
              <p className="text-[14px] text-[#90A3BF] ">Overall price and includes rental discount</p>
            </div>
            <span className="text-[32px] text-[#1A202C] font-bold">$80.00</span>
          </div>
        </main>

        {/* Right Section */}
        <aside className="w-full lg:w-96 space-y-6">
          {/* Top 5 Car Rental */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-[20px] text-[#1A202C] font-bold mb-6">Top 5 Car Rental</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image src="/images/Chart circle.png" alt="chart" width={200} height={200} />
              <div className="flex-grow space-y-4">
                {[
                  { name: 'Sport Car', count: '17,439', color: 'bg-blue-600' },
                  { name: 'SUV', count: '9,478', color: 'bg-blue-400' },
                  { name: 'Coupe', count: '18,197', color: 'bg-blue-300' },
                  { name: 'Hatchback', count: '12,510', color: 'bg-blue-200' },
                  { name: 'MPV', count: '14,406', color: 'bg-blue-100' }
                ].map((car) => (
                  <div key={car.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${car.color}`} />
                      <span className="text-sm">{car.name}</span>
                    </div>
                    <span className="text-sm font-medium">{car.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[20px] text-[#1A202C] font-bold">Recent Transaction</h2>
              <button className="text-blue-600 text-sm font-semibold">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { image: '/images/Car (3).png', name: 'Nissan GT-R', type: 'Sport Car', date: '20 July', price: '$80.00' },
                { image: '/images/car.png', name: 'Koegnigsegg', type: 'Sport Car', date: '19 July', price: '$99.00' },
                { image: '/images/Car (2).png', name: 'Rolls-Royce', type: 'Sport Car', date: '18 July', price: '$96.00' },
                { image: '/images/Car (5).png', name: 'CR-V', type: 'SUV', date: '17 July', price: '$80.00' }
              ].map((transaction) => (
                <div key={transaction.name} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Image src={transaction.image} alt={transaction.name} width={64} height={64} className="rounded-lg" />
                    <div>
                      <h3 className="font-bold text-[16px] text-[#1A202C]    ">{transaction.name}</h3>
                      <p className="text-[12px] text-[#90A3BF] ">{transaction.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-[#90A3BF]">{transaction.date}</p>
                    <p className="font-bold text-[#1A202C] text-[16px] ">{transaction.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;