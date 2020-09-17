function isdigit(ch) {
    if (!isNaN(ch * 1)){
       return true;
    }
    return false
}

module.exports = isdigit;

if (require.main === module) {
    console.log(isdigit('1'))
    console.log(isdigit('a'))
    console.log(isdigit(1))
}