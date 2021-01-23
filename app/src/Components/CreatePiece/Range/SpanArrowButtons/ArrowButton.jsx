import React from "react";
import Box from "@material-ui/core/Box";
import {IconButton} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../../styles/icons/top/icons.jss";
import {useStyles} from "./ArrowButton.jss"

export function ArrowButton({angle, isActive, toggleSpan, theme}) {
    const classes = useStyles({angle: angle, theme: theme})
    return (
        <Box
            onClick={() => toggleSpan(angle)}
            className={isActive ? classes.container_selected : classes.container_normal}
        >
            <IconButton className={classes.arrow_button}>
                <SvgIcon className={classes.vector}>
                    {icons[angle]}
                </SvgIcon>
            </IconButton>
        </Box>
    );
}