import React from "react";
import ReactDOM from "react-dom";
import { styleObjects } from "../PieceProfileStyle";
import "./CheckBox.scss";

export function CheckBox({screenCase, pieceName, promos, toglePromo }) {
    var checkmark = null;
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
        <div className="customize-promotion-checkbox" style={styleObjects} onClick={() => toglePromo(pieceName)}>
            {checkmark}
        </div>
    );
}

export let test = () => ReactDOM.render(<CheckBox piece="Duke" />, document.getElementById("root"));
