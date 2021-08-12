export const saveCallback = (state) => {
    return {
        ...state,
        justSaved: true,
        newUpload: false,
        uploadPiece: false,
        unsavedChanges: false,
    };
};
