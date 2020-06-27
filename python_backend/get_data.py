from fenParser.getBoard.top.get_board import get_board
from fenParser.Fen import Fen
from JsonRecords.JsonRecords import JsonRecords
from status.get_status import get_status
from filepath import get_dir_containing_name
from pprint import pprint
import json


def get_data(game_name, defs):
    """get the data saved in the files for a game_name
    WARNING: uses relative paths, should only be called from top level of application
    """
    # TODO: change ./example_games to  ./saved_games when comfortable that games working correctly
    dir_ = get_dir_containing_name('example_games')

    f = open("{}/example_games/{}/{}.fen".format(dir_, game_name, game_name), 'r')
    fen = f.readline()
    f.close()

    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_status(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    json_records = JsonRecords("{}/example_games/{}/{}.json".format(dir_, game_name, game_name), board)

    f = open("{}/example_games/{}/{}.type".format(dir_, game_name, game_name), 'r')
    flask_method = f.readline()
    f.close()

    f = open("{}/example_games/{}/{}.ids".format(dir_, game_name, game_name), 'r')
    data = f.read()
    id_dict = json.loads(data)
    json.dumps(id_dict)

    f = open("{}/example_games/{}/{}.defs".format(dir_, game_name, game_name), 'r')
    data = f.read()
    range_defs = json.loads(data)
    json.dumps(range_defs)

    defs_ = {"id_dict": id_dict, "range_defs": range_defs}

    return fen_obj, board, json_records, flask_method, defs_
