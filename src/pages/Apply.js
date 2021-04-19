import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import SecondaryInput from "../components/SecondaryInput";

const initState = {
  dept: "",
  school: "",
  check: false,
};

export default function Apply() {
  const [job, setJob] = useState(initState);
  const [jobDetails, setJobDetails] = useState({
    title: "",
    adNo: "",
    docLink: "",
    desc: "",
  });
  const alert = useAlert();
  let history = useHistory();

  const { jobId } = useParams();

  const resetForm = () => {
    setJob({
      dept: "",
      school: "",
      check: false,
    });
  };

  useEffect(() => {
    axios
      .get(`/jobs/getById/${jobId}`)
      .then((res) => {
        setJobDetails(res.data.job);
      })
      .catch((err) => alert.error(err));
  }, []);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const handleChangeCheck = (e) => {
    setJob({ ...job, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!job.school || !job.dept) {
      alert.error("Please select both School and the corresponding department!");
      return;
    }

    if (!job.check) {
      alert.error("Please check the confirm checkbox to proceed!");
      return;
    }

    try {
      const { adNo, id } = jobDetails;
      const data = await axios.post("/applications/create", {
        adNo: adNo,
        jobId: id,
        ...job,
      });
      alert.success("Job created successfully!");
      history.push(
        `/dashboard/application/personal/${data.data.application.id}`
      );
    } catch (error) {
      console.log("ee", error);
      alert.error(`Something went wrong!`);
      if (error.response.data.errors) {
        error.response.data.errors.forEach((e) => alert.info(`${e.message}.`));
      }
    }
  };

  const { title, adNo, desc, docLink } = jobDetails;
  const { dept, school } = job;
  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        Apply
      </div>
      <form onSubmit={handleSubmit}>
        <div className="editor mx-auto mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <SecondaryInput
            name="title"
            value={title}
            placeholder="Job Title"
            disabled={true}
          />

          <select
            name="school"
            value={school}
            onChange={handleChange}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">Select School</option>
            <option value="soc">School of Computing</option>
            <option value="soe">School of Electronics</option>
            <option value="sobs">School of Basic Sciences</option>
          </select>

          <select
            name="dept"
            value={dept}
            onChange={handleChange}
            required={true}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          >
            <option value="">Select Department</option>
            {school === "soc" && (
              <>
                <option value="cs">CSE</option>
                </>
            )}
            {school === "soe" && (
              <>
                <option value="ec">ECE</option>
              </>
            )}
            {school === "sobs" && (
              <>
                <option value="bt">Bio-Technology</option>
                <option value="ch">Chemistry</option>
                <option value="en">English</option>
                <option value="ma">Mathematics</option>
                <option value="mg">Management</option>
                <option value="ph">Physics</option>
                
              </>
            )}
          </select>

          <textarea
            defaultValue={desc}
            className="description bg-gray-100 sec p-3 mb-4 h-40 border border-gray-300 outline-none"
            disabled
          ></textarea>

          <SecondaryInput
            name="adNo"
            value={adNo}
            type="text"
            placeholder="Job Ad Number"
            disabled={true}
          />

          <p className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none">
            <a href={docLink} target="__blank">
              Advertisement Link
            </a>
          </p>

          <label class="inline-flex items-center mb-3 mr-3">
            <input
              type="checkbox"
              name="check"
              class="form-checkbox h-5 w-5 text-red-600"
              onChange={handleChangeCheck}
            />
            <span class="ml-2 text-gray-700">
              I have gone through the detailed advertisement.
            </span>
          </label>

          <div className="icons flex text-gray-500 m-2"></div>
          <div className="buttons flex">
            <div
              onClick={resetForm}
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            >
              Reset
            </div>
            <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
              <button type={"submit"}>Apply</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
