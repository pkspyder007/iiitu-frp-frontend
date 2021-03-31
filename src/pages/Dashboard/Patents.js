import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams, Link } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
    name:"",
    num: "0",
    year: "",
    status:"",
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

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = state;
    // for (let [key, value] of Object.entries(state)) {
    //   data.append(key, value);
    // }

    axios
      .post(`/applications/${appId}/patents`, data,{
        headers:{
          'Content-Type':'application/json'
        }
      })
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
          <button className="border-b-4 p-2 text-white font-bold bg-indigo-600">
            Best Papers
          </button>
        </Link>
        <Link to={`/dashboard/application/patents/${appId}`}>
          <button className="border-b-4 border-black p-2 text-white font-bold bg-indigo-600">
            Patents
          </button>
        </Link>
      </div>
    <form id="patform" onSubmit={onSubmit}>
      <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      <h1 className="text-2xl text-indigo-600 mb-4">Patents </h1>
      <label htmlFor="name" className="text-sm mb-1">
      Patents Name <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="name"
          name="name"
          type="text"
          min="0"
          value={state.name}
          required={true}
          />
          <label htmlFor="year" className="text-sm mb-1">
      Patents Year <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="year"
          name="year"
          type="text"
          min="0"
          value={state.year}
          required={true}
        />
      <label htmlFor="num" className="text-sm mb-1">
      Patents Number <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="num"
          name="num"
          type="text"
          min="0"
          value={state.num}
          required={true}
        />
        <label htmlFor="status" className="text-sm mb-1">
      Patents status <span className="text-red-500">*</span>
        </label>
        <SecondaryInput
          onChange={onChangeHandler}
          id="status"
          name="status"
          type="text"
          min="0"
          value={state.status}
          required={true}
        />


{/* <label htmlFor="list" className="text-sm mb-1">
         List Of Patents<span className="text-red-500">*</span>
        </label>
        <textarea
          onChange={onChangeHandler}
          id="list"
          name="list"
          type="file"
          value={state.list}
          required={true}
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea> */}
        
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
