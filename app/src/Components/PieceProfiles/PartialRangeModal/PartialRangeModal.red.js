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
                ...state,
                range: action.span,
                rangeType: action.type,
                board: newBoard,
            };
        case "offset":
            newBoard = getBinaryBoarAllFalse();
            let [x1, y1] = rfToXy(state.location);
            let dx = x1 + action.offset[0];
            let dy = y1 + action.offset[1];
            newBoard[xyToRf(dx, dy)] = true;
            return {
                ...state,
                range: action.offset,
                rangeType: action.type,
                board: newBoard,
            };
        case 'set-location':
            const location = action.newLoc;
            newBoard = getBinaryBoarAllFalse();
            if (state.rangeType === 'span') {
                const stepFunc = stepFuncDict2[state.range];
                let rf = stepFunc(location);
                while (!oob(rf)) {
                    newBoard[rf] = true;
                    rf = stepFunc(rf);
                }
            }
            else if (state.rangeType === 'offset') {
                let [x1, y1] = rfToXy(location);
                let dx = x1 + state.range[0];
                let dy = y1 + state.range[1];
                newBoard[xyToRf(dx, dy)] = true;
            }
            return {
                ...state,
                location: location,
                board: newBoard,
            }
        default:
            throw new Error();
    }
}

