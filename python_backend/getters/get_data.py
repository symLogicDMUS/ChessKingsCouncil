
import os
from JsonRecords.JsonRecords import JsonRecords
from getters.get_board import get_board
from getters.get_fullpath import get_fullpath
from fenParser.Fen import Fen
from getters.get_status import get_status


def get_data(game_name, backend_dir):
    """get the data saved in the files for a game_name
    WARNING: uses relative paths, should only be called from top level of application
    """
    # TODO: change ./example_games to  ./saved_games when comfortable that games working correctly
    backend_dir = get_fullpath(backend_dir)
    original_dir = os.path.realpath('.')
    os.chdir(backend_dir)
    f = open("./example_games/{}/{}.fen".format(game_name, game_name))
    fen = f.readline()
    f.close()
    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_status(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    json_records = JsonRecords("./example_games/{}/{}.json".format(game_name, game_name), board)
    os.chdir(original_dir)
    return fen_obj, board, json_records


if __name__ == "__main__":
    fen, board, json_records = get_data('_initialBoard', 'terminal')
    print("fen:", fen)
    print("json records:", json_records)
