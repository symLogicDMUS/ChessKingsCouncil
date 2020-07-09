from game_logic.threatArea.get_potential_pawn_threats import get_potential_pawn_threats
from game_logic.threatArea.get_actual_pawn_threats import get_actual_pawn_threats
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_pawn_threats(board, sqr, color):
    """return list of squares containing a pawn putting the king in check"""
    potential_pawn_threats = get_potential_pawn_threats(board, sqr, color)
    actual_pawn_threats = get_actual_pawn_threats(board, potential_pawn_threats, color)

    return actual_pawn_threats


if __name__ == "__main__":
    board = sample_board_dicts['pawn_threat1']
    print('test 1:')
    print(get_pawn_threats(board, (6, 3), 'W'))
    print('\n')
    print('test 2:')
    print(get_pawn_threats(board, (3, 5), 'B'))
