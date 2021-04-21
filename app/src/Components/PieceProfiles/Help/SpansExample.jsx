import React, {useMemo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {getSpanRangeBoardDragonExample}
        from "./getSpanRangeBoardDragonExample";
import { useStyles } from "./RangeBoardExample.jss";

export function SpansExample(props) {
    const classes = useStyles({theme: props.theme});
    const src = useMemo(() =>
        getSpanRangeBoardDragonExample({theme: props.theme, color: "W"}), []
    )
    return <Box
        className={clsx(props.classes.sqr_item_area, {
            [props.classes.item2]: true,
        })}
    >
        <Box className={props.classes.sqr_item}>
            <img src={src} className={classes.img} alt='example of spans' />
        </Box>
    </Box>;
}