import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import EscapeContainer from "./EscapeContainer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EscapeContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
