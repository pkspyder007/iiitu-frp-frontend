import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";

export default function AppLayout(props) {
  const [state, setState] = useState({ completed: true });
  const { appId } = useParams();
  const alert = useAlert();

  useEffect(() => {
    axios
      .get(`/applications/${appId}/`)
      .then(({ data }) => {
        console.log(data);
        setState(data.app);
      })
      .catch((err) => {
        alert.error(err?.response?.data?.msg);
      });
  }, []);
  const GeneratePdf = () => {
    if (state.app?.refNum === "NIL") {
      alert.error("Plz Lock your application before Generating pdf!");
      return;
    }

    window.open(`/applications/${appId}/gpdf`);
  };
  return (
    <div className="flex">
      <div className="flex flex-col w-1/6 h-screen bg-indigo-700">
        {!state.completed && (
          <>
            {" "}
            <NavLink
              className="py-3 px-5 border-b border-black text-indigo-600 bg-white hover:bg-indigo-100"
              to={`/dashboard/application/overview/${appId}`}
            >
              Preview Details
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400"
              to={`/dashboard/application/personal/${appId}`}
            >
              Personal
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/education/${appId}`}
            >
              Education
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/acadexp/${appId}`}
            >
              Experience
            </NavLink>
            {/* <NavLink
          className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
          to={`/dashboard/application/sp/${appId}`}
        >
          Sponsered Projects
        </NavLink> */}
            {/* <NavLink
          className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
          to={`/dashboard/application/thesis/${appId}`}
        >
          Thesis
        </NavLink> */}
            {/* <NavLink
          className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
          to={`/dashboard/application/indexp/${appId}`}
        >
          Industry Experience
        </NavLink> */}
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/research/${appId}`}
            >
              Research
            </NavLink>
            {/* <NavLink
          className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
          to={`/dashboard/application/bestpapers/${appId}`}
        >
          Best Papers
        </NavLink> */}
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/sop/${appId}`}
            >
              SOP
            </NavLink>
            {/* <NavLink
          className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
          to={`/dashboard/application/patents/${appId}`}
        >
          Patents
        </NavLink> */}
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/otherinfo/${appId}`}
            >
              Other Information
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/futureplans/${appId}`}
            >
              Future Plans
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/generalques/${appId}`}
            >
              General Questions
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/referees/${appId}`}
            >
              Referees
            </NavLink>
            <NavLink
              className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
              to={`/dashboard/application/lock/${appId}`}
            >
              Lock Application
            </NavLink>
          </>
        )}
        <NavLink
          className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
          to={`/dashboard/application/fees/${appId}`}
        >
          Fee Details
        </NavLink>
        {state.currentStep === 10 && (
          <NavLink
            className="py-3 px-5 border-b border-black text-white hover:bg-indigo-400 "
            to={`/dashboard/application/final/${appId}`}
          >
            Final Submit
          </NavLink>
        )}
      </div>
      <div className="px-12"> {props.children}</div>
    </div>
  );
}
