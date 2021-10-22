import { getSpansDict } from "../helpers/getSpansDict";
import { getBinaryBoardAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const load = (state, name, offsets, spans, whiteImg, blackImg) => {
    return {
        ...state,
        name: name,
        offsets: offsets,
        spans: getSpansDict(spans),
        whiteAndBlackImgs: {
            white: whiteImg,
            black: blackImg,
        },
        loadedName: name,
        loadedOffsets: offsets,
        loadedSpans: getSpansDict(spans),
        loadedImgs: {
            white: whiteImg,
            black: blackImg,
        },
        location: "d4",
        spanDisplays: getBinaryBoardAllFalse(),
        offsetDisplays: getBinaryBoardAllFalse(),
        loadInstance: state.loadInstance + 1,
        unsavedChanges: false,
    };
};