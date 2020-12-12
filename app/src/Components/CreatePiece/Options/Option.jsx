import React, {useState} from "react";
import {IconButton, SvgIcon} from "@material-ui/core";
import {icons} from "../../styles/icons/top/icons.jss";
import {useStyles} from "./Option.jss"

export function Option({clickMethod, icon}) {
    const classes = useStyles()
    return (
        <IconButton className={classes.option} classes={{ label: classes.label }} onClick={clickMethod}>
            <SvgIcon className={classes.icon}>
                {icons[icon]}
            </SvgIcon>
            <div>{icon.toUpperCase()}</div>
        </IconButton>
    );
}
