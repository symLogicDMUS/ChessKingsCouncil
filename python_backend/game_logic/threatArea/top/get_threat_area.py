from game_logic.threatArea.get_path_threats import get_path_threats
from game_logic.threatArea.get_pawn_threats import get_pawn_threats
from game_logic.threatArea.get_knight_threats import get_knight_threats
from game_logic.printers.print_board import print_board


def get_threat_area(sqr, board, color):
    """
    get list of all squares containing a piece putting the king in check, 
    or that belong to the attack path of the piece
    """
    path_threats = get_path_threats(sqr, board, color)
    pawn_threats = get_pawn_threats(sqr, board, color)
    knight_threats = get_knight_threats(sqr, board, color)
    threat_area = path_threats + pawn_threats + knight_threats
    return threat_area


if __name__ == "__main__":
    # test 1, super_checkmate_impossible_example:
    print('test 1:')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR3', (7, 8): 'BK1', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BN1', (5, 7): 'BP1', (6, 7): '#', (7, 7): 'BP2', (8, 7): '#',
         (1, 6): 'BR2', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WK1', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): 'BB1',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): 'BQ1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): 'BR1', (7, 1): '#', (8, 1): '#'}

    threat_area = get_threat_area((6, 6), board, 'W')
    print_board(board, highlights=threat_area)
    print(threat_area == [(6, 7), (6, 8), (7, 5), (8, 4), (6, 5), (6, 4), (6, 3), (6, 2), (6, 1), (5, 5), (4, 4),
                          (3, 3), (2, 2), (1, 1), (5, 6), (4, 6), (3, 6), (2, 6), (1, 6), (5, 7), (7, 7), (4, 7)])
    print('\n')
