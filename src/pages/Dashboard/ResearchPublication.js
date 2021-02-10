import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  books: "0",
  nJournals: "0",
  iJournals: "0",
  nConf: "0",
  iConf: "0",
  doc: "",
  appId: "",
};

export default function ResearchPublication() {
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

  return (
    <form id="thesisform">
      <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <h1 className="text-indigo-600 text-xl">Books</h1>
        <hr />
        <label htmlFor="books" className="text-sm mb-1 mt-4">
          Number of Books Published (if any)
          <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="books"
          name="books"
          type="number"
          min="0"
          value={state.books}
          required={true}
          placeholder={"Number of Books Published (if any)"}
        />

        <h1 className="text-indigo-600 text-xl">Journals</h1>
        <hr />
        <label htmlFor="nJournals" className="text-sm mb-1 mt-4">
          Number of papers published in National Journals (if any)
          <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="nJournals"
          name="nJournals"
          type="number"
          min="0"
          value={state.nJournals}
          required={true}
          placeholder={"Number of Books Published (if any)"}
        />

        <label htmlFor="iJournals" className="text-sm mb-1 mt-4">
          Number of papers published International Journals (if any){" "}
          <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="iJournals"
          name="iJournals"
          type="number"
          min="0"
          value={state.iJournals}
          required={true}
          placeholder={"Number of Books Published (if any)"}
        />


<h1 className="text-indigo-600 text-xl">Conferences</h1>
        <hr />
        <label htmlFor="nConf" className="text-sm mb-1 mt-4">
        Number of papers presented in National Conferences (if any)
          <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="nConf"
          name="nConf"
          type="number"
          min="0"
          value={state.nConf}
          required={true}
          placeholder={"Number of Books Published (if any)"}
        />

        <label htmlFor="iconf" className="text-sm mb-1 mt-4">
        Number of papers presented in International Conferences (if any){" "}
          <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="iconf"
          name="iconf"
          type="number"
          min="0"
          value={state.iconf}
          required={true}
          placeholder={"Number of Books Published (if any)"}
        />


        <label htmlFor="doc" className="text-sm mb-1">
          List of the thesis supervision. (See the help on right side for the
          details of the list document.)<span className="text-red-500">*</span>
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
