export function onlyKings(list) {
    for (const i of list) {
        if (list[i] !== "K") {
            return false;
        }
    }
    return true;
}
