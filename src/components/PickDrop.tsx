"use client";
import React, { useState, useEffect, useRef, RefObject } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const PickupDropoff = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [dropoffLocation, setDropoffLocation] = useState<string>('');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [dropoffDate, setDropoffDate] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('');
  const [dropoffTime, setDropoffTime] = useState<string>('');
  const [, setLoading] = useState<boolean>(true);

  // Dropdown states
  const [showPickupLocations, setShowPickupLocations] = useState<boolean>(false);
  const [showDropoffLocations, setShowDropoffLocations] = useState<boolean>(false);
  const [filteredPickupCities, setFilteredPickupCities] = useState<string[]>([]);
  const [filteredDropoffCities, setFilteredDropoffCities] = useState<string[]>([]);
  const [searchPickup, setSearchPickup] = useState<string>('');
  const [searchDropoff, setSearchDropoff] = useState<string>('');

  // Click outside handling
  const pickupRef = useRef<HTMLDivElement | null>(null);
  const dropoffRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchCities();
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setFilteredPickupCities(
      cities.filter(city => 
        city.toLowerCase().includes(searchPickup.toLowerCase())
      )
    );
  }, [searchPickup, cities]);

  useEffect(() => {
    setFilteredDropoffCities(
      cities.filter(city => 
        city.toLowerCase().includes(searchDropoff.toLowerCase())
      )
    );
  }, [searchDropoff, cities]);

  const handleClickOutside = (event: MouseEvent) => {
    if (pickupRef.current && !pickupRef.current.contains(event.target as Node)) {
      setShowPickupLocations(false);
    }
    if (dropoffRef.current && !dropoffRef.current.contains(event.target as Node)) {
      setShowDropoffLocations(false);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await fetch(
        'http://api.geonames.org/searchJSON?country=PK&featureClass=P&maxRows=1000&username=saad12'
      );
      const data = await response.json();
      setCities(data.geonames.map((city: { name: string }) => city.name));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cities:', error);
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setPickupLocation(dropoffLocation);
    setDropoffLocation(pickupLocation);
    setPickupDate(dropoffDate);
    setDropoffDate(pickupDate);
    setPickupTime(dropoffTime);
    setDropoffTime(pickupTime);
  };

  interface LocationSelectorProps {
    value: string;
    onChange: (value: string) => void;
    showDropdown: boolean;
    setShowDropdown: (show: boolean) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    filteredCities: string[];
    reference: RefObject<HTMLDivElement | null>;
  }

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  const LocationSelector: React.FC<LocationSelectorProps> = ({
    value,
    onChange,
    showDropdown,
    setShowDropdown,
    searchValue,
    setSearchValue,
    filteredCities,
    reference
  }) => (
    <div className="relative" ref={reference}>
      <div 
        className="border-r border-gray-200 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <h2 className="text-[16px] font-medium text-gray-900 mb-2">
          Locations
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-gray-400">
            {value || "Select your city"}
          </p>
          <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
        </div>
      </div>
      
      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="p-2">
            <input
              type="text"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search cities..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="py-1">
            {filteredCities.map((city:string) => (
              <div
                key={city}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(city);
                  setShowDropdown(false);
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const DateSelector = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <div className="border-r border-gray-200">
      <h2 className="text-[16px] font-medium text-gray-900 mb-2">
        Date
      </h2>
      <div className="flex items-center justify-between">
        <input
          type="date"
          className="text-[14px] text-gray-400 focus:outline-none cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
        <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
      </div>
    </div>
  );

  const TimeSelector = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <div className="relative group">
      <h2 className="text-[16px] font-medium text-gray-900 mb-2">
        Time
      </h2>
      <div className="flex items-center justify-between cursor-pointer">
        <select
          className="text-[14px] text-gray-400 focus:outline-none appearance-none bg-transparent w-full cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select your time</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-black-400 mr-[30px] pointer-events-none" />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-4 items-center">
        {/* Pick-Up Section */}
        <div className="bg-white rounded-[10px] p-6 shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5">
              <Image
                src="/images/mark.png"
                alt="Pick-up location"
                width={20}
                height={20}
              />
            </div>
            <span className="text-[16px] font-semibold text-gray-900">
              Pick-Up
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LocationSelector
              value={pickupLocation}
              onChange={setPickupLocation}
              showDropdown={showPickupLocations}
              setShowDropdown={setShowPickupLocations}
              searchValue={searchPickup}
              setSearchValue={setSearchPickup}
              filteredCities={filteredPickupCities}
              reference={pickupRef}
            />
            <DateSelector
              value={pickupDate}
              onChange={setPickupDate}
            />
            <TimeSelector
              value={pickupTime}
              onChange={setPickupTime}
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button 
            className="bg-[#3563E9] p-4 rounded-[10px]"
            onClick={handleSwap}
          >
            <Image
              src="/images/Swap.png"
              alt="Swap"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="bg-white rounded-[10px] p-6 shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5">
              <Image
                src="/images/mark (1).png"
                alt="Drop-off location"
                width={20}
                height={20}
              />
            </div>
            <span className="text-[16px] font-semibold text-gray-900">
              Drop-Off
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LocationSelector
              value={dropoffLocation}
              onChange={setDropoffLocation}
              showDropdown={showDropoffLocations}
              setShowDropdown={setShowDropoffLocations}
              searchValue={searchDropoff}
              setSearchValue={setSearchDropoff}
              filteredCities={filteredDropoffCities}
              reference={dropoffRef}
            />
            <DateSelector
              value={dropoffDate}
              onChange={setDropoffDate}
            />
            <TimeSelector
              value={dropoffTime}
              onChange={setDropoffTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoff;