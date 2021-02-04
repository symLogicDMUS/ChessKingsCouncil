import {specialPieceImg} from "./specialPieceImg";
import {getPieceName} from "../helpers/getPieceName";

export function getPieceImg(id, idDict, defs) {

    let name = getPieceName(id, idDict);
    let color = id[0];

    if (Object.keys(specialPieceImg).includes(name)) {
        return specialPieceImg[name][color];
    }
    
    return defs[name][color].img;
}
