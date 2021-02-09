import React from "react";
import {v4 as uuidv4} from "uuid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {getOffsetRangeBoardKnightExample} from "./getOffsetRangeBoardKnightExample";
import { useStyles } from "../../CreatePiece/Help/ImgWindowExample.jss";

export function KnightRangeExamples(props) {
    const classes = useStyles({theme: props.theme});
    return <div>
        <Typography key={uuidv4()} paragraph className={classes.text}>
            Offsets are jumps: a Knight moves in offsets of 2 squares
            horizontal and 1 square vertical, or 1 square vertical and 2
            squares horizontal.
        </Typography>
        <Box className={classes.flexbox}>
            <img
                src={getOffsetRangeBoardKnightExample({theme: props.theme, color: "W"})}
                className={classes.img_window1}
                alt="offset board for white Knight"
            />
            <img
                src={getOffsetRangeBoardKnightExample({theme: props.theme, color: "B"})}
                className={classes.img_window2}
                alt="offset board for black Knight"
            />
        </Box>
    </div>;
}