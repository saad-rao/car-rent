import React from 'react'
import Image from 'next/image'

const Cards = () => {
  return (
    <div>
        {/* Car Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Car cards would be mapped here */}
                      {/* Card 1 - Koenigsegg */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-bold">Koenigsegg</h2>
                        <p className="text-gray-500 text-sm">Sport</p>
                      </div>
                      <Image
                        src={"/images/red-heart.png"}
                        alt="heart"
                        width={30}
                        height={30}
                      />
                    </div>
      
                    <div className="my-8 flex justify-center">
                      <Image
                        src="/images/car.png"
                        alt="Koenigsegg"
                        width={300}
                        height={150}
                        // fill
                        className="object-contain h-36"
                      />
                    </div>
      
                    <div className="flex justify-between mb-6 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 20V10M6 16l6-6 6 6"
                          />
                        </svg>
                        <span>90L</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span>Manual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>2 People</span>
                      </div>
                    </div>
      
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        $99.00/
                        <span className="text-gray-500 text-sm font-normal">day</span>
                      </h2>
                      <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Rent Now
                      </button>
                    </div>
                  </div>
      
                  {/* Card 2 - Nissan GT-R */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-bold">Nissan GT-R</h2>
                        <p className="text-gray-500 text-sm">Sport</p>
                      </div>
                      <Image
                        src={"/images/heart.png"}
                        alt="heart"
                        width={30}
                        height={30}
                      />{" "}
                    </div>
      
                    <div className="my-8 flex justify-center">
                      <Image
                        src="/images/car (1).png"
                        alt="Nissan GT-R"
                        width={300}
                        height={150}
                        // fill
                        className="object-contain h-36"
                      />
                    </div>
      
                    <div className="flex justify-between mb-6 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 20V10M6 16l6-6 6 6"
                          />
                        </svg>
                        <span>80L</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span>Manual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>2 People</span>
                      </div>
                    </div>
      
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-bold">
                          $80.00/
                          <span className="text-gray-500 text-sm font-normal">
                            day
                          </span>
                        </h2>
                        <p className="text-gray-400 text-sm line-through">$100.00</p>
                      </div>
                      <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Rent Now
                      </button>
                    </div>
                  </div>
      
                  {/* Card 3 - Rolls-Royce */}
                  <div className="bg-white p-6 rounded-[10px] shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-bold">Rolls-Royce</h2>
                        <p className="text-gray-500 text-sm">Sport</p>
                      </div>
                      <Image
                        src={"/images/red-heart.png"}
                        alt="heart"
                        width={30}
                        height={30}
                      />{" "}
                    </div>
      
                    <div className="my-8 flex justify-center">
                      <Image
                        src="/images/Car (2).png"
                        alt="Rolls-Royce"
                        width={300}
                        height={150}
                        // fill
                        className="object-contain h-36"
                      />
                    </div>
      
                    <div className="flex justify-between mb-6 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 20V10M6 16l6-6 6 6"
                          />
                        </svg>
                        <span>70L</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span>Manual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>4 People</span>
                      </div>
                    </div>
      
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        $96.00/
                        <span className="text-gray-500 text-sm font-normal">day</span>
                      </h2>
                      <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Rent Now
                      </button>
                    </div>
                  </div>
                                   
                                 {/* Card 3 - AllNew Rush */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h2 className="text-xl font-bold">AllNew Rush</h2>
                                    <p className="text-gray-500 text-sm">SUV</p>
                                  </div>
                                  <div className="text-gray-300 text-2xl">
                                    <Image
                                      src={"/images/heart.png"}
                                      alt="heart"
                                      width={30}
                                      height={30}
                                    />
                                  </div>
                                </div>
                  
                                <div className="my-8 flex justify-center">
                                  <Image
                                    src="/images/Car (4).png"
                                    alt="All new rush"
                                    width={300}
                                    height={150}
                                    // fill
                                    className="object-contain h-36"
                                  />
                                </div>
                  
                                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 20V10M6 16l6-6 6 6"
                                      />
                                    </svg>
                                    <span>70L</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                    <span>Manual</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    <span>6 People</span>
                                  </div>
                                </div>
                  
                                <div className="flex justify-between items-center">
                                  <h2 className="text-xl font-bold">
                                    $72.00/
                                    <span className="text-gray-500 text-sm font-normal">day</span>
                                    <p className="text-gray-400 text-sm line-through">$80.00</p>
                                  </h2>
                  
                                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    Rent Now
                                  </button>
                                </div>
                              </div>
                  
                              {/* Card 5 - Cr-V */}
                              <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h2 className="text-xl font-bold">CR-V</h2>
                                    <p className="text-gray-500 text-sm">SUV</p>
                                  </div>
                                  <Image
                                    src={"/images/red-heart.png"}
                                    alt="heart"
                                    width={30}
                                    height={30}
                                  />
                                </div>
                  
                                <div className="my-8 flex justify-center">
                                  <Image
                                    src="/images/Car (5).png"
                                    alt="CR-V"
                                    width={300}
                                    height={150}
                                    // fill
                                    className="object-contain h-36"
                                  />
                                </div>
                  
                                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 20V10M6 16l6-6 6 6"
                                      />
                                    </svg>
                                    <span>80L</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                    <span>Manual</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    <span>6 People</span>
                                  </div>
                                </div>
                  
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h2 className="text-xl font-bold">
                                      $80.00/
                                      <span className="text-gray-500 text-sm font-normal">
                                        day
                                      </span>
                                    </h2>
                                  </div>
                                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    Rent Now
                                  </button>
                                </div>
                              </div>
                  
                              {/* Card 6 - AllNewTerios */}
                              <div className="bg-white p-6 rounded-[10px] shadow-sm">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h2 className="text-xl font-bold">AllNewTerios</h2>
                                    <p className="text-gray-500 text-sm">SUV</p>
                                  </div>
                                  <Image
                                    src={"/images/heart.png"}
                                    alt="heart"
                                    width={30}
                                    height={30}
                                  />
                                </div>
                  
                                <div className="my-8 flex justify-center">
                                  <Image
                                    src="/images/Car (6).png"
                                    alt="AllNewTerios"
                                    width={300}
                                    height={150}
                                    // fill
                                    className="object-contain h-36"
                                  />
                                </div>
                  
                                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 20V10M6 16l6-6 6 6"
                                      />
                                    </svg>
                                    <span>90L</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                    <span>Manual</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    <span>6 People</span>
                                  </div>
                                </div>
                  
                                <div className="flex justify-between items-center">
                                  <h2 className="text-xl font-bold">
                                    $74.00/
                                    <span className="text-gray-500 text-sm font-normal">day</span>
                                  </h2>
                                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    Rent Now
                                  </button>
                                </div>
                              </div>
      
                               {/* Card 9 - MG ZX Exclusive*/}
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                          <div className="flex justify-between items-center">
                                            <div>
                                              <h2 className="text-xl font-bold">MGZX Exclusive</h2>
                                              <p className="text-gray-500 text-sm">Hatchback</p>
                                            </div>
                                            <div className="text-gray-300 text-2xl">
                                              <Image
                                                src={"/images/red-heart.png"}
                                                alt="heart"
                                                width={30}
                                                height={30}
                                              />
                                            </div>
                                          </div>
                              
                                          <div className="my-8 flex justify-center">
                                            <Image
                                              src="/images/Car (8).png"
                                              alt="MGZX Exclusive"
                                              width={300}
                                              height={150}
                                            
                                              className="object-contain h-36"
                                            />
                                          </div>
                              
                                          <div className="flex justify-between mb-6 text-gray-500 text-sm">
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M12 20V10M6 16l6-6 6 6"
                                                />
                                              </svg>
                                              <span>70L</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M19 9l-7 7-7-7"
                                                />
                                              </svg>
                                              <span>Manual</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                              </svg>
                                              <span>4 People</span>
                                            </div>
                                          </div>
                              
                                          <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-bold">
                                              $76.00/
                                              <span className="text-gray-500 text-sm font-normal">day</span>
                                              <p className="text-gray-400 text-sm line-through">$80.00</p>
                                            </h2>
                              
                                            <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                              Rent Now
                                            </button>
                                          </div>
                                        </div>
                              
                                        {/* Card 10 - NewMGZs */}
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                          <div className="flex justify-between items-center">
                                            <div>
                                              <h2 className="text-xl font-bold">New MGZS</h2>
                                              <p className="text-gray-500 text-sm">SUV</p>
                                            </div>
                                            <Image
                                              src={"/images/heart.png"}
                                              alt="heart"
                                              width={30}
                                              height={30}
                                            />
                                          </div>
                              
                                          <div className="my-8 flex justify-center">
                                            <Image
                                              src="/images/Car (9).png"
                                              alt="NewMGZS"
                                              width={300}
                                              height={150}
                                              className="object-contain h-36"
                                            />
                                          </div>
                              
                                          <div className="flex justify-between mb-6 text-gray-500 text-sm">
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M12 20V10M6 16l6-6 6 6"
                                                />
                                              </svg>
                                              <span>80L</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M19 9l-7 7-7-7"
                                                />
                                              </svg>
                                              <span>Manual</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                              </svg>
                                              <span>6 People</span>
                                            </div>
                                          </div>
                              
                                          <div className="flex justify-between items-center">
                                            <div>
                                              <h2 className="text-xl font-bold">
                                                $80.00/
                                                <span className="text-gray-500 text-sm font-normal">day</span>
                                              </h2>
                                            </div>
                                            <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                              Rent Now
                                            </button>
                                          </div>
                                        </div>
                              
                                        {/* Card 11 - MGZX Excite */}
                                        <div className="bg-white p-6 rounded-[10px] shadow-sm">
                                          <div className="flex justify-between items-center">
                                            <div>
                                              <h2 className="text-xl font-bold">MGZX Excite</h2>
                                              <p className="text-gray-500 text-sm">Hatchback</p>
                                            </div>
                                            <Image
                                              src={"/images/red-heart.png"}
                                              alt="heart"
                                              width={30}
                                              height={30}
                                            />
                                          </div>
                              
                                          <div className="my-8 flex justify-center">
                                            <Image
                                              src="/images/Car (10).png"
                                              alt="MGZX Excite"
                                              width={300}
                                              height={150}
                                              className="object-contain h-36"
                                            />
                                          </div>
                              
                                          <div className="flex justify-between mb-6 text-gray-500 text-sm">
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M12 20V10M6 16l6-6 6 6"
                                                />
                                              </svg>
                                              <span>90L</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M19 9l-7 7-7-7"
                                                />
                                              </svg>
                                              <span>Manual</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                              </svg>
                                              <span>4 People</span>
                                            </div>
                                          </div>
                              
                                          <div className="flex justify-between items-center">
                                            <h2 className="text-xl font-bold">
                                              $74.00/
                                              <span className="text-gray-500 text-sm font-normal">day</span>
                                            </h2>
                                            <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                              Rent Now
                                            </button>
                                          </div>
                                        </div>
      
      
    </div>
    </div>
  )
}

export default Cards
