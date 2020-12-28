import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { RangeDisplayBoard } from "./RangeDisplayBoard";
import { smallBoardFontSize as fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "./RangeDisplayTool.jss";
import MediaQuery from "react-responsive/src";

export function RangeDisplayTool({
    theme,
    board,
    screenCase,
    allRanges,
    pieceDefs,
    idDict,
}) {

    const classes = useStyles({ theme: theme, fontSize: screenCase === 'mobile' ? fontSize*1.1 : fontSize });

    return (
        <div className={classes.range_display_rool}>
            <MediaQuery minDeviceWidth={768}>
                <Box className={classes.flex_header}>
                    <Typography className={classes.title}>
                        Range Display
                    </Typography>
                </Box>
            </MediaQuery>
            <RangeDisplayBoard
                theme={theme}
                board={board}
                idDict={idDict}
                pieceDefs={pieceDefs}
                allRanges={allRanges}
                screenCase={screenCase}
            />
        </div>
    );
}
