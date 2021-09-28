import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { getBinaryBoardAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export function reducer(state, action) {
    switch (action.type) {
        case "toggle-piece":
            /**
             * Used by RangePiece. triggered when piece clicked on. triggers new traversal of squares
             * */
            if (action.rf === null || state.selectedSqr === action.rf) {
                return {
                    rangeBoard: getBinaryBoardAllFalse(),
                    selectedSqr: null,
                };
            } else {
                const rangeBoard = getBinaryBoardAllFalse();
                const id = action.board[action.rf];
                rankfiles.forEach((rf) => {
                    rangeBoard[rf] = action.allRanges[id].includes(rf);
                });
                return {
                    rangeBoard: rangeBoard,
                    selectedSqr: action.rf,
                };
            }
        default:
            throw new Error();
    }
}
