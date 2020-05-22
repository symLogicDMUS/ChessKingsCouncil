from custom_except import *
from getters.get_data import get_data
from getters.get_pathdata_dict import get_pathdata_dict
from getters.get_ranges import get_ranges
from getters.get_piece_dicts import get_piece_dicts
from getters.get_king_locs import get_king_locs
from getters.get_threat_area import get_threat_area
from getters.get_num_pieces_checking_king import get_num_pieces_checking_king
from getters.get_pins import get_pins
from getters.get_multithreat_restriction import get_multithreat_restriction
from getters.get_final_ranges import get_final_ranges
from misc.unicode_pieces import unicode_pieces_rk
from movePiece.attempt_move import attempt_move
from getters.get_color import get_color
from getters.get_unicode_board import get_unicode_board
from termcolor import colored
from time import perf_counter
from pprint import pprint
import traceback
import copy
import os


def mrd():
    """
    m ove
    r esults
    d ict
    """
    return \
        {(1, 1): False, (2, 1): False, (3, 1): False, (4, 1): False, (5, 1): False, (6, 1): False, (7, 1): False,
         (8, 1): False, (1, 2): False, (2, 2): False, (3, 2): False, (4, 2): False, (5, 2): False, (6, 2): False,
         (7, 2): False, (8, 2): False, (1, 3): False, (2, 3): False, (3, 3): False, (4, 3): False, (5, 3): False,
         (6, 3): False, (7, 3): False, (8, 3): False, (1, 4): False, (2, 4): False, (3, 4): False, (4, 4): False,
         (5, 4): False, (6, 4): False, (7, 4): False, (8, 4): False, (1, 5): False, (2, 5): False, (3, 5): False,
         (4, 5): False, (5, 5): False, (6, 5): False, (7, 5): False, (8, 5): False, (1, 6): False, (2, 6): False,
         (3, 6): False, (4, 6): False, (5, 6): False, (6, 6): False, (7, 6): False, (8, 6): False, (1, 7): False,
         (2, 7): False, (3, 7): False, (4, 7): False, (5, 7): False, (6, 7): False, (7, 7): False, (8, 7): False,
         (1, 8): False, (2, 8): False, (3, 8): False, (4, 8): False, (5, 8): False, (6, 8): False, (7, 8): False,
         (8, 8): False}


def get_result_board():
    """ """
    return \
        {(1, 1): mrd(), (2, 1): mrd(), (3, 1): mrd(), (4, 1): mrd(), (5, 1): mrd(), (6, 1): mrd(), (7, 1): mrd(),
         (8, 1): mrd(), (1, 2): mrd(), (2, 2): mrd(), (3, 2): mrd(), (4, 2): mrd(), (5, 2): mrd(), (6, 2): mrd(),
         (7, 2): mrd(), (8, 2): mrd(), (1, 3): mrd(), (2, 3): mrd(), (3, 3): mrd(), (4, 3): mrd(), (5, 3): mrd(),
         (6, 3): mrd(), (7, 3): mrd(), (8, 3): mrd(), (1, 4): mrd(), (2, 4): mrd(), (3, 4): mrd(), (4, 4): mrd(),
         (5, 4): mrd(), (6, 4): mrd(), (7, 4): mrd(), (8, 4): mrd(), (1, 5): mrd(), (2, 5): mrd(), (3, 5): mrd(),
         (4, 5): mrd(), (5, 5): mrd(), (6, 5): mrd(), (7, 5): mrd(), (8, 5): mrd(), (1, 6): mrd(), (2, 6): mrd(),
         (3, 6): mrd(), (4, 6): mrd(), (5, 6): mrd(), (6, 6): mrd(), (7, 6): mrd(), (8, 6): mrd(), (1, 7): mrd(),
         (2, 7): mrd(), (3, 7): mrd(), (4, 7): mrd(), (5, 7): mrd(), (6, 7): mrd(), (7, 7): mrd(), (8, 7): mrd(),
         (1, 8): mrd(), (2, 8): mrd(), (3, 8): mrd(), (4, 8): mrd(), (5, 8): mrd(), (6, 8): mrd(), (7, 8): mrd(),
         (8, 8): mrd()}


def run_tests(fen_, board_, json_records_, results):
    """for every piece on board, try to move it to every square on the board, and show the result for every piece"""
    # note: 4,096 iterations
    try:
        for y1 in range(8, 0, -1):
            for x1 in range(1, 9):
                for y2 in range(8, 0, -1):
                    for x2 in range(1, 9):
                        fen_obj, board, json_records = copy.deepcopy(fen_), copy.deepcopy(board_), copy.deepcopy(
                          json_records_)  # reset
                        start = (x1, y1)
                        dest = (x2, y2)
                        id_ = board[start]
                        if board[start] == '#':
                            continue
                            # color = 'W'  # arbitrary choice of color, need color to attempt to 'move' empty square
                        else:
                            color = get_color(board[start])
                        init_ranges, pins, mt_restricts, final_ranges = get_piece_dicts(board, color)
                        init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records)
                        k_loc = get_king_locs(board, color)
                        threat_area = get_threat_area(k_loc, board, color)
                        pd_dict = get_pathdata_dict(k_loc, board, color)
                        pins = get_pins(k_loc, board, color, pd_dict, pins)
                        npck = get_num_pieces_checking_king(k_loc, board, color, pd_dict)
                        mt_restricts = get_multithreat_restriction(board, npck, color)
                        final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts, color)
                        board, captured, moved = attempt_move(board, start, dest, color, final_ranges, special_moves)
                        if moved:
                            results[start][dest] = True
    except:
        print(colored("RUNTIME ERROR", 'red'))
        f = open("log1.txt", "a")
        traceback.print_exc(file=f)
        f.write("({}, {}), ({}, {})\n\n".format(x1, y1, x2, y2))
        return -1

    return results


def print_results(results, uni_board, skip_empty=False, specific_type=None):
    """ """
    for y1 in range(8, 0, -1):
        for x1 in range(1, 9):
            if skip_empty and (uni_board[x1, y1] == '▯' or uni_board[x1, y1] == '▮'):
                continue
            if specific_type is not None and unicode_pieces_rk[uni_board[x1, y1]] != specific_type:
                continue
            print("==================================== {} ====================================".format((x1, y1)))
            for y2 in range(8, 0, -1):
                for x2 in range(1, 9):
                    if (x2, y2) == (x1, y1):
                        print(colored(uni_board[x2, y2], 'cyan'), end="")
                    elif results[x1, y1][x2, y2]:
                        print(colored(uni_board[x2, y2], 'red'), end="")
                    else:
                        print(uni_board[x2, y2], end="")
                print("")


def test_game(game_name):
    f = open("log1.txt", "w").close()
    print(colored(game_name.upper(), 'red'))
    results = get_result_board()
    fen_, board_, json_records_ = get_data(game_name, 'python_backend')
    uni_board = get_unicode_board(board_)
    results = run_tests(fen_, board_, json_records_, results)
    if results == -1:
        return
    print_results(results, uni_board, skip_empty=True)


def test_all():
    """attempt every move for every example game"""
    for game_name in os.listdir('../../example_games'):
        t1 = perf_counter()
        test_game(game_name)
        t2 = perf_counter()
        print("time:{}".format(t2 - t1))


def test_menu():
    """pick the game from example games to run possible move attempts, or enter 'all' to test all examples"""
    games = {}
    i = 1
    games["X"] = "Quit"
    games["ALL"] = "Test all examples"
    print("pick number of game to run all move attempts on, 'ALL' to test all examples, or 'X' to quit:")
    for game in os.listdir("../../example_games"):
        games[str(i)] = game
        i += 1
    pprint(games)
    c = input("number: ")
    while c not in games.keys():
        print("Not a number in list. Pick number of game to move attempts on, 'ALL' to test all examples, or 'X' to "
              "quit:")
        pprint(games)
        c = input("number: ")
    if c == "X":
        return
    if c == 'ALL':
        test_all()
        test_menu()
    else:
        game_name = games[c]
        test_game(game_name)
        test_menu()


if __name__ == "__main__":
    test_menu()
