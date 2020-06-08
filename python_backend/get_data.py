from custom_except import *
from getters.get_board import get_board
from fenParser.Fen import Fen
from JsonRecords.JsonRecords import JsonRecords
from getters.get_status import get_status
from filepath import get_dir_containing_name
import json


def get_data(game_name):
    """get the data saved in the files for a game_name
    WARNING: uses relative paths, should only be called from top level of application
    """
    # TODO: change ./example_games to  ./saved_games when comfortable that games working correctly
    dir_ = get_dir_containing_name('example_games')
    f = open("{}/example_games/{}/{}.fen".format(dir_, game_name, game_name))
    fen = f.readline()
    f.close()
    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_status(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    json_records = JsonRecords("{}/example_games/{}/{}.json".format(dir_, game_name, game_name), board)
    f = open("{}/example_games/{}/{}.type".format(dir_, game_name, game_name))
    game_type = f.readline()
    f.close()
    f = open("{}/example_games/{}/{}.defs".format(dir_, game_name, game_name))
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs)

    return fen_obj, board, json_records, game_type, defs
