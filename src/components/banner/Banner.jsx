import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  const backgroundImage =
    'url("https://alphaleteathletics.com/cdn/shop/files/Homepage_Best_Sellers_v2_16x9_f86a9199-1969-42d0-8d7e-4573a74cb14d.jpg?crop=center&v=1740465653&width=1920")'; // Replace with your actual image URL

  return (
    <>
      <div className="relative h-96 md:h-[800px] bg-cover bg-center overflow-hidden rounded-lg shadow-lg m-8 group">
        <div
          className="absolute inset-0 bg-black bg-opacity-30 bg-no-repeat transition-transform duration-600 transform group-hover:scale-103 bg-cover"
          style={{ backgroundImage: backgroundImage }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              BEST SELLERS
            </h2>
            <div className="flex justify-center space-x-4">
              <Link to={"./women-products"}>
                <button className="bg-white cursor-pointer text-gray-800 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Shop Women
                </button>
              </Link>
              <Link to={"./men-products"}>
                <button className="bg-white cursor-pointer text-gray-800 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Shop Men
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
