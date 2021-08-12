import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const resetSpanDisplays = (state) => {
    return {
        ...state,
        spanDisplays: getBinaryBoarAllFalse(),
    };
};
