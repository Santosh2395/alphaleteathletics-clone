import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Help Column */}
          <div>
            <h6 className="text-sm font-semibold text-white uppercase mb-4">
              Help
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Track My Order
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Start A Return
                </a>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h6 className="text-sm font-semibold text-white uppercase mb-4">
              More
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Summer Shredding
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Share The Look
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Alphaland
                </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h6 className="text-sm font-semibold text-white uppercase mb-4">
              Address
            </h6>
            <p className="text-sm">
              13927 South fitness Road,
              <br />
              Pune City MH 411241,
              <br />
              India
            </p>
          </div>
        </div>

        {/* Right Box */}
        <div>
          <h6 className="text-sm font-semibold text-white uppercase mb-4">
            Stay Connected
          </h6>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-800 text-gray-400 border border-gray-700 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <button className="cursor-pointer bg-white text-gray-900 font-semibold rounded-full px-6 py-3 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-8 border-t border-gray-800 pt-8 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="hover:text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-500">
            Sitemap
          </a>
          <a href="#" className="hover:text-gray-500">
            Accessibility
          </a>
          <a href="#" className="hover:text-gray-500">
            Do not sell or share my personal Information
          </a>
        </div>
        <p className="text-gray-500">
          © {currentYear} • Alphalete Athletics abc • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
