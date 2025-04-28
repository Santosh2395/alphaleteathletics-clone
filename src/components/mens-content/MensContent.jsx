import React from "react";
import categories from "../../mens-category/MensCategoryData.json";

function MensContent() {
  return (
    <div className="overflow-x-auto py-6">
      <div className="container mx-auto px-4 flex space-x-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 md:w-40 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 flex space-x-4 mt-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 flex w-64 md:w-40 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensContent;
