import { rankfiles } from "../../../helpers/rankfiles";
import { OnHoverSquare } from "../OnHoverSquare";
import React from "react";
import { getBinaryBoardAllFalse } from "../../../helpers/getBinaryBoardAllFalse";

export function reducer(state, action) {
    switch (action.type) {
        case "turn-on":
            let isOverBoard = getBinaryBoardAllFalse();
            isOverBoard[action.currentRf] = true;
            return { isActive: true, isOverBoard: isOverBoard };
        case "turn-off":
            return { isActive: false, isOverBoard: getBinaryBoardAllFalse() };
        default:
            throw new Error();
    }
}
