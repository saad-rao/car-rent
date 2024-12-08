import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Footer from "@/components/Footer";
// import CarCard from "@/components/CarCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <CarCard image={""} name={""} price={0} originalPrice={0} fuelCapacity={0}/> */}
      <Footer/>
    </>
  );
}
