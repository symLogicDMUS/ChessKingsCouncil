export function updateFirstVisit(state, isFirstVisit) {
    return {
        ...state,
        isFirstVisit: isFirstVisit,
    }
}