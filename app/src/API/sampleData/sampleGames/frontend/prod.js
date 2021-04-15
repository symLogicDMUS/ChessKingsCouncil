export const sampleGames = {
    "Docker and Dragon" : {
        "defs" : {
            "Bishop" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans" : [ "step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans" : [ "step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d" ]
                }
            },
            "Docker" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets" : [ [2,-1], [0,-1], [1,-1], [-1,-1], [-2,-1], [1,-2], [0,-2], [-1,-2], [-1,-3], [0,1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets" : [ [-2,1], [0,1], [-1,1], [1,1], [2,1], [-1,2], [0,2], [1,2], [1,3], [0,-1] ]
                }
            },
            "Dragon" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets" : [ [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1] ],
                    "spans" : [ "step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets" : [ [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1] ],
                    "spans" : [ "step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d" ]
                }
            },
            "Knight" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                }
            },
            "Queen" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans" : [ "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d", "step_1sqr90d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans" : [ "step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d" ]
                }
            },
            "Rook" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans" : [ "step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans" : [ "step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d" ]
                }
            }
        },
        "imgUrlStrs":[
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
        ],
        "fen" : "rn1qk1nr/p1ppbpp1/b7/4p2p/1pPP4/2N1QN2/PP1BPPPP/2KR1B1R w kq - 0 8",
        "ids" : {
            "a" : "Queen",
            "b" : "Bishop",
            "c" : "Knight",
            "k" : "King",
            "n" : "Docker",
            "p" : "Pawn",
            "q" : "Dragon",
            "r" : "Rook"
        },
        "json" : {
            "kings_moved" : {
                "e1" : true,
                "e8" : false
            },
            "last_pawn_move" : "e5",
            "num_consecutive_non_pawn_moves" : 0,
            "pawn_histories" : {
                "a2" : [ "a2" ],
                "a7" : [ "a7" ],
                "b2" : [ "b2" ],
                "b4" : [ "b7", "b5", "b4" ],
                "c4" : [ "c2", "c4" ],
                "c7" : [ "c7" ],
                "d4" : [ "d2", "d4" ],
                "d7" : [ "d7" ],
                "e2" : [ "e2" ],
                "e5" : [ "e7", "e6", "e5" ],
                "f2" : [ "f2" ],
                "f7" : [ "f7" ],
                "g2" : [ "g2" ],
                "g7" : [ "g7" ],
                "h2" : [ "h2" ],
                "h5" : [ "h7", "h5" ]
            },
            "rooks_moved" : {
                "a1" : false,
                "a8" : false,
                "h1" : false,
                "h8" : false
            }
        },
        "promos" : [ "Docker", "Dragon", "Rook", "Bishop", "Queen", "Knight" ],
        "pt" : "W",
        "status" : {
            "condition" : "",
            "status" : 1,
            "winner" : "-"
        },
        "type" : "Custom"
    },
    "Evil Morty + Node + Docker + Dragon" : {
        "captured" : {
            "B" : [ "BP4" ],
            "W" : [ "WP3", "WP2" ]
        },
        "defs" : {
            "Bishop" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans" : [ "step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans" : [ "step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d" ]
                }
            },
            "Docker" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
                    "offsets" : [ [2,-1], [0,-1], [1,-1], [-1,-1], [-2,-1], [1,-2], [0,-2], [-1,-2], [-1,-3], [0,1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
                    "offsets" : [ [-2,1], [0,1], [-1,1], [1,1], [2,1], [-1,2], [0,2], [1,2], [1,3], [0,-1] ]
                }
            },
            "Dragon" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
                    "offsets" : [ [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1] ],
                    "spans" : [ "step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d", "step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
                    "offsets" : [ [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1] ],
                    "spans" : [ "step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d", "step_1sqr225d", "step_1sqr180d", "step_1sqr135d" ]
                }
            },
            "Evil Morty" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_red.svg?alt=media&token=3110b9ae-6bc0-4257-95c3-fa61fe7c1ea6",
                    "offsets" : [ [0,1], [1,0], [-1,0], [0,-1] ],
                    "spans" : [ "step_1sqr225d", "step_1sqr135d", "step_1sqr45d", "step_1sqr315d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
                    "offsets" : [ [0,-1], [-1,0], [1,0], [0,1] ],
                    "spans" : [ "step_1sqr45d", "step_1sqr315d", "step_1sqr225d", "step_1sqr135d" ]
                }
            },
            "Knight" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                }
            },
            "Node" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-red.png?alt=media&token=019e8124-d16a-440c-a642-443e27f0af11",
                    "offsets" : [ [0,2], [1,1], [2,0], [1,-1], [0,-2], [-1,-1], [-2,0], [-1,1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-green.png?alt=media&token=7fe58cdf-46ca-4878-92f6-0084d15a55bc",
                    "offsets" : [ [0,-2], [-1,-1], [-2,0], [-1,1], [0,2], [1,1], [2,0], [1,-1] ]
                }
            },
            "Queen" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans" : [ "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d", "step_1sqr90d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans" : [ "step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d" ]
                }
            },
            "Rook" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans" : [ "step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans" : [ "step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d" ]
                }
            }
        },
        "imgUrlStrs": [
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker-red.svg?alt=media&token=f50a9915-c1db-45da-9c4e-78fe37a4c77e",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdocker.svg?alt=media&token=bc7805fb-9ee0-4066-b463-6f79822880a2",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-black.svg?alt=media&token=ecae5bd7-ddac-4f56-a6eb-2a6a932478ad",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fdragon-white.svg?alt=media&token=76c52b39-1a76-40e6-9d44-1049ab7f193a",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_red.svg?alt=media&token=3110b9ae-6bc0-4257-95c3-fa61fe7c1ea6",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fevil_morty_white.svg?alt=media&token=9595aa7c-5557-4c45-9aeb-4a6310e5f141",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-red.png?alt=media&token=019e8124-d16a-440c-a642-443e27f0af11",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-green.png?alt=media&token=7fe58cdf-46ca-4878-92f6-0084d15a55bc",
        ],
        "fen" : "1nb1kbn1/rpp1p1p1/5pr1/1q5p/p1NPPP2/2B1QN2/P5PP/R3KB1R w KQ - 0 12",
        "ids" : {
            "a" : "Rook",
            "b" : "Node",
            "c" : "Bishop",
            "d" : "Queen",
            "e" : "Knight",
            "k" : "King",
            "n" : "Docker",
            "p" : "Pawn",
            "q" : "Dragon",
            "r" : "Evil Morty"
        },
        "json" : {
            "kings_moved" : {
                "e1" : false,
                "e8" : false
            },
            "last_pawn_move" : "a4",
            "num_consecutive_non_pawn_moves" : 2,
            "pawn_histories" : {
                "a2" : [ "a2" ],
                "a4" : [ "a7", "a5", "a4" ],
                "b7" : [ "b7" ],
                "c7" : [ "c7" ],
                "d4" : [ "d2", "d4" ],
                "e4" : [ "e2", "e4" ],
                "e7" : [ "e7" ],
                "f4" : [ "f2", "f4" ],
                "f6" : [ "f7", "f6" ],
                "g2" : [ "g2" ],
                "g7" : [ "g7" ],
                "h2" : [ "h2" ],
                "h5" : [ "h7", "h5" ]
            },
            "rooks_moved" : {
                "a1" : false,
                "a8" : true,
                "h1" : false,
                "h8" : true
            }
        },
        "promos" : [ "Node", "Docker", "Dragon", "Evil Morty", "Rook", "Bishop", "Queen", "Knight" ],
        "pt" : "W",
        "status" : {
            "condition" : "",
            "status" : 1,
            "winner" : "-"
        },
        "type" : "Custom"
    },
    "Kasparov's Immortal, move 8" : {
        "defs" : {
            "Bishop" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans" : [ "step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans" : [ "step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d" ]
                }
            },
            "Knight" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets" : [ [-1,-2], [-1,2], [1,-2], [1,2], [-2,-1], [-2,1], [2,-1], [2,1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                }
            },
            "Queen" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans" : [ "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d", "step_1sqr90d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans" : [ "step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d" ]
                }
            },
            "Rook" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans" : [ "step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans" : [ "step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d" ]
                }
            }
        },
        "imgUrlStrs":[],
        "fen" : "r1bqk2r/p2nppbp/2pp1npB/1p6/3PP3/2N2P2/PPPQN1PP/R3KB1R b KQkq - 0 9",
        "ids" : {
            "b" : "Bishop",
            "k" : "King",
            "n" : "Knight",
            "p" : "Pawn",
            "q" : "Queen",
            "r" : "Rook"
        },
        "img" : "",
        "json" : {
            "kings_moved" : {
                "e1" : false,
                "e8" : false
            },
            "last_pawn_move" : "b5",
            "num_consecutive_non_pawn_moves" : 3,
            "pawn_histories" : {
                "a2" : [ "a2" ],
                "a7" : [ "a7" ],
                "b2" : [ "b2" ],
                "b5" : [ "b7", "b5" ],
                "c2" : [ "c2" ],
                "c6" : [ "c7", "c6" ],
                "d4" : [ "d2", "d4" ],
                "d6" : [ "d7", "d6" ],
                "e4" : [ "e2", "e4" ],
                "e7" : [ "e7" ],
                "f3" : [ "f2", "f3" ],
                "f7" : [ "f7" ],
                "g2" : [ "g2" ],
                "g6" : [ "g7", "g6" ],
                "h2" : [ "h2" ],
                "h7" : [ "h7" ]
            },
            "rooks_moved" : {
                "a1" : false,
                "a8" : false,
                "h1" : false,
                "h8" : false
            }
        },
        "promos" : [ "Queen", "Rook", "Bishop", "Knight" ],
        "pt" : "W",
        "status" : {
            "condition" : "",
            "status" : 1,
            "winner" : "-"
        },
        "type" : "Standard"
    },
    "Material UI and Node" : {
        "defs" : {
            "Bishop" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans" : [ "step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans" : [ "step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d" ]
                }
            },
            "Knight" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                }
            },
            "Material UI" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
                    "offsets" : [ [2,-3], [1,-2], [0,-1], [-1,-2], [-2,-3], [-2,-1], [2,0], [2,-1], [-3,0], [-4,-1], [-4,-3], [-2,0] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
                    "offsets" : [ [-2,3], [-1,2], [0,1], [1,2], [2,3], [2,1], [-2,0], [-2,1], [3,0], [4,1], [4,3], [2,0] ]
                }
            },
            "Node" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-red.png?alt=media&token=019e8124-d16a-440c-a642-443e27f0af11",
                    "offsets" : [ [0,2], [1,1], [2,0], [1,-1], [0,-2], [-1,-1], [-2,0], [-1,1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-green.png?alt=media&token=7fe58cdf-46ca-4878-92f6-0084d15a55bc",
                    "offsets" : [ [0,-2], [-1,-1], [-2,0], [-1,1], [0,2], [1,1], [2,0], [1,-1] ]
                }
            },
            "Queen" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans" : [ "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d", "step_1sqr90d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans" : [ "step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d" ]
                }
            },
            "Rook" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans" : [ "step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans" : [ "step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d" ]
                }
            }
        },
        "imgUrlStrs":[
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui-red.svg?alt=media&token=1cb65f7e-15a1-47e3-90d4-75046f24923c",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fmaterial-ui.svg?alt=media&token=5507f219-7f7f-4560-a9a9-b5475a00ccfa",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-red.png?alt=media&token=019e8124-d16a-440c-a642-443e27f0af11",
            "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fsample%20images%2Fnode-green.png?alt=media&token=7fe58cdf-46ca-4878-92f6-0084d15a55bc",
        ],
        "fen" : "r2bk2r/p2ppppp/n1b2n2/qpp5/P4N1P/2BP1BP1/1PPKPP2/R2Q2NR b kq - 0 9",
        "ids" : {
            "a" : "Bishop",
            "b" : "Node",
            "c" : "Knight",
            "k" : "King",
            "n" : "Material UI",
            "p" : "Pawn",
            "q" : "Queen",
            "r" : "Rook"
        },
        "json" : {
            "kings_moved" : {
                "e1" : true,
                "e8" : false
            },
            "last_pawn_move" : "h4",
            "num_consecutive_non_pawn_moves" : 2,
            "pawn_histories" : {
                "a4" : [ "a2", "a4" ],
                "a7" : [ "a7" ],
                "b2" : [ "b2" ],
                "b5" : [ "b7", "b5" ],
                "c2" : [ "c2" ],
                "c5" : [ "c7", "c5" ],
                "d3" : [ "d2", "d3" ],
                "d7" : [ "d7" ],
                "e2" : [ "e2" ],
                "e7" : [ "e7" ],
                "f2" : [ "f2" ],
                "f7" : [ "f7" ],
                "g3" : [ "g2", "g3" ],
                "g7" : [ "g7" ],
                "h4" : [ "h2", "h4" ],
                "h7" : [ "h7" ]
            },
            "rooks_moved" : {
                "a1" : false,
                "a8" : false,
                "h1" : false,
                "h8" : false
            }
        },
        "promos" : [ "Node", "Material UI", "Rook", "Queen", "Bishop", "Knight" ],
        "pt" : "B",
        "status" : {
            "condition" : "",
            "status" : 1,
            "winner" : "-"
        },
        "type" : "Custom"
    },
    "super-checkmate impossible example" : {
        "captured" : {
            "B" : [ "BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BB1", "BN1" ],
            "W" : [ "WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8", "WR1", "WR2", "WB1", "WB2", "WN1", "WN2", "WQ1" ]
        },
        "defs" : {
            "Bishop" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBB.svg?alt=media&token=e84dac52-fd53-46c4-a06c-06ea93053612",
                    "spans" : [ "step_1sqr225d", "step_1sqr315d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWB.svg?alt=media&token=7868db67-7fe2-46fd-a4d5-f413b26f2f07",
                    "spans" : [ "step_1sqr45d", "step_1sqr135d", "step_1sqr225d", "step_1sqr315d" ]
                }
            },
            "Knight" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBN.svg?alt=media&token=ad698ee8-6f1c-41ae-8dc4-22a5e363d0a3",
                    "offsets" : [ [-1,-2], [-1,2], [1,-2], [1,2], [-2,-1], [-2,1], [2,-1], [2,1] ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWN.svg?alt=media&token=4fee02d6-9838-41c5-b1dc-a06160ec7308",
                    "offsets" : [ [1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1] ]
                }
            },
            "Queen" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBQ.svg?alt=media&token=005f4741-56fe-4bb4-b6aa-533d41ebfc24",
                    "spans" : [ "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d", "step_1sqr0d", "step_1sqr90d", "step_1sqr45d", "step_1sqr135d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWQ.svg?alt=media&token=d8ca66fc-085b-43a2-96e4-a7235392d266",
                    "spans" : [ "step_1sqr0d", "step_1sqr45d", "step_1sqr90d", "step_1sqr135d", "step_1sqr180d", "step_1sqr225d", "step_1sqr270d", "step_1sqr315d" ]
                }
            },
            "Rook" : {
                "B" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FBR.svg?alt=media&token=abb1a899-02ac-4e2d-895a-6310bce36c09",
                    "spans" : [ "step_1sqr180d", "step_1sqr270d", "step_1sqr0d", "step_1sqr90d" ]
                },
                "W" : {
                    "img" : "https://firebasestorage.googleapis.com/v0/b/custom-chess-dev1.appspot.com/o/source%2Fstandard%20piece%20images%2FWR.svg?alt=media&token=f5c32f16-7031-43e6-a33b-f32b5d58a506",
                    "spans" : [ "step_1sqr0d", "step_1sqr90d", "step_1sqr180d", "step_1sqr270d" ]
                }
            }
        },
        "imgUrlStrs":[],
        "fen" : "5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1",
        "ids" : {
            "b" : "Bishop",
            "k" : "King",
            "n" : "Knight",
            "p" : "Pawn",
            "q" : "Queen",
            "r" : "Rook"
        },
        "img" : "",
        "json" : {
            "kings_moved" : {
                "e1" : true,
                "e8" : true
            },
            "last_pawn_move" : "g2",
            "num_consecutive_non_pawn_moves" : 20,
            "pawn_histories" : {
                "e7" : [ "e7" ],
                "g7" : [ "g7" ]
            },
            "rooks_moved" : {
                "a1" : true,
                "a8" : true,
                "h1" : true,
                "h8" : true
            }
        },
        "promos" : [ "Queen", "Rook", "Bishop", "Knight" ],
        "pt" : "W",
        "status" : {
            "condition" : "checkmate",
            "status" : 0,
            "winner" : "B"
        },
        "type" : "standard"
    }
}
