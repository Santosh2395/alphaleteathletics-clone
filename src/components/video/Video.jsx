import React from "react";
import { NavLink } from "react-router-dom";

function Video() {
  const videoUrl =
    "https://cdn.shopify.com/s/files/1/0667/0133/files/alphaland-drone-loop-land.mp4?v=1679588028";

  return (
    <>
      <div className="relative h-96 md:h-[800px] overflow-hidden rounded-lg shadow-lg m-8 group">
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-5">
          <div className="absolute h-full w-full top-0 left-0 overflow-hidden bg-primary">
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              className="min-h-full min-w-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></video>
          </div>
        </section>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="container mx-auto px-4 mt-4 md:mt-2">
            <h2 className="font-bold text-4xl">
              VISIT
              <p>LET'S STORE</p>
            </h2>
          </div>
          <div className="text-sm">
            <p>An oasis where individuals come to</p>
            <p>Learn More Dream More Be More</p>
          </div>
          <div className="mt-2 md:mt-4">
            <div className="flex justify-center items-center">
              <NavLink to={"/about"}>
                <button className="bg-white text-black cursor-pointer border border-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
