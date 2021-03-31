import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  type: "",
  by: "",
  title: "",
  date: "",
  amount: "",
  doc: "",
};

export default function OtherInfo() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#sopform");
    form.reset();
    setState(initState);
  };

  const onFileChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let [key, value] of Object.entries(state)) {
      data.append(key, value);
    }

    axios
      .post(`/applications/${appId}/otherinfo`, data)
      .then((res) => {
        alert.success(res.data.msg);
        resetForm();
      })
      .catch((err) => {
        alert.error(err.response?.data.msg);
        if (err.response?.data.errors) {
          err.response?.data.errors.map((e) => alert.error(e.message));
        }
      });
  };

  return (
    <AppLayout>
      <form id="sopform" onSubmit={onSubmit}>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">Other Information </h1>

          <label htmlFor="eduMode" className="text-sm mb-1">
            Type <span className="text-red-500">*</span>
          </label>
          <select
            onChange={onChangeHandler}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            value={state.type}
            id={"eduMode"}
            name={"type"}
            required={true}
            placeholder=" Select Entity type "
          >
            <option value="">Select Type</option>
            <option value="normal">Award/Honor</option>
            {/* <option value="dual">Honor</option> */}
            <option value="AcadmicRecognization">
              Academic Credentials/Recognization
            </option>
            <option value="Membership">
              Membership/ Fellowship of a Professional society
            </option>
            <option value="specialTraning">Special training/proficiency</option>
            <option value="Proficiency">
              Proficiency / Revent Information
            </option>
            <option value="Others">Others(Relevent to Application)</option>
          </select>

          <label htmlFor="subject" className="text-sm mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="subject"
            name="title"
            type="text"
            value={state.title}
            required={true}
            placeholder={"title"}
          />

          <hr className="mb-4" />
          <label htmlFor="subject" className="text-sm mb-1">
            Awarding Organization <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="subject"
            name="by"
            type="text"
            value={state.by}
            required={true}
            placeholder={"Awarding Organization"}
          />

          <label htmlFor="subject" className="text-sm mb-1">
            Remarks <span className="text-red-500">( If Any )</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="subject"
            name="amount"
            type="text"
            value={state.amount}
            required={true}
            placeholder={"Amount if any"}
          />
          <label htmlFor="subject" className="text-sm mb-1">
            Date of Award/membership/honour{" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="subject"
            name="date"
            type="date"
            value={state.date}
            required={true}
            placeholder={"Date of Award/membership/honour"}
          />

          <label htmlFor="awards" className="text-sm mb-1">
            Upload relevant certificate/document.
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            id="awards"
            name="doc"
            type="file"
          />

          <hr className="mb-4" />

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
    </AppLayout>
  );
}
