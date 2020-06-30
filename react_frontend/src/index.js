
import React from "react"
import ReactDOM from "react-dom";
import {App} from "./App";
import {getData} from "./API";
import {tests} from "./tests";

getData().then( ([dataDict, defs]) => {
    ReactDOM.render(<App dataDict={dataDict} defs={defs} />, document.getElementById('root'))
});

//tests(1)
