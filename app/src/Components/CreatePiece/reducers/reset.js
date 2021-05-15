import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {copy} from "../../helpers/copy";

export const reset = (state) => {
    if (!state.loadedName) {
        return {
            ...state,
            name: "",
            location: 'd4',
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
        }
    } else {
        return {
            ...state,
            name: copy(state.loadedName),
            spans: copy(state.loadedSpans),
            offsets: copy(state.loadedOffsets),
            whiteAndBlackImgs: copy(state.loadedImgs),
            loadInstance: state.loadInstance + 1,
            spanDisplays: getBinaryBoarAllFalse(),
            offsetDisplays: getBinaryBoarAllFalse(),
            unsavedChanges: false,
            location: 'd4',
        }
    }
};