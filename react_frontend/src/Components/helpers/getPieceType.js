
export function getPieceType(str) {

    let id_ = str;

    if (id_ === '#') {
        return 'Empty'
    }

    return id_[1];

}
