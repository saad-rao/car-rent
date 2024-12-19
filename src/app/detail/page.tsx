import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
    <div className="w-full min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          {/* Type Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">TYPE</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>Sports (10)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>SUV (12)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>MPV (16)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>Sedan (20)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>Coupe (16)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>Hatchback (16)</span>
              </label>
            </div>
          </div>

          {/* Capacity Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">CAPACITY</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>2 Person (10)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>4 Person (14)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span>6 Person (12)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
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

        <div className="max-w-7xl mx-auto p-4">
  {/* Main Container */}
  <div className="flex flex-col lg:flex-row gap-6 mb-8">
    {/* Left Side - Main Card */}
    <div className="lg:w-1/2">
      <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Sports car with the best design and acceleration</h1>
        <p className="mb-4">Safety and comfort while driving a futuristic and elegant sports car</p>
        <Image
          src="/images/image 8 (2).png"
          alt="card car img"
          width={400}
          height={100}
          className="w-full rounded-lg"
        />
      </div>
      
      {/* Car Views */}
      <div className="flex space-x-4">
        <div className="w-1/3">
          <Image
            src="/images/View 1.png"
            alt="car view"
            width={120}
            height={120}
            className="w-full rounded-lg border-2 border-gray-200"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/images/View 2.png"
            alt="car view"
            width={120}
            height={120}
            className="w-full rounded-lg border-2 border-gray-200"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/images/View 3.png"
            alt="car view"
            width={120}
            height={120}
            className="w-full rounded-lg border-2 border-gray-200"
          />
        </div>
      </div>
    </div>

    {/* Right Side - Car Details */}
    <div className="lg:w-1/2">
      <div className="bg-white rounded-lg p-6 h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold">Nissan GT-R</h2>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4].map((star) => (
                <span key={star} className="text-yellow-400">★</span>
              ))}
              <span className="text-gray-400 ml-2 ">440+ Reviewer</span>
            </div>
          </div>
         
        </div>

        <p className="text-gray-600 mb-6">
          NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex gap-8 ">
            <p className="text-gray-500">Type Car</p>
            <p className="font-semibold">Sport</p>
          </div>
          <div className="flex gap-8">
            <p className="text-gray-500">Capacity</p>
            <p className="font-semibold">2 Person</p>
          </div>
          <div className="flex gap-8 mb-6">
            <p className="text-gray-500">Steering</p>
            <p className="font-semibold">Manual</p>
          </div>
          <div className="flex gap-8 ">
            <p className="text-gray-500">Gasoline</p>
            <p className="font-semibold">70L</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">$80.00/</span>
            <span className="text-gray-500">days</span>
            <p className="text-gray-500 line-through">$100.00</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Reviews Section */}
  <div className="mt-8">
    <div className="flex items-center mb-6">
      <h3 className="text-lg font-bold">Reviews</h3>
      <span className="ml-2 bg-[#3563E9] text-white px-4 py-1 rounded-[10px] text-sm">13</span>
    </div>

    {/* Review Cards */}
    <div className="space-y-4">
      {/* First Review */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Image
              src="/images/Profill.png"
              alt="profile img"
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-bold">Alex Stanton</p>
              <p className="text-gray-500 text-sm">CEO at Bukalapak</p>
            </div>
          </div>
          <div className="items-center">
            <p className="text-gray-500 mr-4">21 July 2022</p>
            <Image
              src="/images/Reviews.png"
              alt="review image"
              width={100}
              height={50}
            />
          </div>
        </div>
        <p className="text-gray-600">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
      </div>

      {/* Second Review */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Image
              src="/images/Profill (1).png"
              alt="profile img"
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-bold">Skylar Dias</p>
              <p className="text-gray-500 text-sm">CEO at Amazon</p>
            </div>
          </div>
          <div className=" items-center">
            <p className="text-gray-500 mr-4">20 July 2022</p>
            <Image
              src="/images/Reviews.png"
              alt="review image"
              width={100}
              height={50}
            />
          </div>
        </div>
        <p className="text-gray-600">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
      </div>
    </div>
  </div>
</div>


</div>

</div>


<div className="flex flex-col min-h-screen bg-gray-50">
  {/* Main Content */}
  <div className="flex-1">
    <div className="container mx-auto px-4 py-6">
      <div className="lg:ml-32 flex flex-col">
        <Cards />
      </div>
    </div>
  </div>
  
  {/* Footer */}
  <Footer />
</div>
        

</div>
</div>
  )
}

export default page
