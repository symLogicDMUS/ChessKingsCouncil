import {specialPieceImg} from "./specialPieceImg/prod";
import {getPieceName} from "../../../Components/helpers/getPieceName";

export function getPieceImg(id, idDict, defs) {

    let name = getPieceName(id, idDict);
    let color = id[0];

    if (Object.keys(specialPieceImg).includes(name)) {
        return specialPieceImg[name][color];
    }
    
    return defs[name][color].img;
}