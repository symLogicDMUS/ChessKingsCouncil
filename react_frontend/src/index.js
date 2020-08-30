import React from "react"
import ReactDOM from "react-dom";
import {App} from "./App";
import {getData} from "./API";


getData('symLogicDMUS').then( ([dataDict, defs]) => {
   ReactDOM.render(<App dataDict={dataDict} username="symLogicDMUS" defs={defs} />, document.getElementById('root'))
});


// tests:
// import {test} from "./Components/GameRoot/Components/TestAi/TestAI";
// test();