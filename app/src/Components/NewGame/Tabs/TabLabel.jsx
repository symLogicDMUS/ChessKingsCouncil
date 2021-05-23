import React from "react";
import clsx from "clsx";
import {CP, OP} from "./P";
import {Typography} from "@material-ui/core";
import { useStyles } from "./TabLabel.jss";

export function TabLabel(props) {
    const {addOn, children, className, ...other} = props;
    const classes = useStyles();
    return (
        <Typography className={clsx(classes.tab_label, {[className]: !!className})} {...other}>
            {children}<OP hide={!addOn}/><div className={classes.tab_added}>{" "}{addOn}</div><CP hide={!addOn}/>
        </Typography>
    );
}