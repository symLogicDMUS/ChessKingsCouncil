import React, { useReducer } from "react";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { reducer } from "./RangeAnalysis.red";
import { useStyles } from "./RangeAnalysis.jss";

const AnalysisBoard = React.lazy(() => import("./AnalysisBoard"));

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
                    parentDispatch={dispatch}
                    rangeBoard={state.rangeBoard}
                    selectedSqr={state.selectedSqr}
                    showProfileOnClick={showProfileOnClick}
                    toggleSecondaryDrawer={toggleSecondaryDrawer}
                />
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <span className={classes.board_tool}>
                    <Typography className={classes.title}>
                        Range Analysis Board
                    </Typography>
                    <AnalysisBoard
                        theme={theme}
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
                </span>
            </MediaQuery>
        </>
    );
}

export default RangeAnalysis;
