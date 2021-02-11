import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <header className="w-full lg:px-16 px-6 h-16 bg-white flex flex-wrap items-center lg:py-0 py-2 shadow">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/">
            <h3 className="text-xl font-bold text-indigo-500">IIIT UNA</h3>
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden lg:flex lg:items-center lg:w-auto w-full br-white" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                to="/jobs"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/login"
              >
                <button className="bg-indigo-500 text-white px-3 py-1 rounded-full">Login</button>
              </Link>
            </li>
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/register"
              >
                <button className="bg-indigo-500 text-white px-3 py-1 rounded-full">Register</button>
              </Link>
            </li>
            {/* <Link
            to="/dashboard"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
            >
            <img
                className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="Dashboard"
            />
            </Link> */}
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}
