import React, {useState} from "react";
import {IconButton, SvgIcon} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {themes} from "../../styles/themes.jss";
import {icons} from "../../styles/icons/top/icons.jss";
import {fontSize} from "../fontSize.jss";
import {useStyles} from "./Option.jss";

export function Option({clickMethod, iconType, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize})
    return (
        <Button className={classes.option} >
            <IconButton className={classes.button} classes={{label: classes.label}} onClick={clickMethod}>
                <SvgIcon className={classes.icon}>
                    {icons[iconType](themes[theme].button_text)}
                </SvgIcon>
                <div className={classes.text}>{iconType}</div>
            </IconButton>
        </Button>
    );
}
