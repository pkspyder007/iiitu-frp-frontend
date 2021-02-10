import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  phdCompleted: "",
  phdProgress: "",
  pgCompleted: "",
  pgProgress: "",
  ugCompleted: "",
  ugProgress: "",
  doc: "",
  appId: "",
};

export default function ThesisSupervised() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#thesisform");
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
      .post(`/applications/${appId}/thesis`, data, {})
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
    <form id="thesisform" onSubmit={onSubmit}>
      <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      <h1 className="text-2xl text-indigo-600 mb-4">Thesis Supervised</h1>
        <h1 className="text-indigo-600 text-xl">Doctoral(PhD)</h1>
        <hr />
        <label htmlFor="phdCompleted" className="text-sm mb-1 mt-4">
          No. of supervisions completed<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="phdCompleted"
          name="phdCompleted"
          type="number"
          min="0"
          value={state.phdCompleted}
          required={true}
          placeholder={"No. of supervisions completed"}
        />

        <label htmlFor="phdProgress" className="text-sm mb-1">
          No. of supervisions in progress<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="phdProgress"
          name="phdProgress"
          type="number"
          min="0"
          value={state.phdProgress}
          required={true}
          placeholder={"No. of supervisions in progress"}
        />

        <h1 className="text-indigo-600 text-xl">Post Graduation</h1>
        <hr />
        <label htmlFor="pgCompleted" className="text-sm mb-1 mt-4">
          No. of supervisions completed<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="pgCompleted"
          name="pgCompleted"
          type="number"
          min="0"
          value={state.pgCompleted}
          required={true}
          placeholder={"No. of supervisions completed"}
        />

        <label htmlFor="pgProgress" className="text-sm mb-1">
          No. of supervisions in progress<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="pgProgress"
          name="pgProgress"
          type="number"
          min="0"
          value={state.pgProgress}
          required={true}
          placeholder={"No. of supervisions in progress"}
        />

        <h1 className="text-indigo-600 text-xl">Under Graduation</h1>
        <hr />
        <label htmlFor="ugCompleted" className="text-sm mb-1 mt-4">
          No. of supervisions completed<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="ugCompleted"
          name="ugCompleted"
          type="number"
          min="0"
          value={state.ugCompleted}
          required={true}
          placeholder={"No. of supervisions completed"}
        />

        <label htmlFor="ugProgress" className="text-sm mb-1">
          No. of supervisions in progress<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="ugProgress"
          name="ugProgress"
          type="number"
          min="0"
          value={state.ugProgress}
          required={true}
          placeholder={"No. of supervisions in progress"}
        />

        <label htmlFor="doc" className="text-sm mb-1">
          List of the thesis supervision. (See the help on right side for the
          details of the list document.)<span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onFileChangeHandler}
          id="doc"
          name="doc"
          type="file"
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
    </AppLayout>
  );
}
