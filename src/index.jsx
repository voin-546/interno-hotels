import React from "react";
import ReactDOMClient from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const app = ReactDOMClient.createRoot(document.querySelector(".app"));
app.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
