from bools.game_over import game_over
from helpers.fifty_move_draw import fifty_move_draw
from load_save.load import load
from pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from color.get_next_color import get_next_color
from ranges.top.get_ranges import get_ranges
from getters.get_reset_piece_dicts import get_reset_piece_dicts
from getters.get_king_locs import get_king_locs
from threatArea.top.get_threat_area import get_threat_area
from restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from pins.top.get_pins import get_pins
from restriction.get_multithreat_restriction import get_multithreat_restriction
from ranges.top.get_final_ranges import get_final_ranges
from getters.get_random_move import get_random_move
from printers.print_board import print_board
from printers.print_board_highlight_sd import print_board_highlight_sd
from fenParser.getFen.top.get_fen import get_fen
from ranges.specialMoves.pawn_promotion.promote import promote
from load_save.save import save
from movePiece.attempt_move import attempt_move
from termcolor import colored
from pprint import pprint
import os


def test_dummy_game(game_name):
    """dummy walk through of a game where random dest is chosen from random piece's range and then moved upon"""
    fen_obj, board, json_records = load(game_name)
    if json_records.winner != '-':
        json_records.winner = '-'
    color = fen_obj.turn.upper()
    moved, x, p_flag = False, False, False
    start, dest = "", ""
    while not x:
        init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
        init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records)
        k_loc = get_king_locs(board, color)
        threat_area = get_threat_area(k_loc, board, color)
        pd_dict = get_pathdata_dict(k_loc, board, color)
        pins = get_pins(k_loc, board, color, pd_dict, pins)
        npck = get_num_pieces_checking_king(k_loc, board, color, pd_dict)
        mt_restricts = get_multithreat_restriction(board, npck, color)
        final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts, color)
        json_records.update_state(board, final_ranges, get_next_color(color), npck)
        if game_over(json_records.game_status):
            break
        start, dest = get_random_move(board, final_ranges)
        print_board_highlight_sd(board, start, dest, heading=colored("move:{}".format(color), color='red'))
        board, captured, moved = attempt_move(board, start, dest, color, final_ranges, special_moves)
        board, p_flag, = promote(board, start, dest, color, default=True)
        json_records.update_hist(board[dest], start, dest, p_flag)
        fen_obj.update_state(special_moves, json_records, start, dest, captured, color)
        json_records, x = fifty_move_draw(fen_obj.hm_clock, json_records, default=True)
        print_board(board, heading=colored(json_records.condition, 'red'), highlights=dest)
        color = get_next_color(color)

    print_board(board, heading=colored(json_records.condition, 'red'), highlights=dest)
    print("Game Over. Winner: {}".format(json_records.winner))
    pos_str = get_fen(board)
    fen = fen_obj.set_get_new_fen(pos_str)
    save('dummy_game', fen, json_records)


def test_menu():
    """pick the game from example games to run dummy test on."""
    # test_dummy_game('dummy_game')
    games = {}
    i = 1
    games["X"] = "Quit"
    print("pick number of game to run dummy game on, or X to quit:")
    for game in os.listdir("../../example_games"):
        games[str(i)] = game
        i += 1
    pprint(games)
    c = input("number: ")
    while c not in games.keys():
        print("Not a number in list. Pick number of game to run dummy game on, or X to quit:")
        pprint(games)
        c = input("number: ")
    if c == "X":
        return
    else:
        game_name = games[c]
        test_dummy_game(game_name)
        test_menu()


if __name__ == "__main__":
    test_dummy_game('dummy_game')
    # test_menu()
