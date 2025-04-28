import React from "react";
import { NavLink } from "react-router-dom";
import MensCategoryData from "../../mens-category/MensCategoryData.json";

function MensCategory() {
  return (
    <div className="overflow-x-auto py-6">
      <div className="container mx-auto px-4 flex space-x-4">
        {MensCategoryData.map((category, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 md:w-80 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {category.name}
              </h3>
              <NavLink
                to={category.link}
                className="inline-block mt-2 bg-black text-white text-sm font-semibold rounded-full px-3 py-1 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensCategory;
