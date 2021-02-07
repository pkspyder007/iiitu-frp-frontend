import React, { useState } from "react";
import SideNavItem from "./SideNavItem";

export default function AdminSideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
    <nav className="flex fixed top-0 left-0 w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
      <div className="flex items-center">
        <button className="mr-2" aria-label="Open Menu" onClick={handleToggle}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <p className="h-auto w-24">ADMIN </p>
      </div>
      <div className="flex items-center ml-auto">
        <div className="hidden md:block md:flex md:justify-between md:bg-transparent">
          <button className="flex items-cente p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      <section
      >
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="z-10 fixed inset-0 transition-opacity"
        >
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex="0"
          ></div>
        </div>
      </section>
      <aside
        className={`flex flex-col justify-between transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
        <span
          className="flex w-full items-center p-4 border-b"
          onClick={handleClose}
        >
          <img
            src={require("../../images/iiit-una-logo.png").default}
            alt="Logo"
            className="h-24 w-24 mx-auto"
          />
        </span>
        <SideNavItem
          handleClose={handleClose}
          link="/admin/"
          title="Home"
          svgIcon={
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          }
        />
        <SideNavItem
          handleClose={handleClose}
          link="/admin/jobs"
          title="All Jobs"
          svgIcon={null}
        />
        <SideNavItem
          handleClose={handleClose}
          link="/admin/addjob"
          title="New Job"
          svgIcon={null}
        />
        </div>
        <div className="w-full">
          <button className="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full">
            <span>Settings</span>
          </button>
          <button className="flex items-center p-4 text-white bg-red-500 hover:bg-red-600 w-full">
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </nav>
    <div className="mb-20"></div>
    </>
  );
}
