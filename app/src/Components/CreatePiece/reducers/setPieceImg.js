export const setPieceImg = (state, color, imgStr) => {
    return {
        ...state,
        whiteAndBlackImgs: {
            ...state.whiteAndBlackImgs,
            [color]: imgStr,
        },
    };
};
