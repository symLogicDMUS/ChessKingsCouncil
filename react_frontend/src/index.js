
import React from "react"
import ReactDOM from "react-dom";
import {App} from "./App";
import {getData} from "./API";
import {tests} from "./tests";

getData().then( ([dataDict, defs]) => {
    ReactDOM.render(<App dataDict={dataDict} defs={defs} />, document.getElementById('root'))
});

<<<<<<< Updated upstream
//tests(1)
=======
//tests:
// import {test} from "./Components/NewGame/Customize/ProfileItem/ProfileItem";
// test();
>>>>>>> Stashed changes
