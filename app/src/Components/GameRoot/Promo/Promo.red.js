export function reducer(state, action) {
    switch (action.type) {
        case "next":
            if (state.current < state.numPieces - 1) {
                return {
                    ...state,
                    prev: state.current,
                    direction: "right",
                    reverseDirection: "left",
                    current: state.current + 1,
                };
            } else {
                return {
                    ...state,
                    prev: state.numPieces - 1,
                    direction: "right",
                    reverseDirection: "left",
                    current: 0,
                };
            }
        case "previous":
            if (state.current > 0) {
                return {
                    ...state,
                    direction: "left",
                    reverseDirection: "right",
                    current: state.current - 1,
                    prev: state.current,
                };
            } else {
                return {
                    ...state,
                    direction: "left",
                    reverseDirection: "right",
                    current: state.numPieces - 1,
                    prev: 0,
                };
            }
        default:
            throw new Error();
    }
}
