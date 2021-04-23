import React, {useMemo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {getOffsetRangeBoardDragonExample}
from "./getOffsetRangeBoardDragonExample";

export function OffsetsExample(props) {
    const src = useMemo(() =>
        getOffsetRangeBoardDragonExample({theme: props.theme, color: "W"}), []
    )
    return <Box
        className={clsx(props.classes.sqr_item_area, {
            [props.classes.item3]: true,
        })}
    >
        <Box className={props.classes.sqr_item}>
            <img src={src} className={props.classes.img} alt='example of offsets' />
        </Box>
    </Box>;
}