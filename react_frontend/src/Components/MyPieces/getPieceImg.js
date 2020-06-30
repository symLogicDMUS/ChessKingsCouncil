import {specialPieceImg} from "./specialPieceImg";

export function getPieceImg(id_, idDict, defs) {

    let color = id_[0];
    let id = id_[1].toLowerCase();
    let name = idDict[id];
    let img = null;

    if (Object.keys(specialPieceImg).includes(name))
        img = specialPieceImg[name][color];
    else
        img = defs[name][color]["img"];
    
    console.log(`${id}, ${name}, ${img}`);

    return img;

}