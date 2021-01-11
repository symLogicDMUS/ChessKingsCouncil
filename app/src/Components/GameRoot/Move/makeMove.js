import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {promoMove} from "./promoMove";
import {enPassantMove} from "./enPassantMove";

export function makeMove(gameroot, id, start, dest, left, top, title, dispatch) {
    ply(gameroot, start, dest);
    dispatch({type: "update", id: id, left: left, top: top, title: title});
    if(gameroot.captured) {dispatch({type: "remove", id: gameroot.captured});}
    castleMove(gameroot, start, dest, dispatch, title);
    enPassantMove(gameroot, start, dest, dispatch);
    promoMove(gameroot, start, dest, dispatch);
}