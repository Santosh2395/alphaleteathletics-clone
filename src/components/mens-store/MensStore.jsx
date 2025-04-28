import React from "react";

const MenStore = () => {
  return (
    <div className="bg-black text-white font-sans flex absolute top-20 w-full">
      {/* Left Sidebar */}
      <aside className="w-full md:w-2/5 lg:w-1/4 p-6 md:p-10 flex flex-col gap-y-8 lg:gap-y-14 lg:space-x-8 lg:flex-row">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Featured</h2>
          <ul className="flex flex-col space-y-2 mb-6 lg:mb-8 w-26">
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
        <div className="">
          <h2 className="text-xl font-bold mb-4">Clothing</h2>
          <ul className="flex flex-col space-y-2 mb-6 lg:mb-8 w-33">
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              All Products
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Shorts
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              T-Shirts
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Pants
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Tanks & Stringers
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Hoodies & Jackets
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Long Sleeve Shirts
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Underwear
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold mb-4">Activity</h2>
          <ul className="flex flex-col space-y-1 mb-6 lg:mb-8 w-33">
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Running
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Workout
            </li>
            <li className="py-1 text-sm hover:text-gray-400 cursor-pointer">
              Lifestyle
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="w-500 flex justify-center md:justify-end p-6 md:p-8">
        {/* Right Section with Product Categories */}
        <div className=" md:w-3/4 lg:w-3/5 flex flex-col md:flex-row space-y-4 md:space-x-4">
          <div className="relative w-full md:w-1/3 h-64 md:h-96 overflow-hidden rounded-md">
            <img
              src="https://alphaleteathletics.com/cdn/shop/files/Nav_M_Shirts_4x5_00478ec9-fbe9-47ec-a665-5e1a44c16094.jpg?height=1000&v=1740169480&width=800"
              alt="Model wearing apparel"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
              Shirts
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-64 md:h-96 overflow-hidden rounded-md">
            <img
              src="https://alphaleteathletics.com/cdn/shop/files/Nav_M_Joggers_4x5_bf9ec5b3-26c0-4d2c-9137-651f746d390c.jpg?height=1000&v=1740169480&width=800"
              alt="Pants"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
              Pants
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-64 md:h-96 overflow-hidden rounded-md">
            <img
              src="https://alphaleteathletics.com/cdn/shop/files/Nav_M_Shorts_4x5_cb855073-24d1-4c2f-997a-e19488c995cb.jpg?height=1000&v=1740169480&width=800"
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

export default MenStore;
