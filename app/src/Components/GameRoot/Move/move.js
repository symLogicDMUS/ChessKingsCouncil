import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {promoMove} from "./promoMove";
import {enPassantMove} from "./enPassantMove";
import {isPiece} from "../../../game_logic/pieceType/isPiece";

export function move(gameRoot, id, pieces, start, dest, left, top, dispatch) {
    ply(gameRoot, start, dest);
    gameRoot.updateJsonRecords(start, dest)
    dispatch({type: "update", id: id, left: left, top: top, src: pieces[id].src});
    if(isPiece(gameRoot.captured)) {dispatch({type: "remove", id: gameRoot.captured});}
    castleMove(gameRoot, pieces, start, dest, dispatch);
    enPassantMove(gameRoot, start, dest, dispatch);
}