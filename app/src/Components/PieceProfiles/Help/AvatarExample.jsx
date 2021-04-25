import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {dragonSrcStrWhite} from "./dragonSrcStr";

export function AvatarExample(props) {
    return <Box
        className={clsx(props.classes.sqr_item_area, {
            [props.classes.item1]: true,
            [props.classes.float]: true,
        })}
    >
        <Box className={props.classes.sqr_item}>
            <img src={dragonSrcStrWhite} className={props.classes.img} alt='image of a white dragon' />
        </Box>
    </Box>;
}