import { getBinaryBoardAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const resetSpanDisplays = (state) => {
    return {
        ...state,
        spanDisplays: getBinaryBoardAllFalse(),
    };
};
