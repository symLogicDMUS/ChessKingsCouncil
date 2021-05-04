export const dbSampleGames = {
    "Docker and Dragon": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "/Images/Pieces/Standard/BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WB.svg",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Docker": {
                "B": {
                    "img": "/Images/Pieces/Samples/docker-red.svg",
                    "offsets": [
                        "2,-1",
                        "0,-1",
                        "1,-1",
                        "-1,-1",
                        "-2,-1",
                        "1,-2",
                        "0,-2",
                        "-1,-2",
                        "-1,-3",
                        "0,1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/docker.svg",
                    "offsets": [
                        "-2,1",
                        "0,1",
                        "-1,1",
                        "1,1",
                        "2,1",
                        "-1,2",
                        "0,2",
                        "1,2",
                        "1,3",
                        "0,-1"
                    ]
                }
            },
            "Dragon": {
                "B": {
                    "img": "/Images/Pieces/Samples/dragon-black.svg",
                    "offsets": [
                        "2,-1",
                        "1,-2",
                        "-1,-2",
                        "-2,-1",
                        "-2,1",
                        "-1,2",
                        "1,2",
                        "2,1"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr180d",
                        "step_1sqr135d",
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr0d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/dragon-white.svg",
                    "offsets": [
                        "-2,1",
                        "-1,2",
                        "1,2",
                        "2,1",
                        "2,-1",
                        "1,-2",
                        "-1,-2",
                        "-2,-1"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr0d",
                        "step_1sqr315d",
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr180d",
                        "step_1sqr135d"
                    ]
                }
            },
            "Knight": {
                "B": {
                    "img": "/Images/Pieces/Standard/BN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                }
            },
            "Queen": {
                "B": {
                    "img": "/Images/Pieces/Standard/BQ.svg",
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
                    "img": "/Images/Pieces/Standard/",
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
                    "img": "/Images/Pieces/Standard/BR.svg",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rn1qk1nr/p1ppbpp1/b7/4p2p/1pPP4/2N1QN2/PP1BPPPP/2KR1B1R w kq - 0 8",
        "ids": {
            "a": "Queen",
            "b": "Bishop",
            "c": "Knight",
            "k": "King",
            "n": "Docker",
            "p": "Pawn",
            "q": "Dragon",
            "r": "Rook"
        },
        "imgUrlStrs": [
            "",
            "",
            "",
            ""
        ],
        "json": {
            "kings_moved": {
                "e1": true,
                "e8": false
            },
            "last_pawn_move": "e5",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7"
                ],
                "b2": [
                    "b2"
                ],
                "b4": [
                    "b7",
                    "b5",
                    "b4"
                ],
                "c4": [
                    "c2",
                    "c4"
                ],
                "c7": [
                    "c7"
                ],
                "d4": [
                    "d2",
                    "d4"
                ],
                "d7": [
                    "d7"
                ],
                "e2": [
                    "e2"
                ],
                "e5": [
                    "e7",
                    "e6",
                    "e5"
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
                "h5": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": false,
                "a8": false,
                "h1": false,
                "h8": false
            }
        },
        "promos": [
            "Docker",
            "Dragon",
            "Rook",
            "Bishop",
            "Queen",
            "Knight"
        ],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "Evil Morty + Node + Docker + Dragon": {
        "captured": {
            "B": [
                "BP4"
            ],
            "W": [
                "WP3",
                "WP2"
            ]
        },
        "defs": {
            "Bishop": {
                "B": {
                    "img": "/Images/Pieces/Standard/BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WB.svg",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Docker": {
                "B": {
                    "img": "/Images/Pieces/Samples/docker-red.svg",
                    "offsets": [
                        "2,-1",
                        "0,-1",
                        "1,-1",
                        "-1,-1",
                        "-2,-1",
                        "1,-2",
                        "0,-2",
                        "-1,-2",
                        "-1,-3",
                        "0,1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/docker.svg",
                    "offsets": [
                        "-2,1",
                        "0,1",
                        "-1,1",
                        "1,1",
                        "2,1",
                        "-1,2",
                        "0,2",
                        "1,2",
                        "1,3",
                        "0,-1"
                    ]
                }
            },
            "Dragon": {
                "B": {
                    "img": "/Images/Pieces/Samples/dragon-black.svg",
                    "offsets": [
                        "2,-1",
                        "1,-2",
                        "-1,-2",
                        "-2,-1",
                        "-2,1",
                        "-1,2",
                        "1,2",
                        "2,1"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr180d",
                        "step_1sqr135d",
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr0d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/dragon-white.svg",
                    "offsets": [
                        "-2,1",
                        "-1,2",
                        "1,2",
                        "2,1",
                        "2,-1",
                        "1,-2",
                        "-1,-2",
                        "-2,-1"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr0d",
                        "step_1sqr315d",
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr180d",
                        "step_1sqr135d"
                    ]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "/Images/Pieces/Samples/evil_morty_red.svg",
                    "offsets": [
                        "0,1",
                        "1,0",
                        "-1,0",
                        "0,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/evil_morty_white.svg",
                    "offsets": [
                        "0,-1",
                        "-1,0",
                        "1,0",
                        "0,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "Knight": {
                "B": {
                    "img": "/Images/Pieces/Standard/BN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                }
            },
            "Node": {
                "B": {
                    "img": "/Images/Pieces/Samples/node-red.png",
                    "offsets": [
                        "0,2",
                        "1,1",
                        "2,0",
                        "1,-1",
                        "0,-2",
                        "-1,-1",
                        "-2,0",
                        "-1,1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/node-green.png",
                    "offsets": [
                        "0,-2",
                        "-1,-1",
                        "-2,0",
                        "-1,1",
                        "0,2",
                        "1,1",
                        "2,0",
                        "1,-1"
                    ]
                }
            },
            "Queen": {
                "B": {
                    "img": "/Images/Pieces/Standard/BQ.svg",
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
                    "img": "/Images/Pieces/Standard/WQ.svg",
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
                    "img": "/Images/Pieces/Standard/BR.svg",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "1nb1kbn1/rpp1p1p1/5pr1/1q5p/p1NPPP2/2B1QN2/P5PP/R3KB1R w KQ - 0 12",
        "ids": {
            "a": "Rook",
            "b": "Node",
            "c": "Bishop",
            "d": "Queen",
            "e": "Knight",
            "k": "King",
            "n": "Docker",
            "p": "Pawn",
            "q": "Dragon",
            "r": "Evil Morty"
        },
        "imgUrlStrs": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "a4",
            "num_consecutive_non_pawn_moves": 2,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a4": [
                    "a7",
                    "a5",
                    "a4"
                ],
                "b7": [
                    "b7"
                ],
                "c7": [
                    "c7"
                ],
                "d4": [
                    "d2",
                    "d4"
                ],
                "e4": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7"
                ],
                "f4": [
                    "f2",
                    "f4"
                ],
                "f6": [
                    "f7",
                    "f6"
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
                "h5": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": false,
                "a8": true,
                "h1": false,
                "h8": true
            }
        },
        "promos": [
            "Node",
            "Docker",
            "Dragon",
            "Evil Morty",
            "Rook",
            "Bishop",
            "Queen",
            "Knight"
        ],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "Kasparov's Immortal, move 8": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "/Images/Pieces/Standard/BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WB.svg",
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
                    "img": "/Images/Pieces/Standard/BN.svg",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "1,-2",
                        "1,2",
                        "-2,-1",
                        "-2,1",
                        "2,-1",
                        "2,1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                }
            },
            "Queen": {
                "B": {
                    "img": "/Images/Pieces/Standard/BQ.svg",
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
                    "img": "/Images/Pieces/Standard/WQ.svg",
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
                    "img": "/Images/Pieces/Standard/BR.svg",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
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
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7"
                ],
                "b2": [
                    "b2"
                ],
                "b5": [
                    "b7",
                    "b5"
                ],
                "c2": [
                    "c2"
                ],
                "c6": [
                    "c7",
                    "c6"
                ],
                "d4": [
                    "d2",
                    "d4"
                ],
                "d6": [
                    "d7",
                    "d6"
                ],
                "e4": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7"
                ],
                "f3": [
                    "f2",
                    "f3"
                ],
                "f7": [
                    "f7"
                ],
                "g2": [
                    "g2"
                ],
                "g6": [
                    "g7",
                    "g6"
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
                "a8": false,
                "h1": false,
                "h8": false
            }
        },
        "promos": [
            "Queen",
            "Rook",
            "Bishop",
            "Knight"
        ],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Standard"
    },
    "Material UI and Node": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "/Images/Pieces/Standard/BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WB.svg",
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
                    "img": "/Images/Pieces/Standard/BN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                }
            },
            "Material UI": {
                "B": {
                    "img": "/Images/Pieces/Samples/material-ui-red.svg",
                    "offsets": [
                        "2,-3",
                        "1,-2",
                        "0,-1",
                        "-1,-2",
                        "-2,-3",
                        "-2,-1",
                        "2,0",
                        "2,-1",
                        "-3,0",
                        "-4,-1",
                        "-4,-3",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/material-ui.svg",
                    "offsets": [
                        "-2,3",
                        "-1,2",
                        "0,1",
                        "1,2",
                        "2,3",
                        "2,1",
                        "-2,0",
                        "-2,1",
                        "3,0",
                        "4,1",
                        "4,3",
                        "2,0"
                    ]
                }
            },
            "Node": {
                "B": {
                    "img": "/Images/Pieces/Samples/node-red.png",
                    "offsets": [
                        "0,2",
                        "1,1",
                        "2,0",
                        "1,-1",
                        "0,-2",
                        "-1,-1",
                        "-2,0",
                        "-1,1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Samples/node-green.png",
                    "offsets": [
                        "0,-2",
                        "-1,-1",
                        "-2,0",
                        "-1,1",
                        "0,2",
                        "1,1",
                        "2,0",
                        "1,-1"
                    ]
                }
            },
            "Queen": {
                "B": {
                    "img": "/Images/Pieces/Standard/BQ.svg",
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
                    "img": "/Images/Pieces/Standard/WQ.svg",
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
                    "img": "/Images/Pieces/Standard/BR.svg",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r2bk2r/p2ppppp/n1b2n2/qpp5/P4N1P/2BP1BP1/1PPKPP2/R2Q2NR b kq - 0 9",
        "ids": {
            "a": "Bishop",
            "b": "Node",
            "c": "Knight",
            "k": "King",
            "n": "Material UI",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook"
        },
        "imgUrlStrs": [
            "",
            "",
            "",
            ""
        ],
        "json": {
            "kings_moved": {
                "e1": true,
                "e8": false
            },
            "last_pawn_move": "h4",
            "num_consecutive_non_pawn_moves": 2,
            "pawn_histories": {
                "a4": [
                    "a2",
                    "a4"
                ],
                "a7": [
                    "a7"
                ],
                "b2": [
                    "b2"
                ],
                "b5": [
                    "b7",
                    "b5"
                ],
                "c2": [
                    "c2"
                ],
                "c5": [
                    "c7",
                    "c5"
                ],
                "d3": [
                    "d2",
                    "d3"
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
                "g3": [
                    "g2",
                    "g3"
                ],
                "g7": [
                    "g7"
                ],
                "h4": [
                    "h2",
                    "h4"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": false,
                "a8": false,
                "h1": false,
                "h8": false
            }
        },
        "promos": [
            "Node",
            "Material UI",
            "Rook",
            "Queen",
            "Bishop",
            "Knight"
        ],
        "pt": "B",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "super-checkmate impossible example": {
        "captured": {
            "B": [
                "BP1",
                "BP2",
                "BP3",
                "BP4",
                "BP5",
                "BP6",
                "BB1",
                "BN1"
            ],
            "W": [
                "WP1",
                "WP2",
                "WP3",
                "WP4",
                "WP5",
                "WP6",
                "WP7",
                "WP8",
                "WR1",
                "WR2",
                "WB1",
                "WB2",
                "WN1",
                "WN2",
                "WQ1"
            ]
        },
        "defs": {
            "Bishop": {
                "B": {
                    "img": "/Images/Pieces/Standard/BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WB.svg",
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
                    "img": "/Images/Pieces/Standard/BN.svg",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "1,-2",
                        "1,2",
                        "-2,-1",
                        "-2,1",
                        "2,-1",
                        "2,1"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WN.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "-1,2",
                        "-1,-2",
                        "2,1",
                        "2,-1",
                        "-2,1",
                        "-2,-1"
                    ]
                }
            },
            "Queen": {
                "B": {
                    "img": "/Images/Pieces/Standard/BQ.svg",
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
                    "img": "/Images/Pieces/Standard/WQ.svg",
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
                    "img": "/Images/Pieces/Standard/BR.svg",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ]
                },
                "W": {
                    "img": "/Images/Pieces/Standard/WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1",
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
                "e1": true,
                "e8": true
            },
            "last_pawn_move": "g2",
            "num_consecutive_non_pawn_moves": 20,
            "pawn_histories": {
                "e7": [
                    "e7"
                ],
                "g7": [
                    "g7"
                ]
            },
            "rooks_moved": {
                "a1": true,
                "a8": true,
                "h1": true,
                "h8": true
            }
        },
        "promos": [
            "Queen",
            "Rook",
            "Bishop",
            "Knight"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "B"
        },
        "type": "standard"
    }
}