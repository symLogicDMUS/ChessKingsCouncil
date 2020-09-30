export let stalemate_exp1 = {
    "fen": "3r1k2/8/8/8/b7/2n3nb/r7/4K3 w - - 0 1",
    "json": {
        "rooks_moved": {
            "h1": True,
            "a1": True,
            "h8": True,
            "a8": True
        },
        "kings_moved": {
            "e1": True,
            "e8": True
        },
        "pawn_histories": {},
        "last_pawn_move": "h5",
        "num_consecutive_non_pawn_moves": 30
    },
    "type": "standard",
    "pt": "W",
    "status": {
        "status": 0,
        "condition": "stalemate",
        "winner": "X"
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