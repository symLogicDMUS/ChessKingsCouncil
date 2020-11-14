import React from "react";
import ReactDOM from "react-dom";
import { styleObjects } from "../CustomizeStyle";
import "./CheckBox.scss";

export function CheckBox({ screenCase, pieceName, promos, toglePromo }) {
    let checkmark = null;
    if (promos.includes(pieceName)) {
        checkmark = (
            <img
                src="/Images/checkmark/silver-checkmark.svg"
                className="customize-promotion-checkbox-checkmark"
                alt="promotion choice checkmark"
            />
        );
    }
    return (
        <div
            className="checkbox-grid-item"
            // style={styleObjects[screenCase]["PromoCheckbox"]()}
            onClick={() => toglePromo(pieceName)}
        >
            <div className="customize-promotion-checkbox">{checkmark}</div>
        </div>
    );
}

//export let test = () => ReactDOM.render(<CheckBox piece="Duke" />, document.getElementById("root"));
