// import React from "react";
// import { sanityClient } from "@/sanity";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// interface Car {
//   image?: {
//     asset?: {
//       url: string;
//     };
//   };
//   name: string;
//   brand: string;
//   type: string;
//   transmission: string;
//   seatingCapacity: number;
//   fuelCapacity: number;
//   pricePerDay: number;
// }

// const CarDetails = ({ car }: { car: Car }) => {
//   if (!car) {
//     const car: Car = {
//         image: {
//             asset: {
//                 url: "",
//             },
//         },
//         name: "",
//         brand: "",
//         type: "",
//         transmission: "",
//         seatingCapacity: 0,
//         fuelCapacity: 0,
//         pricePerDay: 0,
//     };
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           <img
//             src={car.image?.asset?.url}
//             alt={car.name}
//             className="w-full lg:w-1/2 h-96 object-cover rounded-lg"
//           />
//           <div className="flex-1">
//             <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
//             <p className="text-lg text-gray-600">{car.brand}</p>
//             <p className="text-lg font-semibold">Type: {car.type}</p>
//             <p className="text-lg font-semibold">
//               Transmission: {car.transmission}
//             </p>
//             <p className="text-lg font-semibold">
//               Seating Capacity: {car.seatingCapacity}
//             </p>
//             <p className="text-lg font-semibold">
//               Fuel Capacity: {car.fuelCapacity}
//             </p>
//             <p className="text-2xl font-bold mt-4">
//               ${car.pricePerDay} / day
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export async function getServerSideProps(context: { params: { id: any; }; }) {
//   const { id } = context.params;
//   const query = `*[_type == "car" && _id == $id][0]`;
//   const car = await sanityClient.fetch(query, { id });

//   return {
//     props: {
//       car,
//     },
//   };
// }

// export default CarDetails;
