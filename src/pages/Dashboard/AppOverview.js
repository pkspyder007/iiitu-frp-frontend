import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Spinner from "../../components/Spinner";

function getStaticUrl(link) {
  let str = link.split("uploads");
  let finalImage = str[1];
  if (str[1][0] === "\\") {
    finalImage = str[1].split("\\").join("/");
    return finalImage;
  }
}

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
    if (!id) return;
    axios
      .delete(`/applications/personal/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteAcadExp = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/acadexp/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteAcadQual = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/acadqual/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteFututrePlans = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/futureplans/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteBestPapers = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/bestpapers/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteGeneralQues = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/generalques/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteIndExp = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/indexp/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteOtherInfo = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/otherinfo/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deletePublications = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/publications/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deletePatents = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/patents/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteReferees = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/referees/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteResearch = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/research/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteSOP = (id) => {
    if (!id) return;
    axios
      .delete(`/applications/sop/${id}`)
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => alert.error(err?.response?.data?.msg));
  };
  const deleteThesis = (id) => {
    if (!id) return;
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
    OtherInfos,
    Patents,
    Publications,
    Referees,
    Research,
    SOP,
    Theses: Thesis,
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
            {PersonalDetail.dobDoc && <Info
                label="DOB certificate"
                text={
                  <a
                    href={getStaticUrl(PersonalDetail.dobDoc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />}
            <Info label="Category" text={PersonalDetail.category} />
            {PersonalDetail.catDoc && <Info
                label="Category certificate"
                text={
                  <a
                    href={getStaticUrl(PersonalDetail.catDoc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />}
            <Info
              label="Correspondence Address"
              text={PersonalDetail.corAddress}
            />
            <Info label="Phone" text={PersonalDetail.phone} />
            <Info label="Email" text={PersonalDetail.email} />
            {/*<Info label="Fax" text={PersonalDetail.fax} />
             <Info label="E-mail" text={PersonalDetail.fax} /> */}
            <Info label="Martial Status" text={PersonalDetail.martialStatus} />
            <Info label="Nationality" text={PersonalDetail.nationality} />
            <Info label="Permanent Address" text={PersonalDetail.perAddress} />
            {/* <Info label="Email" text={PersonalDetail.phone} /> */}
            <Info label="PWD" text={PersonalDetail.pwd} />
            {/* <Info label="Email" text={PersonalDetail.pwd} /> */}
            <Info label="Secondary Phone" text={PersonalDetail.SecPhone} />
            <Info label="Secondary Email" text={PersonalDetail.secEmail} />
            {/* <Info label="Secondary Fax" text={PersonalDetail.sexFax} />*/}
            <Info label="Gender" text={PersonalDetail.sex} />
            {PersonalDetail.photo && <Info
                label="Photograph"
                text={
                  <a
                    href={getStaticUrl(PersonalDetail.photo)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Photograph
                  </a>
                }
              />}
              {PersonalDetail.govtIdCard && <Info
                label="Govt. Id card"
                text={
                  <a
                    href={getStaticUrl(PersonalDetail.govtIdCard)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />}
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
              <Info
                label="Document"
                text={
                  <a
                    href={getStaticUrl(e.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />
              {/* <Info label="Salary" text={e.salary} /> */}
              <div className="flex">
                <p>
                  <button
                    onClick={() => deleteAcadExp(e?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
              <Info
                label="Document"
                text={
                  <a
                    href={getStaticUrl(e.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />

              <div className="flex">
                <p>
                  <button
                    onClick={() => deleteAcadQual(e?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
              <Info
                label="Document"
                text={
                  <a
                    href={getStaticUrl(e.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />
              {/* <Info label="Salary" text={e.salary} /> */}
              <div className="flex">
                <p>
                  <button
                    onClick={() => deleteIndExp(e?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
                  <button
                    onClick={() => deleteBestPapers(BestPaper?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
              <Info
                label="File"
                text={
                  <a
                    href={getStaticUrl(FuturePlan.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />
              {/* <Info label="Salary" text={e.salary} /> */}
              <div className="flex">
                <p>
                  <button
                    onClick={() => deleteFututrePlans(FuturePlan?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
            <button
              onClick={() => deleteGeneralQues(GeneralQue?.id)}
              className="bg-red-500 px-3 py-1 m-2 rounded text-white"
            >
              Reset Details
            </button>
          </p>
        </div>
      </div>

      {/* Other Information */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">Other Information</h1>
        <hr className="my-3" />
        {OtherInfos && (
          <>
            {OtherInfos.map((d) => (
              <>
              <Info label={"Awarded By"} text={`${d.by}`} />
              <Info label={"Title"} text={`${d.title}`} />
              <Info label={"Date"} text={`${d.date}`} />
              <Info
                label="Document"
                text={
                  <a
                    href={getStaticUrl(d.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />
              </>
            ))}
            <div className="flex">
              <Link to={`/dashboard/application/otherinfo/${appId}/`}>
                <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
                  Enter Details
                </button>
              </Link>
              <p>
                <button
                  onClick={() => deleteOtherInfo(OtherInfos[0]?.id)}
                  className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                >
                  Reset Details
                </button>
              </p>
            </div>
          </>
        )}
      </div>

      {/* Ptensts */}
      <div className="flex flex-col justify-center shadow mx-12 p-4 mb-4">
        <h1 className="text-indigo-600 text-lg font-bold">Patents</h1>
        <hr className="my-3" />
        {Patents && Patents.map(p => (<>
          <Info label="Name" text={p.name} />
          <Info label="Status" text={p.status} />
          <Info label="Number" text={p.num} />
          <Info label="Year" text={p.year} />
        </>))}
        <div className="flex">
          <Link to={`/dashboard/application/patents/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button
              onClick={() => deletePatents(Patents[0]?.id)}
              className="bg-red-500 px-3 py-1 m-2 rounded text-white"
            >
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
        {Publications &&
          Publications.map((p) => (
            <>
              {<Info label="Number Of books" text={`${p.books}`} />}
              {
                <Info
                  label="Number Of National conferences"
                  text={`${p.nConf}`}
                />
              }
              {
                <Info
                  label="Number Of international conferences"
                  text={`${p.iConf}`}
                />
              }
              {
                <Info
                  label="Number Of National journals"
                  text={`${p.nJournals}`}
                />
              }
              {
                <Info
                  label="Number Of international journals"
                  text={`${p.iJournals}`}
                />
              }
              <Info
                label="Document"
                text={
                  <a
                    href={getStaticUrl(p.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />
            </>
          ))}
              <div className="flex">
                <Link to={`/dashboard/application/research/${appId}/`}>
                  <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
                    Enter Details
                  </button>
                </Link>
                <p>
                  <button
                    onClick={() => deletePublications(Patents[0]?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
            <button
              onClick={() => deleteSOP(SOP?.id)}
              className="bg-red-500 px-3 py-1 m-2 rounded text-white"
            >
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
        {Research &&
          Research.map((rs) => (
            <>
              <Info label="Title" text={rs.title} />
              <Info label="Sponsor" text={rs.sponsor} />
              <Info label="Outcome" text={rs.outcome} />
              <Info label="Amount" text={rs.amount} />
              <Info label="Start" text={rs.start} />
              <Info label="End" text={rs.end} />
              <Info
                label="Document"
                text={
                  <a
                    href={getStaticUrl(rs.doc)}
                    className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                    target="__blank"
                    referrer="noreferrer noopenner"
                  >
                    View Document
                  </a>
                }
              />
            </>
          ))}
        <hr className="my-3" />
        <div className="flex">
          <Link to={`/dashboard/application/sp/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button
              onClick={() => deleteResearch(Research[0]?.id)}
              className="bg-red-500 px-3 py-1 m-2 rounded text-white"
            >
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
        {Thesis &&
          Thesis.map((t) => {
            return (
              <>
                <Info label="Type" text={t.type} />
                <Info label="Candidate Name" text={t.nameOfCandiadate} />
                <Info label="Insitute Name" text={t.institute} />
                <Info label="Year" text={t.regYear} />
                <Info label="Status" text={t.status || "NA"} />
                <Info label="Final Viva" text={t.finalViva} />
                <Info
                  label="Document"
                  text={
                    <a
                      href={getStaticUrl(t.doc)}
                      className="bg-green-500 px-3 py-1 m-2 rounded text-white"
                      target="__blank"
                      referrer="noreferrer noopenner"
                    >
                      View Document
                    </a>
                  }
                />
              </>
            );
          })}
        <hr className="my-3" />
        <div className="flex">
          <Link to={`/dashboard/application/thesis/${appId}/`}>
            <button className="bg-indigo-500 px-3 py-1 m-2 rounded text-white">
              Enter Details
            </button>
          </Link>
          <p>
            <button
              onClick={() => deleteThesis(Thesis[0]?.id)}
              className="bg-red-500 px-3 py-1 m-2 rounded text-white"
            >
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
                  <button
                    onClick={() => deleteReferees(e?.id)}
                    className="bg-red-500 px-3 py-1 m-2 rounded text-white"
                  >
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
