import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const erase = (state) => {
    return {
        ...state,
        name: "",
        whiteAndBlackImgs: {
            white: null,
            black: null,
        },
        unsavedChanges: false,
        loadInstance: state.loadInstance + 1,
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
        spanDisplays: getBinaryBoarAllFalse(),
        offsetDisplays: getBinaryBoarAllFalse(),
    };
};
