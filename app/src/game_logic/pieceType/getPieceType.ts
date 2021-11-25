export function getPieceType(id) {
    /*return letter of the piece to indicate id **/
    if (id === "#") {
        return "Empty";
    }
    return id[1];
}