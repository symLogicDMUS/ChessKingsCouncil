import copy
import random
from api_helpers.get_move_simplest import get_move_simplest
from api_helpers.filter_empy_ranges import filter_empty_ranges
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.movePiece.move import move
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.printers.print_board import print_board
from pprint import pprint


def ai_move(board, ranges, color, special_moves):
    """ """
    response_board = copy.deepcopy(board)
    ai_ranges = filter_empty_ranges(ranges)
    piece_id = random.choice(list(ai_ranges.keys()))
    start, dest = get_move_simplest(response_board, piece_id, ai_ranges)
    response_board, captured = move(response_board, start, dest, color, special_moves)
    if captured == "None":
        captured = False
    return captured, start, dest


if __name__ == "__main__":
    ranges = {'BB1': [],
              'BB2': [],
              'BK1': [],
              'BN1': [(1, 6), (3, 6)],
              'BN2': [(6, 6), (8, 6)],
              'BP1': [(1, 6), (1, 5)],
              'BP2': [(2, 6), (2, 5)],
              'BP3': [(3, 6), (3, 5)],
              'BP4': [(4, 6), (4, 5)],
              'BP5': [(5, 6), (5, 5)],
              'BP6': [(6, 6), (6, 5)],
              'BP7': [(7, 6), (7, 5)],
              'BP8': [(8, 6), (8, 5)],
              'BQ1': [],
              'BR1': [],
              'BR2': []}

    captured, start, dest = ai_move(sample_board_dicts['single_move'], ranges, 'B', SpecialMoves())
    pprint([captured, start, dest])
    print_board(sample_board_dicts['single_move'], highlights=[start, dest])
