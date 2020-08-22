from api_helpers.offset_strs_to_list import offset_strs_to_list
from api_helpers.init_dd_empty_lists import init_dd_empty_lists
from game_logic.test_objects.get_json import get_json
from pprint import pprint


def dd_offset_strs_to_list(data_dict):
    """ """
    for game_name in data_dict.keys():
        data_dict[game_name]['defs'] = offset_strs_to_list(data_dict[game_name]['defs'])
    return data_dict


if __name__ == "__main__":
    data_dict = init_dd_empty_lists(get_json('/home/brian/ChessKingsCouncil/python_backend/game_logic/test_objects'
                                              '/data_dicts/dd1.json'))
    pprint(dd_offset_strs_to_list(data_dict))
