import React from "react";

const WomenStore = () => {
  return (
    <div className="bg-black text-white font-sans flex absolute top-20 w-full">
      {/* Left Sidebar */}
      <aside className="w-full md:w-2/5 lg:w-1/4 p-6 md:p-10 flex flex-col gap-y-8 lg:gap-y-14 lg:space-x-8 lg:flex-row">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Featured</h2>
          <ul className="flex flex-col space-y-2 mb-6 lg:mb-8">
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              New Arrivals
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Best Sellers
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Better In Black
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Workout Sets
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Basics
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Accessories
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              E-Gift Card
            </li>
            <li className="py-1 text-sm text-red-500 hover:text-red-400 cursor-pointer">
              Last Chance
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Clothing</h2>
          <ul className="flex flex-col space-y-2 mb-6 lg:mb-8">
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              All Products
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Shorts
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Leggings
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Bras
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              T-Shirts & Crops
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Hoodies & Sweatshirts
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Sweatpants
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Tank Tops
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Bodysuits
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Underwear
            </li>
          </ul>
        </div>
        <div className="flex space-x-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Sports Bras</h2>
            <ul className="flex flex-col space-y-1">
              <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
                Low Impact
              </li>
              <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
                Medium Impact
              </li>
              <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
                High Impact
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Leggings</h2>
            <ul className="flex flex-col space-y-1">
              <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
                Low Compression
              </li>
              <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
                Medium Compression
              </li>
              <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
                High Compression
              </li>
            </ul>
          </div>
       
        </div>
        {/* Add other categories as needed */}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex justify-center md:justify-end p-6 md:p-8">
        {/* Right Section with Product Categories */}
        <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col md:flex-row space-y-4 md:space-x-4">
          <div className="relative w-full md:w-1/3 h-64 md:h-96 overflow-hidden rounded-md">
            <img
              src="https://alphaleteathletics.com/cdn/shop/files/Nav_Bra_4x5_79e8fed3-e4b6-4a07-bb98-262868314b82.jpg?height=1000&v=1740169047&width=800" // Replace with the actual image URL
              alt="Bras"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
              Bras
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-64 md:h-96 overflow-hidden rounded-md">
            <img
              src="https://alphaleteathletics.com/cdn/shop/files/Nav_Leggings_4x5_c5cdc18d-da50-4112-9637-cce88c93cb62.jpg?height=1000&v=1740169047&width=800" // Replace with actual image URL
              alt="Leggings"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
              LEGGINGS
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-64 md:h-96 overflow-hidden rounded-md">
            <img
              src="https://alphaleteathletics.com/cdn/shop/files/Nav_Shorts_4x5_e3e615e4-752c-4046-8a46-5f26c0dca298.jpg?height=1000&v=1740169047&width=800" // Replace with actual image URL
              alt="Shorts"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
              SHORTS
            </div>
          </div>
          {/* You can add more image thumbnails here */}
        </div>
      </main>
    </div>
  );
};

export default WomenStore;
