import {imgNames} from "./imgNames";

export function getPieceImg(id_, idDict) {
    let color = id_[0];
    let id = id_[1].toLowerCase();
    let name = idDict[id];
    let img_ = imgNames[name][color];
    return img_;
}