import React from "react";
import {v4 as uuidv4} from "uuid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {getOffsetRangeBoardKnightExample} from
        "./getOffsetRangeBoardKnightExample";
import {useStyles} from "./ProfileHelpText.jss";

export function ProfileHelpTextAlt(props) {
    const classes = useStyles({theme: props.theme});
    return <div>
        <Typography key={uuidv4()} paragraph className={classes.text}>
            Offsets are jumps: a Knight moves in offsets of 2 squares
            horizontal and 1 square vertical, or 1 square vertical and 2
            squares horizontal.
        </Typography>
        <Box className={classes.profile_help_text}>
            <img
                src={getOffsetRangeBoardKnightExample({theme: props.theme, color: "W"})}
                className={classes.range_board_example}
                alt="offset board for white Docker"
            />
            <img
                src={getOffsetRangeBoardKnightExample({theme: props.theme, color: "B"})}
                className={classes.range_board_example}
                alt="offset board for black Docker"
            />
        </Box>
    </div>;
}