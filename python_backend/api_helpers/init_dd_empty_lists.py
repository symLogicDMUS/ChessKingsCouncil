from api_helpers.init_empty_ranges import init_empty_ranges
from game_logic.test_objects.get_json import get_json
from pprint import pprint


def init_dd_empty_lists(data_dict):
    """ """
    for game_name in data_dict.keys():
        data_dict[game_name]['defs'] = init_empty_ranges(data_dict[game_name]['defs'])
        if 'promos' not in data_dict[game_name].keys():
            data_dict[game_name]['promos'] = []
        if 'pawn_histories' not in data_dict[game_name]['json'].keys():
            data_dict[game_name]['json']['pawn_histories'] = {}
    return data_dict


if __name__ == "__main__":
    pprint(init_dd_empty_lists(
        get_json("/home/brian/ChessKingsCouncil/python_backend/game_logic/test_objects/data_dicts/dd1.json")))
