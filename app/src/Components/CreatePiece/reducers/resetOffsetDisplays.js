import { getBinaryBoardAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const resetOffsetDisplays = (state) => {
    return {
        ...state,
        offsetDisplays: getBinaryBoardAllFalse(),
    };
};
