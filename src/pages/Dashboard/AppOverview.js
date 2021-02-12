import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Spinner from "../../components/Spinner";

export default function AppOverview() {
  const [state, setState] = useState({});
  const { appId } = useParams();
  const alert = useAlert();

  useEffect(() => {
    axios
      .get(`/applications/${appId}/`)
      .then(({ data }) => {
        setState(data.app);
        console.log(data.app);
      })
      .catch((err) => {
        alert.error(err?.response?.data?.msg);
      });
  }, []);

  const {
    PersonalDetail,
    AcadExperiences,
    AcadQualifications,
    FuturePlan,
    BestPaper,
    GeneralQue,
    IndustryExps,
    OtherInfo,
    Patent,
    Publication,
    Referees,
    Research,
    SOP,
    Thesis,
  } = state;

  return !state.id ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div>
      {PersonalDetail && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">Personal Info</h1>
          <hr className="my-3" />
          <Info label="Name" text={PersonalDetail.name} />
          <Info label="DOB" text={PersonalDetail.DOB} />
          <Info label="Category" text={PersonalDetail.category} />
          <Info
            label="Correspondence Address"
            text={PersonalDetail.corAddress}
          />
          <Info label="Phone" text={PersonalDetail.phone} />
          <Info label="Email" text={PersonalDetail.email} />
          <Info label="Fax" text={PersonalDetail.fax} />
          {/* <Info label="Email" text={PersonalDetail.fax} /> */}
          <Info label="Martial Status" text={PersonalDetail.martialStatus} />
          <Info label="Nationality" text={PersonalDetail.nationality} />
          <Info label="Permanent Address" text={PersonalDetail.perAddress} />
          {/* <Info label="Email" text={PersonalDetail.phone} /> */}
          <Info label="PWD" text={PersonalDetail.pwd} />
          {/* <Info label="Email" text={PersonalDetail.pwd} /> */}
          <Info label="Secondary Phone" text={PersonalDetail.SecPhone} />
          <Info label="Secondary Email" text={PersonalDetail.secEmail} />
          <Info label="Secondary Fax" text={PersonalDetail.sexFax} />
          <Info label="Sex" text={PersonalDetail.sex} />
          <Link to={`/dashboard/application/personal/${appId}/`}>
            <button>Enter Details</button>
          </Link>
        </div>
      )}
      {/* Acad Exp */}
      <div className="flex flex-col justify-center shadow mx-12 p-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Academic Experience
        </h1>
        <hr className="my-3" />
        {AcadExperiences &&
          AcadExperiences.map((e) => (
            <div key={e.id}>
              <Info label="Organization" text={e.org} />
              <Info label="Designation" text={e.designation} />
              <Info label="From" text={e.from} />
              <Info label="To" text={e.to} />
              <Info label="Nature of Duties" text={e.natureOfDuties} />
              <Info label="Salary" text={e.salary} />
              {/* <Info label="Salary" text={e.salary} /> */}

              <hr className="my-6" />
            </div>
          ))}
        <Link to={`/dashboard/application/acadexp/${appId}/`}>
          <button>Enter Details</button>
        </Link>
      </div>

      {/* Acad Qua */}
      <div className="flex flex-col justify-center shadow mx-12 p-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Academic Qualifications
        </h1>
        <hr className="my-3" />
        {AcadQualifications &&
          AcadQualifications.map((e) => (
            <div key={e.id}>
              <Info label="Institution" text={e.institution} />
              <Info label="Education" text={e.education} />
              <Info label="Subject" text={e.subject} />
              <Info label="Percentage" text={e.percentage} />
              <Info label="Year" text={e.year} />
              {/* <Info label="Salary" text={e.salary} /> */}

              <hr className="my-6" />
            </div>
          ))}
      </div>

      {/* Industry Experience */}
      <div className="flex flex-col justify-center shadow mx-12 p-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Industry Experience
        </h1>
        <hr className="my-3" />
        {IndustryExps &&
          IndustryExps.map((e) => (
            <div key={e.id}>
              <Info label="Organization" text={e.org} />
              <Info label="Designation" text={e.designation} />
              <Info label="From" text={e.from} />
              <Info label="To" text={e.to} />
              <Info label="Nature of Duties" text={e.natureOfDuties} />
              <Info label="Salary" text={e.salary} />
              {/* <Info label="Salary" text={e.salary} /> */}

              <hr className="my-6" />
            </div>
          ))}
      </div>

      {/* Best Papers */}
      {BestPaper && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">Best Papers</h1>
          <hr className="my-3" />
          {BestPaper && (
            <div key={BestPaper.id}>
              <Info label="Id" text={BestPaper.id} />
              {/* <Info label="Salary" text={e.salary} /> */}

              <hr className="my-6" />
            </div>
          )}
        </div>
      )}

      {/* Future Plans */}
      {FuturePlan && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">Future Plans</h1>
          <hr className="my-3" />
          {FuturePlan && (
            <div key={FuturePlan.id}>
              <Info label="Id" text={FuturePlan.id} />
              {/* <Info label="Salary" text={e.salary} /> */}

              <hr className="my-6" />
            </div>
          )}
        </div>
      )}

      {/* General Questions */}
      {GeneralQue && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">
            General Questions
          </h1>
          <hr className="my-3" />
          {GeneralQue.one && <Info label="Ques 1" text={GeneralQue.one} />}
          {GeneralQue.two && <Info label="Ques 2" text={GeneralQue.two} />}
          {GeneralQue.three && <Info label="Ques 3" text={GeneralQue.three} />}
          {GeneralQue.four && <Info label="Ques 4" text={GeneralQue.four} />}
          {GeneralQue.five && <Info label="Ques 5" text={GeneralQue.five} />}
        </div>
      )}

      {/* Other Information */}
      {OtherInfo && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">
            Other Information
          </h1>
          <hr className="my-3" />
          {OtherInfo.awards && <Info label="Awards" text={"award"} />}
          {OtherInfo.extraCirricular && (
            <Info label="Extra Cirricular" text={"EX"} />
          )}
          {OtherInfo.membership && (
            <Info label="Membership" text={OtherInfo.membership} />
          )}
          {OtherInfo.special && (
            <Info label="Special" text={OtherInfo.special} />
          )}
          {OtherInfo.others && <Info label="Others" text={OtherInfo.others} />}
        </div>
      )}

      {/* Ptensts */}
      {Patent && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">Patents</h1>
          <hr className="my-3" />
          {Patent.noOfPatents !== "0" && (
            <Info label="Number Of Patents" text={Patent.noOfPatents} />
          )}
          {Patent.list && <Info label="List" text={Patent.list} />}
        </div>
      )}

      {/* Publications */}
      {Publication && (
        <div className="flex flex-col justify-center shadow mx-12 p-4">
          <h1 className="text-indigo-600 text-lg font-bold">
            Research Publications
          </h1>
          <hr className="my-3" />
          {<Info label="Number Of books" text={`${Publication.books}`} />}
          {
            <Info
              label="Number Of National conferences"
              text={`${Publication.nConf}`}
            />
          }
          {
            <Info
              label="Number Of international conferences"
              text={`${Publication.iConf}`}
            />
          }
          {
            <Info
              label="Number Of National journals"
              text={`${Publication.nJournals}`}
            />
          }
          {
            <Info
              label="Number Of international journals"
              text={`${Publication.iJournals}`}
            />
          }
        </div>
      )}
    </div>
  );
}

function Info({ label, text }) {
  return (
    <div className="flex">
      <strong className="mr-4">{label}: </strong>
      <p className="text-gray-800">{text}</p>
    </div>
  );
}
