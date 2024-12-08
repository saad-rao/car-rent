// import React from 'react';

// interface CarCardProps {
//   image: string;
//   name: string;
//   price: number;
//   originalPrice: number;
//   fuelCapacity: number;
// }

// const CarCard: React.FC<CarCardProps> = ({
//   image,
//   name,
//   price,
//   originalPrice,
//   fuelCapacity,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-72 md:w-80 lg:w-96">
//       <div className="relative">
//         <img src={image} alt={name} className="w-full h-48 object-cover" />
//         {/* Add your SVG icons here */}
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <span className="text-2xl font-bold text-gray-800">${price.toFixed(2)}</span>
//             <span className="text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
//           </div>
//           <div className="text-gray-500">
//             {/* Add your SVG icons here */}
//             <span>{fuelCapacity}L</span>
//           </div>
//         </div>
//         <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//           Rent Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;

// import { type } from 'os';
// import React from 'react';

// interface CarCardProps {
//   image: string;
//   name: string;
//   price: number;
//   originalPrice: number;
//   fuelCapacity: number;
// }

// const CarCard: React.FC<CarCardProps> = ({
//   image,
//   name,
//   price,
//   originalPrice,
//   fuelCapacity,
// }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h2 className="text-xl font-bold">{name}</h2>
//           <p className="text-gray-500 text-sm">{}</p>
//         </div>
//         {/* <button className="text-2xl">
//           {liked ? '❤️' : '🤍'}
//         </button> */}
//       </div>

//       <div className="my-8 flex justify-center">
//         <img src={`/api/placeholder/280/140`} alt={name} className="object-contain h-36" />
//       </div>

//       <div className="flex justify-between mb-6 text-gray-500 text-sm">
//         <div className="flex items-center gap-2">
//           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M20 7l-3-3H7L4 7m16 0H4m16 0v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//           <span>{price}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//           <span>{image}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//           <span>{fuelCapacity}</span>
//         </div>
//       </div>

//       <div className="flex justify-between items-center">
//         <div>
//           <span className="text-xl font-bold">${price}.00</span>
//           <span className="text-gray-500">/day</span>
//           {originalPrice && (
//             <p className="text-gray-400 text-sm line-through">${originalPrice}.00</p>
//           )}
//         </div>
//         <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
//           Rent Now
//         </button>
//       </div>
//     </div>
//   );
// };

// const CarCard = () => {
//   const cars = [
//     {
//       name: "Koenigsegg",
//       type: "Sport",
//       fuelAmount: "90L",
//       transmission: "Manual",
//       capacity: "2 People",
//       price: 99,
//       liked: true,
//       imageSrc: "/images/car.png"
//     },
//     {
//       name: "Nissan GT-R",
//       type: "Sport",
//       fuelAmount: "80L",
//       transmission: "Manual",
//       capacity: "2 People",
//       price: 80,
//       originalPrice: 100,
//       liked: false,
//       imageSrc: "/images/car(1).png"
//     },
//     {
//       name: "Rolls-Royce",
//       type: "Sedan",
//       fuelAmount: "70L",
//       transmission: "Manual",
//       capacity: "4 People",
//       price: 96,
//       liked: true,
//       imageSrc: "/images/car(2).png"
//     },
//     {
//       name: "Nissan GT-R",
//       type: "Sport",
//       fuelAmount: "80L",
//       transmission: "Manual",
//       capacity: "2 People",
//       price: 80,
//       originalPrice: 100,
//       liked: false,
//       imageSrc: "/images/car(3).png"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-xl">Popular Car</h1>
//         <button className="text-blue-600">View All</button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {cars.map((car, index) => (
//           <CarCard key={index} {...car} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarCard;
