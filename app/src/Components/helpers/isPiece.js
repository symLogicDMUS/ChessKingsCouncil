

export function isPiece(id_) {
    /*return true if id matches piece id pattern, otherwise return false **/
    if (id_.length === 3 && /(W|B)/.test(id_[0]) && /^[A-Z]$/i.test(id_[1]) && /^[1-9]$/i.test(id_[2])) {
        return true
    }
    return false
}