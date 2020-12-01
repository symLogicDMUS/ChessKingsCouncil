import React from "react";
import { useStyles } from "./ImageNameDisplay.jss";
import * as PropTypes from "prop-types";
export function ImageNameDisplay({hoverName, selectedName}) {
    /**
     * hover_name: name of the image that mouse is currently hovering over
     * selected_name: name of the last image that mouse clicked on.
     */
    const classes = useStyles()
    return <>
        <div className={classes.hover_name}>
            <div className={classes.text}>{hoverName}</div>
        </div>
        <div className={classes.selected_name}>{selectedName}</div>
    </>;
}

ImageNameDisplay.propTypes = {
    classes: PropTypes.any,
    hoverText: PropTypes.any,
    imgNameChoice: PropTypes.any
};