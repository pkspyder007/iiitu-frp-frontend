import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import JobCard from "../components/JobCard";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    axios
      .get("/jobs/getAll")
      .then(({ data }) => {
        setJobs(data.jobs);
      })
      .catch((error) => {
        alert.error("Something went wrong. \n" + error.response.data.error);
      });
  }, []);
  return (
    <div className="my-4">
      <div id="alljobs" className="flex justify-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Jobs @ </span>
          <span className="block text-indigo-600 xl:inline">IIIT UNA</span>
        </h1>
      </div>
      {jobs.map(({ id, title, dept, desc, adNo, school, isExpired, docLink }) => {
        if(!isExpired) {
          return (<JobCard
          key={id}
              id={id}
              title={title}
              dept={dept}
              school={school}
              adNo={adNo}
              desc={desc}
              docLink={docLink}
            />);
        }
        return null;
      })}
    </div>
  );
}
