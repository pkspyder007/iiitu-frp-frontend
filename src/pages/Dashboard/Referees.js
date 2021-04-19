import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  name: "",
  designation: "",
  corAddress: "",
  phone: "",
  fax: "",
  email: "",
  appId: "",
};

export default function Referees() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#sopform");
    form.reset();
    setState(initState);
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
      .post(`/applications/${appId}/referees`, state)
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
      <h1 className="text-2xl text-indigo-600 mb-4">Referees </h1>
        <label htmlFor="name" className="text-sm mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="name"
          name="name"
          value={state.name}
          required={true}
        />

        <label htmlFor="designation" className="text-sm mb-1">
          Designation <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="designation"
          name="designation"
          value={state.designation}
          required={true}
        />

        <label htmlFor="corAddress" className="text-sm mb-1">
          Correspondence Address
          <span className="text-red-500">*</span>
        </label>
        <textarea
          onChange={onChangeHandler}
          id="corAddress"
          name="corAddress"
          value={state.corAddress}
          required={true}
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea>

        <label htmlFor="phone" className="text-sm mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="phone"
          name="phone"
          value={state.phone}
          required={true}
        />

       

        <label htmlFor="email" className="text-sm mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          value={state.email}
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
