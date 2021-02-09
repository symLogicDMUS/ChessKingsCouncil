import React from "react";
import Box from "@material-ui/core/Box";
import {IconButton} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../styles/icons/top/icons.jss";
import {useStyles} from "./ArrowButtomExample.jss"

export function ArrowButtonExample({angle, theme}) {
    const classes = useStyles({angle: angle, theme: theme})
    return (
        <Box
            className={classes.container}
        >
            <IconButton className={classes.arrow_button}>
                <SvgIcon className={classes.vector}>
                    {icons[angle]}
                </SvgIcon>
            </IconButton>
        </Box>
    );
}