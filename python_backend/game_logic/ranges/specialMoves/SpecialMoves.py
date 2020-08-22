from game_logic.ranges.specialMoves.pawn_promotion.get_pawn_dict import get_pawn_dict
from game_logic.ranges.specialMoves.pawn_promotion.is_promo import is_promo
from pprint import pprint


class SpecialMoves(object):
    """records the moves of current turn that are en-passant, castle, or pawn promotion"""

    def __init__(self):
        """list elements in form of (start, dest) where start and dest are (x, y)"""
        self.en_passant = []
        self.castles = []
        self.promos = []

    def is_castle(self, move):
        """returns true if move is a currently available castle, otherwise false"""
        if move in self.castles:
            return True
        else:
            return False

    def is_promo(self, move):
        """returns true if move is a currently available pawn promotion, otherwise false"""
        if move in self.promos:
            return True
        else:
            return False

    def is_en_passant(self, move):
        """returns true if move is a currently available en-passant capture, otherwise false"""
        if move in self.en_passant:
            return True
        else:
            return False

    def add_castle(self, move):
        """add move to currently available castles"""
        self.castles.append(move)

    def add_promo(self, move):
        """add move to list of currently avaliable pawn promotions"""
        self.promos.append(move)

    def add_en_passant(self, move):
        """add move to list of currently avaliable en-passants"""
        self.en_passant.append(move)

    def get_moves(self):
        """return castle, en_passant, and pawn promotion lists, as a dict"""
        return {'castles': self.castles, 'en_passant': self.en_passant, 'promos': self.promos}

    def get_castles(self):
        """return the list of castle moves"""
        return self.castles

    def get_en_passant(self):
        """return the en-passant moves"""
        return self.en_passant

    def get_promos(self):
        """return the pawn promotions"""
        return self.promos

    def set_promos(self, board, ranges, color):
        """use the ranges and board to determine potential pawn promotions"""
        pawn_dict = get_pawn_dict(board, ranges, color)
        for loc_id in pawn_dict.keys():
            for loc in pawn_dict[loc_id]:
                if is_promo(loc_id[0], loc, loc_id[1]):
                    self.add_promo((loc_id[0], loc))
        return self.promos


if __name__ == "__main__":
    special_moves = SpecialMoves()
    # note: ranges are supposed to be for player who's turn it currently is, but combined white and black for testing
    # purposes
    ranges = \
        {'WB1': [(7, 2), (8, 3), (5, 2), (4, 3), (3, 4), (2, 5), (1, 6)],
         'WB2': [(6, 4), (7, 5), (8, 6), (4, 4), (3, 5), (2, 6), (1, 7), (4, 2), (3, 1)],
         'WK1': [(4, 2), (5, 2)],
         'WN1': [(5, 2), (6, 3), (8, 3)],
         'WN2': [(2, 1), (3, 2), (3, 4), (2, 5)],
         'WP1': [(6, 3), (6, 4)],
         'WP2': [(8, 3), (8, 4)],
         'WP3': [(1, 5)],
         'WP4': [(6, 5)],
         'WP5': [(7, 5), (8, 5), (6, 5)],
         'WP6': [(2, 8), (3, 8), (1, 8)],
         'WQ1': [(5, 2), (6, 3), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (3, 2), (3, 1), (2, 1)],
         'WR1': [(1, 2), (2, 1), (3, 1)],
         'WR2': [],
         'BB1': [(2, 7)],
         'BB2': [(5, 7), (4, 6), (3, 5), (2, 4), (1, 3)],
         'BK1': [(5, 7), (6, 7)],
         'BN1': [(2, 4), (4, 4), (1, 5), (1, 7), (5, 7), (2, 8)],
         'BN2': [(6, 6), (8, 6), (5, 7)],
         'BP1': [(3, 1), (4, 1)],
         'BP2': [],
         'BP3': [(6, 4), (5, 4), (7, 4)],
         'BP4': [(8, 4), (7, 4)],
         'BP5': [(4, 6), (4, 5)],
         'BP6': [(7, 6), (7, 5)],
         'BQ1': [(3, 7), (2, 6), (1, 5), (5, 7), (6, 6), (7, 5), (8, 4)],
         'BR1': [(1, 7), (1, 6), (1, 5), (1, 4), (2, 8)],
         'BR2': [(8, 7), (8, 6)]}

    board =\
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB1', (7, 1): 'WN1', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): 'BP1', (4, 2): '#', (5, 2): '#', (6, 2): 'WP1', (7, 2): '#', (8, 2): 'WP2',
         (1, 3): 'WN2', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): 'WB2', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 4): 'WP3', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): 'WP4', (6, 4): '#', (7, 4): 'WP5', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BP2', (6, 5): 'BP3', (7, 5): '#', (8, 5): 'BP4',
         (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): 'WP6', (3, 7): '#', (4, 7): 'BP5', (5, 7): '#', (6, 7): '#', (7, 7): 'BP6', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2', (8, 8): 'BR2'}

    pprint(special_moves.set_promos(board, ranges, 'B'))
    pprint(special_moves.set_promos(board, ranges, 'W'))
