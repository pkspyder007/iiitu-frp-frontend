import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl my-6 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Contact @ </span>
        <span className="block text-indigo-600 xl:inline">IIIT UNA</span>
      </h1>

      <div className="px-6 py-24 md:p-24 h-full bg-blue-100">
        <h3 className="text-blue-500 mb-4 text-md font-bold">
        For further information, you can contact Recruitment Support Cell, IIIT Una at:
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl  font-bold mb-2 text-gray-800">
            Email: <a href="mailto:techhelp@iiitu.ac.in">techhelp@iiitu.ac.in</a>
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
            Phone Number: <a href="tel:01972-224375"> 01972-224375/78 </a>, <a href="tel:01972-224372">01975-257902/26</a>
          </h2>
        </div>
      </div>
    </div>
  );
}
