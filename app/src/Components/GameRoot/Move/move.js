import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {promoMove} from "./promoMove";
import {enPassantMove} from "./enPassantMove";

export function move(gameRoot, id, start, dest, left, top, src, dispatch) {
    ply(gameRoot, start, dest);
    dispatch({type: "update", id: id, left: left, top: top, src: src});
    if(gameRoot.captured) {dispatch({type: "remove", id: gameRoot.captured});}
    castleMove(gameRoot, start, dest, dispatch, src);
    enPassantMove(gameRoot, start, dest, dispatch);
    promoMove(gameRoot, start, dest, dispatch);
}