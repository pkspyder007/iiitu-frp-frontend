import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  edumode: "",
  education: "",
  subject: "",
  year: "",
  institution: "",
  percentage: "",
  doc: "",
  mode: "",
};

export default function Education() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#eduform");
    form.reset();
    setState(initState);
  };

  const onFileChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    if (e.target.name === "mode") {
      setState({ ...state, education: "", [e.target.name]: e.target.value });
    }
  };

  const onEduModeChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
    axios
      .post(`/applications/${appId}/setEdumode`, { mode: e.target.value })
      .then((res) => {})
      .catch((err) => {});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let [key, value] of Object.entries(state)) {
      data.append(key, value);
    }

    axios
      .post(`/applications/${appId}/education`, data, {})
      .then((res) => {
        alert.success(res.data.msg);
        resetForm();
        setState({ ...initState, eduMode: state.eduMode });
      })
      .catch((err) => {
        alert.error(err.response.data.message);
        if (err.response.data.errors) {
          err.response.data.errors.map((e) => alert.error(e.message));
        }
      });
  };

  return (
    <AppLayout>
      <form id="eduform" onSubmit={onSubmit}>
        <h1 className="text-2xl text-indigo-600 mb-4">
          Academic Qualifications
        </h1>

        <div className="">
          <label htmlFor="eduMode" className="text-sm mb-1">
            Select Education Mode<span className="text-red-500">*</span>
          </label>
          <select
            onChange={onEduModeChange}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            value={state.eduMode}
            id={"eduMode"}
            name={"eduMode"}
            required={true}
            placeholder="Education Mode"
          >
            <option value="">Select Education</option>
            <option value="normal">Normal Mode</option>
            <option value="dual">Dual Degree</option>
            <option value="dphd">Direct PhD</option>
          </select>
        </div>
        {state.eduMode && (
          <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <label htmlFor="education" className="text-sm mb-1">
              Level of Education<span className="text-red-500">*</span>
            </label>
            <select
              onChange={onChangeHandler}
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              value={state.education}
              id={"education"}
              name={"education"}
              required={true}
              placeholder="Level of Education"
            >
              <option value="">Select Level</option>
              {/* <option value="10th">10th / Matriculation</option>
              <option value="10+2">10+2 / Higher Secondary</option> */}
              <option value="UG">Under Graduate (U.G.)</option>
              <option value="PG">Post Graduate (P.G.)</option>
              <option value="PHD">Doctor of Philosophy (PhD)</option>
              <option value="OTHER">Other</option>
            </select>

            <label htmlFor="subject" className="text-sm mb-1">
              Name of Degree<span className="text-red-500">*</span>
            </label>
            <SecondaryInput
              onChange={onChangeHandler}
              id="subject"
              name="subject"
              type="text"
              value={state.subject}
              required={true}
              placeholder={"e.g. B.Tech./M.Sc./MBA/PhD etc."}
            />

            <label htmlFor="insitution" className="text-sm mb-1">
              University/Institution{" "}<span className="text-red-500">*</span>
            </label>
            <SecondaryInput
              onChange={onChangeHandler}
              id="institution"
              name="institution"
              type="text"
              value={state.institution}
              required={true}
              placeholder={"University/Institution"}
            />

            <label htmlFor="year" className="text-sm mb-1">
              Year of Completion<span className="text-red-500">*</span>
            </label>
            <SecondaryInput
              onChange={onChangeHandler}
              id="year"
              name="year"
              type="number"
              min="1960"
              max="2100"
              step="1"
              value={state.year}
              required={true}
              placeholder={"Year of Completion"}
            />

            <label htmlFor="percentage" className="text-sm mb-1">
              CGPA/Percentage<span className="text-red-500">*</span>
            </label>
            <SecondaryInput
              onChange={onChangeHandler}
              id="percentage"
              name="percentage"
              type="text"
              value={state.percentage}
              required={true}
              placeholder={"CGPA/Percentage"}
            />

            <label htmlFor="doc" className="text-sm mb-1">
              Degree/Certificate
              <span className="text-red-500">*</span>
            </label>
            <SecondaryInput
              onChange={onFileChangeHandler}
              id="doc"
              name="doc"
              type="file"
              required={true}
              placeholder={"Degree/Certificate"}
            />

            <div className="buttons flex mt-8">
              {/* <div
          onClick={addRecord}
          className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-white mr-auto bg-indigo-600"
        >
          Add New Record
        </div> */}
              <div
                onClick={resetForm}
                className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
              >
                Reset
              </div>
              <div className="">
                <button
                  className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-600"
                  type={"submit"}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </AppLayout>
  );
}
