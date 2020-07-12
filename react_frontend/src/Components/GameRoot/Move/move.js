import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {enPassantMove} from "./enPassantMove";
import {promoMove} from "./promoMove";
import "../../helpers/getColorName"

export function move(gameroot, start, dest) {
    /* function to move a piece on board from start to dest **/
    ply(gameroot, start, dest);
    castleMove(gameroot, start, dest);
    enPassantMove(gameroot, start, dest);
    promoMove(gameroot, start, dest);
    gameroot.toggleTurn();
    gameroot.updateFen(start, dest);
    gameroot.updateBackend().then(([result]) => {
      gameroot.emitChange()
    })
}