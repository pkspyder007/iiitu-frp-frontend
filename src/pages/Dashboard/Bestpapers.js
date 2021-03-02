import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams, Link } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  title:"",
  yearOfPub:"",
  publisher:"",
  doc:"",
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

  const onSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let [key, value] of Object.entries(state)) {
      data.append(key, value);
    }
    axios
      .post(`/applications/${appId}/bestpapers`, data)
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
      <div className="flex justify-around mb-2 p-3 border">
        <Link to={`/dashboard/application/research/${appId}`}>
          <button className="border-b-4 p-2 text-white font-bold bg-indigo-600">
            Publications
          </button>
        </Link>
        <Link to={`/dashboard/application/sp/${appId}`}>
          <button className="border-b-4  p-2 text-white font-bold bg-indigo-600">
            Sponsered Projects
          </button>
        </Link>
        <Link to={`/dashboard/application/thesis/${appId}`}>
          <button className="border-b-4  p-2 text-white font-bold bg-indigo-600">
            Thesis
          </button>
        </Link>
        <Link to={`/dashboard/application/bestpapers/${appId}`}>
          <button className="border-b-4 border-black p-2 text-white font-bold bg-indigo-600">
            Best Papers
          </button>
        </Link>
        <Link to={`/dashboard/application/patents/${appId}`}>
          <button className="border-b-4  p-2 text-white font-bold bg-indigo-600">
            Patents
          </button>
        </Link>
      </div>
      <form id="bpform" onSubmit={onSubmit}>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          {/* <h1 className="text-2xl text-indigo-600 mb-4">Three Best Papers</h1>
          <label htmlFor="first" className="text-sm mb-1">
            <strong>Best Paper 1</strong> Published
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            id="first"
            name="first"
            type="file"
            required={true}
          />

          <label htmlFor="second" className="text-sm mb-1">
            <strong>Best Paper 2</strong> Published
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            id="second"
            name="second"
            type="file"
            required={true}
          />

          <label htmlFor="third" className="text-sm mb-1">
            <strong>Best Paper 3</strong> Published
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            id="third"
            name="third"
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
          </div>*/}
           <label htmlFor="name" className="text-sm mb-1">
            Title of Paper <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            name="title"
            id="title"
            value={state.title}
            onChange={onChangeHandler}
            type="text"
            placeholder="Title *"
            required={true}
          />
          <label htmlFor="name" className="text-sm mb-1">
            Year of Publication <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            name="yearOfPub"
            id="yearOfPub"
            value={state.yearOfPub}
            onChange={onChangeHandler}
            type="text"
            placeholder="Year *"
            required={true}
          />
          <label htmlFor="publisher" className="text-sm mb-1">
            publisher <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            name="publisher"
            id="publisher"
            value={state.publisher}
            onChange={onChangeHandler}
            type="text"
            placeholder="publisher *"
            required={true}
          />
          <label htmlFor="first" className="text-sm mb-1">
            <strong>Paper</strong> Published
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            id="doc"
            name="doc"
            type="file"
            required={true}
          />
          <button
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-600"
                type={"submit"}
              >
                Add
              </button> 
        </div>
      </form>
    </AppLayout>
  );
}
