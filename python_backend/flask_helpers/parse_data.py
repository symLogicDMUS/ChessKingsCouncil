import json
from flask_helpers.get_data import get_data
from game_logic.printers.print_args import print_args
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from flask_helpers.new_data import new_data
from game_logic.color.get_next_color import get_next_color as get_enemy_color


def parse_data(game_name):
    """replicate behavior without api call"""
    fen_obj, board, json_records, update_method, defs_ = get_data(game_name)
    color = fen_obj.turn.upper()
    data = new_data(board, color, defs_, json_records)
    enemy_data = new_data(board, get_enemy_color(color), defs_, json_records)
    final_ranges = data['ranges']
    enemy_final_ranges = enemy_data['ranges']
    moves = data['moves']
    fen_data = fen_obj.get_data()
    data = map_xy_to_rf(
        {"color": color, "fen_data": fen_data, "board": board, "records": json_records.get_records(),
         "flask_method": update_method})
    data['ranges'] = final_ranges
    data['enemy_ranges'] = enemy_final_ranges
    data['moves'] = moves
    data["id_dict"] = defs_['id_dict']
    data['defs'] = defs_['range_defs']
    return data


if __name__ == "__main__":
    f = open("../defs.json", "r")
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=False)
    print_args(parse_data("dummy_game"), pp=True)
