import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {configs} from "./configs";
import { App } from "./App";

firebase.initializeApp(configs.dev1);

ReactDOM.render(<App />, document.getElementById("root"));