from custom_except import *
from pathsInfo.piece_types import _piece_types


def _get_piece_matches_path(piece_type, path_type):
    """if the type of piece matches the type of path, then the piece can attack on that type of path"""

    if path_type in _piece_types[piece_type]:
        return True
    else:
        return False


if __name__ == "__main__":

    for piece_type in ['Bishop', 'Rook', 'Queen']:
        for path_type in ['0d', '90d', '180d', '270d', '45d', '135d', '225d', '315d']:
            matches_path = _get_piece_matches_path(piece_type, path_type)
            if matches_path:
                print("piece type:{} path type:{}\n".format(piece_type, path_type))
