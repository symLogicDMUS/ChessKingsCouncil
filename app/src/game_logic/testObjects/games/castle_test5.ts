export let castle_test5 =  {
     "fen": "r3kbnr/p2ppppp/bqn5/1pp5/1PP5/B1N5/P1QPPPPP/R3KBNR b KQkq - 7 6",
     "json": {
         "rooks_moved": {
             "a1": False,
             "a8": False,
             "h1": False,
             "h8": False
         },
         "kings_moved": {
             "e1": False,
             "e8": False
         },
         "pawn_histories": {
             "BP1": [
                 "a7"
             ],
             "BP2": [
                 "b7",
                 "b5"
             ],
             "BP3": [
                 "c7",
                 "c5"
             ],
             "BP4": [
                 "d7"
             ],
             "BP5": [
                 "e7"
             ],
             "BP6": [
                 "f7"
             ],
             "BP7": [
                 "g7"
             ],
             "BP8": [
                 "h7"
             ],
             "WP1": [
                 "a2"
             ],
             "WP2": [
                 "b2",
                 "b4"
             ],
             "WP3": [
                 "c2",
                 "c4"
             ],
             "WP4": [
                 "d2"
             ],
             "WP5": [
                 "e2"
             ],
             "WP6": [
                 "f2"
             ],
             "WP7": [
                 "g2"
             ],
             "WP8": [
                 "h2"
             ]
         },
         "last_pawn_move": "None",
         "num_consecutive_non_pawn_moves": 0
     },
     "type": "standard",
     "pt": "W",
     "status": {
         "status": 1,
         "condition": "",
         "winner": "-"
     },
     "ids": {
         "k": "King",
         "q": "Queen",
         "r": "Rook",
         "b": "Bishop",
         "n": "Knight",
         "p": "Pawn"
     },
     "defs": {
         "Bishop": {
             "B": {
                 "img": "BB.svg",
                 "offsets": [],
                 "spans": [
                     "step_1sqr225d",
                     "step_1sqr315d",
                     "step_1sqr45d",
                     "step_1sqr135d"
                 ]
             },
             "W": {
                 "img": "WB.svg",
                 "offsets": [],
                 "spans": [
                     "step_1sqr45d",
                     "step_1sqr135d",
                     "step_1sqr225d",
                     "step_1sqr315d"
                 ]
             }
         },
         "Knight": {
             "B": {
                 "img": "BN.svg",
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
                 "spans": []
             },
             "W": {
                 "img": "WN.svg",
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
                 "spans": []
             }
         },
         "Queen": {
             "B": {
                 "img": "BQ.svg",
                 "offsets": [],
                 "spans": [
                     "step_1sqr180d",
                     "step_1sqr225d",
                     "step_1sqr270d",
                     "step_1sqr315d",
                     "step_1sqr0d",
                     "step_1sqr90d",
                     "step_1sqr45d",
                     "step_1sqr135d"
                 ]
             },
             "W": {
                 "img": "WQ.svg",
                 "offsets": [],
                 "spans": [
                     "step_1sqr0d",
                     "step_1sqr45d",
                     "step_1sqr90d",
                     "step_1sqr135d",
                     "step_1sqr180d",
                     "step_1sqr225d",
                     "step_1sqr270d",
                     "step_1sqr315d"
                 ]
             }
         },
         "Rook": {
             "B": {
                 "img": "BR.svg",
                 "offsets": [],
                 "spans": [
                     "step_1sqr180d",
                     "step_1sqr270d",
                     "step_1sqr0d",
                     "step_1sqr90d"
                 ]
             },
             "W": {
                 "img": "WR.svg",
                 "offsets": [],
                 "spans": [
                     "step_1sqr0d",
                     "step_1sqr90d",
                     "step_1sqr180d",
                     "step_1sqr270d"
                 ]
             }
         }
     },
     "promos": [
         "Queen",
         "Rook",
         "Bishop",
         "Knight"
     ]
 },
