from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.color.get_color import get_color


def get_king_locs(board, color):
    """get the location of the king of given color NOTE: in the modified chess can return list instead of single item"""
    locs = list(filter(lambda s: get_piece_type(board[s]) == 'K' and get_color(board[s]) == color, board.keys()))
    if len(locs) == 1:
        return locs[0]
    else:
        return locs


if __name__ == "__main__":
    board = sample_board_dicts['check_example3']
    print(get_king_locs(board, 'W') == (4, 4))
    print(get_king_locs(board, 'B') == (4, 8))