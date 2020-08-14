def_ = {
    "range_def": {
        "Rook": {
            "W": {
                "spans": [
                    "step_1sqr0d",
                    "step_1sqr90d",
                    "step_1sqr180d",
                    "step_1sqr270d"
                ],
                "offsets": [],
                "img": "WR.svg"
            },
            "B": {
                "spans": [
                    "step_1sqr180d",
                    "step_1sqr270d",
                    "step_1sqr0d",
                    "step_1sqr90d"
                ],
                "offsets": [],
                "img": "BR.svg"
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
                "img": "WB.svg"
            },
            "B": {
                "spans": [
                    "step_1sqr225d",
                    "step_1sqr315d",
                    "step_1sqr45d",
                    "step_1sqr135d"
                ],
                "offsets": [],
                "img": "BB.svg"
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
                "img": "WQ.svg"
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
                "img": "WN.svg"
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
                "img": "BN.svg"
            }
        }
    },
    "id_dict": {
        "k": "King",
        "q": "Queen",
        "r": "Rook",
        "b": "Bishop",
        "n": "Knight",
        "p": "Pawn"
    }
}

json_records = {
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
        "WP1": ["a2"],
        "WP2": ["b2"],
        "WP3": ["c2"],
        "WP4": ["d2"],
        "WP5": ["e2"],
        "WP6": ["f2"],
        "WP7": ["g2"],
        "WP8": ["h2"],
        "BP1": ["a7"],
        "BP2": ["b7"],
        "BP3": ["c7"],
        "BP4": ["d7"],
        "BP5": ["e7"],
        "BP6": ["f7"],
        "BP7": ["g7"],
        "BP8": ["h7"]
    },
    "last_pawn_move": "None",
    "num_consecutive_non_pawn_moves": 0
}
