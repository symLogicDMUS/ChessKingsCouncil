import React from "react";
import Typography from "@material-ui/core/Typography";
import {RangeDisplayBoard} from "./RangeDisplayBoard";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./RangeDisplayTool.jss";

export function RangeDisplayTool({theme, board, allRanges, pieceDefs, idDict}) {

    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
            <div className={classes.range_display_rool}>
                <Typography className={classes.title}>Range Display</Typography>
                <RangeDisplayBoard
                    theme={theme}
                    board={board}
                    idDict={idDict}
                    pieceDefs={pieceDefs}
                    allRanges={allRanges}
                />
            </div>
    );
}
