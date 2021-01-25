import React from "react";
import {Typography} from "@material-ui/core";
import {getColorName} from "../../helpers/getColorName";
import {useStyles} from "./ProfileRangeHeader.jss";

export function ProfileRangeHeader({theme, color, rangeType}) {
    const classes = useStyles({theme});
    return (
        <Typography className={classes.header}>
            {getColorName(color)} {rangeType}
        </Typography>
    );
}