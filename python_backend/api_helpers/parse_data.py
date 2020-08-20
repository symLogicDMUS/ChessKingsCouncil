import json
from api_helpers.turn_data import turn_data
from game_logic.fenParser.Fen import Fen
from game_logic.fenParser.getBoard.top.get_board import get_board
from game_logic.fenParser.GameStatus.get_fen_data import get_fen_data
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.color.get_ai_color import get_ai_color
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.color.get_next_color import get_next_color as get_enemy_color


def parse_data(fen, records, player_color, id_dict, range_defs):
    """called at start up of new or saved game. Get first instance of turn data. parameters are data fetched from db"""
    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_fen_data(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    color = fen_obj.turn.upper()
    ai_color = get_ai_color(player_color)
    json_records = JsonRecords(records)
    defs_ = {"id_dict": id_dict, "range_defs": range_defs}
    data = turn_data(board, color, ai_color, defs_, json_records)
    enemy_data = turn_data(board, get_enemy_color(color), ai_color, defs_, json_records)
    payload = {'fen_data': fen_obj.get_data(),
               'ranges': data['ranges'],
               'moves': data['moves'],
               'ai_start': data['ai_start'],
               'ai_dest': data['ai_dest'],
               'ai_capture': data['ai_capture']
               }
    payload.update({'enemy_ranges': enemy_data['ranges']})
    payload.update(map_xy_to_rf({"board": board}))
    return payload


if __name__ == "__main__":
    pass  # TODO: implement test
