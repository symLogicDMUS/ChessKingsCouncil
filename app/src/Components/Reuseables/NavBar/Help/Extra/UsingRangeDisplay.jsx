import React from "react";
import {Typography} from "@material-ui/core";
import { useStyles } from "./GifDiagrams.jss";

export function UsingRangeDisplay(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <div className={classes.flex_row}>
            <img
                src={"/Images/gif/range display.gif"}
                alt='demonstration of range display tool'
                className={classes.gif}
            />
            <Typography className={classes.steps2}>
                Click any piece including enemy pieces on the Range Display tool, and the squares that piece can move to
                will be highlighted, and a profile for that piece will be displayed. To disable the profile, uncheck the
                Show Profile checkbox in the settings on the nav bar.
            </Typography>
        </div>
    );
}