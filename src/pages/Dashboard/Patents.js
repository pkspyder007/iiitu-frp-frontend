import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
    noOfPatents: "0",
    list: "",
  appId: "",
};

export default function Patents() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#patform");
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
    <form id="patform">
      <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">

      <label htmlFor="noOfPatents" className="text-sm mb-1">
      Number of Patents <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="noOfPatents"
          name="noOfPatents"
          type="number"
          min="0"
          value={state.noOfPatents}
          required={true}
        />


<label htmlFor="list" className="text-sm mb-1">
         STATEMENT OF PURPOSE(Please see note section)<span className="text-red-500">*</span>
        </label>
        <textarea
          onChange={onChangeHandler}
          id="list"
          name="list"
          type="file"
          value={state.list}
          required={true}
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea>
        
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
