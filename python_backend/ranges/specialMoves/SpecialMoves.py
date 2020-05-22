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


if __name__ == "__main__":
    special_moves = SpecialMoves()

    special_moves.add_castle(((5, 1), (7, 1)))
    special_moves.add_en_passant(((2, 6), (1, 6)))
    special_moves.add_promo(((3, 7), (3, 8)))
    print(special_moves.is_castle(((5, 1), (7, 1))))
    print(special_moves.is_en_passant(((2, 6), (1, 6))))
    print(special_moves.is_promo(((3, 7), (3, 8))))
