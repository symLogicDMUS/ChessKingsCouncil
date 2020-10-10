export function onlyKings(list) {
    for (var i of list) {
        if (list[i] !== "K") {
            return false;
        }
    }
    return true;
}
