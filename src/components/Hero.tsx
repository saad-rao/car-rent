"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Car } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Fuel, Gauge, Users } from "lucide-react";
import PickDrop from "./PickDrop";
import Link from "next/link";

export default function DynamicCarCards() {
  const [cars, setCars] = useState<Car[]>([]);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    async function fetchCars() {
      const query = `*[_type == "car"] | order(_createdAt desc)[0...12]`;
      const data = await client.fetch(query);
      setCars(data);
    }
    fetchCars();
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Card */}
          <div className="relative bg-[#54A6FF] rounded-[10px] p-8 overflow-hidden h-[400px]">
            <div className="relative z-10">
              <h2 className="text-white text-[32px] font-semibold leading-[40px] mb-4 max-w-[260px]">
                The Best Platform for Car Rental
              </h2>
              <p className="text-white text-[16px] leading-[24px] mb-8 max-w-[300px]">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Link href="/detail">
                            <button className="bg-[#3563E9] text-white text-[16px] px-5 py-2.5 rounded-[4px] hover:bg-blue-700 transition-colors">
                Rental Car
              </button>
              </Link>

            </div>
            <div className="absolute bottom-0 right-0 w-[80%] h-auto">
              {cars.length > 0 && cars[1].image && (
                <Image
                  src={urlFor(cars[1].image).url()} // Sanity Image Fetch
                  alt="Car Image"
                  width={400}
                  height={200}
                  className="object-contain h-36 mix-blend-normal"
                />
              )}
            </div>
          </div>

          {/* Second Card */}
          <div className="relative bg-[#3563E9] rounded-[10px] p-8 overflow-hidden h-[400px] ">
            <div className="relative z-10">
              <h2 className="text-white text-[32px] font-semibold leading-[40px] mb-4 max-w-[270px]">
                Easy way to rent a car at a low price
              </h2>
              <p className="text-white text-[16px] leading-[24px] mb-8 max-w-[300px]">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <Link href="/detail">
              <button className="bg-[#54A6FF] text-white text-[16px] px-5 py-2.5 rounded-[4px] hover:bg-blue-400 transition-colors">
                Rental Car
              </button>
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-[80%] h-auto">
              {cars.length > 0 && cars[0].image && (
                <Image
                  src={urlFor(cars[0].image).url()} // Sanity Image Fetch
                  alt="Car Image"
                  width={400}
                  height={200}
                  className="object-contain mix-blend h-36"
                />
              )}
            </div>
          </div>
        
        </div>
        <PickDrop/>
        </div>

        {/* Car Cards */}
        <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-8">
         <p className="text-lg font-semibold text-gray-800 ">Popular Car</p>
             <p className="text-blue-600 cursor-pointer">View All</p>
           </div>
  {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {cars.map((car) => (
            <div key={car._id} className="bg-white rounded-2xl shadow-md p-4 relative">
               <h2 className="text-xl font-bold">{car.name}</h2>
               <p className="text-gray-500 text-sm">{car.type}</p>
              {car.image && <img src={urlFor(car.image).url()} alt={car.name} className="w-full h-48 object-contain rounded-xl" />}
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
     
    </>
  );
}


