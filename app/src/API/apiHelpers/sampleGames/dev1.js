export const sampleGames = {
    "Docker, Evil Morty, Dragon": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"],
                    "offsets":[],
                }
            },
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[2,-1], [0,-1], [1,-1], [-1,-1], [-2,-1], [1,-2], [0,-2], [-1,-2], [-1,-3]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": [[-2,1], [0,1], [-1,1], [1,1], [2,1], [-1,2], [0,2], [1,2], [1,3]],
                    "spans": [],
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": [[2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1]],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": [[-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1]],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[1,0], [-1,0], [2,0], [-2,0], [-2,-3], [-3,-2], [-3,2], [-2,3], [2,3], [3,2], [3,-2],
                        [2,-3]],
                    "spans": ["step_1sqr270d", "step_1sqr180d", "step_1sqr90d", "step_1sqr0d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets": [[-1,0], [1,0], [-2,0], [2,0], [2,3], [3,2], [3,-2], [2,-3], [-2,-3], [-3,-2], [-3,2],
                        [-2,3]],
                    "spans": ["step_1sqr90d", "step_1sqr0d", "step_1sqr270d", "step_1sqr180d"]
                }
            },
            "Timberwolf": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-black.svg?alt=media&token=5035afe0-b263-43ff-ad7f-220d93fd188e",
                    "offsets": [[2,-1], [2,-2], [1,-1], [1,-2], [-1,-1], [-1,-2], [-2,-2], [-2,-1], [1,1], [-1,1]],
                    "spans": [],

                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-white.svg?alt=media&token=6c662c21-4d2c-4b00-97d2-9ae214f611f5",
                    "offsets": [[-2,1], [-2,2], [-1,1], [-1,2], [1,1], [1,2], [2,2], [2,1], [-1,-1], [1,-1]],
                    "spans": [],
                }
            }
        },
        "fen": "r1bqkb1r/p1p1ppp1/2np2np/1p6/3PP1P1/2N2N2/PPP2P1P/R1BQKB1R w KQkq - 0 6",
        "ids": {
            "b": "Bishop",
            "k": "King",
            "n": "Docker",
            "o": "Timberwolf",
            "p": "Pawn",
            "q": "Dragon",
            "r": "EvilMorty"
        },
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "h6",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": ["a2"],
                "a7": ["a7"],
                "b2": ["b2"],
                "b5": ["b7", "b5"],
                "c2": ["c2"],
                "c7": ["c7"],
                "d4": ["d2", "d4"],
                "d6": ["d7", "d6"],
                "e4": ["e2", "e4"],
                "e7": ["e7"],
                "f2": ["f2"],
                "f7": ["f7"],
                "g4": ["g2", "g4"],
                "g7": ["g7"],
                "h2": ["h2"],
                "h6": ["h7", "h6"]
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
        "promos": ["Docker", "Dragon", "EvilMorty", "Timberwolf", "Bishop"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "Ficheall": {
        "defs": {
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[2,-1], [0,-1], [1,-1], [-1,-1], [-2,-1], [1,-2], [0,-2], [-1,-2], [-1,-3]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": [[-2,1], [0,1], [-1,1], [1,1], [2,1], [-1,2], [0,2], [1,2], [1,3]],
                    "spans": [],
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": [[2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1]],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": [[-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1]],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[-1,-2], [1,-2], [0,-1], [1,2], [0,1], [-1,2], [0,-2], [0,2]],
                    "spans": ["step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=32a35e46-0c9a-41ff-be85-0a85661ba41d",
                    "offsets": [[1,2], [-1,2], [0,1], [-1,-2], [0,-1], [1,-2], [0,2], [0,-2]],
                    "spans": ["step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d"]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[1,0], [-1,0], [2,0], [-2,0], [-2,-3], [-3,-2], [-3,2], [-2,3], [2,3], [3,2], [3,-2],
                        [2,-3]],
                    "spans": ["step_1sqr270d", "step_1sqr180d", "step_1sqr90d", "step_1sqr0d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets": [[-1,0], [1,0], [-2,0], [2,0], [2,3], [3,2], [3,-2], [2,-3], [-2,-3], [-3,-2], [-3,2],
                        [-2,3]],
                    "spans": ["step_1sqr90d", "step_1sqr0d", "step_1sqr270d", "step_1sqr180d"]
                }
            },
            "Material UI": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets": [[2,-3], [1,-2], [0,-1], [-1,-2], [-2,-3], [-2,-1], [2,0], [2,-1], [-3,0], [-4,-1],
                        [-4,-3], [-2,0]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets": [[-2,3], [-1,2], [0,1], [1,2], [2,3], [2,1], [-2,0], [-2,1], [3,0], [4,1], [4,3], [2,0]],
                    "spans": [],
                }
            },
            "React": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-red.png?alt=media&token=83bcaa2a-320d-4028-a889-b090e76855b4",
                    "offsets": [[0,2], [1,1], [2,0], [1,-1], [0,-2], [-1,-1], [-2,0], [-1,1]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-blue.svg?alt=media&token=ffd9b902-75df-43ae-9fbe-8c212ab9985f",
                    "offsets": [[0,-2], [-1,-1], [-2,0], [-1,1], [0,2], [1,1], [2,0], [1,-1]],
                    "spans": [],
                }
            },
            "Timberwolf": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-black.svg?alt=media&token=5035afe0-b263-43ff-ad7f-220d93fd188e",
                    "offsets": [[2,-1], [2,-2], [1,-1], [1,-2], [-1,-1], [-1,-2], [-2,-2], [-2,-1], [1,1], [-1,1]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-white.svg?alt=media&token=6c662c21-4d2c-4b00-97d2-9ae214f611f5",
                    "offsets": [[-2,1], [-2,2], [-1,1], [-1,2], [1,1], [1,2], [2,2], [2,1], [-1,-1], [1,-1]],
                    "spans": [],
                }
            }
        },
        "fen": "5bB1/3P3p/4p1pP/2p1Pk2/8/8/P4P1P/1NRQKBNR w K - 0 20",
        "ids": {
            "b": "Material UI",
            "c": "Evil Morty",
            "d": "Timberwolf",
            "f": "EvilMorty",
            "k": "King",
            "n": "Docker",
            "p": "Pawn",
            "q": "Dragon",
            "r": "React"
        },
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": true
            },
            "last_pawn_move": "h6",
            "num_consecutive_non_pawn_moves": 1,
            "pawn_histories": {
                "a2": ["a2"],
                "c5": ["c7", "c5"],
                "d7": ["c2", "c4", "c5", "c6", "d7"],
                "e5": ["d2", "d4", "e5"],
                "e6": ["e7", "e6"],
                "f2": ["f2"],
                "g6": ["g7", "g6"],
                "h2": ["h2"],
                "h6": ["g2", "g4", "g5", "h6"],
                "h7": ["h7"]
            },
            "rooks_moved": {
                "a1": true,
                "a8": false,
                "h1": false,
                "h8": true
            }
        },
        "captured": {
            "W": [],
            "B": [],
        },
        "promos": ["Docker", "Dragon", "Evil Morty", "EvilMorty", "Material UI", "React", "Timberwolf"],
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"],
                    "offsets":[],
                }
            },
            "Knight": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets": [[-1,-2], [-1,2], [1,-2], [1,2], [-2,-1], [-2,1], [2,-1], [2,1]],
                    "spans":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets": [[1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1]],
                    "spans":[],
                }
            },
            "Queen": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans": ["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d",
                        "step_1sqr90d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans": ["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d",
                        "step_1sqr225d", "step_1sqr270d", "step_1sqr315d"],
                    "offsets":[],
                }
            },
            "Rook": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans": ["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans": ["step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d"],
                    "offsets":[],
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
        "type": "Standard"
    },
    "React & Material UI & Docker & Dragon": {
        "defs": {
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[2,-1], [0,-1], [1,-1], [-1,-1], [-2,-1], [1,-2], [0,-2], [-1,-2], [-1,-3]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": [[-2,1], [0,1], [-1,1], [1,1], [2,1], [-1,2], [0,2], [1,2], [1,3]],
                    "spans": [],
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": [[2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1]],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": [[-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1]],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[-1,-2], [1,-2], [0,-1], [1,2], [0,1], [-1,2], [0,-2], [0,2]],
                    "spans": ["step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=32a35e46-0c9a-41ff-be85-0a85661ba41d",
                    "offsets": [[1,2], [-1,2], [0,1], [-1,-2], [0,-1], [1,-2], [0,2], [0,-2]],
                    "spans": ["step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d"]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[1,0], [-1,0], [2,0], [-2,0], [-2,-3], [-3,-2], [-3,2], [-2,3], [2,3], [3,2], [3,-2],
                        [2,-3]],
                    "spans": ["step_1sqr270d", "step_1sqr180d", "step_1sqr90d", "step_1sqr0d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets": [[-1,0], [1,0], [-2,0], [2,0], [2,3], [3,2], [3,-2], [2,-3], [-2,-3], [-3,-2], [-3,2],
                        [-2,3]],
                    "spans": ["step_1sqr90d", "step_1sqr0d", "step_1sqr270d", "step_1sqr180d"]
                }
            },
            "Material UI": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets": [[2,-3], [1,-2], [0,-1], [-1,-2], [-2,-3], [-2,-1], [2,0], [2,-1], [-3,0], [-4,-1],
                        [-4,-3], [-2,0]],
                    "spans": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets": [[-2,3], [-1,2], [0,1], [1,2], [2,3], [2,1], [-2,0], [-2,1], [3,0], [4,1], [4,3], [2,0]],
                    "spans": [],

                }
            },
            "React": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-red.png?alt=media&token=83bcaa2a-320d-4028-a889-b090e76855b4",
                    "offsets": [[0,2], [1,1], [2,0], [1,-1], [0,-2], [-1,-1], [-2,0], [-1,1]],
                    "spans": [],

                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-blue.svg?alt=media&token=ffd9b902-75df-43ae-9fbe-8c212ab9985f",
                    "offsets": [[0,-2], [-1,-1], [-2,0], [-1,1], [0,2], [1,1], [2,0], [1,-1]],
                    "spans": [],

                }
            },
            "Timberwolf": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-black.svg?alt=media&token=5035afe0-b263-43ff-ad7f-220d93fd188e",
                    "offsets": [[2,-1], [2,-2], [1,-1], [1,-2], [-1,-1], [-1,-2], [-2,-2], [-2,-1], [1,1], [-1,1]],
                    "spans": [],

                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-white.svg?alt=media&token=6c662c21-4d2c-4b00-97d2-9ae214f611f5",
                    "offsets": [[-2,1], [-2,2], [-1,1], [-1,2], [1,1], [1,2], [2,2], [2,1], [-1,-1], [1,-1]],
                    "spans": [],

                }
            }
        },
        "fen": "rnbqkbnr/1ppppppp/8/p7/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "ids": {
            "b": "Material UI",
            "c": "Evil Morty",
            "d": "Timberwolf",
            "f": "EvilMorty",
            "k": "King",
            "n": "Docker",
            "p": "Pawn",
            "q": "Dragon",
            "r": "React"
        },
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "a5",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": ["a2"],
                "a5": ["a7", "a5"],
                "b2": ["b2"],
                "b7": ["b7"],
                "c2": ["c2"],
                "c7": ["c7"],
                "d4": ["d2", "d4"],
                "d7": ["d7"],
                "e2": ["e2"],
                "e7": ["e7"],
                "f2": ["f2"],
                "f7": ["f7"],
                "g2": ["g2"],
                "g7": ["g7"],
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
        "promos": ["Docker", "Dragon", "Evil Morty", "EvilMorty", "Material UI", "React", "Timberwolf"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "Xakea": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"],
                    "offsets":[],
                }
            },
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[2,-1], [0,-1], [1,-1], [-1,-1], [-2,-1], [1,-2], [0,-2], [-1,-2], [-1,-3]],
                    "spans": [],

                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": [[-2,1], [0,1], [-1,1], [1,1], [2,1], [-1,2], [0,2], [1,2], [1,3]],
                    "spans": [],

                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": [[2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1]],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": [[-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1]],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": [[0,1], [1,0], [-1,0], [0,-1]],
                    "spans": ["step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=32a35e46-0c9a-41ff-be85-0a85661ba41d",
                    "offsets": [[0,-1], [-1,0], [1,0], [0,1]],
                    "spans": ["step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d"]
                }
            },
            "Firelord": {
                "B": {
                    "offsets": [[2,-1], [1,-2], [-1,-2], [-2,-1]],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "offsets": [[-2,1], [-1,2], [1,2], [2,1]],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Knight": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets": [[1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1]],
                    "spans":[]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets": [[1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1]],
                    "spans":[],
                }
            },
            "Material UI": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets": [[2,-3], [1,-2], [0,-1], [-1,-2], [-2,-3], [-2,-1], [2,0], [2,-1], [-3,0], [-4,-1],
                        [-4,-3], [-2,0]],
                    "spans":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets": [[-2,3], [-1,2], [0,1], [1,2], [2,3], [2,1], [-2,0], [-2,1], [3,0], [4,1], [4,3], [2,0]],
                    "spans":[],
                }
            },
            "Queen": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans": ["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d",
                        "step_1sqr90d", "step_1sqr45d", "step_1sqr135d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans": ["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d",
                        "step_1sqr225d", "step_1sqr270d", "step_1sqr315d"],
                    "offsets":[],
                }
            },
            "React": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-red.png?alt=media&token=83bcaa2a-320d-4028-a889-b090e76855b4",
                    "offsets": [[0,2], [1,1], [2,0], [1,-1], [0,-2], [-1,-1], [-2,0], [-1,1]],
                    "spans":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-blue.svg?alt=media&token=ffd9b902-75df-43ae-9fbe-8c212ab9985f",
                    "offsets": [[0,-2], [-1,-1], [-2,0], [-1,1], [0,2], [1,1], [2,0], [1,-1]],
                    "spans":[],
                }
            },
            "Rook": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans": ["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"],
                    "offsets":[],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans": ["step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d"],
                    "offsets":[],
                }
            }
        },
        "fen": "G1bk1bnr/2pqppp1/2n4p/3p4/3P4/8/P1P1PPPP/RNBQKBNR w KQ - 0 7",
        "ids": {
            "b": "Bishop",
            "c": "Evil Morty",
            "f": "React",
            "g": "Dragon",
            "j": "Material UI",
            "k": "King",
            "n": "Knight",
            "o": "Firelord",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook",
            "s": "Docker"
        },
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": true
            },
            "last_pawn_move": "a8",
            "num_consecutive_non_pawn_moves": 1,
            "pawn_histories": {
                "a2": ["a2"],
                "c2": ["c2"],
                "c7": ["c7"],
                "d4": ["d2", "d4"],
                "d5": ["d7", "d5"],
                "e2": ["e2"],
                "e7": ["e7"],
                "f2": ["f2"],
                "f7": ["f7"],
                "g2": ["g2"],
                "g7": ["g7"],
                "h2": ["h2"],
                "h6": ["h7", "h6"]
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
            "B": ["BR1", "BP1", "BP2"],
        },
        "promos": ["Docker", "Dragon", "Evil Morty", "Firelord", "Material UI", "React", "Rook", "Bishop", "Knight",
            "Queen"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ],
                    "offsets": [],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets": [
                        [-1,-2],
                        [-1,2],
                        [1,-2],
                        [1,2],
                        [-2,-1],
                        [-2,1],
                        [2,-1],
                        [2,1]
                    ],
                    "spans": []
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets": [
                        [1,2],
                        [1,-2],
                        [-1,2],
                        [-1,-2],
                        [2,1],
                        [2,-1],
                        [-2,1],
                        [-2,-1]
                    ],
                    "spans": []
                }
            },
            "Queen": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ],
                    "offsets": []
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
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
        }
    }
}

export const dbSampleGames = {
    "Docker, Evil Morty, Dragon": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"]
                }
            },
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["2,-1", "0,-1", "1,-1", "-1,-1", "-2,-1", "1,-2", "0,-2", "-1,-2", "-1,-3"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": ["-2,1", "0,1", "-1,1", "1,1", "2,1", "-1,2", "0,2", "1,2", "1,3"]
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": ["2,-1", "1,-2", "-1,-2", "-2,-1", "-2,1", "-1,2", "1,2", "2,1"],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": ["-2,1", "-1,2", "1,2", "2,1", "2,-1", "1,-2", "-1,-2", "-2,-1"],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["1,0", "-1,0", "2,0", "-2,0", "-2,-3", "-3,-2", "-3,2", "-2,3", "2,3", "3,2", "3,-2",
                        "2,-3"],
                    "spans": ["step_1sqr270d", "step_1sqr180d", "step_1sqr90d", "step_1sqr0d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets": ["-1,0", "1,0", "-2,0", "2,0", "2,3", "3,2", "3,-2", "2,-3", "-2,-3", "-3,-2", "-3,2",
                        "-2,3"],
                    "spans": ["step_1sqr90d", "step_1sqr0d", "step_1sqr270d", "step_1sqr180d"]
                }
            },
            "Timberwolf": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-black.svg?alt=media&token=5035afe0-b263-43ff-ad7f-220d93fd188e",
                    "offsets": ["2,-1", "2,-2", "1,-1", "1,-2", "-1,-1", "-1,-2", "-2,-2", "-2,-1", "1,1", "-1,1"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-white.svg?alt=media&token=6c662c21-4d2c-4b00-97d2-9ae214f611f5",
                    "offsets": ["-2,1", "-2,2", "-1,1", "-1,2", "1,1", "1,2", "2,2", "2,1", "-1,-1", "1,-1"]
                }
            }
        },
        "fen": "r1bqkb1r/p1p1ppp1/2np2np/1p6/3PP1P1/2N2N2/PPP2P1P/R1BQKB1R w KQkq - 0 6",
        "ids": {
            "b": "Bishop",
            "k": "King",
            "n": "Docker",
            "o": "Timberwolf",
            "p": "Pawn",
            "q": "Dragon",
            "r": "EvilMorty"
        },
        "img": "",
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "h6",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": ["a2"],
                "a7": ["a7"],
                "b2": ["b2"],
                "b5": ["b7", "b5"],
                "c2": ["c2"],
                "c7": ["c7"],
                "d4": ["d2", "d4"],
                "d6": ["d7", "d6"],
                "e4": ["e2", "e4"],
                "e7": ["e7"],
                "f2": ["f2"],
                "f7": ["f7"],
                "g4": ["g2", "g4"],
                "g7": ["g7"],
                "h2": ["h2"],
                "h6": ["h7", "h6"]
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
        "promos": ["Docker", "Dragon", "EvilMorty", "Timberwolf", "Bishop"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "Ficheall": {
        "defs": {
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["2,-1", "0,-1", "1,-1", "-1,-1", "-2,-1", "1,-2", "0,-2", "-1,-2", "-1,-3"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": ["-2,1", "0,1", "-1,1", "1,1", "2,1", "-1,2", "0,2", "1,2", "1,3"],
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": ["2,-1", "1,-2", "-1,-2", "-2,-1", "-2,1", "-1,2", "1,2", "2,1"],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": ["-2,1", "-1,2", "1,2", "2,1", "2,-1", "1,-2", "-1,-2", "-2,-1"],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["-1,-2", "1,-2", "0,-1", "1,2", "0,1", "-1,2", "0,-2", "0,2"],
                    "spans": ["step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=32a35e46-0c9a-41ff-be85-0a85661ba41d",
                    "offsets": ["1,2", "-1,2", "0,1", "-1,-2", "0,-1", "1,-2", "0,2", "0,-2"],
                    "spans": ["step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d"]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["1,0", "-1,0", "2,0", "-2,0", "-2,-3", "-3,-2", "-3,2", "-2,3", "2,3", "3,2", "3,-2",
                        "2,-3"],
                    "spans": ["step_1sqr270d", "step_1sqr180d", "step_1sqr90d", "step_1sqr0d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets": ["-1,0", "1,0", "-2,0", "2,0", "2,3", "3,2", "3,-2", "2,-3", "-2,-3", "-3,-2", "-3,2",
                        "-2,3"],
                    "spans": ["step_1sqr90d", "step_1sqr0d", "step_1sqr270d", "step_1sqr180d"]
                }
            },
            "Material UI": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets": ["2,-3", "1,-2", "0,-1", "-1,-2", "-2,-3", "-2,-1", "2,0", "2,-1", "-3,0", "-4,-1",
                        "-4,-3", "-2,0"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets": ["-2,3", "-1,2", "0,1", "1,2", "2,3", "2,1", "-2,0", "-2,1", "3,0", "4,1", "4,3", "2,0"],
                }
            },
            "React": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-red.png?alt=media&token=83bcaa2a-320d-4028-a889-b090e76855b4",
                    "offsets": ["0,2", "1,1", "2,0", "1,-1", "0,-2", "-1,-1", "-2,0", "-1,1"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-blue.svg?alt=media&token=ffd9b902-75df-43ae-9fbe-8c212ab9985f",
                    "offsets": ["0,-2", "-1,-1", "-2,0", "-1,1", "0,2", "1,1", "2,0", "1,-1"],
                }
            },
            "Timberwolf": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-black.svg?alt=media&token=5035afe0-b263-43ff-ad7f-220d93fd188e",
                    "offsets": ["2,-1", "2,-2", "1,-1", "1,-2", "-1,-1", "-1,-2", "-2,-2", "-2,-1", "1,1", "-1,1"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-white.svg?alt=media&token=6c662c21-4d2c-4b00-97d2-9ae214f611f5",
                    "offsets": ["-2,1", "-2,2", "-1,1", "-1,2", "1,1", "1,2", "2,2", "2,1", "-1,-1", "1,-1"],
                }
            }
        },
        "fen": "5bB1/3P3p/4p1pP/2p1Pk2/8/8/P4P1P/1NRQKBNR w K - 0 20",
        "ids": {
            "b": "Material UI",
            "c": "Evil Morty",
            "d": "Timberwolf",
            "f": "EvilMorty",
            "k": "King",
            "n": "Docker",
            "p": "Pawn",
            "q": "Dragon",
            "r": "React"
        },
        "img": "",
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": true
            },
            "last_pawn_move": "h6",
            "num_consecutive_non_pawn_moves": 1,
            "pawn_histories": {
                "a2": ["a2"],
                "c5": ["c7", "c5"],
                "d7": ["c2", "c4", "c5", "c6", "d7"],
                "e5": ["d2", "d4", "e5"],
                "e6": ["e7", "e6"],
                "f2": ["f2"],
                "g6": ["g7", "g6"],
                "h2": ["h2"],
                "h6": ["g2", "g4", "g5", "h6"],
                "h7": ["h7"]
            },
            "rooks_moved": {
                "a1": true,
                "a8": false,
                "h1": false,
                "h8": true
            }
        },
        "captured": {
            "W": [],
            "B": [],
        },
        "promos": ["Docker", "Dragon", "Evil Morty", "EvilMorty", "Material UI", "React", "Timberwolf"],
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"]
                }
            },
            "Knight": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets": ["-1,-2", "-1,2", "1,-2", "1,2", "-2,-1", "-2,1", "2,-1", "2,1"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets": ["1,2", "1,-2", "-1,2", "-1,-2", "2,1", "2,-1", "-2,1", "-2,-1"],
                }
            },
            "Queen": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans": ["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d",
                        "step_1sqr90d", "step_1sqr45d", "step_1sqr135d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans": ["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d",
                        "step_1sqr225d", "step_1sqr270d", "step_1sqr315d"]
                }
            },
            "Rook": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans": ["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
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
        "type": "Standard"
    },
    "React & Material UI & Docker & Dragon": {
        "defs": {
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["2,-1", "0,-1", "1,-1", "-1,-1", "-2,-1", "1,-2", "0,-2", "-1,-2", "-1,-3"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": ["-2,1", "0,1", "-1,1", "1,1", "2,1", "-1,2", "0,2", "1,2", "1,3"]
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": ["2,-1", "1,-2", "-1,-2", "-2,-1", "-2,1", "-1,2", "1,2", "2,1"],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": ["-2,1", "-1,2", "1,2", "2,1", "2,-1", "1,-2", "-1,-2", "-2,-1"],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["-1,-2", "1,-2", "0,-1", "1,2", "0,1", "-1,2", "0,-2", "0,2"],
                    "spans": ["step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=32a35e46-0c9a-41ff-be85-0a85661ba41d",
                    "offsets": ["1,2", "-1,2", "0,1", "-1,-2", "0,-1", "1,-2", "0,2", "0,-2"],
                    "spans": ["step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d"]
                }
            },
            "EvilMorty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["1,0", "-1,0", "2,0", "-2,0", "-2,-3", "-3,-2", "-3,2", "-2,3", "2,3", "3,2", "3,-2",
                        "2,-3"],
                    "spans": ["step_1sqr270d", "step_1sqr180d", "step_1sqr90d", "step_1sqr0d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets": ["-1,0", "1,0", "-2,0", "2,0", "2,3", "3,2", "3,-2", "2,-3", "-2,-3", "-3,-2", "-3,2",
                        "-2,3"],
                    "spans": ["step_1sqr90d", "step_1sqr0d", "step_1sqr270d", "step_1sqr180d"]
                }
            },
            "Material UI": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets": ["2,-3", "1,-2", "0,-1", "-1,-2", "-2,-3", "-2,-1", "2,0", "2,-1", "-3,0", "-4,-1",
                        "-4,-3", "-2,0"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets": ["-2,3", "-1,2", "0,1", "1,2", "2,3", "2,1", "-2,0", "-2,1", "3,0", "4,1", "4,3", "2,0"]
                }
            },
            "React": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-red.png?alt=media&token=83bcaa2a-320d-4028-a889-b090e76855b4",
                    "offsets": ["0,2", "1,1", "2,0", "1,-1", "0,-2", "-1,-1", "-2,0", "-1,1"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-blue.svg?alt=media&token=ffd9b902-75df-43ae-9fbe-8c212ab9985f",
                    "offsets": ["0,-2", "-1,-1", "-2,0", "-1,1", "0,2", "1,1", "2,0", "1,-1"]
                }
            },
            "Timberwolf": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-black.svg?alt=media&token=5035afe0-b263-43ff-ad7f-220d93fd188e",
                    "offsets": ["2,-1", "2,-2", "1,-1", "1,-2", "-1,-1", "-1,-2", "-2,-2", "-2,-1", "1,1", "-1,1"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Ftimberwolf-white.svg?alt=media&token=6c662c21-4d2c-4b00-97d2-9ae214f611f5",
                    "offsets": ["-2,1", "-2,2", "-1,1", "-1,2", "1,1", "1,2", "2,2", "2,1", "-1,-1", "1,-1"]
                }
            }
        },
        "fen": "rnbqkbnr/1ppppppp/8/p7/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "ids": {
            "b": "Material UI",
            "c": "Evil Morty",
            "d": "Timberwolf",
            "f": "EvilMorty",
            "k": "King",
            "n": "Docker",
            "p": "Pawn",
            "q": "Dragon",
            "r": "React"
        },
        "img": "",
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": false
            },
            "last_pawn_move": "a5",
            "num_consecutive_non_pawn_moves": 0,
            "pawn_histories": {
                "a2": ["a2"],
                "a5": ["a7", "a5"],
                "b2": ["b2"],
                "b7": ["b7"],
                "c2": ["c2"],
                "c7": ["c7"],
                "d4": ["d2", "d4"],
                "d7": ["d7"],
                "e2": ["e2"],
                "e7": ["e7"],
                "f2": ["f2"],
                "f7": ["f7"],
                "g2": ["g2"],
                "g7": ["g7"],
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
        "promos": ["Docker", "Dragon", "Evil Morty", "EvilMorty", "Material UI", "React", "Timberwolf"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
    },
    "Xakea": {
        "defs": {
            "Bishop": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": ["step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans": ["step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d"]
                }
            },
            "Docker": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["2,-1", "0,-1", "1,-1", "-1,-1", "-2,-1", "1,-2", "0,-2", "-1,-2", "-1,-3"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets": ["-2,1", "0,1", "-1,1", "1,1", "2,1", "-1,2", "0,2", "1,2", "1,3"],
                }
            },
            "Dragon": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets": ["2,-1", "1,-2", "-1,-2", "-2,-1", "-2,1", "-1,2", "1,2", "2,1"],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d",
                        "step_1sqr45d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets": ["-2,1", "-1,2", "1,2", "2,1", "2,-1", "1,-2", "-1,-2", "-2,-1"],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Evil Morty": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets": ["0,1", "1,0", "-1,0", "0,-1"],
                    "spans": ["step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_blue.svg?alt=media&token=32a35e46-0c9a-41ff-be85-0a85661ba41d",
                    "offsets": ["0,-1", "-1,0", "1,0", "0,1"],
                    "spans": ["step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d"]
                }
            },
            "Firelord": {
                "B": {
                    "img": "",
                    "offsets": ["2,-1", "1,-2", "-1,-2", "-2,-1"],
                    "spans": ["step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr0d", "step_1sqr315d"]
                },
                "W": {
                    "img": "",
                    "offsets": ["-2,1", "-1,2", "1,2", "2,1"],
                    "spans": ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr180d", "step_1sqr135d"]
                }
            },
            "Knight": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets": ["1,2", "1,-2", "-1,2", "-1,-2", "2,1", "2,-1", "-2,1", "-2,-1"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets": ["1,2", "1,-2", "-1,2", "-1,-2", "2,1", "2,-1", "-2,1", "-2,-1"],
                }
            },
            "Material UI": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets": ["2,-3", "1,-2", "0,-1", "-1,-2", "-2,-3", "-2,-1", "2,0", "2,-1", "-3,0", "-4,-1",
                        "-4,-3", "-2,0"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets": ["-2,3", "-1,2", "0,1", "1,2", "2,3", "2,1", "-2,0", "-2,1", "3,0", "4,1", "4,3", "2,0"],
                }
            },
            "Queen": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans": ["step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d",
                        "step_1sqr90d", "step_1sqr45d", "step_1sqr135d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans": ["step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d",
                        "step_1sqr225d", "step_1sqr270d", "step_1sqr315d"]
                }
            },
            "React": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-red.png?alt=media&token=83bcaa2a-320d-4028-a889-b090e76855b4",
                    "offsets": ["0,2", "1,1", "2,0", "1,-1", "0,-2", "-1,-1", "-2,0", "-1,1"],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/users%2Fimages%2Freact-blue.svg?alt=media&token=ffd9b902-75df-43ae-9fbe-8c212ab9985f",
                    "offsets": ["0,-2", "-1,-1", "-2,0", "-1,1", "0,2", "1,1", "2,0", "1,-1"],
                }
            },
            "Rook": {
                "B": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans": ["step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d"]
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans": ["step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d"]
                }
            }
        },
        "fen": "G1bk1bnr/2pqppp1/2n4p/3p4/3P4/8/P1P1PPPP/RNBQKBNR w KQ - 0 7",
        "ids": {
            "b": "Bishop",
            "c": "Evil Morty",
            "f": "React",
            "g": "Dragon",
            "j": "Material UI",
            "k": "King",
            "n": "Knight",
            "o": "Firelord",
            "p": "Pawn",
            "q": "Queen",
            "r": "Rook",
            "s": "Docker"
        },
        "img": "",
        "json": {
            "kings_moved": {
                "e1": false,
                "e8": true
            },
            "last_pawn_move": "a8",
            "num_consecutive_non_pawn_moves": 1,
            "pawn_histories": {
                "a2": ["a2"],
                "c2": ["c2"],
                "c7": ["c7"],
                "d4": ["d2", "d4"],
                "d5": ["d7", "d5"],
                "e2": ["e2"],
                "e7": ["e7"],
                "f2": ["f2"],
                "f7": ["f7"],
                "g2": ["g2"],
                "g7": ["g7"],
                "h2": ["h2"],
                "h6": ["h7", "h6"]
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
            "B": ["BR1", "BP1", "BP2"],
        },
        "promos": ["Docker", "Dragon", "Evil Morty", "Firelord", "Material UI", "React", "Rook", "Bishop", "Knight",
            "Queen"],
        "pt": "W",
        "status": {
            "condition": "",
            "status": 1,
            "winner": "-"
        },
        "type": "Custom"
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
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
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ],
                },
                "W": {
                    "img": "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
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
        }
    }
}