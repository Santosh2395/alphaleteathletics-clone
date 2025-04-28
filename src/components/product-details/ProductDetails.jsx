// In your ProductDetails.js file
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../product-data/Products.json";
import menProducts from "../../men-product-data/MenProductsData.json";
import { Star } from "lucide-react"; // Import Star icon
import EmptyCart from "../../assets/emptycart.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Combine both product arrays for easier searching
  const allProducts = [...products, ...menProducts];
  const product = allProducts.find((p) => p.id?.toString() === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src={EmptyCart} alt="Empty Cart" className="w-full" />
        {/* <p className="mt-4 text-lg font-semibold">Your cart is empty</p> */}
      </div>
    );
  }

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const mainImage = selectedImage || product.images?.[0];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
        {/* Image Gallery */}
        <div>
          <div className="relative rounded-lg overflow-hidden shadow-md">
            {mainImage && (
              <img
                src={mainImage}
                alt={product.productName}
                className="w-full h-auto object-cover aspect-square"
              />
            )}
          </div>
          {product.images?.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`rounded-md overflow-hidden cursor-pointer shadow-sm ${
                    img === selectedImage ||
                    (selectedImage === null && index === 0)
                      ? "border-2 border-black"
                      : ""
                  }`}
                  onClick={() => handleThumbnailClick(img)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="py-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {product.productName}
          </h2>
          <div className="flex items-center mb-2">
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
            <Star className="text-gray-400 mr-1" size={16} />
            <span className="text-sm text-gray-500">(4.0) | 128 Reviews</span>
          </div>
          <p className="text-gray-700 text-lg mb-5">${product.price}</p>
          <p className="text-gray-600 mb-5">
            {product.description ||
              "No detailed description available for this product."}
          </p>

          {product.colors && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Colors: {product.colors}
              </p>
              {/* You could display color swatches here if you had individual color data */}
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center mb-5">
            <label
              htmlFor="quantity"
              className="block text-sm font-semibold text-gray-800 mr-3"
            >
              Quantity:
            </label>
            <div className="flex border rounded-md overflow-hidden">
              <button
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
                onClick={handleDecrement}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                className="w-16 text-center border-0 focus:ring-0"
                readOnly
              />
              <button
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-black text-white py-3 px-8 rounded-full font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1">
            Add to Cart
          </button>

          {/* Additional Information/Actions */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Category: {product.category || "General"}
            </p>
            {/* Add social sharing icons or other relevant links here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
