export function flipKeysValues(dict) {
    const newDict = {};
    for (const [k, v] of Object.entries(dict)) {
        newDict[v] = k
    }
    return newDict;
}