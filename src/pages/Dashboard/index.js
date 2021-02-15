import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useAlert } from "react-alert";

export default function Dashboard() {
  const [state, setState] = useState([]); 

  useEffect(() => {
    axios
      .get("/users/getAllApplications")
      .then(({ data }) => {
        setState(data.applications);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <div className="flex flex-col w-4/5 mx-auto">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ad No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Application Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {state.map((app, i) => {
                    const { id, completed, adNo } = app;
                    return (
                      <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {adNo}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {completed ? "Complete" : "Incomplete"}
                          </span>
                        </td>
                        {!completed && (<><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Link to={`/dashboard/application/overview/${id}`} >
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            View
                          </span></Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Link to={`/dashboard/application/personal/${id}`} >
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Edit
                          </span></Link>
                        </td></>)}
                        {completed && (<>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
                            Application Locked
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Link to={`/dashboard/application/fees/${id}`} >
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-500 text-white">
                            Fee Details
                          </span>
                          </Link>
                        </td>
                        </>)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
