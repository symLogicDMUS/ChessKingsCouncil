export let enpassant_test1 =  {
    "fen": "rnbqkb1r/p1pppppp/5n2/1pP5/8/8/PP1PPPPP/RNBQKBNR w KQkq b6 0 3",
    "json": {
        "rooks_moved": {
            "h1": False,
            "a1": False,
            "h8": False,
            "a8": False
        },
        "kings_moved": {
            "e1": False,
            "e8": False
        },
        "pawn_histories": {
            "a2": [
                "a2"
            ],
            "b2": [
                "b2"
            ],
            "c2": [
                "c2",
                "c4",
                "c5"
            ],
            "d2": [
                "d2"
            ],
            "e2": [
                "e2"
            ],
            "f2": [
                "f2"
            ],
            "g2": [
                "g2"
            ],
            "h2": [
                "h2"
            ],
            "a7": [
                "a7"
            ],
            "b7": [
                "b7",
                "b5"
            ],
            "c7": [
                "c7"
            ],
            "d7": [
                "d7"
            ],
            "e7": [
                "e7"
            ],
            "f7": [
                "f7"
            ],
            "g7": [
                "g7"
            ],
            "h7": [
                "h7"
            ]
        },
        "last_pawn_move": "b5",
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
