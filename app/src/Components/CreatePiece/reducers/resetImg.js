import { copy } from "../../helpers/copy";

export const resetImg = (state, deletedImgStr) => {
    const whiteAndBlackImgs = copy(state.whiteAndBlackImgs);
    if (state.whiteAndBlackImgs.white === deletedImgStr) {
        whiteAndBlackImgs.white = null;
    }
    if (state.whiteAndBlackImgs.black === deletedImgStr) {
        whiteAndBlackImgs.black = null;
    }
    return {
        ...state,
        whiteAndBlackImgs: whiteAndBlackImgs,
    };
};
