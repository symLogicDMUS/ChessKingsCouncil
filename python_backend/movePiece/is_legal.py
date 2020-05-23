from coordType.xy.is_xy import is_xy


def is_legal(ranges, board, start, dest):
    """return True if piece with id at location start can move to dest, otherwise False"""
    if not is_xy(start) or not is_xy(dest):
        return False
    id_ = board[start]
    if id_ == "#":
        return False
    if dest not in ranges[id_]:
        return False
    return True


if __name__ == "__main__":
    pass  # TODO: implement test
