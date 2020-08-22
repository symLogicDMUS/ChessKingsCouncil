from pprint import pprint
from game_logic.test_objects.get_json import get_json


def init_empty_offsets(defs):
    """ """
    for piece_name in defs.keys():
        for color in ['W', 'B']:
            if 'offsets' not in defs[piece_name][color].keys():
                defs[piece_name][color]['offsets'] = []
    return defs


if __name__ == "__main__":
    pprint(init_empty_offsets(
        get_json("/home/brian/ChessKingsCouncil/python_backend/game_logic/test_objects/defs/defs1.json")))
