

export function isEmptyObject(dict) {
    return Object.keys(dict).length === 0 && dict.constructor === Object;
}

// module.exports = isEmptyObject;

/** for node.js
if (require.main === module) {
    console.log(isEmptyObject({}))
    console.log(isEmptyObject('{}'))
    console.log(isEmptyObject([]))

}
*/