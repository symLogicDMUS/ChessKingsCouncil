import {useStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";
import {Typography} from "@material-ui/core";
import React from "react";

export function GameInfoText(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <Typography className={classes.text} paragraph>
            The game name, type, (Standard, Custom or Council), and player type,
            (white, black or test) are listed in the right hand side content on
            larger screens and by clicking the game info icon on smaller
            screens.
        </Typography>
    );
}