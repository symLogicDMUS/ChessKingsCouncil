export function getPieceName(id_, idDict) {
    let id = id_[1].toLowerCase();
    return idDict[id];
}