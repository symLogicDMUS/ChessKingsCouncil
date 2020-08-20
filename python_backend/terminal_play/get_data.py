from game_logic.fenParser.Fen import Fen
from game_logic.JsonRecords.teriminal_play.JsonRecords import JsonRecords
from game_logic.fenParser.GameStatus.GameStatus import GameStatus
from game_logic.fenParser.GameStatus.get_fen_data import get_fen_data
from game_logic.fenParser.getBoard.top.get_board import get_board
from api_helpers.helpers.filepath import get_dir_containing_name
from api_helpers.map_defs import map_defs
from pprint import pprint
import json


def get_data(game_name):
    """get the data saved in the files for a game_name"""

    print(game_name)

    dir_ = get_dir_containing_name('example_games')

    f = open("{}/example_games/{}/{}.fen".format(dir_, game_name, game_name), 'r')
    fen = f.readline()
    f.close()

    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_fen_data(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    json_records = JsonRecords("{}/example_games/{}/{}.json".format(dir_, game_name, game_name), board)

    f = open("{}/example_games/{}/{}.type".format(dir_, game_name, game_name), 'r')
    game_type = f.readline()
    f.close()

    f = open("{}/example_games/{}/{}.pt".format(dir_, game_name, game_name), 'r')
    player_type = f.read()
    f.close()

    f = open("{}/example_games/{}/{}.status".format(dir_, game_name, game_name), 'r')
    data = f.read()
    status_ = json.loads(data)
    json.dumps(status_)
    f.close()
    status = GameStatus(status_)

    f = open("{}/example_games/{}/{}.ids".format(dir_, game_name, game_name), 'r')
    data = f.read()
    id_dict = json.loads(data)
    json.dumps(id_dict)
    f.close()

    f = open("{}/example_games/{}/{}.defs".format(dir_, game_name, game_name), 'r')
    data = f.read()
    range_defs = json.loads(data)
    json.dumps(range_defs)
    f.close()

    f = open("{}/example_games/{}/{}.promos".format(dir_, game_name, game_name), 'r')
    data = f.read()
    promo_choices = json.loads(data)
    json.dumps(promo_choices)
    f.close()

    defs_ = {"id_dict": id_dict, "range_defs": map_defs(range_defs)}

    return fen_obj, board, json_records, status, game_type, player_type, promo_choices, defs_


if __name__ == "__main__":
    pprint(get_data("fundemental defense"))
