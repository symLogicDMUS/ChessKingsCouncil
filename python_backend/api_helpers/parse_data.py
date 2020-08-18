import json
from api_helpers.get_data import get_data
from api_helpers.new_data import new_data
from game_logic.printers.print_args import print_args
from game_logic.color.get_ai_color import get_ai_color
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.color.get_next_color import get_next_color as get_enemy_color


def parse_data(game_name):
    """replicate behavior without api call"""
    fen_obj, board, json_records, status, game_type, player_type, promo_choices, defs_ = get_data(game_name)
    ai_color = get_ai_color(player_type)
    fen_data = fen_obj.get_data()
    color = fen_data['turn'].upper()
    data = new_data(board, color, ai_color, defs_, json_records)
    enemy_data = new_data(board, get_enemy_color(color), ai_color, defs_, json_records)
    payload = ({
        'ranges': data['ranges'],
        'enemy_ranges': enemy_data['ranges'],
        'status': status,
        'moves': data['moves'],
        'promo_choices': promo_choices,
        'id_dict': defs_['id_dict'],
        'defs': defs_['range_defs']
    })
    payload.update(map_xy_to_rf(
        {"color": color, "fen_data": fen_data, "board": board, "records": json_records.get_records(),
         "game_type": game_type, "player_type": player_type}))

    return payload


if __name__ == "__main__":
    f = open("../defs.json", "r")
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=False)
    print_args(parse_data("promo_test"), pp=True)
