export function reducer(state, action) {
    switch (action.type) {
        case "next":
            return {
                slideDirection: "right",
                activeStep: state.activeStep + 1,
            };
        case "back":
            return {
                slideDirection: "left",
                activeStep: state.activeStep - 1,
            };
        default:
            throw new Error();
    }
}
