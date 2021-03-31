import React,{useEffect,useState} from "react";
import AppLayout from "./AppLayout";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import SecondaryInput from "../../components/SecondaryInput";

const initState = {
  feeTid:"",
  feeDate: "0",
  feeReciept: "",
  appId: "",
};

export default function FeeDetails() {
  const { appId } = useParams();
  const [state, setState] = useState(initState);
  const alert = useAlert();
  const {job,setJob} = useState({})
  useEffect(()=>{
    
    axios
    .get(`/applications/${appId}/`)
    .then(({ data }) => {
      console.log(data)
      if(data.app.refNum!="NIL"){
        setState({...state,name:data.app.PersonalDetail.name,appNum:data.app.refNum});
        axios.get(`/jobs/getById/${data.app.jobId}`).then(res=>{
          setJob(res.data.job)
        }).catch(err=>{
          console.log(err.response)
        })
      }
      else{
        alert.error("Plz Lock your application before proceeding!")
      }
    })
    .catch((err) => {
      alert.error(err?.response?.data?.msg);
    });
  })
  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  };
  const onFileChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let [key, value] of Object.entries(state)) {
      if(key==="name"||key==="appNum")
        continue;
      data.append(key, value);
    }

    axios
      .post(`/applications/${appId}/feeDetails`, data, {})
      .then((res) => {
        alert.success(res.data.msg);
      })
      .catch((err) => {
        alert.error(err.response.data.msg);
        if (err.response.data.errors) {
          err.response.data.errors.map((e) => alert.error(e.message));
        }
      });
  };
  // const Gen=()=>{
  //   window.open(`http://localhost:4000/applications/${appId}/gpdf`).then((res)=>{
  //     console.log(res)
  //   }).catch((err)=>{
  //     alert.error(err.response.data.msg);
  //   })
  // }
  return (
    <div>
      <AppLayout>
        <form id="lockform">
          <div className="editor w-screen mb-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
           {/* <h1 className="text-2xl text-indigo-600 mb-4">Fee Details</h1>  */}
          {
            state.appNum?<>
            <h2 className="text-2xl text-indigo-600 mb-4">Fee Payment Instructions</h2>
            <p style={{margin:"5px"}}>Step 1: Go to <a className="text-blue-600" style={{cursor:"pointer"}} onClick={()=>window.open("https://www.onlinesbi.com/sbicollect/icollecthome.htm")}>SBI Collect</a>.</p>
            <p style={{margin:"5px"}}>Step 2: Check “I have read and accepted the terms and conditions stated above”
              and click Proceed.</p>
            <p style={{margin:"5px"}}>
            Step 3: Select “State of Corporate / Institution” : Himachal Pradesh
Type of Corporate / Institution : Educational Institutions
            </p>
            <p style={{margin:"5px"}}>Step 4: Select Educational Institutions Name : IIITU</p>
            <p style={{margin:"5px"}}>Step 5: Select Payment Category : Recruitment Fees</p>
            <p style={{margin:"5px"}}>Step 6: Enter the details as:</p>
              <div style={{marginLeft:"3vw"}}>
                <p style={{margin:"5px"}}>Name: {state?.name}</p>
                <p style={{margin:"5px"}}>Adv No.: For later</p>
                <p style={{margin:"5px"}}>Post Applied for: {job?.title}</p>
                <p style={{margin:"5px"}}>Application No.: {state?.appNum} </p>
                <p style={{margin:"5px"}}>Fee: 100</p>
              </div>
              <p style={{margin:"5px"}}>Step 7: Download the fee receipt.</p>
              <h1 className="text-2xl text-indigo-600 mb-4 mt-4">Fee Details</h1> 
              <form onSubmit={onSubmit}>
                  <label htmlFor="feeTid" className="text-sm mb-1">
                  Tansition Id <span className="text-red-500">*</span>
                </label>
                <SecondaryInput
                  name="feeTid"
                  id="feeTid"
                  value={state.feeTid}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Tansition Id *"
                  required={true}
                />
                <label htmlFor="feeDate" className="text-sm mb-1">
                  Payment Date <span className="text-red-500">*</span>
                </label>
                <SecondaryInput
                  name="feeDate"
                  id="feeDate"
                  value={state.feeDate}
                  onChange={onChangeHandler}
                  type="date"
                  placeholder="PaymentDate *"
                  required={true}
                />
                <label htmlFor="feeReciept" className="text-sm mb-1">
                  Payment Proof
                <span className="text-red-500"> *</span>
              </label>
              <SecondaryInput
                onChange={onFileChangeHandler}
                id="feeReciept"
                name="feeReciept"
                type="file"
                required={true}
              />
              <button
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-600"
                type={"submit"}
              >
                      Add
              </button>
          </form>
          {/* <button  className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-600" onClick={Gen}>Generate Pdf</button> */}
           </> :<></>
          }
          
          </div>
         
        </form>
      </AppLayout>
    </div>
  );
}
