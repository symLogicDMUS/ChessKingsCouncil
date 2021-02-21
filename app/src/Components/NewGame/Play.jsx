import React from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {MuiButton} from "../Reuseables/MuiButton";
import {invalids} from "../helpers/invalids";
import {icon, useStyles} from "./Play.jss";

export function Play(props) {
    const classes = useStyles({theme: props.theme});

    const isDisabled = !(
        props.playerType &&
        props.gameType &&
        props.gameName !== "" &&
        invalids.every(props.predicate)
    )

    return (
        <div className={isDisabled ? classes.root_disabled : classes.root_enabled}>
            <MuiButton
                onClick={props.onClick}
                classesObj={{root: classes.play_button}}
                endIcon={<ArrowForwardIcon className={classes.icon}/>}
                isDisabled={isDisabled}
                variant="contained"
                theme={props.theme}
            >
                Play
            </MuiButton>
        </div>
    );
}

