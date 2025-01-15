import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

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


      {/* Payment Method Section */}
    <div className="bg-white rounded-lg p-6 mt-8 max-w-[800px] ">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
            <p className="text-gray-500 mt-1">Please enter your payment method</p>
          </div>
          <span className="text-gray-400">Step 3 of 4</span>
        </div>

        {/* Credit Card Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="font-semibold">Credit Card</span>
            </div>
            <div className="flex gap-2">
              <Image src="/images/Visa.png" alt="Visa" width={80} height={25} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="Card number"
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Expiration Date</label>
              <input
                type="text"
                placeholder="DD/MM/YY"
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Card Holder</label>
              <input
                type="text"
                placeholder="Card holder"
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <input type="radio" name="payment" className="w-4 h-4 text-blue-500" />
              <span className="font-medium">PayPal</span>
            </div>
            <Image src="/images/PayPal.png" alt="PayPal" width={80} height={20} />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <input type="radio" name="payment" className="w-4 h-4 text-blue-500" />
              <span className="font-medium">Bitcoin</span>
            </div>
            <Image src="/images/Bitcoin.png" alt="Bitcoin" width={80} height={20} />
          </div>
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="bg-white rounded-lg p-6 mt-8 max-w-[800px]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Confirmation</h2>
            <p className="text-gray-500 mt-1">We are getting to the end. Just few clicks and your rental is ready!</p>
          </div>
          <span className="text-gray-400">Step 4 of 4</span>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 text-blue-500" />
            <span className="text-gray-600">
              I agree with sending an Marketing and newsletter emails. No spam, promissed!
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 text-blue-500" />
            <span className="text-gray-600">
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        <button className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg font-medium mt-6 hover:bg-blue-600 transition-colors">
          Rent Now
        </button>

        <div className="flex items-center gap-4 mt-6">
          {/* <Shield className="w-6 h-6 text-blue-500" /> */}
       

          <Image src="/images/ic-security-safety.png" alt="Shield" width={24} height={24} />
                   

          <div>
            <p className="font-medium">All your data are safe</p>
            <p className="text-gray-500 text-sm">
              We are using the most advanced security to provide you the best experience ever.
            </p>
          </div>
        </div>
      </div>

    </div>



    <Footer/>
    </div>
  )
}

export default page
