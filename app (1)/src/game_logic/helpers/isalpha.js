

export function isalpha(str) {
    if (str.match(/^([a-zA-Z]+)$/g) !== null)
        return true;
    else
        return false;
}

// module.exports = isalpha;

/** for node.js
if (require.main === module) {
    console.log(isalpha('abbnh3ggbbcv'))
    console.log(isalpha('abbnhggbbcv'))
    console.log(isalpha('v'))

}
*/