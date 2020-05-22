import { ItemTypes } from '../components/Constants';

export function getItemType(id_) {
    var iType = "_";
    switch(id_[1]) {
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
