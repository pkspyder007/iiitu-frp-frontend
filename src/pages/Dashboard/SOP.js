import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  sop: "",
  appId: "",
};

export default function SOP() {
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

  return (
    <form id="sopform">
      <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    
<label htmlFor="sop" className="text-sm mb-1">
         STATEMENT OF PURPOSE(Please see note section)<span className="text-red-500">*</span>
        </label>
        <textarea
          onChange={onChangeHandler}
          id="sop"
          name="sop"
          type="file"
          value={state.sop}
          required={true}
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea>
        
        <label htmlFor="doc" className="text-sm mb-1">
          Please Upload SOP<span className="text-red-500">*</span>
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
  );
}
