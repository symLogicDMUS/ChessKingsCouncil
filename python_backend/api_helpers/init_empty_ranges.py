from pprint import pprint
from api_helpers.init_empty_spans import init_empty_spans
from api_helpers.init_empty_offsets import init_empty_offsets
from game_logic.test_objects.get_json import get_json


def init_empty_ranges(defs):
    """ """
    defs = init_empty_spans(defs)
    defs = init_empty_offsets(defs)
    return defs


if __name__ == "__main__":
    pprint(init_empty_ranges(
        get_json("/home/brian/ChessKingsCouncil/python_backend/game_logic/test_objects/defs/defs1.json")))
