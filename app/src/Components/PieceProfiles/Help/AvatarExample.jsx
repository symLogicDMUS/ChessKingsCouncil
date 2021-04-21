import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {dragonSrcStrWhite} from "./dragonSrcStr";
import { useStyles } from "./RangeBoardExample.jss";

export function AvatarExample(props) {
    const classes = useStyles({theme: props.theme});
    return <Box
        className={clsx(props.classes.sqr_item_area, {
            [props.classes.item1]: true,
        })}
    >
        <Box className={props.classes.sqr_item}>
            <img src={dragonSrcStrWhite} className={classes.img} alt='image of a white dragon' />
        </Box>
    </Box>;
}