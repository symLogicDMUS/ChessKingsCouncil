import React from "react";
//import "./CustomiseOk.scss";

export function Ok({className, screenCase, accept }) {
    return (
        <button className={className} onClick={accept} className={}>
            Ok
        </button>
    );
}
