import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

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
        <label htmlFor="awards" className="text-sm mb-1">
          Awards, Honors, Academic Credentials and Recognitions <br /> ( Attach
          pdf containing required details )
        </label>
        <SecondaryInput
          onChange={onFileChangeHandler}
          id="awards"
          name="awards"
          type="file"
        />

        <label htmlFor="extraCirricular" className="text-sm mb-1">
          Extra-curricular activities <br />( Attach pdf containing required
          details )
        </label>
        <SecondaryInput
          onChange={onFileChangeHandler}
          id="extraCirricular"
          name="extraCirricular"
          type="file"
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
    </AppLayout>
  );
}
