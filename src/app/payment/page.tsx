import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar/>

        <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Billing and Rental Info */}
        <div className="flex-1 space-y-8">
          {/* Billing Info Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-[20px] font-bold  text-[#1A202C]">Billing Info</h1>
                <p className="text-[14px] text-[#90A3BF] mt-1">Please enter your billing info</p>
              </div>
              <span className="text-[14px] text-[#90A3BF]">Step 1 of 4</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-semibold text-[16px] text-[#1A202C]">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 text-[14px] text-[#90A3BF] bg-gray-50 rounded-lg border border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-semibold  text-[16px] text-[#1A202C]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 text-[14px] text-[#90A3BF] bg-gray-50 rounded-lg border border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-semibold text-[16px] text-[#1A202C]">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 text-[14px] text-[#90A3BF] bg-gray-50 rounded-lg border border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-semibold text-[16px] text-[#1A202C]">Town/City</label>
                <input
                  type="text"
                  placeholder="Town or city"
                  className="w-full p-3 text-[14px] text-[#90A3BF] bg-gray-50 rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-[20px] font-bold text-[#1A202C]">Rental Info</h1>
                <p className="text-[#90A3BF] text-[14px] mt-1">Please select your rental date</p>
              </div>
              <span className="text-[#90A3BF] text-[14px] ">Step 2 of 4</span>
            </div>

            {/* Pick-Up Section */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="font-semibold text-[16px] text-[#1A202C] ">Pick-Up</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block font-semibold  text-[#1A202C] text-[16px] ">Locations</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-semibold text-[#1A202C] text-[16px] ">Date</label>
                  <input
                    type="date"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-semibold  text-[#1A202C] text-[16px] ">Time</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="font-semibold text-[16px] text-[#1A202C]">Drop-Off</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block font-semibold  text-[#1A202C] text-[16px]">Locations</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-semibold  text-[#1A202C] text-[16px]">Date</label>
                  <input
                    type="date"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-semibold  text-[#1A202C] text-[16px]">Time</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>




        

        {/* Right Column - Rental Summary */}
        <div className="lg:w-[400px]">
          <div className="bg-white rounded-lg p-6 sticky top-4">
            <h2 className="text-[20px] text-[#1A202C] font-bold mb-2">Rental Summary</h2>
            <p className="text-[#90A3BF] text-[14px] mb-6">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-24 relative bg-blue-100 rounded-lg">
                <Image
                  src="/images/View 1.png"
                  alt="Nissan GT-R"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-[32px] text-[#1A202C] ">Nissan GT-R</h3>
                <div className="flex items-center gap-2">
                  <span className='text-[#FBAD39] text-[14px]'>★★★★☆</span>
                  <span className="text-[#596780]  text-[14px]">440+ Reviewer</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#90A3BF] text-[16px] ">Subtotal</span>
                <span className="font-semibold">$80.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#90A3BF] text-[16px] ">Tax</span>
                <span className="font-semibold">$0</span>
              </div>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Apply promo code"
                className="w-full p-3 pr-24 bg-gray-50 rounded-lg border border-gray-200 text-[#90A3BF] text-[14px] "
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1A202C] text-[16px]">
                Apply now
              </button>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg text-[20px] text-[#1A202C] ">Total Rental Price</span>
                <span className="font-bold text-[#1A202C] text-[20px] ">$80.00</span>
              </div>
              <p className="text-gray-500 text-[14px] text-[#90A3BF] ">
                Overall price and includes rental discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
  )
}

export default page
