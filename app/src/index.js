import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { configs } from "./configs";
import App from "./App";

firebase.initializeApp(configs.prod);

ReactDOM.render(<App />, document.getElementById("root"));
