

export function isLegal(data, item, dest) {
    /*return true if piece with id at location start can move to dest, otherwise false**/

    //if the color of the piece isnt current turn
    if (item.type[0] !== data.turn) {
        return false
    }

    let id_ = data.board[item.pos]

    if (! data.ranges[id_].includes(dest)) {
        return false
    }

    return true

}
