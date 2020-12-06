

export function strfind(list, b) {
    /**find if b as a string in in list when all element converted to string  */
    list = list.map(el => JSON.stringify(el))
    return list.includes(JSON.stringify(b));
}

// module.exports = strfind;

/** for node.js
if (require.main === module) {
    console.log(strfind([[1, 1], [2, 2], [3, 3]], [2, 2]))
    console.log(strfind([[1, 1], [2, 2], [3, 3]], [2, 1]))
    console.log(strfind([[1, 1], [2, 2], [3, 3]], "[2, 2]"))

}
*/