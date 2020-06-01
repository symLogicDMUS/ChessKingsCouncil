import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {enPassantMove} from "./enPassantMove";


export function move(data, start, dest) {
    /* function to move a piece on board from start to dest **/
    ply(data, start, dest)
    castleMove(data, start, dest)
    enPassantMove(data, start, dest)
    data.toggleColor()
    data.updateBackend(start, dest).then(([result]) => {
      data.emitChange()
    })
    return
}