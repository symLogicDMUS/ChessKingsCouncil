import React from "react";
import clsx from "clsx";
import {Typography} from "@material-ui/core";
import { useStyles } from "./P.jss";

export function OP({hide}) {
    const classes = useStyles();

    return <Typography
        variant={"inherit"}
        className={clsx(classes.open_parenthesis, {
            [classes.hide]: hide
        })}
    >
        (
    </Typography>;
}

export function CP({hide}) {
    const classes = useStyles();

    return <Typography
        variant={"inherit"}
        className={clsx({
            [classes.hide]: hide
        })}
    >
        )
    </Typography>;
}