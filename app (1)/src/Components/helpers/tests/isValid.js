var invalids = require("./invalids");

function isValid(char) {
    if (invalids.includes(char)) {
        return false
    }
    else {
        return true;
    }
}

module.exports = isValid;

if (require.main === module) {
    console.log(isValid("a"))
    console.log(isValid("!"))
    console.log(isValid(" "))
}