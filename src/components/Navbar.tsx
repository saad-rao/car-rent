import Image from "next/image";
import { Search, SlidersHorizontal, Heart, Bell } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full px-4 py-4 border-b">
      {/* Main container with responsive flex direction */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/Logo.png"
              alt="logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Search bar container - full width on mobile */}
          <div className="w-full lg:max-w-2xl">
            <div className="relative">
              {/* Search icon inside input */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[#596780]" />
              </div>

              {/* Search input */}
              <input
                type="text"
                placeholder="Search something here"
                className="w-full py-4 pl-10 pr-10 bg-[#f5f5f5] rounded-[70px] border-[2px] text-sm focus:outline-none"
              />

              {/* Filter icon - inside input on desktop, outside on mobile */}
              <div className="lg:absolute lg:inset-y-0 lg:right-3 lg:flex lg:items-center hidden">
                <SlidersHorizontal className="h-4 w-4 text-black-400" />
              </div>

              {/* Mobile filter icon */}
              <div className="absolute inset-y-0 right-3 flex items-center lg:hidden">
                <SlidersHorizontal className="h-4 w-4 text-[#596780]" />
              </div>
            </div>
          </div>

          {/* Right section with icons */}
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-1">
              <Heart className="h-5 w-5 text-[#596780]" />
            </button>
            <button className="p-1 relative">
              <Bell className="h-5 w-5 text-[#596780]" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-1">
              <Image
                src="/images/Profil & Notification.png"
                alt="profile"
                width={100}
                height={32}
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
