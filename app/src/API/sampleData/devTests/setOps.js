/**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set */

function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function symmetricDifference(setA, setB) {
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

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

module.exports = {isSuperset, union, intersection, symmetricDifference, difference};

if (require.main === module) {

    const setA = new Set([1, 2, 3, 4])
    const setB = new Set([2, 3])
    const setC = new Set([3, 4, 5, 6])

    console.log(isSuperset(setA, setB))          // => true
    console.log(union(setA, setC))               // => Set [1, 2, 3, 4, 5, 6]
    console.log(intersection(setA, setC))        // => Set [3, 4]
    console.log(symmetricDifference(setA, setC)) // => Set [1, 2, 5, 6]
    console.log(difference(setA, setC))          // => Set [1, 2]

}