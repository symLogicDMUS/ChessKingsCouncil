import React, {useState} from "react";
import {IconButton, SvgIcon} from "@material-ui/core";
import {icons} from "../../styles/icons/top/icons.jss";
import {useStyles} from "./Option.jss"

export function Option({className, clickMethod, icon}) {
    // const classes = useStyles()
    return (
        <IconButton className={className} onClick={clickMethod}>
            <SvgIcon>
                {icons[icon]}
            </SvgIcon>
        </IconButton>
    );
}
