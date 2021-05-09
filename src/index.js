import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "http://65.1.105.247/";
axios.defaults.baseURL = API_URL
axios.defaults.withCredentials = true;

console.log(axios.defaults.baseURL);

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
};


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
