# import os
import json
# import firebase_admin
from pprint import pprint
# from firebase_admin import credentials, db
from flask import Flask, jsonify, request, send_from_directory
from storage import delete_calculation, insert_calculation, get_calculations
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.JsonRecords.JsonRecords import JsonRecords
# from game_logic.fenParser.getFen.top.get_fen import get_fen
from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from game_logic.color.get_ai_color import get_ai_color
# from game_logic.fenParser.get_full_fen import get_full_fen
# from api_helpers.offset_strs_to_list import offset_strs_to_list
# from api_helpers.game_defs_offset_lists_to_strs import game_defs_offset_lists_to_strs as offsets_to_strs
# from api_helpers.dd_offset_strs_to_list import dd_offset_strs_to_list
# from api_helpers.init_empty_ranges import init_empty_ranges
# from api_helpers.init_dd_empty_lists import init_dd_empty_lists
from api_helpers.id_assign_.top.id_assign import id_assign
from api_helpers.get_turn_data import get_turn_data

# from api_helpers.parse_data import parse_data

app = Flask(__name__)

# cred = credentials.Certificate('/home/ckc-firebase-admin-sdk.json')
# cred = credentials.ApplicationDefault()
# firebase_admin.initialize_app(cred, {
#     'databaseURL': "https://chess-king-council.firebaseio.com/",
# })


@app.route('/')
def index():
    return "Chess Kings Council", 200


@app.route('/health')
def health():
    return '', 200


@app.route('/ready')
def ready():
    return '', 200


@app.route('/data', methods=['GET', 'POST'])
def data():
    """
        Function used to get calculations history
        from Postgres database and return to fetch call in frontend.
    :return: Json format of either collected calculations or error message
    """

    calculations_history = []

    try:
        calculations = get_calculations()
        for key, value in calculations.items():
            calculations_history.append(value)

        return jsonify({'calculations': calculations_history}), 200
    except:
        return jsonify({'error': 'error fetching calculations history'}), 500


@app.route('/update', methods=['POST', 'GET'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    board, records = map_rf_to_xy(data['board']), map_rf_to_xy(data['records'])
    color, ai_color, piece_defs, id_dict = data['color'], get_ai_color(data['pt']), data['piece_defs'], data['id_dict']
    json_records = JsonRecords(records)  # pawn hist ids prev initialized
    turn_data = get_turn_data(board, color, ai_color, json_records, piece_defs, id_dict)
    enemy_turn_data = get_turn_data(board, get_enemy_color(color), ai_color, json_records, piece_defs, id_dict)
    turn_data.update({'enemy_ranges': enemy_turn_data['ranges']})
    return jsonify(turn_data)


@app.route('/update_council', methods=['POST', 'GET'])
def update_council():
    """ """
    pass  # TODO: implement same as update except updated for game with multiple kings


@app.route('/assign_ids', methods=['POST', 'GET'])
def assign_ids():
    """called by NewGame component on the front end. create id:piece-name arrangement unique to new game. substitute
    custom-piece(s) for of Rook, Bishop, Knight, or Queen, by assigning its usual id to the custom-piece name and
    custom-piece range-def. add custom pieces selected to be a pawn promotion choice.
    """
    data = request.get_data()
    data = json.loads(data)
    piece_names, subs = data['names'], data['subs']
    piece_names = id_assign(piece_names, subs)
    return jsonify(piece_names)


@app.route('/get_data_dict', methods=['POST', 'GET'])
def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    # data = request.get_data(as_text=True)
    # data = json.loads(data)
    # data_dict = db.reference().child('games').child('{}'.format(data['user'])).get()
    # data_dict = init_dd_empty_lists(data_dict)
    # data_dict = dd_offset_strs_to_list(data_dict)
    # for game_name in data_dict.keys():
    #     data_dict[game_name] = parse_data(data_dict[game_name])
    return jsonify({
        "king_range_test": {
            "fen": "4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1",
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
                "last_pawn_move": "None",
                "num_consecutive_non_pawn_moves": 0
            },
            "type": "standard",
            "pt": "W",
            "status": {
                "status": 1,
                "condition": "check",
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
        "ranges_test": {
            "fen": "8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1",
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
                "last_pawn_move": "f7",
                "num_consecutive_non_pawn_moves": 15
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
        "castle_test5": {
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
        "pinned_ex2": {
            "fen": "q2r2b1/kN1B1Q2/8/qP1K1R1r/8/1P1B1N2/b7/3r3b w - - 0 1",
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
                "last_pawn_move": "b5",
                "num_consecutive_non_pawn_moves": 6
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
        "enpassant_test1": {
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
        "pawn_promo": {
            "fen": "r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b KQkq - 1 11",
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
                        "a2",
                        "a4"
                    ],
                    "c2": [
                        "c2",
                        "c3",
                        "c4",
                        "c5",
                        "c6",
                        "b7"
                    ],
                    "e2": [
                        "e2",
                        "e4"
                    ],
                    "f2": [
                        "f2"
                    ],
                    "g2": [
                        "g2",
                        "g4"
                    ],
                    "h2": [
                        "h2"
                    ],
                    "b7": [
                        "b7",
                        "b5",
                        "b4",
                        "b3",
                        "c2"
                    ],
                    "d7": [
                        "d7"
                    ],
                    "e7": [
                        "e7",
                        "e5"
                    ],
                    "f7": [
                        "f7",
                        "f5"
                    ],
                    "g7": [
                        "g7"
                    ],
                    "h7": [
                        "h7",
                        "h5"
                    ]
                },
                "last_pawn_move": "c2",
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
        "fundemental_defense": {
            "fen": "r4rk1/1pp1qppp/2nbbn2/pP1pp3/3PP3/2NBBN2/P1P1QPPP/R3K2R w KQ a6 0 10",
            "json": {
                "rooks_moved": {
                    "h1": False,
                    "a1": False,
                    "h8": True,
                    "a8": False
                },
                "kings_moved": {
                    "e1": False,
                    "e8": True
                },
                "pawn_histories": {
                    "a2": [
                        "a2"
                    ],
                    "b2": [
                        "b2",
                        "b4",
                        "b5"
                    ],
                    "c2": [
                        "c2"
                    ],
                    "d2": [
                        "d2",
                        "d4"
                    ],
                    "e2": [
                        "e2",
                        "e4"
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
                        "a7",
                        "a5"
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
                    "h7": [
                        "h7"
                    ]
                },
                "last_pawn_move": "a5",
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
        "stalemate_exp1": {
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
        "check_example1": {
            "fen": "1n5r/8/6N1/3pK3/2k1P3/7q/1nb5/3r1B1R b - - 0 1",
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
                "pawn_histories": {
                    "e2": [
                        "e2",
                        "e4"
                    ],
                    "d7": [
                        "d7",
                        "d5"
                    ]
                },
                "last_pawn_move": "d5",
                "num_consecutive_non_pawn_moves": 15
            },
            "type": "standard",
            "pt": "W",
            "status": {
                "status": 1,
                "condition": "check",
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
        "super_checkmate_impossible_example": {
            "fen": "5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1",
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
            "type": "standard",
            "pt": "W",
            "status": {
                "status": 0,
                "condition": "checkmate",
                "winner": "B"
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
        "pinned_ex1": {
            "fen": "8/rNQK1B1q/2R5/1N1R1N2/b2n4/7b/8/1k1r4 w - - 0 1",
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
                "last_pawn_move": "c2",
                "num_consecutive_non_pawn_moves": 20
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
        }
    })


@app.route('/get_defs', methods=['POST', 'GET'])
def get_defs():
    """get the JSON object inside defs.json"""
    print('GET request, getting data from defs.json')
    # data = request.get_data(as_text=True)
    # data = json.loads(data)
    # defs = db.reference().child('defs').child('{}'.format(data['user'])).get()
    # defs = init_empty_ranges(defs)
    # defs = offset_strs_to_list(defs)
    # return jsonify(defs)
    return jsonify({
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
                    "-1,-2",
                    "-1,2",
                    "1,-2",
                    "1,2",
                    "-2,-1",
                    "-2,1",
                    "2,-1",
                    "2,1"
                ],
                "spans": []
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
                ],
                "spans": []
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
                ],
                "spans": []
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
                ],
                "spans": []
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
                ],
                "spans": []
            }
        }
    })


@app.route('/save_def', methods=['POST', 'GET'])
def save_def():
    """save a piece definition to defs.json"""
    # print("saving piece definition to defs.json")
    # data = request.get_data(as_text=True)
    # data = json.loads(data)
    # db.reference().child('defs').child('{}'.format(data['user'])).update(
    #     offsets_to_strs({data['piece_name']: data['piece_def']})
    # )
    return "SUCCESSFULLY SAVED PIECE!", 201


@app.route('/delete_def', methods=['POST', 'GET'])
def delete_def():
    """deleting a piece definition from defs.json"""
    # print('deleting a piece definition from defs.json')
    # data = request.get_data(as_text=True)
    # data = json.loads(data)
    # db.reference().child('defs').child('{}'.format(data['user'])).child(data['piece_name']).delete()
    return "SUCCESSFULLY DELETED PIECE", 200


@app.route('/save', methods=["POST", "GET"])
def save():
    """save information about game as a db collection with documents being the different types of information
    game_name: name of the game being saved.
    board: data describing game board.
    json_records: data for special moves and other things (the dict, not the object)
    id_dict: key is id for piece, name is name of piece.
    range_defs: describes how each piece can move
    success or failure integer and message to backend.
    """
    # print("POST request, save()""")
    # data = request.get_data(as_text=True)
    # data = json.loads(data)
    # pprint(data)
    # fen = get_fen(map_rf_to_xy(data['board']))
    # fen = get_full_fen(fen, data['fen_obj'])
    # db.reference().child('games').child('{}'.format(data['user'])).update({data['game_name']: {
    #     'fen': fen,
    #     'type': data['game_type'],
    #     'pt': data['player_type'],
    #     'status': data['status'],
    #     'promos': data['promos'],
    #     'json': data['json_records'],
    #     'defs': offsets_to_strs(data['piece_defs']),
    #     'ids': data['id_dict']
    # }})
    return "SUCCESSFULLY SAVED GAME!", 200


@app.route('/get_game_names', methods=["POST", "GET"])
def get_game_names():
    # """ """
    # data = request.get_data(as_text=True)
    # data = json.loads(data)
    # game_names = db.reference().child('game names').child('{}'.format(data['user'])).get()
    return jsonify([
        "king_range_test",
        "ranges_test",
        "castle_test5",
        "pinned_ex2",
        "enpassant_test1",
        "pawn_promo",
        "fundemental_defense",
        "stalemate_exp1",
        "check_example1",
        "super_checkmate_impossible_example",
        "pinned_ex1"
    ])


@app.route('/get_game', methods=["POST", "GET"])
def get_game():
    """ """
    data = request.get_data(as_text=True)
    data = json.loads(data)
    user, game_name = data['user'], data['game_name']
    # game_data = db.reference().child('games').child('{}'.format(user)).child('{}'.format(game_name)).get()
    # game_data['defs'] = init_empty_ranges(game_data['defs'])
    # game_data['defs'] = offset_strs_to_list(game_data['defs'])
    # game_data = parse_data(game_data)
    # return jsonify(game_data)
    games = {
        "king_range_test": {
            "fen": "4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1",
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
                "last_pawn_move": "None",
                "num_consecutive_non_pawn_moves": 0
            },
            "type": "standard",
            "pt": "W",
            "status": {
                "status": 1,
                "condition": "check",
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
        "ranges_test": {
            "fen": "8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1",
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
                "last_pawn_move": "f7",
                "num_consecutive_non_pawn_moves": 15
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
        "castle_test5": {
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
        "pinned_ex2": {
            "fen": "q2r2b1/kN1B1Q2/8/qP1K1R1r/8/1P1B1N2/b7/3r3b w - - 0 1",
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
                "last_pawn_move": "b5",
                "num_consecutive_non_pawn_moves": 6
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
        "enpassant_test1": {
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
        "pawn_promo": {
            "fen": "r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b KQkq - 1 11",
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
                        "a2",
                        "a4"
                    ],
                    "c2": [
                        "c2",
                        "c3",
                        "c4",
                        "c5",
                        "c6",
                        "b7"
                    ],
                    "e2": [
                        "e2",
                        "e4"
                    ],
                    "f2": [
                        "f2"
                    ],
                    "g2": [
                        "g2",
                        "g4"
                    ],
                    "h2": [
                        "h2"
                    ],
                    "b7": [
                        "b7",
                        "b5",
                        "b4",
                        "b3",
                        "c2"
                    ],
                    "d7": [
                        "d7"
                    ],
                    "e7": [
                        "e7",
                        "e5"
                    ],
                    "f7": [
                        "f7",
                        "f5"
                    ],
                    "g7": [
                        "g7"
                    ],
                    "h7": [
                        "h7",
                        "h5"
                    ]
                },
                "last_pawn_move": "c2",
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
        "fundemental_defense": {
            "fen": "r4rk1/1pp1qppp/2nbbn2/pP1pp3/3PP3/2NBBN2/P1P1QPPP/R3K2R w KQ a6 0 10",
            "json": {
                "rooks_moved": {
                    "h1": False,
                    "a1": False,
                    "h8": True,
                    "a8": False
                },
                "kings_moved": {
                    "e1": False,
                    "e8": True
                },
                "pawn_histories": {
                    "a2": [
                        "a2"
                    ],
                    "b2": [
                        "b2",
                        "b4",
                        "b5"
                    ],
                    "c2": [
                        "c2"
                    ],
                    "d2": [
                        "d2",
                        "d4"
                    ],
                    "e2": [
                        "e2",
                        "e4"
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
                        "a7",
                        "a5"
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
                    "h7": [
                        "h7"
                    ]
                },
                "last_pawn_move": "a5",
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
        "stalemate_exp1": {
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
        "check_example1": {
            "fen": "1n5r/8/6N1/3pK3/2k1P3/7q/1nb5/3r1B1R b - - 0 1",
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
                "pawn_histories": {
                    "e2": [
                        "e2",
                        "e4"
                    ],
                    "d7": [
                        "d7",
                        "d5"
                    ]
                },
                "last_pawn_move": "d5",
                "num_consecutive_non_pawn_moves": 15
            },
            "type": "standard",
            "pt": "W",
            "status": {
                "status": 1,
                "condition": "check",
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
        "super_checkmate_impossible_example": {
            "fen": "5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1",
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
            "type": "standard",
            "pt": "W",
            "status": {
                "status": 0,
                "condition": "checkmate",
                "winner": "B"
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
        "pinned_ex1": {
            "fen": "8/rNQK1B1q/2R5/1N1R1N2/b2n4/7b/8/1k1r4 w - - 0 1",
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
                "last_pawn_move": "c2",
                "num_consecutive_non_pawn_moves": 20
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
        }
    }
    return jsonify(games[game_name])

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
