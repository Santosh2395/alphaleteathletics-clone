import React from "react";
import { Link } from "react-router-dom";

function Essentials() {
  const backgroundImage =
    'url("https://alphaleteathletics.com/cdn/shop/files/M_W_Essentials_16x9_31258b80-eff2-46ae-85ea-efb8780e38d4.jpg?crop=center&v=1740465653&width=1280")'; // Replace with your actual image URL

  return (
    <div className="relative h-95 md:h-[800px] bg-cover bg-center overflow-hidden rounded-lg shadow-lg m-8">
      <div
        className="absolute inset-0 bg-black bg-opacity-30 bg-no-repeat transition-transform duration-500 transform hover:scale-103 bg-cover"
        style={{ backgroundImage: backgroundImage }}
      ></div>

      <div className="absolute inset-y-0 left-0 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white uppercase">
            The Essentials
          </h2>
          <div className="flex space-x-4">
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
  );
}

export default Essentials;
