export let game_entry1 = {
        "piece_defs": {
            "Octocat": {
                "B": {
                    "img": "Octocat-black.svg",
                    "offsets": [
                        [0, -1],
                        [0, -2],
                        [0, -3],
                        [0, -4],
                        [-1, 0],
                        [-2, 0],
                        [-3, 0],
                        [-4, 0],
                        [-1, -1],
                        [-2, -2],
                        [-3, -3],
                        [0, 1],
                        [0, 2],
                        [0, 3],
                        [1, 0],
                        [2, 0],
                        [3, 0],
                        [1, 1],
                        [2, 2],
                        [3, 3],
                        [-1, 1],
                        [-2, 2],
                        [-3, 3],
                        [1, -1],
                        [2, -2],
                        [3, -3],
                        [-4, -2],
                        [-4, 2],
                        [4, -2],
                        [4, 2],
                        [0, 4],
                        [4, 0]
                    ],
                    "spans": []
                },
                "W": {
                    "img": "Octocat-white.svg",
                    "offsets": [
                        [0, 1],
                        [0, 2],
                        [0, 3],
                        [0, 4],
                        [1, 0],
                        [2, 0],
                        [3, 0],
                        [4, 0],
                        [1, 1],
                        [2, 2],
                        [3, 3],
                        [0, -1],
                        [0, -2],
                        [0, -3],
                        [-1, 0],
                        [-2, 0],
                        [-3, 0],
                        [-1, -1],
                        [-2, -2],
                        [-3, -3],
                        [1, -1],
                        [2, -2],
                        [3, -3],
                        [-1, 1],
                        [-2, 2],
                        [-3, 3],
                        [4, 2],
                        [4, -2],
                        [-4, 2],
                        [-4, -2],
                        [0, -4],
                        [-4, 0]
                    ],
                    "spans": []
                }
            },
            "Queen": {
                "B": {
                    "img": "BQ.svg",
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
                    "offsets": []
                },
                "W": {
                    "img": "WQ.svg",
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
                    "offsets": []
                }
            },
            "Rook": {
                "B": {
                    "img": "BR.svg",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ],
                    "offsets": []
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ],
                    "offsets": []
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        [0, -2],
                        [0, -1],
                        [-1, -1],
                        [-1, 0],
                        [1, 0],
                        [1, -1],
                        [2, 0],
                        [1, 1],
                        [0, 2],
                        [0, 1],
                        [-1, 1],
                        [-2, 0]
                    ],
                    "spans": []
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        [0, 2],
                        [0, 1],
                        [1, 1],
                        [1, 0],
                        [-1, 0],
                        [-1, 1],
                        [-2, 0],
                        [-1, -1],
                        [0, -2],
                        [0, -1],
                        [1, -1],
                        [2, 0]
                    ],
                    "spans": []
                }
            }
        },
        "fen": "R3k2r/2pppppp/6n1/8/3B4/8/3PPPPP/RNBQK1NR b KQ - 0 25",
        "ids": {
            "b": "Octocat",
            "k": "King",
            "n": "Tux",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook"
        },
        "json": {
            "kings_moved": {
                "c8": true,
                "d8": true,
                "e1": false,
                "e8": true,
                "f8": true
            },
            "last_pawn_move": "a8",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "c7": [
                    "c7"
                ],
                "d2": [
                    "d2"
                ],
                "d7": [
                    "d7"
                ],
                "e2": [
                    "e2"
                ],
                "e7": [
                    "e7"
                ],
                "f2": [
                    "f2"
                ],
                "f7": [
                    "f7"
                ],
                "g2": [
                    "g2"
                ],
                "g7": [
                    "g7"
                ],
                "h2": [
                    "h2"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": false,
                "a8": true,
                "b8": true,
                "c8": true,
                "h1": false,
                "h8": false
            }
        },
        "promos": [
            "Octocat"
        ],
        "pt": "test",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
}
// module.exports = game_entry1;