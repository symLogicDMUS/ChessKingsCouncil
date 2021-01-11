import {getBinaryBoarAllFalse} from "../../../helpers/getBinaryBoardAllFalse";

export function reducer(state, action) {
    switch (action.type) {
        case "display-on":
            return action.getRangeBoard(action.pieceId);
        case "display-off":
            return getBinaryBoarAllFalse()
        default:
            throw new Error();
    }
}