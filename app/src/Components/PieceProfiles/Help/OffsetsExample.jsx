import Box from "@material-ui/core/Box";
import clsx from "clsx";
import React, {useMemo} from "react";
import {getOffsetRangeBoardDragonExample} from "./getOffsetRangeBoardDragonExample";
import {useStyles} from "./RangeBoardExample.jss";

export function OffsetsExample(props) {
    const classes = useStyles({theme: props.theme});
    const src = useMemo(() =>
        getOffsetRangeBoardDragonExample({theme: props.theme, color: "W"}), []
    )
    return <Box
        className={clsx(props.classes.sqr_item_area, {
            [props.classes.item3]: true,
        })}
    >
        <Box className={props.classes.sqr_item}>
            <img src={src} className={classes.img} alt='example of offsets' />
        </Box>
    </Box>;
}