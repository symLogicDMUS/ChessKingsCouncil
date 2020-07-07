from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.fenParser.getBoard.top.get_board import get_board
from game_logic.fenParser.Fen import Fen
from game_logic.status.get_status import get_status
from flask_helpers.tests.filepath import get_dir_containing_name


def load(game_name):
    """get the data saved in the files for a game_name
    WARNING: uses relative paths, should only be called from top level of application
    """
    # TODO: change example_games to saved_games when saving correctly
    dir_ = get_dir_containing_name('example_games')
    f = open("../../{}/example_games/{}/{}.fen".format(dir_, game_name, game_name))
    fen = f.readline()
    f.close()
    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_status(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    json_records = JsonRecords("../../{}/example_games/{}/{}.json".format(dir_, game_name, game_name), board)
    return fen_obj, board, json_records


if __name__ == "__main__":
    fen, board, json_records = load('_initialBoard')
    print("fen:", fen)
    print("json records:", json_records)
