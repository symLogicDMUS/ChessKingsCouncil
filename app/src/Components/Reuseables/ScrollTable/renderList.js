import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export function renderList(inView, numRows, classes) {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        if ((i + 1) % 2 === 0) {
            rows.push(
                <Box className={classes.list_item_even} key={i}>
                    <Typography
                        className={classes.text}
                        noWrap={true}
                    >
                        {inView[i]}
                    </Typography>
                </Box>
            )
        } else {
            rows.push(
                <Box className={classes.list_item_odd} key={i}>
                    <Typography
                        className={classes.text}
                        noWrap={true}
                    >
                        {inView[i]}
                    </Typography>
                </Box>
            )
        }
    }
    return rows;
}