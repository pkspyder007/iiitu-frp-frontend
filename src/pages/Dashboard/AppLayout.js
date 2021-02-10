import React from "react";
import { NavLink, useParams } from "react-router-dom";

export default function AppLayout(props) {
  const { appId } = useParams();
  return (
    <div className="flex">
      <div className="flex flex-col w-1/5">
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active"
          to={`/dashboard/application/personal/${appId}`}
        >
          Personal
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/education/${appId}`}
        >
          Education
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/acadexp/${appId}`}
        >
          Acadamic Experience
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/sp/${appId}`}
        >
          Sponsered Projects
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/thesis/${appId}`}
        >
          Thesis
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/indexp/${appId}`}
        >
          Industry Experience
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/research/${appId}`}
        >
          Research
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/bestpapers/${appId}`}
        >
          Best Papers
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/sop/${appId}`}
        >
          SOP
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/patents/${appId}`}
        >
          Patents
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/otherinfo/${appId}`}
        >
          Other Inofrmation
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/futureplans/${appId}`}
        >
          Future Plans
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/generalques/${appId}`}
        >
          General Questions
        </NavLink>
        <NavLink
          className="py-3 px-5 bg-indigo-600 text-white active "
          to={`/dashboard/application/referees/${appId}`}
        >
          Referees
        </NavLink>
      </div>
      <div className="px-12"> {props.children}</div>
    </div>
  );
}
