import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../Reuseables/NavBar/Help/HelpText.jss";

export function GameImageGridExplained(props) {
    const classes = useStyles({theme: props.theme});
    return <Typography
        paragraph={true}
        key='load-game-help-text'
        className={classes.text}
    >
        <p>
            Each game has an image of the current position of the board, and the name under the image. You can turn the
            names on and off with the Show Names checkbox. Currently, all game Categories (Standard, Custom, and
            Council)
            are together in 1 group.
        </p>
    </Typography>;
}