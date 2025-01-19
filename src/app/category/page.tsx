import React from "react";
import Navbar from "@/components/Navbar";
import PickDrop from "@/components/PickDrop";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            {/* Type Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">TYPE</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Sports (10)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>SUV (12)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>MPV (16)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Sedan (20)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Coupe (16)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Hatchback (16)</span>
                </label>
              </div>
            </div>

            {/* Capacity Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">CAPACITY</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>2 Person (10)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>4 Person (14)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>6 Person (12)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>8 Person (16)</span>
                </label>
              </div>
            </div>

            {/* Price Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">PRICE</h3>
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-600 mt-2">Max. $100.00</p>
            </div>
          </div>

        

          <div className="flex-1">
              <PickDrop />
              <Cards />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <button className="bg-[#3563E9] text-white text-[16px] px-4 py-2 mb-10 mt-10 rounded-[4px] hover:bg-blue-600 transition-colors">
          Show more car
        </button>
        
      </div>


  <div className="w-full">
    <Footer />
  </div>
    
    </>
  );
};

export default page;
