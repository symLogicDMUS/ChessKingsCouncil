var isValid = require("./isValid");
var isSpace = require("./isSpace");

function getNameStatus(name) {

    if (name === "")
        return "blank"

    name = name.split("")

    if (! name.every(isValid))
        return "invalid-character"
    
    if (name.every(isSpace))
        return "blank"

    return "valid"

}

if (require.main === module) {
    console.log(getNameStatus(" "))
    console.log(getNameStatus(""))
    console.log(getNameStatus("a!"))
    console.log(getNameStatus("1*"))
    console.log(getNameStatus("stalemate@example_1"))
    console.log(getNameStatus("checkmate-example%1"))
    console.log(getNameStatus("a"))
    console.log(getNameStatus("1"))
    console.log(getNameStatus("stalemate example 1"))
    console.log(getNameStatus("stalemate_example_1"))
    console.log(getNameStatus("checkmate-example-1"))
}