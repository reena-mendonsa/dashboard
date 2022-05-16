import React from "react";
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import "./style.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from "./Components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
