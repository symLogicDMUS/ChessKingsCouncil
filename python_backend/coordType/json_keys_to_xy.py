from coordType.is_rankfile import is_rankfile
from coordType.to_xy import to_xy
from coordType.rf_list_to_xy import rf_list_to_xy
from pprint import pprint


def json_keys_to_xy(json_obj):
    """ """
    new_json_obj = {}
    for k in json_obj.keys():
        if type(json_obj[k]) == dict:
            json_obj[k] = json_keys_to_xy(json_obj[k])
        elif type(json_obj[k]) == list:
            json_obj[k] = rf_list_to_xy(json_obj[k])
        if is_rankfile(k):
            new_json_obj[to_xy(k)] = json_obj[k]
        else:
            new_json_obj[k] = json_obj[k]
    return new_json_obj


if __name__ == "__main__":
    json_obj = \
        {"board": {"a1": "WR1", "a2": "WP1", "a3": "#", "a4": "#", "a5": "#", "a6": "#", "a7": "BP1", "a8": "BR1",
                   "b1": "WN1", "b2": "WP2", "b3": "#", "b4": "#", "b5": "#", "b6": "#", "b7": "BP2", "b8": "BN1",
                   "c1": "WB1", "c2": "WP3", "c3": "#", "c4": "#", "c5": "#", "c6": "#", "c7": "BP3", "c8": "BB1",
                   "d1": "WQ1", "d2": "#", "d3": "WP4", "d4": "#", "d5": "#", "d6": "#", "d7": "BP4", "d8": "BQ1",
                   "e1": "WK1", "e2": "WP5", "e3": "#", "e4": "#", "e5": "#", "e6": "#", "e7": "BP5", "e8": "BK1",
                   "f1": "WB2", "f2": "WP6", "f3": "#", "f4": "#", "f5": "#", "f6": "#", "f7": "BP6", "f8": "BB2",
                   "g1": "WN2", "g2": "WP7", "g3": "#", "g4": "#", "g5": "#", "g6": "#", "g7": "BP7", "g8": "BN2",
                   "h1": "WR2", "h2": "WP8", "h3": "#", "h4": "#", "h5": "#", "h6": "#", "h7": "BP8", "h8": "BR2"},
         "records": {"rooks_moved": {"a1": False, "a8": False, "h1": False, "h8": False},
                     "kings_moved": {"e1": False, "e8": False},
                     "pawn_histories": {"BP1": ["a7"], "BP2": ["b7"], "BP3": ["c7"], "BP4": ["d7"], "BP5": ["e7"],
                                        "BP6": ["f7"], "BP7": ["g7"], "BP8": ["h7"], "WP1": ["a2"], "WP2": ["b2"],
                                        "WP3": ["c2"], "WP4": ["d2"], "WP5": ["e2"], "WP6": ["f2"], "WP7": ["g2"],
                                        "WP8": ["h2"]}, "last_pawn_move": "None", "num_consecutive_non_pawn_moves": 1,
                     "game_status": 1, "condition": "", "winner": "-"}, "color": "W"}
    pprint(json_keys_to_xy(json_obj))
