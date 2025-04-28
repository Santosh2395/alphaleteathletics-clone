import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Help = () => {
  return (
    <div className="bg-gray-900 rounded-md shadow-md p-2 w-40 text-start absolute top-4 left-0 z-99">
      <ul className="text-gray-300 space-y-1 text-xs">
        <li>
          <NavLink
            to="/contact"
            className="hover:text-white transition duration-200 block py-0.5"
          >
            contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="hover:text-white transition duration-200 block py-0.5"
          >
            cart
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/about"
            className="hover:text-white transition duration-200 block py-0.5"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className="hover:text-white transition duration-200 block py-0.5"
          >
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Help;
