def _get_statuses(piece_list, color):
    """takes a list of piece assign_ids, and returns list of 'f' for friend and 'e' for enemy"""
    statuses = []
    for piece in piece_list:
        if piece[0] == color:
            statuses.append('f')
        else:
            statuses.append('e')

    return statuses


if __name__ == "__main__":
    print(_get_statuses(['WP4', 'WR1', 'BQ3'], 'W') == ['f', 'f', 'e'])

