
export function getItemType(id_) {
    var itype = id_.slice(0, 2) 
    switch(type) {
        case "R":
            iType = "rook";
            break;
        case "N":
            iType = "knight";
            break;
        case "B":
            iType = "bishop";
            break;
        case "K":
            iType = "king";
            break;
        case "Q":
            iType = "queen";
            break;
        case "P":
            iType = "pawn";
            break;
        default:
            break;
    }
    return iType;
}
