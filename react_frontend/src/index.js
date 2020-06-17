import React from "react"
import ReactDOM from "react-dom";
import {App} from "./App";
import {getData} from "./API";

getData().then( ([dataDict, defs]) => {
    ReactDOM.render(<App dataDict={dataDict} defs={defs} />, document.getElementById('root'))
});

//import {test} from "./Components/CreatePiece/CreatePiece";
//test();