export function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            if (state.pos === state.numSlides) {
                return {numSlides: state.numSlides, pos: 0}
            }
            return {numSlides: state.numSlides, pos: state.pos + 1};
        case 'decrement':
            if (state.pos === 0) {
                return {numSlides: state.numSlides, pos: state.numSlides - 1}
            }
            return {numSlides: state.numSlides, pos: state.pos - 1};
        default:
            throw new Error();
    }
}