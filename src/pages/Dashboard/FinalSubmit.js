import React, { useEffect, useState } from "react";
import AppLayout from "./AppLayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { BtnLg } from "../../components/Buttons";

const initState = {
  feeTid: "",
  feeDate: "0",
  feeReciept: "",
  feeAmount: "",
  appId: "",
};

export default function FinalSubmit() {
  const { appId } = useParams();
  const [state, setState] = useState(initState);
  const alert = useAlert();
  const [job, setJob] = useState({});
  useEffect(() => {
    axios
      .get(`/applications/${appId}/`)
      .then(({ data }) => {
        if (data.app.refNum !== "NIL") {
          setState({
            ...state,
            feeAmount: data.app.feeAmount,
            name: data.app.PersonalDetail.name,
            appNum: data.app.refNum,
          });
          axios
            .get(`/jobs/getById/${data.app.jobId}`)
            .then((res) => {
              setJob(res.data.job);
            })
            .catch((err) => {
              console.log(err.response);
            });
        } else {
          alert.error("Plz Lock your application before proceeding!");
        }
      })
      .catch((err) => {
        alert.error(err?.response?.data?.msg);
      });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/applications/${appId}/finalsubmit`)
      .then((res) => {
        alert.success("Added Successfully");
        // history.push(`/applications/${appId}/gpdf`);
        window.location.replace(`/applications/${appId}/gpdf`);
      })
      .catch((err) => {
        // alert.error(err.response.data.msg);
        if (err.response?.data?.errors) {
          err.response.data.errors.map((e) => alert.error(e.message));
        }
      });
  };
  return (
    <div>
      <AppLayout>
        <form id="lockform">
          <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            {/* <h1 className="text-2xl text-indigo-600 mb-4">Fee Details</h1>  */}
            {state.appNum ? (
              <>
                <h2 className="text-2xl text-indigo-600 mb-4">Final Submit</h2>
                <p style={{ margin: "5px" }}>
                  Following application will be marked submitted after clicking
                  the button below
                </p>
                <div style={{ marginLeft: "3vw" }}>
                  <p style={{ margin: "5px" }}>Name: {state?.name}</p>
                  <p style={{ margin: "5px" }}>Adv No.: {job.adNo}</p>
                  <p style={{ margin: "5px" }}>
                    Post Applied for: {job?.title}
                  </p>
                  <p style={{ margin: "5px" }}>
                    Application No.: {state?.appNum}{" "}
                  </p>
                  <p style={{ margin: "5px" }}>Fee: {state.feeAmount}</p>
                </div>

                <BtnLg title="Final Submit" onClick={onSubmit} />
                {/* <button  className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-600" onClick={Gen}>Generate Pdf</button> */}
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </AppLayout>
    </div>
  );
}
