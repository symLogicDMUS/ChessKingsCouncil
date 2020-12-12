import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { App } from "./App";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvvXnaRCFAQIYRyN0C-Q8KlUXFyPy9_bI",
    authDomain: "custom-chess.firebaseapp.com",
    databaseURL: "https://custom-chess-default-rtdb.firebaseio.com",
    projectId: "custom-chess",
    storageBucket: "custom-chess.appspot.com",
    messagingSenderId: "993983012037",
    appId: "1:993983012037:web:8ddadd164787c38051e4ac",
    measurementId: "G-67GNLGHH93"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
