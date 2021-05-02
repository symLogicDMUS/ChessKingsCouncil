import React, { useReducer } from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { reducer } from "./RangeAnalysis.red";
import { useStyles } from "./RangeAnalysis.jss";

const AnalysisBoard = React.lazy(() => import('./AnalysisBoard'));

function RangeAnalysis({
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
    const screenCase = isWide ? "wide" : "thin";

    const [state, dispatch] = useReducer(reducer, {
        rangeBoard: getBinaryBoarAllFalse(),
        selectedSqr: null,
    });

    const classes = useStyles({ theme: theme });

    return (
        <>
            <MediaQuery maxWidth={960}>
                <AnalysisBoard
                    theme={theme}
                    board={board}
                    idDict={idDict}
                    gameType={gameType}
                    pieceDefs={pieceDefs}
                    allRanges={allRanges}
                    screenCase={screenCase}
                    parentDispatch={dispatch}
                    rangeBoard={state.rangeBoard}
                    selectedSqr={state.selectedSqr}
                    showProfileOnClick={showProfileOnClick}
                    toggleSecondaryDrawer={toggleSecondaryDrawer}
                />
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <span className={classes.board_tool}>
                    <Box className={classes.flex_header}>
                        <Typography className={classes.title}>
                            Range Analysis Board
                        </Typography>
                    </Box>
                    <AnalysisBoard
                        theme={theme}
                        board={board}
                        idDict={idDict}
                        gameType={gameType}
                        pieceDefs={pieceDefs}
                        allRanges={allRanges}
                        screenCase={screenCase}
                        parentDispatch={dispatch}
                        rangeBoard={state.rangeBoard}
                        selectedSqr={state.selectedSqr}
                        showProfileOnClick={showProfileOnClick}
                        toggleSecondaryDrawer={toggleSecondaryDrawer}
                    />
                </span>
            </MediaQuery>
        </>
    );
}

export default RangeAnalysis;