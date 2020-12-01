export function getPieceType(str) {
    let id = str;
    if (id === '#') {
        return 'Empty'
    }
    return id[1];
}