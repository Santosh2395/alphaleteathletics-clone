import React, { useState, useEffect } from "react";

// Placeholder data for cart items
const initialCartItems = [
  {
    id: 1,
    name: "Performance T-Shirt",
    price: 29.99,
    quantity: 2,
    image:
      "https://alphaleteathletics.com/cdn/shop/files/W_Shirts_v3_4x5_87a1e75d-8f2a-4625-aae3-b4964e517efe.jpg?crop=center&v=1740465653&width=960", // Replace with your image URL
    size: "M",
    color: "Black",
  },
  {
    id: 2,
    name: "Compression Leggings",
    price: 45.5,
    quantity: 1,
    image:
      "https://alphaleteathletics.com/cdn/shop/files/W_Leggings_v8_4x5_d94924e4-45c0-4e9f-923b-fac08ae673f7.jpg?crop=center&v=1740465652&width=960", // Replace with your image URL
    size: "L",
    color: "Navy",
  },
  {
    id: 3,
    name: "Sports Bra",
    price: 35.0,
    quantity: 3,
    image:
      "https://alphaleteathletics.com/cdn/shop/files/W_Bras_v4_4x5_7abb1678-34e9-4d2f-ba7f-9b73329867cb.jpg?crop=center&v=1740465652&width=960", // Replace with your image URL
    size: "S",
    color: "Pink",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);

  // Calculate subtotal whenever cartItems change
  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = cartItems
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: parseInt(newQuantity, 10) }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

    setCartItems(updatedItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <hh1 className="text-3xl font-bold text-center mb-8">Shopping Cart</hh1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b last:border-b-0 py-4"
                >
                  {/* Item Image */}
                  <div className="flex-shrink-0 w-20 h-20 mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Size: {item.size}, Color: {item.color}
                    </p>
                    <p className="text-gray-800 font-semibold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center mx-4">
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-14 text-center border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  {/* Item Total */}
                  <div className="text-lg font-semibold text-gray-800 w-20 text-right hidden sm:block">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove Button */}
                  <div className="ml-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800 focus:outline-none"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal ({cartItems.length} items):</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {/* Add sections for Shipping, Tax, etc. if needed */}
              {/* <div className="flex justify-between text-gray-700 mb-2">
                <span>Shipping:</span>
                <span>$X.XX</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-4">
                <span>Tax:</span>
                <span>$Y.YY</span>
              </div> */}
              <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold text-gray-800">
                <span>Order Total:</span>
                <span>${subtotal.toFixed(2)}</span>{" "}
                {/* Adjust if shipping/tax added */}
              </div>
              <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
