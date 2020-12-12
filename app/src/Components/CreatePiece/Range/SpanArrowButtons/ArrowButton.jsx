import React from "react";
import {useStyles} from "./ArrowButton.jss"
import {IconButton} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import {themes} from "../../../styles/themes.jss";
import {icons} from "../../../styles/icons/top/icons.jss";

export function ArrowButton({angle, isActive, toggleSpan, theme}) {
    const classes = useStyles({angle: angle, theme: theme})
    return (
        <div
            onClick={() => toggleSpan(angle)}
            className={isActive ? classes.container_selected : classes.container_normal}
        >
            <IconButton className={classes.arrow_button}>
                <SvgIcon className={classes.vector}>
                    {icons[angle]}
                </SvgIcon>
            </IconButton>
        </div>
    );
}