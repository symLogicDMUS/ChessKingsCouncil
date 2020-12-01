import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import {PlayAsButton} from "./PlayAsButton";
import { CheckBox } from "../../Reuseables/CheckBox";
import { useStyles } from "./PlayAs.jss";
import "./PlayAs.scss";

export function PlayAs({ loadNewStandard }) {
    let [playerType, updatePlayerType] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        document.body.className = "play-as-body";
    });

    const update = (newPlayerType) => {
        if (newPlayerType === playerType) {
            updatePlayerType(null);
        } else {
            updatePlayerType(newPlayerType);
        }
    };

    return (
        <>
            <NavBar currentPage="PlayAs" unsavedChanges={false} />
            <img
                src="/Images/text-labels/play-as.svg"
                alt="title for picking to play as white, black, or test"
                className={classes.title}
            />
            <CheckBox
                className={classes.test}
                fontSize={window.screen.availHeight*0.01}
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                clickMethod={update}
                clickValue="Test"
                labelText="Test"
                checkmarkState={playerType === "Test"}
            />
            <CheckBox
                className={classes.white}
                fontSize={window.screen.availHeight*0.01}
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                clickMethod={update}
                clickValue="White"
                labelText="White"
                checkmarkState={playerType === "White"}
            />
            <CheckBox
                className={classes.black}
                fontSize={window.screen.availHeight*0.01}
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                clickMethod={update}
                clickValue="Black"
                labelText="Black"
                checkmarkState={playerType === "Black"}
            />
            <PlayAsButton selected={playerType} accept={() => loadNewStandard(playerType)} />
        </>
    );
}

export default PlayAs;
