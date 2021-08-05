import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./Context/GlobalState";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <GlobalProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GlobalProvider>
    </Router>
  </StateProvider>,
  document.getElementById("app")
);

reportWebVitals();
