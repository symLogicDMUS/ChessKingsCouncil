from api_helpers.filter_empy_ranges import filter_empty_ranges
from api_helpers.get_move_simplest import get_move_simplest
import random


def get_move(board, ranges):
    """ """
    ai_ranges = filter_empty_ranges(ranges)
    piece_id = random.choice(list(ai_ranges.keys()))
    start, dest = get_move_simplest(board, piece_id, ai_ranges)
    return start, dest
