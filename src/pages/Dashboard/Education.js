import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  education: "",
  subject: "",
  year: "",
  institution: "",
  percentage: "",
  doc: "",
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
  };

  return (
    <>
      <form id="eduform">
        <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <label htmlFor="education" className="text-sm mb-1">
            School/College Education <span className="text-red-500">*</span>
          </label>
          <select
            onChange={onChangeHandler}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            value={state.education}
            id={"education"}
            name={"education"}
            required={true}
            placeholder="School/College Education"
          >
            <option value="10th">10th / Matriculation</option>
            <option value="10+2">10+2 / Higher Secondary</option>
            <option value="UG">Under Graduate (U.G.)</option>
            <option value="PD">Post Graduate (U.G.)</option>
            <option value="PHD">Doctor of Philosophy (PhD)</option>
            <option value="OTHER">Other</option>
          </select>

          <label htmlFor="subject" className="text-sm mb-1">
            School/College Education <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="subject"
            name="subject"
            type="text"
            value={state.subject}
            required={true}
            placeholder={"Subject Specialization"}
          />

          <label htmlFor="year" className="text-sm mb-1">
            Year of Completion <span className="text-red-500">*</span>
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
            placeholder={"Year of completion"}
          />

          <label htmlFor="insitution" className="text-sm mb-1">
            Board/University/Institution <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="institution"
            name="institution"
            type="text"
            value={state.institution}
            required={true}
            placeholder={"Board/University/Institution"}
          />

          <label htmlFor="percentage" className="text-sm mb-1">
            CGPA/Percentage <span className="text-red-500">*</span>
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
            Degree / Certificate<span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="doc"
            name="doc"
            type="text"
            value={state.doc}
            required={true}
            placeholder={"Degree / Certificate"}
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
      </form>
    </>
  );
}
