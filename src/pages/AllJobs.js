import React from "react";
import JobCard from "../components/JobCard";

export default function AllJobs() {
  return (
    <div className="mt-4">
      <div id="alljobs" className="flex justify-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Jobs @ </span>
          <span className="block text-indigo-600 xl:inline">IIIT UNA</span>
        </h1>
      </div>
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
