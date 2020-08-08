
const [OVER, IN_PROGRESS] = [0, 1]

/**data for the start of a new game*/
export const newData = {
                 "color": 'W', 
                 "fen_data": {"turn": "w", 
                              "castle_avail":"KQkq",
                              "en_passant_avail": "-",
                              "hm_clock": 0, 
                              "fm_clock": 1}, 
                 "board":{
                    'a1': 'WR1', 'a2': 'WP1', 'a3': '#', 'a4': '#', 'a5': '#', 'a6': '#', 'a7': 'BP1', 'a8': 'BR1', 
                    'b1': 'WN1', 'b2': 'WP2', 'b3': '#', 'b4': '#', 'b5': '#', 'b6': '#', 'b7': 'BP2', 'b8': 'BN1', 
                    'c1': 'WB1', 'c2': 'WP3', 'c3': '#', 'c4': '#', 'c5': '#', 'c6': '#', 'c7': 'BP3', 'c8': 'BB1', 
                    'd1': 'WQ1', 'd2': 'WP4', 'd3': '#', 'd4': '#', 'd5': '#', 'd6': '#', 'd7': 'BP4', 'd8': 'BQ1', 
                    'e1': 'WK1', 'e2': 'WP5', 'e3': '#', 'e4': '#', 'e5': '#', 'e6': '#', 'e7': 'BP5', 'e8': 'BK1', 
                    'f1': 'WB2', 'f2': 'WP6', 'f3': '#', 'f4': '#', 'f5': '#', 'f6': '#', 'f7': 'BP6', 'f8': 'BB2', 
                    'g1': 'WN2', 'g2': 'WP7', 'g3': '#', 'g4': '#', 'g5': '#', 'g6': '#', 'g7': 'BP7', 'g8': 'BN2', 
                    'h1': 'WR2', 'h2': 'WP8', 'h3': '#', 'h4': '#', 'h5': '#', 'h6': '#', 'h7': 'BP8', 'h8': 'BR2'}, 
                 "records": {
                    "rooks_moved": {
                      "h1": false,
                      "a1": false,
                      "h8": false,
                      "a8": false
                    },
                    "kings_moved": {
                      "e1": false,
                      "e8": false
                    },
                    "pawn_histories": {
                      "WP1": [ "a2" ],
                      "WP2": [ "b2" ],
                      "WP3": [ "c2" ],
                      "WP4": [ "d2" ],
                      "WP5": [ "e2" ],
                      "WP6": [ "f2" ],
                      "WP7": [ "g2" ],
                      "WP8": [ "h2" ],
                      "BP1": [ "a7" ],
                      "BP2": [ "b7" ],
                      "BP3": [ "c7" ],
                      "BP4": [ "d7" ],
                      "BP5": [ "e7" ],
                      "BP6": [ "f7" ],
                      "BP7": [ "g7" ],
                      "BP8": [ "h7" ]
                    },
                    "last_pawn_move": "None",
                    "num_consecutive_non_pawn_moves": 0,
                    "status":1,
                    "condition": "",
                    "winner":"-"
                  },
                 "flask_method": "update"}

export const ranges =
{
'WB1':[],
'WR1': [],
'WB2': [],
'WR2': [],
'WK1': [],
'WQ1': [],
'WP1': ["a3", "a4"],
'WP2': ["b3", "b4"],
'WP3': ["c3", "c4"],
'WP4': ["d3", "d4"],
'WP5': ["e3", "e4"],
'WP6': ["f3", "f4"],
'WP7': ["g3", "g4"],
'WP8': ["h3", "h4"],
'WN1': ["a3", "c3"],
'WN2': ["f3", "h3"]
}

export const enemyRanges =         
{    
'BB1':[],
'BR1': [],
'BB2': [],
'BR2': [],
'BK1': [],
'BQ1': [],
'BP1': ["a6", "a5"],
'BP2': ["b6", "b5"],
'BP3': ["c6", "c5"],
'BP4': ["d6", "d5"],
'BP5': ["e6", "e5"],
'BP6': ["f6", "f5"],
'BP7': ["g6", "g5"],
'BP8': ["h6", "h5"],
'BN1': ["a6", "c6"],
'BN2': ["f6", "h6"]
}

export const moves = {"en_passant":[], "castles":[], "promos":[] };

export const status = {'condition':'', 'status':IN_PROGRESS, 'winner':'-'};

export const range_defs = {
  "Rook": {
      "W": {
          "spans": [
              "step_1sqr0d",
              "step_1sqr90d",
              "step_1sqr180d",
              "step_1sqr270d"
          ],
          "offsets": [],
          "img":"WR.svg"
      },
      "B": {
          "spans": [
              "step_1sqr180d",
              "step_1sqr270d",
              "step_1sqr0d",
              "step_1sqr90d"
          ],
          "offsets": [],
          "img":"BR.svg"
      }
  },
  "Bishop": {
      "W": {
          "spans": [
              "step_1sqr45d",
              "step_1sqr135d",
              "step_1sqr225d",
              "step_1sqr315d"
          ],
          "offsets": [],
          "img":"WB.svg"
      },
      "B": {
          "spans": [
              "step_1sqr225d",
              "step_1sqr315d",
              "step_1sqr45d",
              "step_1sqr135d"
          ],
          "offsets": [],
          "img":"BB.svg"
      }
  },
  "Queen": {
      "W": {
          "spans": [
              "step_1sqr0d",
              "step_1sqr45d",
              "step_1sqr90d",
              "step_1sqr135d",
              "step_1sqr180d",
              "step_1sqr225d",
              "step_1sqr270d",
              "step_1sqr315d"
          ],
          "offsets": [],
          "img":"WQ.svg"
      },
      "B": {
          "spans": [
              "step_1sqr180d",
              "step_1sqr225d",
              "step_1sqr270d",
              "step_1sqr315d",
              "step_1sqr0d",
              "step_1sqr90d",
              "step_1sqr45d",
              "step_1sqr135d"
          ],
          "offsets": [],
          "img": "BQ.svg"
      }
  },
  "Knight": {
      "W": {
          "spans": [],
          "offsets": [
              [
                  1,
                  2
              ],
              [
                  1,
                  -2
              ],
              [
                  -1,
                  2
              ],
              [
                  -1,
                  -2
              ],
              [
                  2,
                  1
              ],
              [
                  2,
                  -1
              ],
              [
                  -2,
                  1
              ],
              [
                  -2,
                  -1
              ]
          ],
          "img":"WN.svg"
      },
      "B": {
          "spans": [],
          "offsets": [
              [
                  -1,
                  -2
              ],
              [
                  -1,
                  2
              ],
              [
                  1,
                  -2
              ],
              [
                  1,
                  2
              ],
              [
                  -2,
                  -1
              ],
              [
                  -2,
                  1
              ],
              [
                  2,
                  -1
              ],
              [
                  2,
                  1
              ]
          ],
          "img":"BN.svg"
      }
  }
}

export const id_dict = {
  "k": "King",
  "q": "Queen",
  "r": "Rook",
  "b": "Bishop",
  "n": "Knight",
  "p": "Pawn"
}