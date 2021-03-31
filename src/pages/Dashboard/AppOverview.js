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

  // delete/reset functions
  const deleteApp = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/personal/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteAcadExp = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/acadexp/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteAcadQual = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/acadqual/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteFututrePlans = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/futureplans/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteBestPapers = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/bestpapers/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteGeneralQues = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/generalques/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteIndExp = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/indexp/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteOtherInfo = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/otherinfo/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deletePublications = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/publications/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deletePatents = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/patents/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteReferees = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/referees/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteResearch = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/research/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteSOP = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/sop/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteThesis = (id) => {
    if(!id) return;
    axios
      .delete(`/applications/thesis/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };


  // end delete/reset functions

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
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">Personal Info</h1>
        <hr className="my-3" />
        {PersonalDetail && (
          <>
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
          </>
        )}
        <div className="flex">
          <Link to={`/dashboard/application/personal/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button
              onClick={() => deleteApp(PersonalDetail?.id)}
              className="bg-red-500 px-3 py-1 m-2 rounded text-white"
            >
              Reset Details
            </button>
          </p>
        </div>
      </div>
      {/* Acad Exp */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
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
              <div className="flex">
                <p>
                  <button onClick={() => deleteAcadExp(e?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
                    Delete Record
                  </button>
                </p>
              </div>
              <hr className="my-3" />
            </div>
          ))}
        <div className="flex">
          <Link to={`/dashboard/application/acadexp/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter New Record
            </button>
          </Link>
        </div>
      </div>

      {/* Acad Qua */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
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

              <div className="flex">
                <p>
                  <button onClick={() => deleteAcadQual(e?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
                    Delete Record
                  </button>
                </p>
              </div>
              <hr className="my-3" />
            </div>
          ))}

        <div className="flex">
          <Link to={`/dashboard/application/education/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter New Record
            </button>
          </Link>
        </div>
      </div>

      {/* Industry Experience */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
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
              <div className="flex">
                <p>
                  <button onClick={() => deleteIndExp(e?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
                    Delete Record
                  </button>
                </p>
              </div>
              <hr className="my-3" />
            </div>
          ))}
        <div className="flex">
          <Link to={`/dashboard/application/indexp/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter New Record
            </button>
          </Link>
        </div>
      </div>

      {/* Best Papers */}
      {BestPaper && (
        <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
          <h1 className="text-indigo-600 text-lg font-bold">Best Papers</h1>
          <hr className="my-3" />
          {BestPaper && (
            <div key={BestPaper.id}>
              <Info label="Id" text={BestPaper.id} />
              {/* <Info label="Salary" text={e.salary} /> */}
              <div className="flex">
                <p>
                  <button onClick={() => deleteBestPapers(BestPaper?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
                    Delete Record
                  </button>
                </p>
              </div>
              <hr className="my-3" />
            </div>
          )}
          <div className="flex">
            <Link to={`/dashboard/application/bestpapers/${appId}/`}>
              <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
                Enter New Record
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Future Plans */}
      {FuturePlan && (
        <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
          <h1 className="text-indigo-600 text-lg font-bold">Future Plans</h1>
          <hr className="my-3" />
          {FuturePlan && (
            <div key={FuturePlan.id}>
              <Info label="Id" text={FuturePlan.id} />
              {/* <Info label="Salary" text={e.salary} /> */}
              <div className="flex">
                <p>
                  <button onClick={() => deleteFututrePlans(FuturePlan?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
                    Delete Record
                  </button>
                </p>
              </div>
              <hr className="my-3" />
            </div>
          )}
          <div className="flex">
            <Link to={`/dashboard/application/futureplans/${appId}/`}>
              <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
                Enter New Record
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* General Questions */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">General Questions</h1>
        <hr className="my-3" />
        {GeneralQue && (
          <>
            {GeneralQue.one && <Info label="Ques 1" text={GeneralQue.one} />}

            {GeneralQue.two && <Info label="Ques 2" text={GeneralQue.two} />}
            {GeneralQue.three && (
              <Info label="Ques 3" text={GeneralQue.three} />
            )}
            {GeneralQue.four && <Info label="Ques 4" text={GeneralQue.four} />}
            {GeneralQue.five && <Info label="Ques 5" text={GeneralQue.five} />}
          </>
        )}
        <div className="flex">
          <Link to={`/dashboard/application/generalques/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deleteGeneralQues(GeneralQue?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Other Information */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">Other Information</h1>
        <hr className="my-3" />
        {OtherInfo && (
          <>
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
            {OtherInfo.others && (
              <Info label="Others" text={OtherInfo.others} />
            )}
          </>
        )}
        <div className="flex">
          <Link to={`/dashboard/application/otherinfo/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deleteOtherInfo(OtherInfo?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Ptensts */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">Patents</h1>
        <hr className="my-3" />
        {Patent && (
          <>
            {Patent.noOfPatents !== "0" && (
              <Info label="Number Of Patents" text={Patent.noOfPatents} />
            )}
            {Patent.list && <Info label="List" text={Patent.list} />}
          </>
        )}
        <div className="flex">
          <Link to={`/dashboard/application/patents/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deletePatents(Patent?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Publications */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Research Publications
        </h1>
        <hr className="my-3" />
        {Publication && (
          <>
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
          </>
        )}
        <div className="flex">
          <Link to={`/dashboard/application/research/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deletePublications(Publication?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* SOP */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          SOP - Statement of purpose
        </h1>
        <hr className="my-3" />
        {SOP && (
          <>
            {SOP.sop !== "0" && (
              <Info label="Number Of Patents" text={SOP.sop} />
            )}
          </>
        )}
        <div className="flex">
          <Link to={`/dashboard/application/sop/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deleteSOP(SOP?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Sponsered Research projects */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Sponsered Projects Information
        </h1>
        <hr className="my-3" />
        {Research && <Info label="You have filled the details" />}
        <hr className="my-3" />
        <div className="flex">
          <Link to={`/dashboard/application/sp/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deleteResearch(Research?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Thesis */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Thesis Supervised{" "}
        </h1>
        <hr className="my-3" />
        {Thesis && <Info label="You have filled the details" />}
        <hr className="my-3" />
        <div className="flex">
          <Link to={`/dashboard/application/thesis/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button onClick={() => deleteThesis(Thesis?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Referees */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">
          Referees{" "}
          <span className="text-red-500">* Minimunm 3 are requirred</span>
        </h1>
        <hr className="my-3" />
        {Referees &&
          Referees.map((e) => (
            <div key={e.id}>
              <Info label="Name" text={e.name} />
              <Info label="Designation" text={e.designation} />
              <Info label="Phone" text={e.phone} />
              <Info label="Email" text={e.email} />
              <Info label="Correspndence Address" text={e.corAddress} />
              <Info label="Fax" text={e.fax} />
              {/* <Info label="Salary" text={e.salary} /> */}
              <div className="flex">
                <p>
                  <button onClick={() => deleteReferees(e?.id)} className="bg-red-500 px-3 py-1 m-2 rounded text-white">
                    Delete Record
                  </button>
                </p>
              </div>
              <hr className="my-3" />
            </div>
          ))}
        <div className="flex">
          <Link to={`/dashboard/application/referees/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter New Record
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Info({ label, text }) {
  return (
    <div className="flex mb-2">
      <strong className="mr-4">{label}: </strong>
      <p className="text-gray-800">{text}</p>
    </div>
  );
}
