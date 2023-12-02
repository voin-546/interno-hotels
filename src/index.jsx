import React from "react";
import ReactDOMClient from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop"
const app = ReactDOMClient.createRoot(document.querySelector(".app"));
app.render(
  <BrowserRouter>
  <ScrollToTop/>
    <App/>
  </BrowserRouter>
);
