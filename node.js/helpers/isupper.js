

function isupper(str) {
    if (str.toUpperCase() == str)
        return true;
    else
        return false;
}

module.exports = isupper;

if (require.main === module) {
    console.log(isupper("aBC"));
    console.log(isupper("ABC"));
    console.log(isupper("AB1C"));
}