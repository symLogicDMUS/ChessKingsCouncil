from game_logic.printers.print_board import print_board
from game_logic.color.get_piece_color import get_piece_color
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict


def get_offset_threats(board, king_loc, color, piece_defs, id_dict):
    """ """
    board_filter1 = {}
    for sqr in board.keys():
        if board[sqr] != '#':
            board_filter1[sqr] = board[sqr]
    board_filter2 = {}
    for sqr in board_filter1.keys():
        if get_piece_color(board_filter1[sqr]) != color:
            board_filter2[sqr] = board_filter1[sqr]
    board_filter3 = {}
    for sqr in board_filter2.keys():
        id_ = board[sqr]
        piece_name = id_dict[id_[1].lower()]
        if piece_name != "King" and piece_name != "Pawn":
            board_filter3[sqr] = board_filter2[sqr]
    board_filter4 = {}
    for sqr in board_filter3.keys():
        id_ = board[sqr]
        piece_name = id_dict[id_[1].lower()]
        offset = [king_loc[0] - sqr[0], king_loc[1] - sqr[1]]
        if offset in piece_defs[piece_name][get_enemy_color(color)]["offsets"]:
            board_filter4[sqr] = board_filter3[sqr]
    return list(board_filter4.keys())


if __name__ == "__main__":
    piece_defs = get_standard_piece_defs()
    id_dict = get_standard_id_dict()

    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
     (1, 2): 'WP1', (2, 2): '#', (3, 2): 'BN1', (4, 2): '#', (5, 2): 'WQ1', (6, 2): 'WP2', (7, 2): 'WN1', (8, 2): 'WP3',
     (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): 'WN2', (5, 3): 'WB1', (6, 3): 'BN2', (7, 3): '#', (8, 3): '#',
     (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): 'WP4', (6, 4): '#', (7, 4): '#', (8, 4): '#',
     (1, 5): 'BP1', (2, 5): 'WP5', (3, 5): '#', (4, 5): 'BP2', (5, 5): 'BP3', (6, 5): '#', (7, 5): '#', (8, 5): '#',
     (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN3', (7, 6): '#', (8, 6): 'WN3',
     (1, 7): '#', (2, 7): 'BP4', (3, 7): 'BP5', (4, 7): '#', (5, 7): 'WN4', (6, 7): 'BP6', (7, 7): 'BP7', (8, 7): 'BP8',
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR2', (7, 8): 'BK1', (8, 8): '#'}

    print_board(board, heading="knight_threat2, W", highlights=get_offset_threats(board, (5, 1), "W", piece_defs, id_dict))
    print("")
    print_board(board, heading="knight_threat2, B", highlights=get_offset_threats(board, (7, 8), "B", piece_defs, id_dict))