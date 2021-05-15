export function toggleOffsetText(state) {
    return {
        ...state,
        showOffsetText: ! this.state.showOffsetText,
    }
}