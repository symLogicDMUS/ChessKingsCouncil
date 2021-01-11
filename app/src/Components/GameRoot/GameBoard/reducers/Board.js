import {getBinaryBoarAllFalse} from "../../../helpers/getBinaryBoardAllFalse";

export function reducer(state, action) {
    switch (action.type) {
        case "display-on":
            return {isDragging: true, rangeBoard: action.getRangeBoard(action.pieceId)};
        case "display-off":
            return {isDragging: false, rangeBoard: getBinaryBoarAllFalse()}
        default:
            throw new Error();
    }
}