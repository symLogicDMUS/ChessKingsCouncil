import {specialPieceImgs} from "../../../../API/sampleData/specialPieceImgs";
import {getPieceName} from "../../../helpers/getPieceName";

export function getPieceImg(id, idDict, defs) {

    let name = getPieceName(id, idDict);
    let color = id[0];

    if (Object.keys(specialPieceImgs).includes(name)) {
        return specialPieceImgs[name][color];
    }
    
    return defs[name][color].img;
}