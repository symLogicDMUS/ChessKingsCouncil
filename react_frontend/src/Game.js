import {Chess} from "./chess"
import {ply} from "./sharedData/ply"
import {castleMove} from "./sharedData/castleMove"
import {enPassantMove} from "./sharedData/enPassantMove"
let observer = null;
let chess = new Chess('New');


function emitChange() {
  observer(chess.board)
  return;
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange();
}


export function move(start, dest) {
  /* function to move a piece on board from start to dest **/
  [chess.board, chess.captured] = ply(chess.board, start, dest)
  [chess.board, chess.captured] = castleMove(chess.board, start, dest, chess.specialMoves)
  [chess.board, chess.captured] = enPassantMove(chess.board, start, dest, chess.turn, chess.specialMoves)
  chess.update(start, dest);
  emitChange();
}

export function isLegal(start, dest) {
  /*return true if piece with id at location start can move to dest, otherwise false**/

  let id_ = chess.board[start]

  if (! chess.ranges[id_].includes(dest)) {
      return false
  }
  return true
}