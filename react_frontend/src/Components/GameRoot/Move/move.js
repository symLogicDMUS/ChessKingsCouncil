import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {enPassantMove} from "./enPassantMove";
import {promoMove} from "./promoMove";
import "../../helpers/getColorName"

export function move(data, start, dest) {
    /* function to move a piece on board from start to dest **/
    ply(data, start, dest);
    castleMove(data, start, dest);
    enPassantMove(data, start, dest);
    promoMove(data, start, dest);
    data.toggleTurn();
    data.updateFen(start, dest);
    data.updateBackend().then(([result]) => {
      data.emitChange()
    })
}