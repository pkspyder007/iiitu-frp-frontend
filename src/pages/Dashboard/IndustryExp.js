import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  org: "",
  designation: "",
  from: "",
  to: "",
  salary: "",
  natureOfDuties: "",
  doc: "",
  appId: "",
};

export default function IndustryExp() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#indxpform");
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
      <form id="indxpform">
        <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <label htmlFor="org" className="text-sm mb-1">
            Organisation <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="org"
            name="org"
            type="text"
            value={state.org}
            required={true}
            placeholder={"Organisation"}
          />

          <label htmlFor="designation" className="text-sm mb-1">
            Designation<span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="designation"
            name="designation"
            type="text"
            value={state.designation}
            required={true}
            placeholder={"Designation"}
          />

          <label htmlFor="from" className="text-sm mb-1">
            From <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="from"
            name="from"
            type="month"
            value={state.from}
            required={true}
            placeholder={"From"}
          />

          <label htmlFor="to" className="text-sm mb-1">
            To <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="to"
            name="to"
            type="month"
            value={state.to}
            required={true}
            placeholder={"To"}
          />

          <label htmlFor="salary" className="text-sm mb-1">
            Salary<span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="salary"
            name="salary"
            type="number"
            min="0"
            value={state.salary}
            required={true}
            placeholder={"Salary"}
          />

          <label htmlFor="natureOfDuties" className="text-sm mb-1">
            Nature Of Duties<span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="natureOfDuties"
            name="natureOfDuties"
            type="text"
            value={state.natureOfDuties}
            required={true}
            placeholder={"Nature Of Duties"}
          />

          <label htmlFor="doc" className="text-sm mb-1">
            NOC/Experience<span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="doc"
            name="doc"
            type="file"
            value={state.doc}
            required={true}
          />

          <div className="buttons flex mt-8">
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
