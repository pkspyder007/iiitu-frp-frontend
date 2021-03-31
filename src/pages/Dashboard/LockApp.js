<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import AppLayout from "./AppLayout";
import { useAlert } from "react-alert";
import axios from "axios";

export default function LockApp() {
  const { appId } = useParams();
  const [isChecked, seIsChecked] = useState(false);
  const [errors, setErrors] = useState([])
  const history = useHistory();
    const alert = useAlert();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    axios.post(`/applications/${appId}/lock`)
    .then(res => {
        alert.success(res.data.msg);
        history.push(`/dasboard/application/fees/${appId}`);
    })
    .catch(err => {
        alert.error("Please complete the mandatory steps")
        setErrors(err.response?.data?.errors);
    });
  }

  return (
    <div>
      <AppLayout>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">
            Lock Application (Final Submit)
          </h1>
          <p className="text-secondary">
            Before submitting the application please make sure to preview the
            details once. <br />{" "}
          </p>
          <p className="text-blue-500 bg-gray-200 p-2">
            <Link to={`/dashboard/application/overview/${appId}`}>
              Click Here to see details
            </Link>
          </p>
          <hr className="my-4" />

          {
              errors.length !== 0 && (
                  <>
                    {errors.map((e,i) => (<div key={i} className="border border-red p-2 text-red-500">{e}</div>) )}
                  </>
              )
          }

          <form className="mt-4 ml-3" id="lockform" onSubmit={handleSubmit}>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                onChange={(e) => seIsChecked(e.target.checked)}
                type="checkbox"
                name="check"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-4 text-gray-700">
                I have gone through the application and information provided is
                true. I understand, application once submitted, can’t be edited
                again.
              </strong>
            </label>
            <div className="buttons flex">
              <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 mr-auto bg-indigo-500">
                <button disabled={!isChecked} type={"submit"}>
                  Lock Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </AppLayout>
    </div>
  );
}
=======
import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import AppLayout from "./AppLayout";
import { useAlert } from "react-alert";
import axios from "axios";

export default function LockApp() {
  const { appId } = useParams();
  const [isChecked, seIsChecked] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const alert = useAlert();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    axios
      .post(`/applications/${appId}/lock`)
      .then((res) => {
        alert.success(res.data.msg);
        history.push(`/dashboard/application/fees/${appId}`);
      })
      .catch((err) => {
        alert.error("Please complete the mandatory steps");
        setErrors(err.response?.data?.errors);
      });
  };

  return (
    <div>
      <AppLayout>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">
            Lock Application (Final Submit)
          </h1>
          <p className="text-secondary">
            Before submitting the application please make sure to preview the
            details once. <br />{" "}
          </p>
          <p className="text-blue-500 bg-gray-200 p-2">
            <Link to={`/dashboard/application/overview/${appId}`}>
              Click Here to see details
            </Link>
          </p>
          <hr className="my-4" />

          {errors.length !== 0 && (
            <>
              {errors.map((e, i) => (
                <div key={i} className="border border-red p-2 text-red-500">
                  {e}
                </div>
              ))}
            </>
          )}

          <form className="mt-4 ml-3" id="lockform" onSubmit={handleSubmit}>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                onChange={(e) => seIsChecked(e.target.checked)}
                type="checkbox"
                name="check"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-4 text-gray-700">
                I have gone through the application and information provided is
                true. I understand, application once submitted, can’t be edited
                again.
              </strong>
            </label>
            <div className="buttons flex">
              <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 mr-auto bg-indigo-500">
                <button disabled={!isChecked} type={"submit"}>
                  Lock Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </AppLayout>
    </div>
  );
}
>>>>>>> 911feb7d034007b4f097fb71b71a1137f392a83a
