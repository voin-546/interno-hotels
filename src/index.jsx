import React from "react";
import ReactDOMClient from "react-dom/client";
import "./css/HomePage.scss";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const app = ReactDOMClient.createRoot(document.querySelector("#root"));
app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
