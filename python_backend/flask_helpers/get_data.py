from game_logic.fenParser.Fen import Fen
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.GameStatus.GameStatus import GameStatus
from game_logic.fenParser.getBoard.top.get_board import get_board
from game_logic.status.get_status import get_status
from flask_helpers.helpers.filepath import get_dir_containing_name
from pprint import pprint
import json


def get_data(game_name):
    """get the data saved in the files for a game_name
    WARNING: uses relative paths, should only be called from top level of application
    """
    # TODO: change ./saved_games to  ./saved_games when comfortable that games working correctly
    dir_ = get_dir_containing_name('saved_games')

    f = open("{}/saved_games/{}/{}.fen".format(dir_, game_name, game_name), 'r')
    fen = f.readline()
    f.close()

    board = get_board(fen)
    turn, castle_avail, en_passant_avail, hm_num, fm_num = get_status(fen)
    fen_obj = Fen(fen, turn, castle_avail, en_passant_avail, hm_num, fm_num)
    json_records = JsonRecords("{}/saved_games/{}/{}.json".format(dir_, game_name, game_name), board)

    f = open("{}/saved_games/{}/{}.type".format(dir_, game_name, game_name), 'r')
    game_type = f.readline()
    f.close()

    f = open("{}/saved_games/{}/{}.pt".format(dir_, game_name, game_name), 'r')
    player_type = f.read()
    f.close()

    f = open("{}/saved_games/{}/{}.status".format(dir_, game_name, game_name), 'r')
    data = f.read()
    status = json.loads(data)
    json.dumps(status)
    status = GameStatus(status)
    f.close()

    f = open("{}/saved_games/{}/{}.ids".format(dir_, game_name, game_name), 'r')
    data = f.read()
    id_dict = json.loads(data)
    json.dumps(id_dict)
    f.close()

    f = open("{}/saved_games/{}/{}.defs".format(dir_, game_name, game_name), 'r')
    data = f.read()
    range_defs = json.loads(data)
    json.dumps(range_defs)
    f.close()

    defs_ = {"id_dict": id_dict, "range_defs": range_defs}

    return fen_obj, board, json_records, status, game_type, player_type, defs_


if __name__ == "__main__":
    pprint(get_data("fundemental_defense"))
