import {specialPieceImg} from "./specialPieceImg";

export function getPieceImg(id_, idDict, defs) {

    let color = id_[0];
    let id = id_[1].toLowerCase();
    let name = idDict[id];

    if (Object.keys(specialPieceImg).includes(name)) {
        return specialPieceImg[name][color];
    }
    
    return defs[name][color]["img"];

}