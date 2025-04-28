import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import products from "../../product-data/Products.json";
import menProducts from "../../men-product-data/MenProductsData.json";

export const ProductCard = ({
  id,
  images,
  isNew,
  productName,
  colors,
  price,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Link
      to={`/product/${id}`}
      className="relative rounded-lg shadow-md overflow-hidden group block"
    >
      {" "}
      {/* Wrap with Link */}
      {isNew && (
        <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold py-1 px-2 rounded-full z-99">
          NEW
        </div>
      )}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={productName}
          className="w-full object-cover aspect-[3/4] transition-opacity duration-300"
        />

        {/* Navigation Arrows - Visible on Hover */}
        <button
          className="cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking arrows
            handlePrev();
          }}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking arrows
            handleNext();
          }}
        >
          <ChevronRight size={16} />
        </button>

        {/* Quick Add Button */}
        <button
          className="cursor-pointer absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-semibold opacity-0 group-hover:opacity-90 focus:opacity-100 transition-opacity"
          aria-label={`Quick add ${productName}`}
          onClick={(e) => e.preventDefault()} // Prevent navigation when clicking Quick Add
        >
          QUICK ADD
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{productName}</h3>
        <p className="text-xs text-gray-600">{colors}</p>
        <p className="text-sm font-bold text-gray-900 mt-2">${price}</p>
      </div>
    </Link>
  );
};

export const MenProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {menProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

const WomenProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default WomenProductList;
