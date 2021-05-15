export const toggleOffset = (newState, rf, offset) => {
    newState.offsetDisplays[rf] = !newState.offsetDisplays[rf];
    let offsetStrs = newState.offsets.map((o) => JSON.stringify(o));
    if (offsetStrs.includes(JSON.stringify(offset))) {
        let i = offsetStrs.indexOf(JSON.stringify(offset));
        newState.offsets.splice(i, 1);
    } else newState.offsets.push(offset);
};