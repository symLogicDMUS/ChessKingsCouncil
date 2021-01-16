import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { MiniBoard } from "./MiniBoard";
import MediaQuery from "react-responsive/src";
import { useStyles } from "./BoardTool.jss";
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function BoardTool({
    theme,
    board,
    screenCase,
    allRanges,
    pieceDefs,
    idDict,
}) {

    const classes = useStyles({ theme: theme, fontSize: screenCase === 'mobile' ? fontSize*1.1 : fontSize });

    return (
        <div className={classes.range_display_tool}>
            <MediaQuery minDeviceWidth={768}>
                <Box className={classes.flex_header}>
                    <Typography className={classes.title}>
                        Range Display
                    </Typography>
                </Box>
            </MediaQuery>
            <MiniBoard
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
