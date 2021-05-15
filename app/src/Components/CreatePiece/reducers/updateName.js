export const updateName = (state, name) => {
    return {
        ...state,
        name: name,
        unsavedChanges: true,
    }
};