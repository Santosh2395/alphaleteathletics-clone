import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section (Optional) */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/8436770/pexels-photo-8436770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image URL
            alt="Fitness Clothing"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Welcome to [Your Brand Name]! Our journey began with a passion for
              fitness and a frustration with activewear that didn't quite meet
              our needs. We believe that your workout gear should empower you,
              providing comfort, durability, and style so you can focus on
              achieving your fitness goals. Founded in [Year], we set out to
              create high-quality fitness apparel that not only performs well
              but also makes you feel confident and motivated.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Our mission is to inspire and support your active lifestyle by
              providing innovative and sustainable fitness clothing. We are
              committed to using premium materials, ethical manufacturing
              practices, and thoughtful design to create apparel that stands the
              test of your toughest workouts and lasts. We aim to build a
              community that celebrates movement, self-expression, and personal
              growth.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                **Premium Quality:** We use only the best fabrics that offer
                comfort, breathability, and durability.
              </li>
              <li>
                **Functional Design:** Our apparel is designed with performance
                in mind, featuring details that enhance your workout.
              </li>
              <li>
                **Sustainable Practices:** We are mindful of our environmental
                impact and strive for sustainable production methods.
              </li>
              <li>
                **Community Focused:** We believe in building a supportive
                community around fitness and well-being.
              </li>
              <li>
                **Style Meets Performance:** Look good and feel great, whether
                you're at the gym or on the go.
              </li>
            </ul>

            {/* Call to Action (Optional) */}
            <div className="mt-6 text-center lg:text-left">
              <a
                href="/shop"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
