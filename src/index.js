import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fontawesome-free-5.9.0-web/css/all.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
function Mytemplate() {
  return <App />;
}

ReactDOM.render(<Mytemplate />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
