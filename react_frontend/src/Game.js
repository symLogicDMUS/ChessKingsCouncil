import {Chess} from "./chess"
import {ply} from "./sharedData/ply"
import {castleMove} from "./sharedData/castleMove"
import {enPassantMove} from "./sharedData/enPassantMove"
import { Fen } from "./sharedData/Fen"
import { JsonRecords } from "./sharedData/JsonRecords"
import { SpecialMoves } from "./sharedData/SpecialMoves"
let observer = null;
let chess = new Chess();
 
function getData(game_name) {
  return fetch('/start', {
          method:'POST',
          body:game_name
      }).then(response => response.json())
        .then(data => {
            chess.color = data['color']
            chess.board = data['board']
            chess.ranges = data['ranges']
            chess.fenObj = new Fen(data['fen_data'])
            chess.specialMoves = new SpecialMoves(data['moves'])
            chess.jsonRecords = new JsonRecords(data['records'])
        })
}

export function waitData() {
  return Promise.all([getData("New")])
}

function emitChange() {
  observer(chess.board)
  return;
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}


export function move(start, dest) {
  /* function to move a piece on board from start to dest **/
  [chess.board, chess.captured] = ply(chess.board, start, dest)
  [chess.board, chess.captured] = castleMove(chess.board, start, dest, chess.specialMoves)
  [chess.board, chess.captured] = enPassantMove(chess.board, start, dest, chess.turn, chess.specialMoves)
  chess.update(start, dest).then(([result]) => {
    console.log(result)
    emitChange()
  })
  return
}

export function isLegal(start, dest) {
  /*return true if piece with id at location start can move to dest, otherwise false**/

  let id_ = chess.board[start]

  if (! chess.ranges[id_].includes(dest)) {
      return false
  }
  return true
}