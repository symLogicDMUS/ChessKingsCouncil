

export function isPiece(id_) {
    /*return true if id matches piece id pattern, otherwise return false **/
    if (id_.length === 3 && (id_[0] === 'W' || id_[0] === 'B')) {
        return true
    }
    return false
}