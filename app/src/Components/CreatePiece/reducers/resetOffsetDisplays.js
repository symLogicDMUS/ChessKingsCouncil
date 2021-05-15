import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";

export const resetOffsetDisplays = (state) => {
    return {
        ...state,
        offsetDisplays: getBinaryBoarAllFalse(),
    }
};