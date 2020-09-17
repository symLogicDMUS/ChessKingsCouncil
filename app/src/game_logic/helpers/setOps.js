
/**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set */

export function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

export function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

export function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

export function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}

export function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

// // module.exports = {isSuperset, difference};

// Examples
/** for node.js
if (require.main === module) {

    let setA = new Set([1, 2, 3, 4])
    let setB = new Set([2, 3])
    let setC = new Set([3, 4, 5, 6])
    
    isSuperset(setA, setB)          // => true
    union(setA, setC)               // => Set [1, 2, 3, 4, 5, 6]
    intersection(setA, setC)        // => Set [3, 4]
    symmetricDifference(setA, setC) // => Set [1, 2, 5, 6]
    difference(setA, setC)          // => Set [1, 2]

}
*/
