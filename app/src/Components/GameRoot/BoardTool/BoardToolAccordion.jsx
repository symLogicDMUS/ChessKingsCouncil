import React, { useEffect, useReducer } from "react";
import { Typography } from "@material-ui/core";
import MuiAccordion from "../../Reuseables/Accordions/MuiAccordion";
import {getBoardAccordionMeasurements} from "./getBoardAccordionMeasurements";
import { BoardTool } from "./BoardTool";
import { reducer } from "./BoardToolAccordion.red";
import { useStyles } from "./BoardToolAccordion.jss";

export function BoardToolAccordion({
    board,
    theme,
    gameType,
    pieceDefs,
    idDict,
    aiStart,
    allRanges,
    showProfileOnClick,
    triggerRender,
    toggleSecondaryDrawer,
}) {
    const [state, dispatch] = useReducer(reducer, getBoardAccordionMeasurements());
    useEffect(() => {
        function handleResize() {
            dispatch({ type: "reposition" });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = useStyles({ theme: theme,  measurements: state});

    return (
        <MuiAccordion
            theme={theme}
            heading={
                <Typography variant="subtitle1">
                    Range Display Board
                </Typography>
            }
            className={classes.board_tool_accordion}
        >
            <BoardTool
                board={board}
                theme={theme}
                gameType={gameType}
                pieceDefs={pieceDefs}
                idDict={idDict}
                start={aiStart}
                allRanges={allRanges}
                showProfileOnClick={showProfileOnClick}
                toggleSecondaryDrawer={toggleSecondaryDrawer}
                triggerRender={triggerRender}
            />
        </MuiAccordion>
    );
}
