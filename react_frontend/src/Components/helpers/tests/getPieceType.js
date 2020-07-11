
function getPieceType(str) {

    let id_ = str;

    if (id_ === '#') {
        return 'Empty'
    }

    return id_[1];

}

module.exports = getPieceType;

if (require.main === module) {
    console.log(getPieceType("WR1"))
    console.log(getPieceType("BB2"))
    console.log(getPieceType("#"))
}