import React, {useMemo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {getExampleRangeBoardImgStr} from "./getExampleRangeBoardImgStr";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./ProfileHelpText.jss";

export function RangeExample({pieceImgStr, range, rangeType, header, float, item1, item2, item3, theme, className}) {
    const classes = useStyles({theme: theme});

    const board_img = useMemo(() =>
        getExampleRangeBoardImgStr(theme, pieceImgStr, range, rangeType), []
    )
    return (
        <Box className={clsx(classes.sqr_item_area, {
            [classes.item1]: item1,
            [classes.item2]: item2,
            [classes.item3]: item3,
            [classes.float]: float,
            [className]: className,
        })}>
            {!!header && (
                <Box className={classes.sqr_item_header}>
                    <Typography variant='caption'>{header}</Typography>
                </Box>
            )}
            <img
                src={board_img}
                className={classes.img}
                alt='image of a piece on the board with the squares that are part of its range highlighted.'
            />
        </Box>
    )
}