dd2 = {
    "9 Queen Checkmate": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "QQQQ2Qk/QQQQ1ppp/8/8/8/8/8/RN2KBNR b - - 0 77",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "a8",
            "num_consecutive_non_pawn_moves": 4,
            "pawn_histories": {
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
            "rooks_moved": {
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": True
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "standard"
    },
    "9 Queens": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "QQQQQ1rk/QQQQ1ppp/8/8/8/8/8/RN2KBNR w - - 0 76",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "a8",
            "num_consecutive_non_pawn_moves": 3,
            "pawn_histories": {
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
            "rooks_moved": {
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": True
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "Checkmate by promotion to Octocat": {
        "defs": {
            "Duke": {
                "B": {
                    "img": "black_duke.svg",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "-2,-1",
                        "-2,1",
                        "1,2",
                        "2,1",
                        "2,-1",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_duke.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "2,1",
                        "2,-1",
                        "-1,-2",
                        "-2,-1",
                        "-2,1",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Knight": {
                "B": {
                    "img": "BN.svg",
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
                    "img": "WN.svg",
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
            "Octocat": {
                "B": {
                    "img": "Octocat-black.svg",
                    "offsets": [
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "0,-4",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "0,1",
                        "0,2",
                        "0,3",
                        "1,0",
                        "2,0",
                        "3,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-4,-2",
                        "-4,2",
                        "4,-2",
                        "4,2",
                        "0,4",
                        "4,0"
                    ]
                },
                "W": {
                    "img": "Octocat-white.svg",
                    "offsets": [
                        "0,1",
                        "0,2",
                        "0,3",
                        "0,4",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "4,2",
                        "4,-2",
                        "-4,2",
                        "-4,-2",
                        "0,-4",
                        "-4,0"
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "Cn1qkb1r/3ppppp/p6n/8/8/3P4/PP2PPPP/RNBQKBNR b KQkq - 0 7",
        "ids": {
            "b": "X_Wing",
            "c": "Octocat",
            "e": "Jester",
            "j": "Tux",
            "k": "King",
            "n": "Knight",
            "p": "Pawn",
            "q": "Duke",
            "r": "Rook",
            "s": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "u": "EvilMorty",
            "y": "Firelord"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "a8",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a6": [
                    "a7",
                    "a6"
                ],
                "b2": [
                    "b2"
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "Duke",
            "EvilMorty",
            "Firelord",
            "Jester",
            "Octocat",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing"
        ],
        "pt": "test",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    },
    "NewCouncil": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "NewCustom": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "No pawn promo choices": {
        "defs": {
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "Pn2P2k/2p5/2N4p/p4p2/3pn3/8/1P1PP1PP/R1BQKBNR w KQ - 0 20",
        "ids": {
            "b": "Tux",
            "k": "King",
            "n": "X_Wing",
            "p": "Pawn",
            "q": "EvilMorty",
            "r": "Jester"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": True,
                "g8": True
            },
            "last_pawn_move": "d4",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a5": [
                    "a7",
                    "a5"
                ],
                "a8": [
                    "a2",
                    "a4",
                    "b5",
                    "b6",
                    "b7",
                    "a8"
                ],
                "b2": [
                    "b2"
                ],
                "c7": [
                    "c7"
                ],
                "d2": [
                    "d2"
                ],
                "d4": [
                    "d7",
                    "d6",
                    "d5",
                    "d4"
                ],
                "e2": [
                    "e2"
                ],
                "e8": [
                    "f2",
                    "f4",
                    "g5",
                    "f6",
                    "e7",
                    "e8"
                ],
                "f5": [
                    "f7",
                    "f5"
                ],
                "g2": [
                    "g2"
                ],
                "h2": [
                    "h2"
                ],
                "h6": [
                    "h7",
                    "h6"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "f8": True,
                "h1": False,
                "h8": True
            }
        },
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "custom"
    },
    "Pawn promotions to useless pieces": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Duke": {
                "B": {
                    "img": "black_duke.svg",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "-2,-1",
                        "-2,1",
                        "1,2",
                        "2,1",
                        "2,-1",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_duke.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "2,1",
                        "2,-1",
                        "-1,-2",
                        "-2,-1",
                        "-2,1",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Knight": {
                "B": {
                    "img": "BN.svg",
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
                    "img": "WN.svg",
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
            "Octocat": {
                "B": {
                    "img": "Octocat-black.svg",
                    "offsets": [
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "0,-4",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "0,1",
                        "0,2",
                        "0,3",
                        "1,0",
                        "2,0",
                        "3,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-4,-2",
                        "-4,2",
                        "4,-2",
                        "4,2",
                        "0,4",
                        "4,0"
                    ]
                },
                "W": {
                    "img": "Octocat-white.svg",
                    "offsets": [
                        "0,1",
                        "0,2",
                        "0,3",
                        "0,4",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "4,2",
                        "4,-2",
                        "-4,2",
                        "-4,-2",
                        "0,-4",
                        "-4,0"
                    ]
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            },
            "a1": {
                "B": {
                    "img": "1.svg"
                },
                "W": {
                    "img": "1.svg"
                }
            },
            "a10": {
                "B": {
                    "img": "10.svg"
                },
                "W": {
                    "img": "10.svg"
                }
            },
            "a11": {
                "B": {
                    "img": "11.svg"
                },
                "W": {
                    "img": "11.svg"
                }
            },
            "a12": {
                "B": {
                    "img": "12.svg"
                },
                "W": {
                    "img": "12.svg"
                }
            },
            "a13": {
                "B": {
                    "img": "13.svg"
                },
                "W": {
                    "img": "13.svg"
                }
            },
            "a14": {
                "B": {
                    "img": "14.svg"
                },
                "W": {
                    "img": "14.svg"
                }
            },
            "a15": {
                "B": {
                    "img": "15.svg"
                },
                "W": {
                    "img": "15.svg"
                }
            },
            "a16": {
                "B": {
                    "img": "16.svg"
                },
                "W": {
                    "img": "16.svg"
                }
            },
            "a17": {
                "B": {
                    "img": "17.svg"
                },
                "W": {
                    "img": "17.svg"
                }
            },
            "a19": {
                "B": {
                    "img": "19.svg"
                },
                "W": {
                    "img": "19.svg"
                }
            },
            "a2": {
                "B": {
                    "img": "2.svg"
                },
                "W": {
                    "img": "2.svg"
                }
            },
            "a20": {
                "B": {
                    "img": "20.svg"
                },
                "W": {
                    "img": "20.svg"
                }
            }
        },
        "fen": "ICEGSMDU/8/8/p1p1k3/2B5/N1N5/3B4/R2K3R w - - 0 66",
        "ids": {
            "a": "Tux",
            "b": "Bishop",
            "c": "a15",
            "d": "a17",
            "e": "a10",
            "f": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "g": "a14",
            "h": "Duke",
            "i": "a11",
            "j": "X_Wing",
            "k": "King",
            "l": "EvilMorty",
            "m": "a12",
            "n": "Knight",
            "o": "a13",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook",
            "s": "a2",
            "t": "Jester",
            "u": "a20",
            "v": "a19",
            "w": "Firelord",
            "x": "Octocat",
            "y": "a1",
            "z": "a16"
        },
        "json": {
            "kings_moved": {
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "a5",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a5": [
                    "a7",
                    "a6",
                    "a5"
                ],
                "c5": [
                    "c7",
                    "c6",
                    "c5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": True
            }
        },
        "promos": [
            "Duke",
            "EvilMorty",
            "Firelord",
            "Jester",
            "Octocat",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing",
            "a1",
            "a10",
            "a11",
            "a12",
            "a13",
            "a14",
            "a15",
            "a16",
            "a17",
            "a19",
            "a2",
            "a20",
            "a3",
            "a4",
            "a5",
            "a6",
            "a7",
            "a8",
            "a9",
            "q18"
        ],
        "pt": "test",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "custom"
    },
    "Stalemate 1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "8/k7/8/8/8/8/4K3/8 w - - 0 15",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "a1",
            "num_consecutive_non_pawn_moves": 28,
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "stalemate",
            "status": 0,
            "winner": "-"
        },
        "type": "standard"
    },
    "Standard white wins using pawns": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "2Q5/k6p/1P3n2/P1ppppp1/3P4/4P3/3B1PPP/RN1QKBNR b KQ - 0 23",
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
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "b6",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a5": [
                    "a2",
                    "a4",
                    "a5"
                ],
                "b6": [
                    "b2",
                    "b4",
                    "b5",
                    "b6"
                ],
                "c5": [
                    "c7",
                    "c5"
                ],
                "d4": [
                    "d2",
                    "d3",
                    "d4"
                ],
                "d5": [
                    "d7",
                    "d6",
                    "d5"
                ],
                "e3": [
                    "e2",
                    "e3"
                ],
                "e5": [
                    "e7",
                    "e5"
                ],
                "f2": [
                    "f2"
                ],
                "f5": [
                    "f7",
                    "f5"
                ],
                "g2": [
                    "g2"
                ],
                "g5": [
                    "g7",
                    "g5"
                ],
                "h2": [
                    "h2"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "standard"
    },
    "White about to win by capture black queen and promote": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "1q2kbnr/P1pppppp/8/8/1n6/8/PQ1PPPbP/RNB1KBNR w KQkq - 0 9",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "a7",
            "num_consecutive_non_pawn_moves": 9,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "c2",
                    "c4",
                    "c5",
                    "b6",
                    "a7"
                ],
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
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "White about to win with Queen in custom game": {
        "defs": {
            "Duke": {
                "B": {
                    "img": "black_duke.svg",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "-2,-1",
                        "-2,1",
                        "1,2",
                        "2,1",
                        "2,-1",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_duke.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "2,1",
                        "2,-1",
                        "-1,-2",
                        "-2,-1",
                        "-2,1",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Octocat": {
                "B": {
                    "img": "Octocat-black.svg",
                    "offsets": [
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "0,-4",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "0,1",
                        "0,2",
                        "0,3",
                        "1,0",
                        "2,0",
                        "3,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-4,-2",
                        "-4,2",
                        "4,-2",
                        "4,2",
                        "0,4",
                        "4,0"
                    ]
                },
                "W": {
                    "img": "Octocat-white.svg",
                    "offsets": [
                        "0,1",
                        "0,2",
                        "0,3",
                        "0,4",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "4,2",
                        "4,-2",
                        "-4,2",
                        "-4,-2",
                        "0,-4",
                        "-4,0"
                    ]
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "1Qq1kbnr/2ppp2p/5p2/6p1/2P5/p7/P2PPPPP/RNBQKBNR w KQkq - 0 8",
        "ids": {
            "b": "Tux",
            "g": "EvilMorty",
            "k": "King",
            "l": "Jester",
            "n": "Octocat",
            "o": "X_Wing",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook",
            "s": "Firelord",
            "y": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "z": "Duke"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "a3",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a3": [
                    "a7",
                    "a5",
                    "a4",
                    "a3"
                ],
                "c4": [
                    "c2",
                    "c4"
                ],
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
                "f6": [
                    "f7",
                    "f6"
                ],
                "g2": [
                    "g2"
                ],
                "g5": [
                    "g7",
                    "g5"
                ],
                "h2": [
                    "h2"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "Duke",
            "EvilMorty",
            "Firelord",
            "Jester",
            "Octocat",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing"
        ],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "custom"
    },
    "White resigned the third": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbq2nr/pppp1k1p/3b2p1/8/8/8/PPP1PPPP/RNBQKBNR w KQ - 0 5",
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
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "f7",
            "num_consecutive_non_pawn_moves": 1,
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
                "c7": [
                    "c7"
                ],
                "d7": [
                    "d7"
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "W",
        "status": {
            "condition": "resigned",
            "status": 0,
            "winner": "B"
        },
        "type": "standard"
    },
    "White resigns": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "resigned",
            "status": 0,
            "winner": "B"
        },
        "type": "standard"
    },
    "White resigns again": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "W",
        "status": {
            "condition": "resigned",
            "status": 0,
            "winner": "B"
        },
        "type": "standard"
    },
    "White wins by EvilMorty promotion": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            }
        },
        "fen": "1O1k1b1r/p1pppppp/6n1/8/8/8/P2PPPPP/RNBQKBNR b KQ - 0 14",
        "ids": {
            "b": "Bishop",
            "k": "King",
            "n": "Tux",
            "o": "EvilMorty",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "b8",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "EvilMorty"
        ],
        "pt": "test",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    },
    "White wins by dimond piece promotion": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Duke": {
                "B": {
                    "img": "black_blue_devil.svg",
                    "offsets": [
                        "1,0",
                        "-1,0",
                        "0,-1",
                        "0,1"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_blue_devil.svg",
                    "offsets": [
                        "-1,0",
                        "1,0",
                        "0,1",
                        "0,-1"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Knight": {
                "B": {
                    "img": "BN.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "1Ubqk2r/3pn1b1/7p/4pp2/6p1/8/P2PPPPP/RNBQKBNR b KQkq - 0 11",
        "ids": {
            "a": "X_Wing",
            "b": "Bishop",
            "c": "EvilMorty",
            "g": "Firelord",
            "k": "King",
            "n": "Knight",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook",
            "s": "Duke",
            "u": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "v": "Jester",
            "x": "Tux"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "b8",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
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
                "e5": [
                    "e7",
                    "e5"
                ],
                "f2": [
                    "f2"
                ],
                "f5": [
                    "f7",
                    "f5"
                ],
                "g2": [
                    "g2"
                ],
                "g4": [
                    "g7",
                    "g5",
                    "g4"
                ],
                "h2": [
                    "h2"
                ],
                "h6": [
                    "h7",
                    "h6"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "EvilMorty",
            "Firelord",
            "Jester",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing",
            "Duke"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    },
    "White wins by pawn promo to rook in standard game": {
        "defs": {
            "Octocat": {
                "B": {
                    "img": "Octocat-black.svg",
                    "offsets": [
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "0,-4",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "0,1",
                        "0,2",
                        "0,3",
                        "1,0",
                        "2,0",
                        "3,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-4,-2",
                        "-4,2",
                        "4,-2",
                        "4,2",
                        "0,4",
                        "4,0"
                    ]
                },
                "W": {
                    "img": "Octocat-white.svg",
                    "offsets": [
                        "0,1",
                        "0,2",
                        "0,3",
                        "0,4",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "4,2",
                        "4,-2",
                        "-4,2",
                        "-4,-2",
                        "0,-4",
                        "-4,0"
                    ]
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
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
                "c8": True,
                "d8": True,
                "e1": False,
                "e8": True,
                "f8": True
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
                "a1": False,
                "a8": True,
                "b8": True,
                "c8": True,
                "h1": False,
                "h8": False
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
    },
    "White wins with 3 queens": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "Q2Q4/2pk2P1/3p4/p2Q3p/5p2/4p3/P2PP1PP/RNB1KBNR b KQ - 0 23",
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
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "g7",
            "num_consecutive_non_pawn_moves": 2,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a5": [
                    "a7",
                    "a6",
                    "a5"
                ],
                "c7": [
                    "c7"
                ],
                "d2": [
                    "d2"
                ],
                "d6": [
                    "d7",
                    "d6"
                ],
                "e2": [
                    "e2"
                ],
                "e3": [
                    "e7",
                    "e5",
                    "e4",
                    "e3"
                ],
                "f4": [
                    "f7",
                    "f5",
                    "f4"
                ],
                "g2": [
                    "g2"
                ],
                "g7": [
                    "f2",
                    "g3",
                    "g4",
                    "g5",
                    "g6",
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "standard"
    },
    "White wins with Evil Morty and Jester": {
        "defs": {
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "1n2Q3/p1p2B1k/r5p1/1p4Rp/8/8/PP5P/R1BQK1N1 b Q - 0 26",
        "ids": {
            "b": "Jester",
            "k": "King",
            "n": "X_Wing",
            "p": "Pawn",
            "q": "EvilMorty",
            "r": "Tux"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "e8",
            "num_consecutive_non_pawn_moves": 2,
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
                    "b6",
                    "b5"
                ],
                "c7": [
                    "c7"
                ],
                "g6": [
                    "g7",
                    "g6"
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
                "a1": False,
                "a8": True,
                "h1": True,
                "h8": True
            }
        },
        "promos": [
            "EvilMorty"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    },
    "White wins with Evil Morty and Tux": {
        "defs": {
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "3n3k/2B2R2/3N2N1/8/2B4P/8/PP5P/4K3 b - - 0 44",
        "ids": {
            "b": "X_Wing",
            "k": "King",
            "n": "Tux",
            "p": "Pawn",
            "q": "Jester",
            "r": "EvilMorty"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "f4",
            "num_consecutive_non_pawn_moves": 37,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "b2": [
                    "b2"
                ],
                "h2": [
                    "h2"
                ],
                "h4": [
                    "g2",
                    "g3",
                    "h4"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": False,
                "h1": True,
                "h8": True
            }
        },
        "promos": [
            "X_Wing",
            "Tux",
            "Jester",
            "EvilMorty"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    },
    "White wins with Queen Octocat Tux": {
        "defs": {
            "Duke": {
                "B": {
                    "img": "black_duke.svg",
                    "offsets": [
                        "-1,-2",
                        "-1,2",
                        "-2,-1",
                        "-2,1",
                        "1,2",
                        "2,1",
                        "2,-1",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_duke.svg",
                    "offsets": [
                        "1,2",
                        "1,-2",
                        "2,1",
                        "2,-1",
                        "-1,-2",
                        "-2,-1",
                        "-2,1",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "Octocat": {
                "B": {
                    "img": "Octocat-black.svg",
                    "offsets": [
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "0,-4",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "0,1",
                        "0,2",
                        "0,3",
                        "1,0",
                        "2,0",
                        "3,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-4,-2",
                        "-4,2",
                        "4,-2",
                        "4,2",
                        "0,4",
                        "4,0"
                    ]
                },
                "W": {
                    "img": "Octocat-white.svg",
                    "offsets": [
                        "0,1",
                        "0,2",
                        "0,3",
                        "0,4",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "1,1",
                        "2,2",
                        "3,3",
                        "0,-1",
                        "0,-2",
                        "0,-3",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "4,2",
                        "4,-2",
                        "-4,2",
                        "-4,-2",
                        "0,-4",
                        "-4,0"
                    ]
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "3r2k1/2p5/5QB1/4N2p/2P5/B7/P2PPPPp/R3K2R b KQ - 0 27",
        "ids": {
            "b": "Tux",
            "g": "EvilMorty",
            "k": "King",
            "l": "Jester",
            "n": "Octocat",
            "o": "X_Wing",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook",
            "s": "Firelord",
            "y": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "z": "Duke"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "h2",
            "num_consecutive_non_pawn_moves": 1,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "c4": [
                    "c2",
                    "c4"
                ],
                "c7": [
                    "c7"
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
                    "g7",
                    "g5",
                    "g4",
                    "g3",
                    "h2"
                ],
                "h5": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": True
            }
        },
        "promos": [
            "Duke",
            "EvilMorty",
            "Firelord",
            "Jester",
            "Octocat",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    },
    "castle_test1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R w KQkq - 1 25",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "b7",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a7": [
                    "a7",
                    "a5"
                ],
                "c2": [
                    "c2",
                    "c4",
                    "b5",
                    "b6",
                    "b7"
                ],
                "g2": [
                    "g2",
                    "g4",
                    "g5",
                    "f6"
                ],
                "g7": [
                    "g7",
                    "g5",
                    "g4"
                ],
                "h2": [
                    "h2",
                    "h4"
                ],
                "h7": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "castle_test2": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "1q2k3/8/8/8/8/8/8/R3K2R w K - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "d2",
            "num_consecutive_non_pawn_moves": 15,
            "rooks_moved": {
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": True
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
        "type": "standard"
    },
    "castle_test3": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "h5",
            "num_consecutive_non_pawn_moves": 10,
            "pawn_histories": {
                "a2": [
                    "a2",
                    "a4"
                ],
                "a7": [
                    "a7",
                    "a5"
                ],
                "b2": [
                    "b2",
                    "b4"
                ],
                "b7": [
                    "b7",
                    "b5"
                ],
                "c2": [
                    "c2",
                    "c4"
                ],
                "c7": [
                    "c7",
                    "c5"
                ],
                "d2": [
                    "d2",
                    "d4"
                ],
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
                    "e5"
                ],
                "f2": [
                    "f2",
                    "f4"
                ],
                "f7": [
                    "f7",
                    "f5"
                ],
                "g2": [
                    "g2",
                    "g4"
                ],
                "g7": [
                    "g7",
                    "g5"
                ],
                "h2": [
                    "h2",
                    "h4"
                ],
                "h7": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "castle_test4": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r2qk2r/8/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/8/R2QK2R w KQkq - 8 13",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "h5",
            "num_consecutive_non_pawn_moves": 8,
            "pawn_histories": {
                "a2": [
                    "a2",
                    "a4"
                ],
                "a7": [
                    "a7",
                    "a5"
                ],
                "b2": [
                    "b2",
                    "b4"
                ],
                "b7": [
                    "b7",
                    "b5"
                ],
                "c2": [
                    "c2",
                    "c4"
                ],
                "c7": [
                    "c7",
                    "c5"
                ],
                "d2": [
                    "d2",
                    "d4"
                ],
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
                    "e5"
                ],
                "f2": [
                    "f2",
                    "f4"
                ],
                "f7": [
                    "f7",
                    "f5"
                ],
                "g2": [
                    "g2",
                    "g4"
                ],
                "g7": [
                    "g7",
                    "g5"
                ],
                "h2": [
                    "h2",
                    "h4"
                ],
                "h7": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "castle_test5": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r3kbnr/p2ppppp/bqn5/1pp5/1PP5/B1N5/P1QPPPPP/R3KBNR b KQkq - 7 6",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
            "num_consecutive_non_pawn_moves": 0,
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
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "castle_test6": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r3k2r/8/8/8/PPPPPPPP/8/8/R3K2R b KQkq - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "h4",
            "num_consecutive_non_pawn_moves": 3,
            "pawn_histories": {
                "WP1": [
                    "a2",
                    "a4"
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
                    "d2",
                    "d4"
                ],
                "WP5": [
                    "e2",
                    "e4"
                ],
                "WP6": [
                    "f2",
                    "f4"
                ],
                "WP7": [
                    "g2",
                    "g4"
                ],
                "WP8": [
                    "h2",
                    "h4"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "check_example1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "1n5r/8/6N1/3pK3/2k1P3/7q/1nb5/3r1B1R b - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "d5",
            "num_consecutive_non_pawn_moves": 15,
            "pawn_histories": {
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "check_example2": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "3k2r1/3ppn2/K6q/8/p7/1BPb1N2/1P2P3/R6R w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "a4",
            "num_consecutive_non_pawn_moves": 6,
            "pawn_histories": {
                "a7": [
                    "a7",
                    "a5",
                    "a4"
                ],
                "b2": [
                    "b2"
                ],
                "c2": [
                    "c2",
                    "c3"
                ],
                "d7": [
                    "d7"
                ],
                "e2": [
                    "e2"
                ],
                "e7": [
                    "e7"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "check_example3": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "None",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "c2": [
                    "c2",
                    "c3",
                    "c4",
                    "c5",
                    "d6"
                ],
                "d2": [
                    "d2",
                    "d3"
                ],
                "f2": [
                    "f2",
                    "f4",
                    "f5",
                    "f6"
                ],
                "g2": [
                    "g2",
                    "g4",
                    "g5",
                    "g6",
                    "g7"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "check_example4": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnq3rk/pp3ppp/1BN1P1R1/4K3/R5QP/3P4/8/b7 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "e6",
            "num_consecutive_non_pawn_moves": 8,
            "pawn_histories": {
                "a7": [
                    "a7"
                ],
                "b7": [
                    "b7"
                ],
                "d2": [
                    "d2",
                    "d3"
                ],
                "e2": [
                    "e2",
                    "e4",
                    "e5",
                    "e6"
                ],
                "f7": [
                    "f7"
                ],
                "g7": [
                    "g7"
                ],
                "h2": [
                    "h2",
                    "h4"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "check_example6": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "k6r/pppr2pp/b2P4/8/4N3/8/2PP1PPP/q3QK2 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "None",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a7": [
                    "a7"
                ],
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
                "c7": [
                    "c7"
                ],
                "d2": [
                    "d2"
                ],
                "e2": [
                    "e2",
                    "e4",
                    "e5",
                    "d6"
                ],
                "f2": [
                    "f2"
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
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "custom stalemate 1 black penguin trap white king": {
        "defs": {
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "r2k1b1r/7p/8/p7/8/7p/4np1P/b6K w - - 0 44",
        "ids": {
            "b": "Firelord",
            "k": "King",
            "n": "Tux",
            "p": "Pawn",
            "q": "EvilMorty",
            "r": "X_Wing"
        },
        "json": {
            "kings_moved": {
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "f2",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a5": [
                    "a7",
                    "a5"
                ],
                "f2": [
                    "f7",
                    "f5",
                    "f4",
                    "f3",
                    "f2"
                ],
                "h2": [
                    "h2"
                ],
                "h3": [
                    "g7",
                    "g5",
                    "g4",
                    "h3"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": False,
                "h1": True,
                "h8": False
            }
        },
        "promos": [
            "EvilMorty",
            "Firelord",
            "Tux",
            "X_Wing"
        ],
        "pt": "B",
        "status": {
            "condition": "stalemate",
            "status": 0,
            "winner": "-"
        },
        "type": "custom"
    },
    "dummy_game": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "en-passant-test": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkb1r/1p1ppppp/5n2/pPp5/8/8/PBPPPPPP/RN1QKBNR w KQkq - 0 4",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "a5",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a5": [
                    "a7",
                    "a5"
                ],
                "b5": [
                    "b2",
                    "b4",
                    "b5"
                ],
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
                "c5": [
                    "c7",
                    "c5"
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "enpassant_test1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkb1r/p1pppppp/5n2/1pP5/8/8/PP1PPPPP/RNBQKBNR w KQkq b6 0 3",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "b5",
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
                "b7": [
                    "b7",
                    "b5"
                ],
                "c2": [
                    "c2",
                    "c4",
                    "c5"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "fundemental_defense": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r4rk1/1pp1qppp/2nbbn2/pP1pp3/3PP3/2NBBN2/P1P1QPPP/R3K2R w KQ a6 0 10",
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
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "a5",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7",
                    "a5"
                ],
                "b2": [
                    "b2",
                    "b4",
                    "b5"
                ],
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
                "c7": [
                    "c7"
                ],
                "d2": [
                    "d2",
                    "d4"
                ],
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
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
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": True
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
        "type": "standard"
    },
    "king_range_test": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "None",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "d2": [
                    "d2",
                    "d4"
                ],
                "e7": [
                    "e7",
                    "e5",
                    "e4"
                ],
                "g7": [
                    "g7"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "knight_threat1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r4rk1/1pp1qppp/3bbn2/pP1pp3/4P3/2NBBN2/P1n1QPPP/R3K2R w KQ a6 0 10",
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
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "b5",
            "num_consecutive_non_pawn_moves": 6,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7",
                    "a5"
                ],
                "b2": [
                    "b2",
                    "b4",
                    "b5"
                ],
                "b7": [
                    "b7"
                ],
                "c7": [
                    "c7"
                ],
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
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
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "knight_threat2": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r4rk1/1pp1Nppp/3bbn1N/pP1pp3/4P3/3NBn2/P1n1QPNP/R3K2R w KQ a6 0 10",
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
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "b5",
            "num_consecutive_non_pawn_moves": 6,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7",
                    "a5"
                ],
                "b2": [
                    "b2",
                    "b4",
                    "b5"
                ],
                "b7": [
                    "b7"
                ],
                "c7": [
                    "c7"
                ],
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
                    "e5"
                ],
                "f7": [
                    "f7"
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": True
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "pawn_promo": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b KQkq - 1 11",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "c2",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2",
                    "a4"
                ],
                "b7": [
                    "b7",
                    "b5",
                    "b4",
                    "b3",
                    "c2"
                ],
                "c2": [
                    "c2",
                    "c3",
                    "c4",
                    "c5",
                    "c6",
                    "b7"
                ],
                "d7": [
                    "d7"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
                    "e5"
                ],
                "f2": [
                    "f2"
                ],
                "f7": [
                    "f7",
                    "f5"
                ],
                "g2": [
                    "g2",
                    "g4"
                ],
                "g7": [
                    "g7"
                ],
                "h2": [
                    "h2"
                ],
                "h7": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "pawn_range": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "r1bqkbnr/p1p2pp1/1p6/n2pp1Pp/1PP1P3/N7/P2P1P1P/R1BQKBNR w KQkq h6 0 7",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "a7": [
                    "a7"
                ],
                "b2": [
                    "b2",
                    "b4"
                ],
                "b7": [
                    "b7",
                    "b6"
                ],
                "c2": [
                    "c2",
                    "c4"
                ],
                "c7": [
                    "c7"
                ],
                "d2": [
                    "d2"
                ],
                "d7": [
                    "d7",
                    "d5"
                ],
                "e2": [
                    "e2",
                    "e4"
                ],
                "e7": [
                    "e7",
                    "e5"
                ],
                "f2": [
                    "f2"
                ],
                "f7": [
                    "f7"
                ],
                "g2": [
                    "g2",
                    "g4",
                    "g5"
                ],
                "g7": [
                    "g7"
                ],
                "h2": [
                    "h2"
                ],
                "h7": [
                    "h7",
                    "h5"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
        "type": "standard"
    },
    "pawn_threat1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbq1bnr/8/8/2k5/1P4p1/5K2/8/RNBQ1BNR b - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "g7",
            "num_consecutive_non_pawn_moves": 18,
            "pawn_histories": {
                "b2": [
                    "b2",
                    "b4"
                ],
                "g7": [
                    "g7",
                    "g5",
                    "g4"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
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
            "condition": "check",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "pinned_ex1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "8/rNQK1B1q/2R5/1N1R1N2/b2n4/7b/8/1k1r4 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "c2",
            "num_consecutive_non_pawn_moves": 20,
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
        "type": "standard"
    },
    "pinned_ex2": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "q2r2b1/kN1B1Q2/8/qP1K1R1r/8/1P1B1N2/b7/3r3b w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "b5",
            "num_consecutive_non_pawn_moves": 6,
            "pawn_histories": {
                "b2": [
                    "b2",
                    "b3"
                ],
                "c2": [
                    "c2",
                    "c4",
                    "b5"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
        "type": "standard"
    },
    "promo_test": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "4k3/2B4R/3B4/8/8/8/1p6/R3K3 b - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "b2",
            "num_consecutive_non_pawn_moves": 2,
            "pawn_histories": {
                "b7": [
                    "b7",
                    "b5",
                    "b4",
                    "b3",
                    "b2"
                ]
            },
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
        "type": "standard"
    },
    "ranges_test": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "f7",
            "num_consecutive_non_pawn_moves": 15,
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
        "type": "standard"
    },
    "stalemate only the Kings remain": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "8/k7/8/8/8/8/4K3/8 w - - 0 15",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "a1",
            "num_consecutive_non_pawn_moves": 28,
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "stalemate",
            "status": 0,
            "winner": "-"
        },
        "type": "standard"
    },
    "stalemate_exp1": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "3r1k2/8/8/8/b7/2n3nb/r7/4K3 w - - 0 1",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "h5",
            "num_consecutive_non_pawn_moves": 30,
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "stalemate",
            "status": 0,
            "winner": "X"
        },
        "type": "standard"
    },
    "standard black pawn just en-passant": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppp1p/8/8/5P2/N6p/PPPPP1P1/R1BQKBNR w KQkq h3 0 6",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "h3",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "f4": [
                    "f2",
                    "f4"
                ],
                "f7": [
                    "f7"
                ],
                "g2": [
                    "g2"
                ],
                "h3": [
                    "g7",
                    "g5",
                    "g4",
                    "h3"
                ],
                "h7": [
                    "h7"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "standard"
    },
    "standard stalemate 1 white bishops trap king": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "4k3/2B4R/3B4/8/8/8/8/1R2K3 b - - 0 2",
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
                "e1": True,
                "e8": True
            },
            "last_pawn_move": "b1",
            "num_consecutive_non_pawn_moves": 1,
            "rooks_moved": {
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
            "condition": "stalemate",
            "status": 0,
            "winner": "-"
        },
        "type": "standard"
    },
    "super_checkmate_impossible_example": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
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
                "e1": True,
                "e8": True
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
                "a1": True,
                "a8": True,
                "h1": True,
                "h8": True
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
    },
    "white resigns 2": {
        "defs": {
            "Duke": {
                "B": {
                    "img": "black_duke.svg",
                    "offsets": [
                        "1,0",
                        "-1,0",
                        "0,-1",
                        "0,1"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_duke.svg",
                    "offsets": [
                        "-1,0",
                        "1,0",
                        "0,1",
                        "0,-1"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        "ids": {
            "b": "Firelord",
            "j": "Tux",
            "k": "King",
            "n": "EvilMorty",
            "p": "Pawn",
            "q": "Jester",
            "r": "Duke",
            "t": "X_Wing",
            "y": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels"
        },
        "json": {
            "kings_moved": {
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "None",
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
                "b7": [
                    "b7"
                ],
                "c2": [
                    "c2"
                ],
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
                "a1": False,
                "a8": False,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "Duke",
            "EvilMorty",
            "Firelord",
            "Jester",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing"
        ],
        "pt": "test",
        "status": {
            "condition": "resigned",
            "status": 0,
            "winner": "B"
        },
        "type": "custom"
    },
    "white wins by capturing black Queen and promoting to Queen": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
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
                    "img": "WN.svg",
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
                    ]
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
                    ]
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
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        },
        "fen": "1Q2kbnr/2pppppp/8/8/1n6/8/PQ1PPPbP/RNB1KBNR b KQkq - 0 10",
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
                "e1": False,
                "e8": False
            },
            "last_pawn_move": "b8",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
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
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": False
            }
        },
        "promos": [
            "q",
            "r",
            "b",
            "n"
        ],
        "pt": "test",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "standard"
    },
    "white wins by dimond promotion again": {
        "defs": {
            "Duke": {
                "B": {
                    "img": "black_blue_devil.svg",
                    "offsets": [
                        "1,0",
                        "-1,0",
                        "0,-1",
                        "0,1"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr225d",
                        "step_1sqr135d",
                        "step_1sqr45d",
                        "step_1sqr315d"
                    ]
                },
                "W": {
                    "img": "white_blue_devil.svg",
                    "offsets": [
                        "-1,0",
                        "1,0",
                        "0,1",
                        "0,-1"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr315d",
                        "step_1sqr225d",
                        "step_1sqr135d"
                    ]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "evil_morty_red.svg",
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
                    "img": "evil_morty_white.svg",
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
            "Firelord": {
                "B": {
                    "img": "black_firehat.svg",
                    "offsets": [
                        "1,-1",
                        "0,-2",
                        "0,-3",
                        "-1,-1",
                        "-3,1",
                        "3,1"
                    ],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "white_firehat.svg",
                    "offsets": [
                        "-1,1",
                        "0,2",
                        "0,3",
                        "1,1",
                        "3,-1",
                        "-3,-1"
                    ],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Jester": {
                "B": {
                    "img": "black_jester.svg",
                    "offsets": [
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "1,-2",
                        "-1,2"
                    ],
                    "spans": [
                        "step_1sqr270d",
                        "step_1sqr180d",
                        "step_1sqr90d",
                        "step_1sqr0d"
                    ]
                },
                "W": {
                    "img": "white_jester.svg",
                    "offsets": [
                        "1,2",
                        "2,2",
                        "2,1",
                        "2,-1",
                        "2,-2",
                        "-1,-2",
                        "-2,-2",
                        "-2,-1",
                        "-2,1",
                        "-2,2",
                        "-1,2",
                        "1,-2"
                    ],
                    "spans": [
                        "step_1sqr90d",
                        "step_1sqr0d",
                        "step_1sqr270d",
                        "step_1sqr180d"
                    ]
                }
            },
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels": {
                "B": {
                    "img": "black-gem.svg",
                    "offsets": [
                        "3,-4",
                        "2,-4",
                        "1,-4",
                        "0,-4",
                        "-1,-4",
                        "-2,-4",
                        "-3,-4",
                        "-4,-4",
                        "3,-3",
                        "2,-3",
                        "1,-3",
                        "0,-3",
                        "-1,-3",
                        "-2,-3",
                        "-3,-3",
                        "-4,-3",
                        "3,-2",
                        "2,-2",
                        "1,-2",
                        "1,-2",
                        "0,-2",
                        "1,-2",
                        "-1,-2",
                        "-2,-2",
                        "-3,-2",
                        "-4,-2",
                        "3,-1",
                        "2,-1",
                        "1,-1",
                        "0,-1",
                        "-1,-1",
                        "-2,-1",
                        "-3,-1",
                        "-4,-1",
                        "3,0",
                        "2,0",
                        "1,0",
                        "-1,0",
                        "-2,0",
                        "-3,0",
                        "-4,0",
                        "3,1",
                        "2,1",
                        "1,1",
                        "0,1",
                        "-1,1",
                        "-2,1",
                        "-3,1",
                        "-4,1",
                        "3,2",
                        "2,2",
                        "1,2",
                        "0,2",
                        "-1,2",
                        "-2,2",
                        "-3,2",
                        "-4,2",
                        "3,3",
                        "2,3",
                        "1,3",
                        "0,3",
                        "-1,3",
                        "-2,3",
                        "-3,3",
                        "-4,3",
                        "3,4",
                        "2,4",
                        "1,4",
                        "0,4",
                        "-1,4",
                        "-3,4",
                        "-2,4",
                        "-4,4",
                        "4,3",
                        "4,2",
                        "4,1",
                        "4,0",
                        "4,-1",
                        "4,-2",
                        "4,-3",
                        "4,-4",
                        "4,4"
                    ]
                },
                "W": {
                    "img": "white-gem.svg",
                    "offsets": [
                        "-3,4",
                        "-2,4",
                        "-1,4",
                        "0,4",
                        "1,4",
                        "2,4",
                        "3,4",
                        "4,4",
                        "-3,3",
                        "-2,3",
                        "-1,3",
                        "0,3",
                        "1,3",
                        "2,3",
                        "3,3",
                        "4,3",
                        "-3,2",
                        "-2,2",
                        "-1,2",
                        "-1,2",
                        "0,2",
                        "-1,2",
                        "1,2",
                        "2,2",
                        "3,2",
                        "4,2",
                        "-3,1",
                        "-2,1",
                        "-1,1",
                        "0,1",
                        "1,1",
                        "2,1",
                        "3,1",
                        "4,1",
                        "-3,0",
                        "-2,0",
                        "-1,0",
                        "1,0",
                        "2,0",
                        "3,0",
                        "4,0",
                        "-3,-1",
                        "-2,-1",
                        "-1,-1",
                        "0,-1",
                        "1,-1",
                        "2,-1",
                        "3,-1",
                        "4,-1",
                        "-3,-2",
                        "-2,-2",
                        "-1,-2",
                        "0,-2",
                        "1,-2",
                        "2,-2",
                        "3,-2",
                        "4,-2",
                        "-3,-3",
                        "-2,-3",
                        "-1,-3",
                        "0,-3",
                        "1,-3",
                        "2,-3",
                        "3,-3",
                        "4,-3",
                        "-3,-4",
                        "-2,-4",
                        "-1,-4",
                        "0,-4",
                        "1,-4",
                        "3,-4",
                        "2,-4",
                        "4,-4",
                        "-4,-3",
                        "-4,-2",
                        "-4,-1",
                        "-4,0",
                        "-4,1",
                        "-4,2",
                        "-4,3",
                        "-4,4",
                        "-4,-4"
                    ]
                }
            },
            "Tux": {
                "B": {
                    "img": "Tux_red.svg",
                    "offsets": [
                        "0,-2",
                        "0,-1",
                        "-1,-1",
                        "-1,0",
                        "1,0",
                        "1,-1",
                        "2,0",
                        "1,1",
                        "0,2",
                        "0,1",
                        "-1,1",
                        "-2,0"
                    ]
                },
                "W": {
                    "img": "Tux_white.svg",
                    "offsets": [
                        "0,2",
                        "0,1",
                        "1,1",
                        "1,0",
                        "-1,0",
                        "-1,1",
                        "-2,0",
                        "-1,-1",
                        "0,-2",
                        "0,-1",
                        "1,-1",
                        "2,0"
                    ]
                }
            },
            "X_Wing": {
                "B": {
                    "img": "x-wing-black.svg",
                    "offsets": [
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,-1",
                        "2,-2",
                        "3,-3",
                        "-1,1",
                        "-2,2",
                        "-3,3"
                    ]
                },
                "W": {
                    "img": "x-wing-white.svg",
                    "offsets": [
                        "-1,-1",
                        "-2,-2",
                        "-3,-3",
                        "1,1",
                        "2,2",
                        "3,3",
                        "-1,1",
                        "-2,2",
                        "-3,3",
                        "1,-1",
                        "2,-2",
                        "3,-3"
                    ]
                }
            }
        },
        "fen": "4Q1B1/1p6/1k2P2p/8/4bp2/4B3/P2P1PPP/RN2K1NR b KQ - 0 22",
        "ids": {
            "b": "Jester",
            "d": "Tux",
            "k": "King",
            "m": "Duke",
            "n": "X_Wing",
            "p": "Pawn",
            "q": "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "r": "EvilMorty",
            "w": "Firelord"
        },
        "json": {
            "kings_moved": {
                "c7": True,
                "d8": True,
                "e1": False,
                "e8": True
            },
            "last_pawn_move": "e8",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": [
                    "a2"
                ],
                "b7": [
                    "b7"
                ],
                "d2": [
                    "d2"
                ],
                "e6": [
                    "c2",
                    "c4",
                    "d5",
                    "e6"
                ],
                "f2": [
                    "f2"
                ],
                "f4": [
                    "f7",
                    "f6",
                    "f5",
                    "f4"
                ],
                "g2": [
                    "g2"
                ],
                "h2": [
                    "h2"
                ],
                "h6": [
                    "h7",
                    "h6"
                ]
            },
            "rooks_moved": {
                "a1": False,
                "a8": True,
                "h1": False,
                "h8": True
            }
        },
        "promos": [
            "Duke",
            "EvilMorty",
            "Firelord",
            "Jester",
            "ThisIsAveryLongPieceNameToTestTheCSSTextOverflowPropertiesOfNameLabels",
            "Tux",
            "X_Wing"
        ],
        "pt": "W",
        "status": {
            "condition": "checkmate",
            "status": 0,
            "winner": "W"
        },
        "type": "custom"
    }
}