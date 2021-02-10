import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  first: "",
  second: "",
  third: "",
  appId: "",
};

export default function BestPapers() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#bpform");
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
    <form id="bpform">
      <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <label htmlFor="first" className="text-sm mb-1">
        <strong>Best Paper 1</strong> Published<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="first"
          name="first"
          type="file"
          value={state.first}
          required={true}
        />

<label htmlFor="second" className="text-sm mb-1">
        <strong>Best Paper 1</strong> Published<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="second"
          name="second"
          type="file"
          value={state.second}
          required={true}
        />

<label htmlFor="third" className="text-sm mb-1">
        <strong>Best Paper 1</strong> Published<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="third"
          name="third"
          type="file"
          value={state.third}
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
  );
}
