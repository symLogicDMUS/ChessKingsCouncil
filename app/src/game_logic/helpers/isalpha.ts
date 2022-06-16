export function isalpha(str) {
    return str.match(/^([a-zA-Z]+)$/g) !== null;
}

// module.exports = isalpha;

/** for node.js
if (require.main === module) {
    console.log(isalpha('abbnh3ggbbcv'))
    console.log(isalpha('abbnhggbbcv'))
    console.log(isalpha('v'))

}
*/
