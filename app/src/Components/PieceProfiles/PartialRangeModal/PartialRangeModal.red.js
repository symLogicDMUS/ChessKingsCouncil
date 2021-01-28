import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds as oob} from "../../helpers/oob";
import {rfToXy, xyToRf} from "../../helpers/crdCnvrt";
import {getPartialRangeBoardComponent} from "./getPartialRangeBoardComponent";
import React from "react";

export function reducer(state, action) {
    let newBoard;
    switch (action.type) {
        case "span":
            newBoard = getBinaryBoarAllFalse();
            const stepFunc = stepFuncDict2[action.span];
            let rf = stepFunc(state.location);
            while (!oob(rf)) {
                newBoard[rf] = true;
                rf = stepFunc(rf);
            }
            return {
                location: state.location,
                board: getPartialRangeBoardComponent(
                    newBoard,
                    state.location,
                    state.src,
                    state.theme,
                    action.type,
                ),
            };
        case "offset":
            newBoard = getBinaryBoarAllFalse();
            let [x1, y1] = rfToXy(state.location);
            let dx = x1 + action.offset[0];
            let dy = y1 + action.offset[1];
            newBoard[xyToRf(dx, dy)] = true;
            return {
                location: state.location,
                board: getPartialRangeBoardComponent(
                    newBoard,
                    state.location,
                    state.src,
                    state.theme,
                    action.type,
                ),
            };
        default:
            throw new Error();
    }
}

