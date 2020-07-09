from game_logic.ranges.paths.get_paths import get_paths
from game_logic.ranges.jumps.get_jumps import get_jumps
from game_logic.printers.print_board import print_board
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_range(id_dict, range_defs, board, sqr, color):
    """ """
    id_ = board[sqr]
    fen_id = id_[1].lower()
    name = id_dict[fen_id]
    def_ = range_defs[name]
    offsets = def_[color]['offsets']
    step_funcs = def_[color]['spans']
    paths = get_paths(step_funcs, board, sqr, color)
    jumps = get_jumps(offsets, board, sqr, color)
    paths.extend(jumps)
    return paths


if __name__ == "__main__":

    board = sample_board_dicts['ranges_test']
    ranges = \
        {'BB1': [],
         'BB2': [],
         'BK1': [],
         'BN1': [],
         'BN2': [],
         'BQ1': [],
         'BR1': [],
         'BR2': [],
         'WB1': [],
         'WB2': [],
         'WB3': [],
         'WK1': [],
         'WN1': [],
         'WN2': [],
         'WQ1': [],
         'WR1': [],
         'WR2': [],
         'WR3': [],
         'WR4': []}
    id_defs = get_standard_id_dict()
    range_defs = get_standard_range_defs()
    piece_range = get_range(id_defs, range_defs, board, (3, 3), 'W')
    print_board(board, heading="c3", highlights=piece_range)
    piece_range = get_range(id_defs, range_defs, board, (4, 5), 'W')
    print_board(board, heading="d5", highlights=piece_range)

