import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // e.g., send data to an API, display a success message
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">Address:</strong> 123 Main Street, Anytown, USA 12345
            </p>
            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">Email:</strong> info@example.com
            </p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media links/icons here */}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Facebook
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;