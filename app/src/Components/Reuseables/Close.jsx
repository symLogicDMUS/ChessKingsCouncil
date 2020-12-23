import React, {useState} from "react";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {useStyles} from "./Close.jss";

export function Close({onClick, style, theme, size}) {

    const classes = useStyles({style: style, theme: theme})

    return (
        <IconButton onClick={onClick} aria-label="close" className={classes.close} size={size}>
            <CloseIcon fontSize="inherit" className={classes.icon}/>
        </IconButton>
    )
}