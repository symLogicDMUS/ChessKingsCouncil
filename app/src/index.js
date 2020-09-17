import React from "react"
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {getDataDict} from "./API/getDataDict";
// import {App} from "./App";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSxIszSA63IMqXHfrzh29uVlrWUlBPf0k",
    authDomain: "chess-king-council.firebaseapp.com",
    databaseURL: "https://chess-king-council.firebaseio.com",
    projectId: "chess-king-council",
    storageBucket: "chess-king-council.appspot.com",
    messagingSenderId: "154589429320",
    appId: "1:154589429320:web:6216e373d165455f96a27d",
    measurementId: "G-Y7XH9D79SR"
};

firebase.initializeApp(firebaseConfig);

// getDataDict('symLogicDMUS').then(([gameNames]) => {
//     ReactDOM.render(<div>{gameNames}</div>, document.getElementById('root'))
// })


// firebase.database().ref().child('game names').child('symLogicDMUS').once('value').then(function(snapshot) {
//     var gameNames = (snapshot.val())
//     ReactDOM.render(<div>{gameNames}</div>, document.getElementById('root'))
// })



// ReactDOM.render(<App username="symLogicDMUS"/>, document.getElementById('root'))