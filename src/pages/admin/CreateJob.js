import React, { useState } from "react";
import { useAlert } from "react-alert";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  title: "",
  dept: "",
  desc: "",
  adNo: "",
  school: "",
  docLink: "",
};

export default function CreateJob() {
  const [job, setJob] = useState(initState);
  const alert = useAlert();
  let history = useHistory();

  const resetForm = () => {
    setJob({
      title: "",
      dept: "",
      desc: "",
      adNo: "",
      school: "",
      docLink: "",
    });
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/jobs/create", job);
      alert.success("Job Created successfully In successful.");
      history.push("/admin/jobs");
    } catch (error) {
      console.log("ee", error);
      alert.error(`Something went wrong.`);
      if (error.response.data.errors) {
        error.response.data.errors.forEach((e) => alert.info(`${e.message}.`));
      }
    }
  };

  const { title, desc, adNo, docLink } = job;
  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Job
      </div>
      <form onSubmit={handleSubmit}>
        <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <SecondaryInput
            name="title"
            value={title}
            onChange={handleChange}
            type="text"
            placeholder="Job Title"
            required={true}
          />
          {/* <select
            name="dept"
            value={dept}
            onChange={handleChange}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">Department</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="it">IT</option>
          </select> */}
          <strong className="mb-1 text-gray-700">Departments</strong>
          <div className="inline-flex">
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">CSE</strong>
            </label>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">IT</strong>
            </label>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">ECE</strong>
            </label>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">BIO-TECHNOLOGY</strong>
            </label>
            <label class="inline-flex items-center mb-3 v">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">CHEMISTRY</strong>
            </label>
          </div>

          <strong className="mb-1 text-gray-700">Schools</strong>
          <div className="inline-flex">
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">Computing</strong>
            </label>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">Electronics</strong>
            </label>
            <label class="inline-flex items-center mb-3 mr-3">
              <input
                type="checkbox"
                name="cse"
                class="form-checkbox h-5 w-5 text-red-600"
              />
              <strong class="ml-2 text-gray-700">Basic Science</strong>
            </label>
          </div>

          <textarea
            name="desc"
            value={desc}
            onChange={handleChange}
            required={true}
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Describe everything about this job here"
          ></textarea>

          <SecondaryInput
            name="adNo"
            value={adNo}
            onChange={handleChange}
            type="text"
            placeholder="Job Ad Number"
            required={true}
          />

          {/* <select
            name="school"
            value={school}
            onChange={handleChange}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">School</option>
            <option value="soc">School of Computing</option>
            <option value="soe">School of Electronics</option>
            <option val="sobs">School of Basic Science</option>
          </select> */}

          <SecondaryInput
            name="docLink"
            value={docLink}
            onChange={handleChange}
            type="text"
            placeholder="Enter Job document Link"
            required={true}
          />

          <div className="icons flex text-gray-500 m-2"></div>
          <div className="buttons flex">
            <div
              onClick={resetForm}
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            >
              Reset
            </div>
            <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
              <button type={"submit"}>Create Job</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
