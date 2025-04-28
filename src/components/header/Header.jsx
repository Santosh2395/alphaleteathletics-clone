import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Help from "../help/Help";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const navigate = useNavigate();

  const handleHelpMouseEnter = () => {
    setIsHelpVisible(true);
  };

  const handleHelpMouseLeave = () => {
    setIsHelpVisible(false);
  };

  return (
    <div className="bg-[url('https://alphaleteathletics.com/cdn/shop/files/Homepage_Banner_9x3_69380142-c4d4-4f8c-9ddc-475dbac8c48e.jpg?v=1744383543&width=720%20720w,%20//alphaleteathletics.com/cdn/shop/files/Homepage_Banner_9x3_69380142-c4d4-4f8c-9ddc-475dbac8c48e.jpg?v=1744383543&width=960%20960w')] bg-cover bg-center w-full h-[80vh]">
      <nav className="hover:bg-black text-white transition-colors duration-500 relative">
        <div className="flex justify-between items-center text-sm font-semibold py-1 px-6">
          <div className="text-left text-xs">
            Free Domestic Shipping over $150 and 30 Day Returns
          </div>
          <div className="text-right flex space-x-4 text-xs">
            <div
              onMouseEnter={handleHelpMouseEnter}
              onMouseLeave={handleHelpMouseLeave}
              className="relative" // Make the container relative for absolute positioning of Help
            >
              <Link className="hover:text-gray-400 transition">Help</Link>
              {isHelpVisible && <Help />}
            </div>
            <span>|</span>
            <Link to="/signup" className="hover:text-gray-400 transition">
              Sign Up
            </Link>
            <span>|</span>
            <Link to="/signin" className="hover:text-gray-400 transition">
              Sign In
            </Link>
          </div>
        </div>
        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left Side - Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            LET'S
          </Link>

          {/* Middle - Menu for Desktop */}
          <ul className="hidden md:flex ml-4 w-full space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
            <li onClick={() => navigate("/women-store")}>
              <Link
                to="/women-store"
                className="hover:text-gray-400 transition"
              >
                Women
              </Link>
            </li>
            <li onClick={() => navigate("/men-store")}>
              <Link to="/men-store" className="hover:text-gray-400 transition">
                Men
              </Link>
            </li>
          </ul>

          {/* Right Side - Search & Cart */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <FiSearch className="text-2xl cursor-pointer hover:text-gray-400" />
            <div className="relative">
              <NavLink
                to="/cart"
                className="hover:text-white transition duration-200 block py-0.5"
              >
                <FiShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1 rounded-full">
                  0
                </span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black text-white p-4">
            <ul className="flex flex-col text-center">
              <li>
                <Link to="/help" className="block hover:text-gray-400">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/signup" className="block hover:text-gray-400">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/signin" className="block hover:text-gray-400">
                  Sign In
                </Link>
              </li>
            </ul>

            {/* Icons */}
            <div className="flex justify-center space-x-6 mt-4">
              <FiSearch className="text-2xl cursor-pointer hover:text-gray-400" />
              <div className="relative">
                <FiShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1 rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="mt-8 py-20 px-4 sm:px-6 lg:px-8 absolute">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl font-bold text-white mb-4">
            <p>YOUR EVERYDAY</p>
            <p>UNIFORM</p>
          </div>
          <p className="text-xl text-white mb-8">
            Essentials that go beyond the gym.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
};

export default Header;
