import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  awards: "",
  extraCirricular: "",
  membership: "",
  special: "",
  others: "",
  appId: "",
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

  return (
    <form id="sopform">
      <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <label htmlFor="awards" className="text-sm mb-1">
          Awards, Honors, Academic Credentials and Recognitions <br /> ( Attach
          pdf containing required details )
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="awards"
          name="awards"
          type="file"
          value={state.awards}
        />

        <label htmlFor="extraCirricular" className="text-sm mb-1">
          Extra-curricular activities <br />( Attach pdf containing required
          details )
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="extraCirricular"
          name="extraCirricular"
          type="file"
          value={state.extraCirricular}
        />

        <hr className="mb-4" />

        <label htmlFor="membership" className="text-sm mb-1">
        Memberships, Fellowships of Professional Societies
          
        </label>
        <textarea
          onChange={onChangeHandler}
          id="membership"
          name="membership"
          type="file"
          value={state.membership}
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea>
        <label htmlFor="special" className="text-sm mb-1">
        Special training, Proficiency or Expertise and Relevant Information
          
        </label>
        <textarea
          onChange={onChangeHandler}
          id="special"
          name="special"
          type="file"
          value={state.special}
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea>
        <label htmlFor="others" className="text-sm mb-1">
        Any other information not stated before
          
        </label>
        <textarea
          onChange={onChangeHandler}
          id="others"
          name="others"
          type="file"
          value={state.others}
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
