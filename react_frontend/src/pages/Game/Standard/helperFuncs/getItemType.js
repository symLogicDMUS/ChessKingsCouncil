import { ItemTypes } from '../components/Constants';


export function getItemType(id_) {
    var type = id_.slice(0, 2) 
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
