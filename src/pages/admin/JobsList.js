import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";

export default function JobsList() {
    const [jobs, setJobs] = useState([]);
    const alert = useAlert();

    useEffect(() => {
        axios.get("/jobs/getAll")
            .then(({data}) => {
                setJobs(data.jobs)
            }).catch(error => {
                alert.error("Something went wrong. \n" + error.response.data.error)
            })
        return () => {
            // cleanup
        }
    }, [])
  return (
    <div class="flex flex-col w-4/5 mx-auto">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ad No.
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {jobs.map((job,i) => {
                    const { id, title, isExpired, adNo ,school } = job;
                    return (<tr key={id}>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              #{i+1}
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                {adNo}
                              </div>
                              <div class="text-sm text-gray-500">
                                {school}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {title}
                          </div>
                          <div class="text-sm text-gray-500">ECE</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {!isExpired ? "Active" : "Expired"}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            View
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </a>
                        </td>
                      </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
