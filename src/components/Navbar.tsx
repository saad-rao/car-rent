"use client";
import { Search, SlidersHorizontal, Heart, Bell, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/category", label: "Category" },
    { href: "/detail", label: "Detail" },
    { href: "/payment", label: "Payment" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="w-full px-4 py-4 border-b relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          {/* Logo and mobile menu button */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <h2 className="text-3xl font-bold text-[#3463E7]">MORENT</h2>
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#596780]" />
              ) : (
                <Menu className="h-6 w-6 text-[#596780]" />
              )}
            </button>
          </div>

          {/* Search bar container */}
          <div className="w-full lg:max-w-xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[#596780]" />
              </div>
              <input
                type="text"
                placeholder="Search something here"
                className="w-full py-4 pl-10 pr-10 bg-[#f5f5f5] rounded-[70px] border-[2px] text-sm focus:outline-none"
              />
              <div className="lg:absolute lg:inset-y-0 lg:right-3 lg:flex lg:items-center hidden">
                <SlidersHorizontal className="h-4 w-4 text-black-400" />
              </div>
              <div className="absolute inset-y-0 right-3 flex items-center lg:hidden">
                <SlidersHorizontal className="h-4 w-4 text-[#596780]" />
              </div>
            </div>
          </div>

          {/* Navigation links and icons */}
          <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto lg:ml-auto`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-[#596780] w-full lg:w-auto">
              {navLinks.map((link) => (
                <li key={link.href} className="text-center">
                  <Link 
                    href={link.href}
                    className={`relative pb-2 hover:text-[#3563E9] transition-colors duration-300
                      ${pathname === link.href ? 'text-[#3563E9]' : ''}
                      group`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#3563E9] transform scale-x-0 transition-transform duration-500
                      ${pathname === link.href ? 'scale-x-100' : ''} 
                      group-hover:scale-x-100`}>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button className="p-1 hidden md:block">
                <Heart className="h-5 w-5 text-[#596780]" />
              </button>
              <button className="hidden md:block p-1 relative">
                <Bell className="h-5 w-5 text-[#596780]" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;