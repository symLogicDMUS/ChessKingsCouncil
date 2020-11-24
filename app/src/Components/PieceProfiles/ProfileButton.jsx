import React from "react";
import {getButtonSize} from "../styles/button/button-size";
import {useStyles} from "./ProfileButton.jss";

export function ProfileButton({buttonType, buttonText, clickMethod, pieceName}) {
    const classes = useStyles()
    return (
        <button
            className={buttonType === 'load' ? classes.profileLoadButton : classes.profileDeleteButton}
            style={getButtonSize(window.screen.availHeight * 0.03)}
            onClick={() => clickMethod(pieceName)}
        >
            {buttonText}
        </button>
    );
}