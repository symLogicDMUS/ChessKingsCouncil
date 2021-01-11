import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {promoMove} from "./promoMove";
import {enPassantMove} from "./enPassantMove";

export function makeMove(gameroot, id, start, dest, left, top, src, dispatch) {
    ply(gameroot, start, dest);
    dispatch({type: "update", id: id, left: left, top: top, src: src});
    if(gameroot.captured) {dispatch({type: "remove", id: gameroot.captured});}
    castleMove(gameroot, start, dest, dispatch, src);
    enPassantMove(gameroot, start, dest, dispatch);
    promoMove(gameroot, start, dest, dispatch);
}