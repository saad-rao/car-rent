import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Footer/>
    </>
  );
}


// "use client";
// import { useEffect, useState } from "react";

// interface Car {
//   name: string;
//   brand: string;
//   type: string;
//   fuelCapacity: string;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   originalPrice: number;
//   tags: string[];
//   imageUrl: string;
// }

// const CarsList = () => {
//   const [cars, setCars] = useState<Car[]>([]);

//   useEffect(() => {
//     fetchCars();
//   }, []);

//   const fetchCars = async () => {
//     const query = `*[_type == "car"][0..15] {
//       name,
//       brand,
//       type,
//       fuelCapacity,
//       transmission,
//       seatingCapacity,
//       pricePerDay,
//       originalPrice,
//       tags,
//       "imageUrl": image.asset->url
//     }`;
    
//     const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${encodeURIComponent(query)}`;
    
//     try {
//       const response = await fetch(url);
//       const result = await response.json();
//       setCars(result.result || []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Luxury Car Rentals</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {cars.map((car, index) => (
//           <div key={index} className="bg-white shadow-xl rounded-3xl overflow-hidden p-5 transform transition duration-300 hover:scale-105">
//             <img
//               src={car.imageUrl}
//               alt={car.name}
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <h2 className="text-2xl font-semibold mt-3 text-gray-900">{car.name}</h2>
//             <p className="text-gray-600">{car.brand} - {car.type}</p>
//             <p className="text-sm mt-1 text-gray-500">{car.transmission} | {car.seatingCapacity}</p>
//             <p className="text-sm text-gray-500">Fuel: {car.fuelCapacity}</p>
//             <p className="text-xl font-bold text-blue-600 mt-3">${car.pricePerDay}/day</p>
//             <p className="text-sm line-through text-gray-400">Original: ${car.originalPrice}</p>
//             <div className="flex flex-wrap gap-2 mt-3">
//               {car.tags.map((tag, i) => (
//                 <span key={i} className="text-xs bg-gray-200 px-3 py-1 rounded-full font-medium">{tag}</span>
//               ))}
//             </div>
//             <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Book Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarsList;


