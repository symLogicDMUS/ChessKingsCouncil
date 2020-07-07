def _get_piece_colors(piece_list):
    """
    takes a list of piece assign_ids, and returns a list of the color of each piece
    """
    colors = []
    for piece in piece_list:
        if piece[0] == 'W':
            colors.append('W')
        elif piece[0] == 'B':
            colors.append('B')
        else:
            print('error: not a piece id')

    return colors


if __name__ == "__main__":
    piece_colors = _get_piece_colors(['WP4', 'WR1', 'BQ3'])
    print(piece_colors == ['W', 'W', 'B'])

