"use client";
import Navbar from '@/components/Navbar';
import PickDrop from '@/components/PickDrop';
import Footer from '@/components/Footer';
import React, { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Fuel, Gauge, Users } from 'lucide-react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface Car {
  _id: string;
  name: string;
  type: string;
  image: string;
  capacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  fuelCapacity: number;
}

const CategoryPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState(100);
  const [, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const query = `*[_type == "car"] | order(_createdAt desc)[0...12]`;
      const data = await client.fetch(query);
      setCars(data);
    }
    fetchCars();
  }, []);


  useEffect(() => {
    let filtered = cars;

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((car) => selectedTypes.includes(car.type));
    }

    if (selectedCapacities.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCapacities.includes(car.capacity)
      );
    }

    filtered = filtered.filter((car) => car.pricePerDay <= priceRange);

    setFilteredCars(filtered);
  }, [selectedTypes, selectedCapacities, priceRange, cars]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity: number) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(event.target.value));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };


   // Fetch cars in the main component
   const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
 
   useEffect(() => {
     async function fetchCars() {
       const query = `*[_type == "car"] | order(_createdAt desc)[0...9]`;
       const data = await client.fetch(query);
       setCars(data);
     }
     fetchCars();
   }, []);
 
  
    return (
      <>
        <Navbar />
        <div className="flex py-8 px-4 lg:px-0 max-w-7xl mx-auto">
          {/* Filters Section */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            {/* Type Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">TYPE</h3>
              <div className="space-y-3">
                {['Sports', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(
                  (type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeChange(type)}
                      />
                      <span>{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Capacity Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">CAPACITY</h3>
              <div className="space-y-3">
                {[2, 4, 6, 8].map((capacity) => (
                  <label key={capacity} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedCapacities.includes(capacity)}
                      onChange={() => handleCapacityChange(capacity)}
                    />
                    <span>{capacity} Person</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">PRICE</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-600 mt-2">Max. ${priceRange}.00</p>
            </div>
          </div>
          <div className="flex-1">
          <PickDrop />

   {/* Car Cards Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car._id} className="bg-white rounded-2xl shadow-md p-4 relative">
              <h2 className="text-xl font-bold">{car.name}</h2>
              <p className="text-gray-500 text-sm">{car.type}</p>
              {car.image && <Image src={urlFor(car.image).url()} alt={car.name} width={400} height={200} className="w-full h-48 object-contain rounded-xl" />}
              <div className="flex justify-between mb-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Fuel size={16} />
                  <p>{car.fuelCapacity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge size={16} />
                  <p>{car.transmission}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <p>{car.seatingCapacity}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-800 font-bold mt-2">{car.pricePerDay}</p>
                <Link href="/detail">
                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>
              <button
                onClick={() => toggleFavorite(car._id)}
                className="absolute top-4 right-4 p-2"
              >
                <Heart
                  className={`w-6 h-6 ${favorites[car._id] ? 'text-red-500' : 'text-gray-400'}`}
                  fill={favorites[car._id] ? 'currentColor' : 'none'}
                />
              </button>
            </div>
          ))}
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

 



export default CategoryPage;