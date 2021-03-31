import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import AppLayout from "./AppLayout";

const initState = {
  one: "NA",
  two: "NA",
  three: "NA",
  four: "NA",
  five: "NA",
  appId: "",
};
const YesOrNo=({set,state,name})=>{
  return(
    <div style={{width:"100px",margin:"10px",display:"flex",justifyContent:"space-around"}}>
  <div><label className="mr-1">
    Yes
  </label>
  <input type="radio" onClick={()=>set({...state,[name]:""})} checked={state[name]==="NA"?false:true}>
  </input></div>
  <div><label className="mr-1">
    No
  </label>
  <input type="radio" onClick={()=>set({...state,[name]:"NA"})} checked={state[name]!=="NA"?false:true}>
  </input></div>
  </div>)
  
}
export default function General() {
  const [state, setState] = useState(initState);
  const { appId } = useParams();
  const alert = useAlert();

  const resetForm = () => {
    let form = document.querySelector("#gqform");
    form.reset();
    setState(initState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let [key, value] of Object.entries(state)) {
      data.append(key, value);
    }

    axios
      .post(`/applications/${appId}/general`, data)
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
  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <AppLayout>
      <form id="sopform" onSubmit={onSubmit}>
        <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <h1 className="text-2xl text-indigo-600 mb-4">General Questions</h1>
          <label htmlFor="one" className="text-sm mb-1">
            <strong>
              1. Has there been any break in your academic career? If so, give
              details thereof with reasons.
            </strong>
            <span className="text-red-500">*</span>
          </label>
        {state.one!="NA"?<textarea
          onChange={onChangeHandler}
          id="one"
          name="one"
          value={state.one}
          
          className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
        ></textarea>:<></>}
        <YesOrNo state={state} set={setState} name="one"/>
          <label htmlFor="two" className="text-sm mb-1">
            <strong>
              2. Have you been punished during your studies at
              College/University? If so, give details.
            </strong>
            <span className="text-red-500">*</span>
          </label>
          {state.two!="NA"?<textarea
            onChange={onChangeHandler}
            id="two"
            name="two"
            value={state.two}
            
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
          ></textarea>:<></>}
            <YesOrNo state={state} set={setState} name="two"/>
          <label htmlFor="three" className="text-sm mb-1">
            <strong>
              3. Have you been punished during your services or convicted by
              Court of Law? If so, give details
            </strong>
            <span className="text-red-500">*</span>
          </label>
          {state.three!="NA"?<textarea
            onChange={onChangeHandler}
            id="three"
            name="three"
            value={state.three}
            
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
          ></textarea>:<></>}
            <YesOrNo state={state} set={setState} name="three"/>
          <label htmlFor="four" className="text-sm mb-1">
            <strong>
              4. Were you at any time declared medically unfit or asked to
              submit your resignation or discharged or dismissed? If yes,give
              details.
            </strong>
            <span className="text-red-500">*</span>
          </label>
          {state.four!="NA"?<textarea
            onChange={onChangeHandler}
            id="four"
            name="four"
            value={state.four}
            
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
          ></textarea>:<></>}
          <YesOrNo state={state} set={setState} name="four"/>
          <label htmlFor="five" className="text-sm mb-1">
            <strong>
              5. Do you have any court cases pending as one of the parties? If
              yes give details.
            </strong>
            <span className="text-red-500">*</span>
          </label>
          {state.five!="NA"?<textarea
            onChange={onChangeHandler}
            id="five"
            name="five"
            value={state.five}
            
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
          ></textarea>:<></>}
          <YesOrNo state={state} set={setState} name="five"/>

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
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </AppLayout>
  );
}
