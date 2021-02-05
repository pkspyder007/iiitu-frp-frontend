import React from "react";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <div className="flex items-center h-screen">
      <main className="md:ml-20 max-w-7xl px-4 ">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Start your journey @ </span>
            <span className="block text-indigo-600 xl:inline">IIIT UNA</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            IIIT UNA is an institute of national importance under M.H.R.D India.
            We are looking for highly enthusiatic minds to help us out in
            delivering best in class education to our students.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="#alljobs"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Apply @ IIITU
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
