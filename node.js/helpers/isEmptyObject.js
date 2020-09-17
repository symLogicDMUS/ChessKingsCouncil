

function isEmptyObject(dict) {
    if (Object.keys(dict).length === 0 && dict.constructor === Object)
        return true;
    else
        return false;
}

module.exports = isEmptyObject;

if (require.main === module) {
    console.log(isEmptyObject({}))
    console.log(isEmptyObject('{}'))
    console.log(isEmptyObject([]))
}