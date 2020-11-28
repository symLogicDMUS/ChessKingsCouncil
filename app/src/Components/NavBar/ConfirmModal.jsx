import React from "react";
import ReactDOM from "react-dom";
import { stylesObjects } from "./Help/HelpStyle";
import {styles} from "./ConfirmModal.jss";

export function ConfirmModal({screenCase, text, yesClick, noClick }) {
    return (
        <div className={this.props.classes.confirm_window}>
            <div className={this.props.classes.confirm_text}>{text}</div>
            <div
                className={this.props.classes.yes_button}
                style={stylesObjects[screenCase]["YesNoButton"](stylesObjects[screenCase]["Modal"]()).yes}
                onClick={yesClick}
            >
                Yes
            </div>
            <div
                className={this.props.classes.no_button}
                style={stylesObjects[screenCase]["YesNoButton"](stylesObjects[screenCase]["Modal"]()).no}
                onClick={noClick}
            >
                No
            </div>
        </div>
    );
}

export let test = () => ReactDOM.render(<ConfirmModal />, document.getElementById("root"));
