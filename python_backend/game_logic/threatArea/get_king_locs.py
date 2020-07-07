from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.color.get_color import get_color


def get_king_locs(board, color):
    """get the location of the king of given color NOTE: in the modified chess can return list instead of single item"""
    locs = list(filter(lambda s: get_piece_type(board[s]) == 'King' and get_color(board[s]) == color, board.keys()))
    if len(locs) == 1:
        return locs[0]
    else:
        return locs


if __name__ == "__main__":
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): 'BK1', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): 'BB2',
         (1, 7): 'BQ4', (2, 7): '#', (3, 7): '#', (4, 7): 'BR2', (5, 7): '#', (6, 7): '#', (7, 7): 'WP4', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WP2', (5, 6): '#', (6, 6): 'WP3', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): 'BQ3', (2, 4): '#', (3, 4): 'WQ1', (4, 4): 'WK1', (5, 4): '#', (6, 4): 'WQ2', (7, 4): 'WB1', (8, 4): 'BR1',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WP1', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WR1', (5, 2): '#', (6, 2): 'WR2', (7, 2): '#', (8, 2): '#',
         (1, 1): 'BB1', (2, 1): '#', (3, 1): '#', (4, 1): 'BQ1', (5, 1): '#', (6, 1): '#', (7, 1): 'BQ2', (8, 1): '#'}

    print(get_king_locs(board, 'W') == (4, 4))
    print(get_king_locs(board, 'B') == (4, 8))