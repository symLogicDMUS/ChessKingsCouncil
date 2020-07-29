from game_logic.status.g_status_types import *
from game_logic.piece_type.get_piece_types import get_piece_types


class GameStatus:
    def __init__(self, status):
        self.status = status['status']
        self.condition = status['condition']
        self.winner = status['winner']

    def update(self, board, ranges, enemy_color, npck):
        """
         update the status of the game: OVER or IN_PROGRESS
         update the winner of the game: 'w', 'b', or '-' (neither)
         udpate the condition of the enemy king: 'check', 'checkmate', 'stalemate', or 'safe'
         :param board: dict, game board
         :param npck: int, number of pieces checking the king
         :param ranges: dict, ranges of pieces of color
         :param enemy_color: str, color of king
        """

        if not any(ranges.values()):
            if npck > 0:
                self.condition, self.status, self.winner = 'checkmate', OVER, enemy_color
            else:
                self.condition, self.status, self.winner = 'stalemate', OVER, '-'
            return

        piece_types = get_piece_types(board)
        if piece_types == ['K', 'K']:
            self.condition, self.status, self.winner = 'stalemate', OVER, '-'
        elif piece_types == ['Bishop', 'King', 'King']:
            self.condition, self.status, self.winner = 'stalemate', OVER, '-'
        elif piece_types == ['King', 'King', 'Knight']:
            self.condition, self.status, self.winner = 'stalemate', OVER, '-'
        elif npck > 0:
            self.condition, self.status, self.winner = 'check', IN_PROGRESS, '-'
        else:
            self.condition, self.status, self.winner = '', IN_PROGRESS, '-'
