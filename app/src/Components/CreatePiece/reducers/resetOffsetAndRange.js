import { getBinaryBoardAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const resetOffsetAndRange = (state) => ({
    ...state,
    spans: {
        "90d": false,
        "45d": false,
        "0d": false,
        "315d": false,
        "270d": false,
        "225d": false,
        "180d": false,
        "135d": false,
    },
    offsets: [],
    spanDisplays: getBinaryBoardAllFalse(),
    offsetDisplays: getBinaryBoardAllFalse(),
});
