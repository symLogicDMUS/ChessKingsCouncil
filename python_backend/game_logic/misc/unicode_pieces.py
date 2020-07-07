unicode_pieces = {'W': {'Rook': '♜', 'Queen': '♛', 'King': '♚', 'Bishop': '♝', 'Knight': '♞', 'Pawn': '♟'},
                  'B': {'Rook': '♖', 'Queen': '♕', 'King': '♔', 'Bishop': '♗', 'Knight': '♘', 'Pawn': '♙'}}
# reverse key of above 'W' and 'B' dicts
unicode_pieces_rk = \
    {
        '\u265c': "Rook",
        '\u265b': "Queen",
        '\u265a': "King",
        '\u265d': "Bishop",
        '\u265e': "Knight",
        '\u265f': "Pawn",
        '\u2656': "Rook",
        '\u2655': "Queen",
        '\u2654': "King",
        '\u2657': "Bishop",
        '\u2658': "Knight",
        '\u2659': "Pawn"
    }
if __name__ == "__main__":
    for color in unicode_pieces.keys():
        for piece_type in unicode_pieces[color].keys():
            print(unicode_pieces[color][piece_type], ascii(unicode_pieces[color][piece_type]))
    for uni_p in unicode_pieces_rk.keys():
        print(unicode_pieces_rk[uni_p])