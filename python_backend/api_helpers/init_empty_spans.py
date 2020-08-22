from pprint import pprint
from game_logic.test_objects.get_json import get_json


def init_empty_spans(defs):
    """ """
    for piece_name in defs.keys():
        for color in ['W', 'B']:
            if 'spans' not in defs[piece_name][color].keys():
                defs[piece_name][color]['spans'] = []
    return defs


if __name__ == "__main__":
    pprint(init_empty_spans(
        get_json("/home/brian/ChessKingsCouncil/python_backend/game_logic/test_objects/defs/defs1.json")))
