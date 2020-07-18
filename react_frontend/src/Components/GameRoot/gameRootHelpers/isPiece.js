

export function isPiece(id_) {
    /*return true if id matches piece id pattern, otherwise return false **/
    if (id_.match(`^(W|B)[A-Z][1-9]$`) != null) {
        return true
    }
    else {
        return false
    }
}