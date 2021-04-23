import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

/**
 * Note: This method takes advantage of JavaScript's handling of the undefined object. When inView[i] is undefined,
 * its parent will render an empty row.
 */
export function renderList(inView, numRows, classes, textClassName, listItemClassName) {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(
            <Box
                className={
                    clsx(classes.list_item, {
                        [classes.list_item_even]: (i + 1) % 2 === 0,
                        [classes.list_item_odd]: (i + 1) % 2 !== 0,
                        [listItemClassName]: listItemClassName,
                    })}
                key={i}
            >
                <Typography
                    noWrap
                    variant='subtitle1'
                    className={!!textClassName ? textClassName : null}
                >
                    {inView[i]}
                </Typography>
            </Box>
        )
    }
    return rows;
}