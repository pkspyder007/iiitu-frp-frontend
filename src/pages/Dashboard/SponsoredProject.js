import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  projectAsPI: "",
  grantPI: "",
  projectAsCOPI: "",
  grantCOPI: "",
  inProgressAsPI: "",
  grantInProgressAsPI: "",
  inProgressAsCOPI: "",
  grantInProgressAsCOPI: "",
  doc: "",
};

export default function SponsoredProject() {
  const [state, setState] = useState(initState);
  const {appId} = useParams();
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
      <form id="resformii" onSubmit={onSubmit}>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">Sponsered Projects</h1>
          <label htmlFor="salary" className="text-sm mb-1">
            No of Sponsored Projects completed as PI{" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="projectAsPI"
            name="projectAsPI"
            type="number"
            min="0"
            value={state.projectAsPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="grantPI" className="text-sm mb-1">
            Total Amount of Grant (in INR Lac.){" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="grantPI"
            name="grantPI"
            type="number"
            min="0"
            value={state.grantPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="projectAsCOPI" className="text-sm mb-1">
            No of Sponsored Projects completed as CO-PI{" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="projectAsCOPI"
            name="projectAsCOPI"
            type="number"
            min="0"
            value={state.projectAsCOPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="grantCOPI" className="text-sm mb-1">
            Total Amount of Grant(in INR Lac.){" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="grantCOPI"
            name="grantCOPI"
            type="number"
            min="0"
            value={state.grantCOPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="inProgressAsPI" className="text-sm mb-1">
            No of Sponsored Projects In Progress as CO-PI{" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="inProgressAsPI"
            name="inProgressAsPI"
            type="number"
            min="0"
            value={state.inProgressAsPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="grantInProgressAsPI" className="text-sm mb-1">
            Total Amount of Grant <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="grantInProgressAsPI"
            name="grantInProgressAsPI"
            type="number"
            min="0"
            value={state.grantInProgressAsPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="inProgressAsCOPI" className="text-sm mb-1">
            No of Sponsored Projects In Progress as CO-PI{" "}
            <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="inProgressAsCOPI"
            name="inProgressAsCOPI"
            type="number"
            min="0"
            value={state.inProgressAsCOPI}
            required={true}
            placeholder={"Enter Number"}
          />

          <label htmlFor="grantInProgressAsCOPI" className="text-sm mb-1">
            Total Amount of Grant <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onChangeHandler}
            id="grantInProgressAsCOPI"
            name="grantInProgressAsCOPI"
            type="number"
            min="0"
            value={state.grantInProgressAsCOPI}
            required={true}
            placeholder={"Enter Number"}
          />

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
