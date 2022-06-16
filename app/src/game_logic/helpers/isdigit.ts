export function isdigit(ch) {
    return !isNaN(ch * 1);
}

// module.exports = isdigit;

/** for node.js
if (require.main === module) {
    console.log(isdigit('1'))
    console.log(isdigit('a'))
    console.log(isdigit(1))

}
*/
