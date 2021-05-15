export const setImgFileObj = (state, color, fileObj) => {
    return {
        ...state,
        imgFileObjs: {
            ...state.imgFileObjs,
            [color]: fileObj,
        },
        unsavedChanges: true,
    }
};