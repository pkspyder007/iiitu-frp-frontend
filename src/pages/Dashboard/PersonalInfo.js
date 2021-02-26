import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecondaryInput from "../../components/SecondaryInput";
import AppLayout from "./AppLayout";

const initState = {
  name: "",
  corAddress: "",
  phone: "",
  fax: "",
  email: "",
  perAddress: "",
  secPhone: "",
  sexFax: "",
  secEmail: "",
  DOB: "",
  nationality: "",
  sex: "",
  martialStatus: "",
  category: "",
  pwd: "NO",
  pwdDoc: "",
  govtIdCard: "",
  photo: "",
  appId: "",
};

export default function PersonalInfo() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#persInfoReg");
    console.log(form.reset());
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
      .post(`/applications/${appId}/personalInfo`, data, {})
      .then((res) => {
        alert.success(res.data.msg);
        resetForm();
      })
      .catch((err) => {
        alert.error(err.response.data.msg);
        if (err.response.data.errors) {
          err.response.data.errors.map((e) => alert.error(e.message));
        }
      });
  };
  return (
    <AppLayout>
      <form onSubmit={onSubmit} id="persInfoReg">
      <h1 className="text-2xl text-indigo-600 mb-4">Personal Information</h1>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <label htmlFor="name" className="text-sm mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            name="name"
            id="name"
            value={state.name}
            onChange={onChangeHandler}
            type="text"
            placeholder="Name *"
            required={true}
          />

          <label htmlFor="corAddress" className="text-sm mb-1">
            Correpondence Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="corAddress"
            name="corAddress"
            value={state.corAddress}
            onChange={onChangeHandler}
            required={true}
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Correpondence Address *"
          ></textarea>

          <label htmlFor="phone" className="text-sm mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            phone="phone"
            name="phone"
            value={state.phone}
            onChange={onChangeHandler}
            type="text"
            placeholder="Phone *"
            required={true}
          />

          <label htmlFor="email" className="text-sm mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            id="email"
            name="email"
            value={state.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email *"
            required={true}
          />

          <label htmlFor="perAddress" className="text-sm mb-1">
            Permanent Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="perAddress"
            name="perAddress"
            value={state.perAddress}
            onChange={onChangeHandler}
            required={true}
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Permanent Address *"
          ></textarea>

          <label htmlFor="secPhone" className="text-sm mb-1">
            Alternate Phone
          </label>
          <SecondaryInput
            id="secPhone"
            name="secPhone"
            value={state.secPhone}
            onChange={onChangeHandler}
            type="text"
            placeholder="Alternate Phone *"
          />

          <label htmlFor="secEmail" className="text-sm mb-1">
          Alternate Email
          </label>
          <SecondaryInput
            id="secEmail"
            name="secEmail"
            value={state.secEmail}
            onChange={onChangeHandler}
            type="email"
            placeholder="Alternate Email *"
          />

          <label htmlFor="DOB" className="text-sm mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>

          <SecondaryInput
            id="DOB"
            name="DOB"
            value={state.DOB}
            onChange={onChangeHandler}
            type="date"
            placeholder="D.O.B *"
            required={true}
          />

          <label htmlFor="pwdDoc" className="text-sm mb-1">
            Nationality <span className="text-red-500">*</span>
          </label>
          <select
            id="nationality"
            name="nationality"
            value={state.nationality}
            onChange={onChangeHandler}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">Nationality</option>
            <option value="INDIAN">INDIAN</option>
            <option value="POI">PIO</option>
            <option value="OCI">OCI</option>
            <option value="FOREIGNER">FOREIGNER</option>
          </select>

          <label htmlFor="sex" className="text-sm mb-1">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="sex"
            value={state.sex}
            onChange={onChangeHandler}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">GENDER</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="TRANSGENDER">TRANSGENDER</option>
          </select>

          <label htmlFor="sex" className="text-sm mb-1">
            Martial Status <span className="text-red-500">*</span>
          </label>
          <select
            name="martialStatus"
            value={state.martialStatus}
            onChange={onChangeHandler}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">Martial Status</option>
            <option value="SINGLE">SINGLE</option>
            <option value="MARRIED">MARRIED</option>
            <option value="DIVORCED">DIVORCED</option>
            <option value="SEPERATED">SEPERATED</option>
            <option value="WIDOWED">WIDOWED</option>
          </select>

          <label htmlFor="sex" className="text-sm mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={state.category}
            onChange={onChangeHandler}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">Category</option>
            <option value="UR">UR</option>
            <option value="OBS">OBS</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="EWS">EWS</option>
          </select>

          {state.category !== "UR" ? (
            <>
              <label htmlFor="catDoc" className="text-sm mb-1">
                Upload category certificate document.
              </label>
              <SecondaryInput
                type="file"
                id="catDoc"
                name="catDoc"
                onChange={onFileChangeHandler}
                required={state.category !== "UR"}
              />
            </>
          ) : null}

          <label htmlFor="pwd" className="text-sm mb-1">
            Persone with Disability <span className="text-red-500">*</span>
          </label>
          <select
            id="pwd"
            name="pwd"
            value={state.pwd}
            onChange={onChangeHandler}
            required={true}
            defaultChecked="NO"
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="NO">NO</option>
            <option value="YES">YES</option>
          </select>

          {state.pwd === "YES" ? (
            <>
              <label htmlFor="pwdDoc" className="text-sm mb-1">
                Upload PWD certificate document.
              </label>
              <SecondaryInput
                type="file"
                id="pwdDoc"
                name="pwdDoc"
                onChange={onFileChangeHandler}
                required={state.pwd === "YES"}
              />
            </>
          ) : null}

          <label htmlFor="pwdDoc" className="text-sm mb-1">
            Govt. issued ID-Card (PDF) <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            type="file"
            id="govtIdCard"
            name="govtIdCard"
            required={true}
          />

          <label htmlFor="pwdDoc" className="text-sm mb-1">
            Recent Photograph <span className="text-red-500">*</span>
          </label>
          <SecondaryInput
            onChange={onFileChangeHandler}
            type="file"
            id="photo"
            name="photo"
            required={true}
          />
          <div className="buttons flex">
            <div
              onClick={resetForm}
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            >
              Reset
            </div>
            <div className="">
              <button
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                type={"submit"}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </AppLayout>
  );
}
