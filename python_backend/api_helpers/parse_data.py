import json
from pprint import pprint
from api_helpers.get_turn_data import get_turn_data
from api_helpers.dd_offset_strs_to_list import dd_offset_strs_to_list
from api_helpers.init_dd_empty_lists import init_dd_empty_lists
from game_logic.fenParser.Fen import Fen
from game_logic.fenParser.getBoard.top.get_board import get_board
from game_logic.fenParser.GameStatus.get_fen_data import get_fen_data
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.JsonRecords.init_pawn_ids import init_pawn_ids
from game_logic.color.get_ai_color import get_ai_color
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.test_objects.get_json import get_json


def parse_data(data):
    """called at start of new or saved game. Get first instance of turn data. parameters are data fetched from db"""
    fen, records, player_color, piece_defs, id_dict = data['fen'], data['json'], data['pt'], data['defs'], data['ids']
    board = get_board(fen)
    json_records = JsonRecords(init_pawn_ids(map_rf_to_xy(records), board))
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_fen_data(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    color = fen_obj.turn.upper()
    ai_color = get_ai_color(player_color)
    turn_data = get_turn_data(board, color, ai_color, json_records, piece_defs, id_dict)
    enemy_turn_data = get_turn_data(board, get_enemy_color(color), ai_color, json_records,  piece_defs, id_dict)
    payload = {'color': color,
               'board': map_xy_to_rf(board),
               'records': map_xy_to_rf(json_records.get_records()),
               'fen_data': fen_obj.get_data(),
               'piece_defs': piece_defs,
               'id_dict': id_dict,
               'moves': turn_data['moves'],
               'ranges': turn_data['ranges'],
               'enemy_ranges': enemy_turn_data['ranges'],
               'ai_start': turn_data['ai_start'],
               'ai_dest': turn_data['ai_dest'],
               'ai_capture': turn_data['ai_capture'],
               'status': data['status'],
               'promos': data['promos'],
               'type': data['type'],
               'pt': player_color
               }
    return payload


if __name__ == "__main__":
    data_dict = get_json("../game_logic/test_objects/data_dicts/dd2.json")
    data_dict = init_dd_empty_lists(data_dict)
    data_dict = dd_offset_strs_to_list(data_dict)
    for game_name in data_dict.keys():
        data_dict[game_name] = parse_data(data_dict[game_name])
    print("======================= records =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['records'])
    print("======================= board =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['board'])
    print("======================= moves =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['moves'])
    print("======================= ranges =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['ranges'])
    print("======================= enemy_ranges =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['enemy_ranges'])
    print("======================= ai_start =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['ai_start'])
    print("======================= ai_dest =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['ai_dest'])
    print("======================= ai_capture =======================")
    for game_name in data_dict.keys():
        print(game_name, ":")
        pprint(data_dict[game_name]['ai_capture'])
