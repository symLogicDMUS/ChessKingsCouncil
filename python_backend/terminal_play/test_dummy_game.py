from terminal_play.get_data import get_data
from game_logic.bools.game_over import game_over
from game_logic.helpers.fifty_move_draw import fifty_move_draw
from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.color.get_next_color import get_next_color
from game_logic.ranges.top.get_ranges import get_ranges
from game_logic.getters.get_reset_piece_dicts import get_reset_piece_dicts
from game_logic.threatArea.get_king_locs import get_king_locs
from game_logic.threatArea.top.get_threat_area import get_threat_area
from game_logic.restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from game_logic.pins.top.get_pins import get_pins
from game_logic.restriction.get_multithreat_restriction import get_multithreat_restriction
from game_logic.ranges.top.get_final_ranges import get_final_ranges
from game_logic.printers.print_board import print_board
from game_logic.fenParser.getFen.top.get_fen import get_fen
from game_logic.ranges.specialMoves.pawn_promotion.promote import promote
from terminal_play.save import save
from terminal_play.get_move import get_move
from game_logic.movePiece.move import move
from termcolor import colored
from pprint import pprint
import os


def test_dummy_game(game_name):
    """dummy walk through of a game where random dest is chosen from random piece's range and then moved upon"""
    fen_obj, board, json_records, status, game_type, player_type, promo_choices, piece_defs,  id_dict, = get_data(game_name)
    if status.winner != '-':
        status.winner = '-'
    color = fen_obj.turn.upper()
    moved, x, p_flag = False, False, False
    start, dest = "", ""
    while not x:
        init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
        init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, piece_defs,  id_dict)
        k_loc = get_king_locs(board, color)
        threat_area = get_threat_area(board, k_loc, color, piece_defs,  id_dict)
        pd_dict = get_pathdata_dict(board, k_loc, color, piece_defs,  id_dict)
        pins = get_pins(pd_dict, pins)
        npck = get_num_pieces_checking_king(board, k_loc, color, pd_dict, piece_defs, id_dict)
        mt_restricts = get_multithreat_restriction(board, npck, color)
        final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts)
        status.update(board, final_ranges, get_next_color(color), npck)
        if game_over(status.status):
            break
        start, dest = get_move(board, final_ranges)
        board, captured = move(board, start, dest, color, special_moves)
        board, p_flag, = promote(board, start, dest, color, default=True)
        json_records.update(board[dest], start, dest, p_flag)
        fen_obj.update_state(special_moves, json_records, start, dest, captured, color)
        json_records, x = fifty_move_draw(fen_obj.hm_clock, json_records, default=True)
        print_board(board, heading=colored(status.condition), highlights4=[start], highlights=[dest])
        color = get_next_color(color)

    print_board(board, heading=colored(status.condition, 'red'), highlights4=[start], highlights=[dest])
    print("Game Over. Winner: {}".format(status.winner))
    pos_str = get_fen(board)
    fen = fen_obj.set_get_new_fen(pos_str)
    save(game_name,
         game_type,
         player_type,
         fen,
         json_records.get_records(),
         status.get_status(),
         id_dict,
         piece_defs,
         promo_choices
         )


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
