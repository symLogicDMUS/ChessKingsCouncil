export const sampleGames = {
    "Kasparov's Immortal, move 8": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets": [],
                },
                "W": {
                    "img": "",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"],
                    "offsets": [],
                }
            },
            "Knight": {
                "B": {
                    "img": "",
                    "offsets": [[-1, -2], [-1, 2], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [2, 1]],
                    "spans": [],
                },
                "W": {
                    "img": "",
                    "offsets": [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]],
                    "spans": [],
                }
            },
            "Queen": {
                "B": {
                    "img": "",
                    "spans": ["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d",
                        "step_1sqr90d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets": [],
                },
                "W": {
                    "img": "",
                    "spans": ["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d",
                        "step_1sqr225d", "step_1sqr270d", "step_1sqr315d"],
                    "offsets": [],
                }
            },
            "Rook": {
                "B": {
                    "img": "",
                    "spans": ["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"],
                    "offsets": [],
                },
                "W": {
                    "img": "",
                    "spans": ["step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d"],
                    "offsets": [],
                }
            }
        },
        "fen": "r1bqk2r/p2nppbp/2pp1npB/1p6/3PP3/2N2P2/PPPQN1PP/R3KB1R b KQkq - 0 9",
        "ids": {
            "b": "Bishop",
            "k": "King",
            "n": "Knight",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook"
        },
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "b5",
            "num_consecutive_non_pawn_moves": 3,
            "pawn_histories": {
                "a2": ["a2"],
                "a7": ["a7"],
                "b2": ["b2"],
                "b5": ["b7", "b5"],
                "c2": ["c2"],
                "c6": ["c7", "c6"],
                "d4": ["d2", "d4"],
                "d6": ["d7", "d6"],
                "e4": ["e2", "e4"],
                "e7": ["e7"],
                "f3": ["f2", "f3"],
                "f7": ["f7"],
                "g2": ["g2"],
                "g6": ["g7", "g6"],
                "h2": ["h2"],
                "h7": ["h7"]
            },
            "rooks_moved": {
                "a1": false,
                "a8": false,
                "h1": false,
                "h8": false
            }
        },
        "captured": {
            "W": [],
            "B": [],
        },
        "promos": ["Queen", "Rook", "Bishop", "Knight"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Standard",
        "imgUrlStrs": [
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBK.svg?alt=media&token=bed8526b-b997-4f19-a87e-ca5a0c8bc170",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWK.svg?alt=media&token=f36b8488-27fe-4655-aacb-86ff92d454ce",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBP.svg?alt=media&token=8723da28-a3bf-4533-bfea-e2a79ecea91c",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWP.svg?alt=media&token=a1547873-8d8c-4d29-917f-87ffff156419"
        ]
    },
    "super-checkmate impossible example": {
        "fen": "5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1",
        "json": {
            "rooks_moved": {
                "h1": true,
                "a1": true,
                "h8": true,
                "a8": true
            },
            "kings_moved": {
                "e1": true,
                "e8": true
            },
            "pawn_histories": {
                "e7": [
                    "e7"
                ],
                "g7": [
                    "g7"
                ]
            },
            "last_pawn_move": "g2",
            "num_consecutive_non_pawn_moves": 20
        },
        "captured": {
            "W": [
                "WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8",
                "WR1", "WR2", "WB1", "WB2", "WN1", "WN2", "WQ1"
            ],
            "B": [
                "BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BB1", "BN1"
            ]
        },
        "status": {
            "status": 0,
            "condition": "checkmate",
            "winner": "B"
        },
        "type": "standard",
        "pt": "W",
        "promos": [
            "Queen",
            "Rook",
            "Bishop",
            "Knight"
        ],
        "defs": {
            "Bishop": {
                "B": {
                    "img": "",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ],
                    "offsets": [],
                },
                "W": {
                    "img": "",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ],
                    "offsets": []
                }
            },
            "Knight": {
                "B": {
                    "img": "",
                    "offsets": [
                        [-1, -2],
                        [-1, 2],
                        [1, -2],
                        [1, 2],
                        [-2, -1],
                        [-2, 1],
                        [2, -1],
                        [2, 1]
                    ],
                    "spans": []
                },
                "W": {
                    "img": "",
                    "offsets": [
                        [1, 2],
                        [1, -2],
                        [-1, 2],
                        [-1, -2],
                        [2, 1],
                        [2, -1],
                        [-2, 1],
                        [-2, -1]
                    ],
                    "spans": []
                }
            },
            "Queen": {
                "B": {
                    "img": "",
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
                    "img": "",
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
                    "img": "",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ],
                    "offsets": []
                },
                "W": {
                    "img": "",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ],
                    "offsets": []
                }
            }
        },
        "ids": {
            "k": "King",
            "q": "Queen",
            "r": "Rook",
            "b": "Bishop",
            "n": "Knight",
            "p": "Pawn"
        },
        "imgUrlStrs": [
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBK.svg?alt=media&token=bed8526b-b997-4f19-a87e-ca5a0c8bc170",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWK.svg?alt=media&token=f36b8488-27fe-4655-aacb-86ff92d454ce",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBP.svg?alt=media&token=8723da28-a3bf-4533-bfea-e2a79ecea91c",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWP.svg?alt=media&token=a1547873-8d8c-4d29-917f-87ffff156419"
        ]
    }
}

export const dbSampleGames = {
    "Kasparov's Immortal, move 8": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"]
                },
                "W": {
                    "img": "",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"]
                }
            },
            "Knight": {
                "B": {
                    "img": "",
                    "offsets": ["-1,-2", "-1,2", "1,-2", "1,2", "-2,-1", "-2,1", "2,-1", "2,1"],
                },
                "W": {
                    "img": "",
                    "offsets": ["1,2", "1,-2", "-1,2", "-1,-2", "2,1", "2,-1", "-2,1", "-2,-1"],
                }
            },
            "Queen": {
                "B": {
                    "img": "",
                    "spans": ["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d",
                        "step_1sqr90d", "step_1sqr45d", "step_1sqr135d"]
                },
                "W": {
                    "img": "",
                    "spans": ["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d",
                        "step_1sqr225d", "step_1sqr270d", "step_1sqr315d"]
                }
            },
            "Rook": {
                "B": {
                    "img": "",
                    "spans": ["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"]
                },
                "W": {
                    "img": "",
                    "spans": ["step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d"]
                }
            }
        },
        "fen": "r1bqk2r/p2nppbp/2pp1npB/1p6/3PP3/2N2P2/PPPQN1PP/R3KB1R b KQkq - 0 9",
        "ids": {
            "b": "Bishop",
            "k": "King",
            "n": "Knight",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook"
        },
        "img": "",
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "b5",
            "num_consecutive_non_pawn_moves": 3,
            "pawn_histories": {
                "a2": ["a2"],
                "a7": ["a7"],
                "b2": ["b2"],
                "b5": ["b7", "b5"],
                "c2": ["c2"],
                "c6": ["c7", "c6"],
                "d4": ["d2", "d4"],
                "d6": ["d7", "d6"],
                "e4": ["e2", "e4"],
                "e7": ["e7"],
                "f3": ["f2", "f3"],
                "f7": ["f7"],
                "g2": ["g2"],
                "g6": ["g7", "g6"],
                "h2": ["h2"],
                "h7": ["h7"]
            },
            "rooks_moved": {
                "a1": false,
                "a8": false,
                "h1": false,
                "h8": false
            }
        },
        "captured": {
            "W": [],
            "B": [],
        },
        "promos": ["Queen", "Rook", "Bishop", "Knight"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Standard",
        "imgUrlStrs": [
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBK.svg?alt=media&token=bed8526b-b997-4f19-a87e-ca5a0c8bc170",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWK.svg?alt=media&token=f36b8488-27fe-4655-aacb-86ff92d454ce",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBP.svg?alt=media&token=8723da28-a3bf-4533-bfea-e2a79ecea91c",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWP.svg?alt=media&token=a1547873-8d8c-4d29-917f-87ffff156419"
        ]
    },
    "super-checkmate impossible example": {
        "fen": "5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1",
        "json": {
            "rooks_moved": {
                "h1": true,
                "a1": true,
                "h8": true,
                "a8": true
            },
            "kings_moved": {
                "e1": true,
                "e8": true
            },
            "pawn_histories": {
                "e7": [
                    "e7"
                ],
                "g7": [
                    "g7"
                ]
            },
            "last_pawn_move": "g2",
            "num_consecutive_non_pawn_moves": 20
        },
        "img": "",
        "captured": {
            "W": [
                "WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8",
                "WR1", "WR2", "WB1", "WB2", "WN1", "WN2", "WQ1"
            ],
            "B": [
                "BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BB1", "BN1"
            ]
        },
        "status": {
            "status": 0,
            "condition": "checkmate",
            "winner": "B"
        },
        "type": "standard",
        "pt": "W",
        "promos": [
            "Queen",
            "Rook",
            "Bishop",
            "Knight"
        ],
        "defs": {
            "Bishop": {
                "B": {
                    "img": "",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ],
                },
                "W": {
                    "img": "",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ],
                }
            },
            "Knight": {
                "B": {
                    "img": "",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "1,-2",
                        "1,2",
                        "-2,-1",
                        "-2,1",
                        "2,-1",
                        "2,1"
                    ],
                },
                "W": {
                    "img": "",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ],
                }
            },
            "Queen": {
                "B": {
                    "img": "",
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
                },
                "W": {
                    "img": "",
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
                }
            },
            "Rook": {
                "B": {
                    "img": "",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ],
                },
                "W": {
                    "img": "",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ],
                }
            }
        },
        "ids": {
            "k": "King",
            "q": "Queen",
            "r": "Rook",
            "b": "Bishop",
            "n": "Knight",
            "p": "Pawn"
        },
        "imgUrlStrs": [
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBK.svg?alt=media&token=bed8526b-b997-4f19-a87e-ca5a0c8bc170",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWK.svg?alt=media&token=f36b8488-27fe-4655-aacb-86ff92d454ce",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBP.svg?alt=media&token=8723da28-a3bf-4533-bfea-e2a79ecea91c",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWP.svg?alt=media&token=a1547873-8d8c-4d29-917f-87ffff156419"
        ]
    }
}