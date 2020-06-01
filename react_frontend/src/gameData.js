import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

let dataDict = null;

export function getGameData(gameName) {
    return dataDict[gameName]
}

export async function start() {

    if (dataDict === null) {
        let response = await fetch('/get_data_dict')
        dataDict = await response.json()    
    }
    
    ReactDOM.render(<App dataDict={dataDict} />, document.getElementById('root'))
}