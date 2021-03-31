import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams, Link } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  title: "",
  sponsor: "",
  amount: "",
  duration: "",
  start: "",
  end: "",
  outcome: "",
  doc: "",
};

export default function SponsoredProject() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#resformii");
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
      .post(`/applications/${appId}/sp`, data, {})
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
          <button className="border-b-4 border-black p-2 text-white font-bold bg-indigo-600">
            Sponsered Projects
          </button>
        </Link>
        <Link to={`/dashboard/application/thesis/${appId}`}>
          <button className="border-b-4  p-2 text-white font-bold bg-indigo-600">
            Thesis
          </button>
        </Link>
        <Link to={`/dashboard/application/bestpapers/${appId}`}>
          <button className="border-b-4  p-2 text-white font-bold bg-indigo-600">
            Best Papers
          </button>
        </Link>
        <Link to={`/dashboard/application/patents/${appId}`}>
          <button className="border-b-4  p-2 text-white font-bold bg-indigo-600">
            Patents
          </button>
        </Link>
      </div>
      <form id="resformii" onSubmit={onSubmit}>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">Sponsered Projects</h1>
          <label htmlFor="title" className="text-sm mb-1">
            Title
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="title"
            name="title"
            type="text"
            value={state.title}
            required={true}
            placeholder={"Enter Title"}
          />

          <label htmlFor="sponsor" className="text-sm mb-1">
            Sponsor
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="sponsor"
            name="sponsor"
            type="text"
            value={state.sponsor}
            required={true}
            placeholder={"Enter Sponser name"}
          />

          <label htmlFor="amount" className="text-sm mb-1">
            Amount
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="amount"
            name="amount"
            type="number"
            min="0"
            value={state.amount}
            required={true}
            placeholder={"Enter amount"}
          />

          <label htmlFor="duration" className="text-sm mb-1">
            Duration (Years)
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="duration"
            name="duration"
            type="number"
            min="0"
            value={state.duration}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="start" className="text-sm mb-1">
            Start
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="start"
            name="start"
            type="date"
            value={state.start}
            required={true}
            placeholder={"Select Starting Date"}
          />

          <label htmlFor="end" className="text-sm mb-1">
            End
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="end"
            name="end"
            type="date"
            value={state.end}
            required={true}
            placeholder={"Select Ending Date"}
          />

          <label htmlFor="outcome" className="text-sm mb-1">
            Outcomes <span className="text-red-500">*</span>
          </label>
          <textarea
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
            onChange={onChangeHandler}
            id="outcome"
            name="outcome"
            type="text"
            value={state.outcome}
            required={true}
          ></textarea>

          <label htmlFor="doc" className="text-sm mb-1">
            List and description of the projects. (See the help on right side
            for the details of the list document.){" "}
            <span className="text-red-500">*</span>
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
