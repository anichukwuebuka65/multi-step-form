import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FormContextProvider from "./components/context/Context";
import App from "./App";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </BrowserRouter>
  //</React.StrictMode>
);
