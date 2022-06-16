export function isupper(str) {
    return str.toUpperCase() === str;
}

// module.exports = isupper;

/** for node.js
if (require.main === module) {
    console.log(isupper("aBC"));
    console.log(isupper("ABC"));
    console.log(isupper("AB1C"));

}
*/
