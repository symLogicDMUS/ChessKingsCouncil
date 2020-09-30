import {ply} from "./ply";
import {castleMove} from "./castleMove";
import {promoMove} from "./promoMove";
import {enPassantMove} from "./enPassantMove";

export function makeMove(gameroot, start, dest) {
    ply(gameroot, start, dest);
    castleMove(gameroot, start, dest);
    enPassantMove(gameroot, start, dest);
    promoMove(gameroot, start, dest);
}