import {specialPieceImg} from "./specialPieceImg";
import {getPieceName} from "../helpers/getPieceName";

export function getPieceImg(id_, idDict, defs) {

    let name = getPieceName(id_, idDict);
    let color = id_[0];

    if (Object.keys(specialPieceImg).includes(name)) {
        return specialPieceImg[name][color];
    }
    
    return defs[name][color]["img"];
}
