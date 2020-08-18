import os
from game_logic.fenParser.getBoard.top.get_board import get_board


def print_all_board_dicts():
    """ """
    game_names = os.listdir("../../example_games")
    last_entry = game_names[-1]
    print("board_dict_samples =\\")
    print("{")
    for game_name in game_names:
        f = open("../../example_games/{}/{}.fen".format(game_name, game_name), 'r')
        fen = f.readline()
        board = get_board(fen)
        if game_name == last_entry:
            print('    "{}": {}'.format(game_name, board)) # no ending comma
        else:
            print('    "{}": {},'.format(game_name, board)) # ending comma
    print("}")


if __name__ == "__main__":
    print_all_board_dicts()