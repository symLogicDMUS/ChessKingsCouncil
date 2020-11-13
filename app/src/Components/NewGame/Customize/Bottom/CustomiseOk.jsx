import React from "react";
import {styleObjects} from "../CustomizeStyle";
import "./CustomiseOk.scss";

export function Ok({screenCase, accept }) {
    return (
        <button className="customize-ok" onClick={accept} style={styleObjects[screenCase]['OkButton']()}>
            Ok
        </button>
    );
}
