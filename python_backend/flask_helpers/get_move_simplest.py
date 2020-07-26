import random
from pprint import pprint
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_move_simplest(board, piece_id, ranges):
    """dummest possible AI for picking a move. Picks a random move from the range of piece_id"""
    # https://stackoverflow.com/questions/483666/reverse-invert-a-dictionary-mapping
    piece_dict = {v: k for k, v in board.items()}
    start = piece_dict[piece_id]
    dest = random.choice(ranges[piece_id])
    return start, dest


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
    pprint(get_move_simplest(sample_board_dicts['single_move'], 'BP5', ranges))
