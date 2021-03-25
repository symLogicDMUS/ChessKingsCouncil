import React, { useReducer } from "react";
import { MiniBoard } from "./MiniBoard";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { reducer } from "./BoardTool.red";
import { useStyles } from "./BoardTool.jss";

export function BoardTool({
    theme,
    board,
    gameType,
    allRanges,
    pieceDefs,
    idDict,
    toggleSecondaryDrawer,
    showProfileOnClick,
}) {
    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? 'wide' : 'thin';

    const [state, dispatch] = useReducer(reducer, {
        rangeBoard: getBinaryBoarAllFalse(),
        selectedSqr: null,
    });

    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.board_tool}>
            <MediaQuery minWidth={960}>
                <Box className={classes.flex_header}>
                    <Typography className={classes.title}>
                        Range Display
                    </Typography>
                </Box>
            </MediaQuery>
            <MiniBoard
                theme={theme}
                screenCase={screenCase}
                gameType={gameType}
                board={board}
                idDict={idDict}
                pieceDefs={pieceDefs}
                allRanges={allRanges}
                parentDispatch={dispatch}
                rangeBoard={state.rangeBoard}
                selectedSqr={state.selectedSqr}
                showProfileOnClick={showProfileOnClick}
                toggleSecondaryDrawer={toggleSecondaryDrawer}
            />
        </div>
    );
}
