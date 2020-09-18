export function flipKeysValues(dict) {
    var newDict = {}
    for (var [k, v] of Object.entries(dict)) {
        newDict[v] = k
    }
    return newDict;
}