from game_logic.GameStatus.g_status_types import *
from game_logic.piece_type.get_piece_types import get_piece_types


def get_status(board, ranges, enemy_color, npck):
    """
     update the status of the game: OVER or IN_PROGRESS
     update the winner of the game: 'w', 'b', or '-' (neither)
     udpate the condition of the enemy king: 'check', 'checkmate', 'stalemate', or 'safe'
     :param board: dict, game board
     :param npck: int, number of pieces checking the king
     :param ranges: dict, ranges of pieces of color
     :param enemy_color: str, color of king
    """
    piece_types = get_piece_types(board)
    condition, status, winner = '', IN_PROGRESS, '-'
    if not any(ranges.values()):
        if npck > 0:
            condition, status, winner = 'checkmate', OVER, enemy_color
        else:
            condition, status, winner = 'stalemate', OVER, '-'
    elif piece_types == ['K', 'K']:
        condition, status, winner = 'stalemate', OVER, '-'
    elif npck > 0:
        condition, status, winner = 'check', IN_PROGRESS, '-'
    return {'condition': condition, 'status': status, 'winner': winner}
