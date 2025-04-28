import React from "react";
import CategoryCards from "../women-category/CategoryCards";
import Banner from "../banner/Banner";
import MensCategory from "../mens-category/MensCategory";
import Essentials from "../essentials/Essentials";
import DoubleLayer from "../double-layer/DoubleLayer";
import Video from "../video/Video";
import products from "../../product-data/Products.json";
import { ProductCard } from "../products/ProductList";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <header className="bg-black text-white py-4 md:py-4 mb-8 mt-30 md:mt-4 lg:mt-10 xl:mt-12">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Shop</div>
          <Link to={"./women-products"}>
            <button className="cursor-pointer bg-white text-black font-semibold rounded-full px-4 py-0 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Shop All
            </button>
          </Link>
        </div>
        <div className="container mx-auto px-4 mt-4 md:mt-2">
          <h2 className="text-lg md:text-xl font-bold">NEW THIS WEEK</h2>
          <div className="mt-2 md:mt-4">
            <div className="flex space-x-4">
              <button className="cursor-pointer bg-gray-700 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">
                Women's
              </button>
              <button className="cursor-pointer bg-transparent border border-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Men's
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.slice(0, 5).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="bg-black text-white py-4 md:py-6 mb-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-sm font-semibold">Women's </div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold">Popular Right Now</h2>
        </div>
      </div>

      {/* // categories card  */}

      <CategoryCards />
      <div className="container p-8 m-auto">
        <Banner />
      </div>
      <MensCategory />
      <Essentials />
      <header className="bg-black text-white py-4 md:py-4 mb-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Shop</div>

          <Link to={"./women-products"}>
            <button className="cursor-pointer bg-white text-black font-semibold rounded-full px-4 py-0 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Shop All
            </button>
          </Link>
        </div>
        <div className="container mx-auto px-4 mt-4 md:mt-2">
          <h2 className="text-lg md:text-xl font-bold uppercase">
            The Essentials
          </h2>
          <div className="mt-2 md:mt-4">
            <div className="flex space-x-4">
              <button className="cursor-pointer bg-gray-700 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">
                Women's
              </button>
              <button className="cursor-pointer bg-transparent border border-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Men's
              </button>
            </div>
          </div>
        </div>
      </header>
      <DoubleLayer />
      <Video />
    </>
  );
};

export default HeroSection;
