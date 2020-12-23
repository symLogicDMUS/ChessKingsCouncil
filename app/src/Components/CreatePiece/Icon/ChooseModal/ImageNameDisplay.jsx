import React from "react";
import {fontSize} from "../../../styles/fontSize.jss";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./ImageNameDisplay.jss";


export function ImageNameDisplay({theme, hoverName, selectedName}) {
    /**
     * hover_name: name of the image that mouse is currently hovering over
     * selected_name: name of the last image that mouse clicked on.
     */
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <>
            <Typography className={classes.selected_name}>{selectedName}</Typography>
            <Typography className={classes.hover_name}>{hoverName}</Typography>
        </>);
}