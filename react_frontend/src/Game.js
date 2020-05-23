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
  return fetch('/first', {
          method:'POST',
          body:game_name
      }).then(response => response.json())
        .then(data => {
            chess.color = data['color']
            chess.board = data['board']
            chess.ranges = data['ranges']
            chess.fenObj.set(data['fen_data'])
            chess.specialMoves.update(data['moves'])
            chess.jsonRecords.update(data['records'])
        })
}

export function waitData() {
  return Promise.all([getData("New")])
}

function emitChange() {
  observer(chess.board, chess.color)
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
  ply(chess, start, dest)
  castleMove(chess, start, dest)
  enPassantMove(chess, start, dest)
  chess.toggleColor()
  chess.updateBackend(start, dest).then(([result]) => {
    console.log(result)
    emitChange()
  })
  return
}

export function isLegal(item, dest, turn) {
  /*return true if piece with id at location start can move to dest, otherwise false**/

  //if the color of the piece isnt current turn
  if (item.type[0] !== turn) {
    return false
  }

  let id_ = chess.board[item.pos]

  if (! chess.ranges[id_].includes(dest)) {
      return false
  }
  
  return true
}