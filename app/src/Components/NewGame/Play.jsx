import React from "react";
import {MuiButton} from "../Reuseables/Clickables/MuiButton";
import {invalids} from "../helpers/invalids";
import {useStyles} from "./Play.jss";

export function Play(props) {
    const classes = useStyles({theme: props.theme});

    const isDisabled = !(
        props.playerType &&
        props.gameType &&
        props.gameName !== "" &&
        invalids.every(props.predicate)
    )

    return (
            <MuiButton
                onClick={props.onClick}
                classesObj={{root: classes.play_button}}
                isDisabled={isDisabled}
                variant="contained"
                theme={props.theme}
            >
                Play
            </MuiButton>

    );
}

