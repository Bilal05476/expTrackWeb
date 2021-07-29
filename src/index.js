import React from "react";
import ReactDOM from "react-dom";
// import Exp from "./Exp";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./Context/GlobalState";

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById("app")
);

reportWebVitals();
