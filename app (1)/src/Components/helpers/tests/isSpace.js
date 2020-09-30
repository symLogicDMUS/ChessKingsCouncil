function isSpace(char) {
    let whitespaces = [" ", "   ", "\n", "\s"]
    if (whitespaces.includes(char))
        return true
    else
        return false
}
module.exports = isSpace;

if (require.main === module) {
    console.log(isSpace(" "))
    console.log(isSpace("   "))
    console.log(isSpace("\s"))
    console.log(isSpace(""))    
}