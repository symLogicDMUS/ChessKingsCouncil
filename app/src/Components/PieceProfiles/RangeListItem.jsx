import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./RangeListItem.jss";

export function RangeListItem({
    theme,
    rangeText,
    onClick,
}) {
    const classes = useStyles({ theme });

    return (
        <Typography
            className={classes.range_list_item}
            onClick={onClick}
        >
            {rangeText}
        </Typography>
    );
}
