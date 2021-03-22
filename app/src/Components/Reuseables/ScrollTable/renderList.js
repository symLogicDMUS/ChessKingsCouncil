import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

export function renderList(inView, numRows, classes, textClassProp, listItemClassProp) {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(
            <Box
                className={
                    clsx(classes.list_item, {
                        [classes.list_item_edges]: true,
                        [classes.list_item_even]: (i + 1) % 2 === 0,
                        [classes.list_item_even]: (i + 1) % 2 !== 0,
                        [listItemClassProp]: listItemClassProp,
                    })}
                key={i}
            >
                <Typography
                    noWrap
                    className={clsx(classes.text, {
                        [textClassProp] : textClassProp,
                    })}
                >
                    {inView[i]}
                </Typography>
            </Box>
        )
    }
    return rows;
}