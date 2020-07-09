from game_logic.piece_type.is_piece import is_piece
from game_logic.color.get_color import get_color
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_reset_piece_dicts(board, color):
    """create and return dicts for the initial ranges, pins, mt-restrictions and final ranges, of pieces on board"""
    init_ranges = {}
    pins = {}
    mt_restricts = {}
    final_ranges = {}
    for id_ in board.values():
        if not is_piece(id_):
            continue
        if get_color(id_) != color:
            continue
        init_ranges[id_] = []
        pins[id_] = []
        mt_restricts[id_] = []
        final_ranges[id_] = []
    return init_ranges, pins, mt_restricts, final_ranges


if __name__ == "__main__":

    print('test 1:')
    board = sample_board_dicts['check_example3']
    i_ranges, pins, mt_res, f_ranges = get_reset_piece_dicts(board, 'W')
    print("init_ranges:{}\n\n pins:{}\n\n mt-res:{}\n\n final_ranges:{}\n".format(i_ranges, pins, mt_res, f_ranges))
    print('\n')

    print('test 2:')
    board = sample_board_dicts['check_example1']
    i_ranges, pins, mt_res, f_ranges = get_reset_piece_dicts(board, 'W')
    print("init_ranges:{}\n\n pins:{}\n\n mt-res:{}\n\n final_ranges:{}\n".format(i_ranges, pins, mt_res, f_ranges))
    print('\n')
    i_ranges, pins, mt_res, f_ranges = get_reset_piece_dicts(board, 'B')
    print("init_ranges:{}\n\n pins:{}\n\n mt-res:{}\n\n final_ranges:{}\n".format(i_ranges, pins, mt_res, f_ranges))
    print('\n')
