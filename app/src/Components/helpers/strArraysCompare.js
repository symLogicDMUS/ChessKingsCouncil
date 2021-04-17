
/*
* compare if 2 arrays have all the same values,
* when it is known that all elements are strings.
* */
export function strArraysCompare(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1; i++) {
        if (! array2.includes(array1[i])) {
            return false;
        }
    }
    return true;
}