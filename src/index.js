import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom"
import { LastLocationProvider } from "react-router-last-location";

import App from "./App";
import store from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <LastLocationProvider>
        <Route path = "/" component = {App} />
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
