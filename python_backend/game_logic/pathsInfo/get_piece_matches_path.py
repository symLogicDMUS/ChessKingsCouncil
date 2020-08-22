from game_logic.step_funcs.step_funcs import *
from game_logic.step_funcs.get_rotation import get_rotation
from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs


def _get_piece_matches_path(step_func, piece_defs, piece_name, piece_color):
    """if the type of piece matches the type of path, then the piece can attack on that type of path"""
    if piece_name not in piece_defs.keys():
        return False
    step_func = get_rotation(step_func.__name__, 180)
    if step_func.__name__ not in piece_defs[piece_name][piece_color]["spans"]:
        return False
    return True


if __name__ == "__main__":

    piece_defs = get_standard_piece_defs()

    for piece_name in piece_defs:
        for step_func in [step_1sqr0d, step_1sqr90d, step_1sqr180d, step_1sqr270d,
                          step_1sqr45d, step_1sqr135d, step_1sqr225d, step_1sqr315d]:
            # W:
            matches_path = _get_piece_matches_path(step_func, piece_defs, piece_name, "W")
            if matches_path:
                print("piece type:{} path type:{}\n".format(piece_name, step_func.__name__))
            # B:
            matches_path = _get_piece_matches_path(step_func, piece_defs, piece_name, "B")
            if matches_path:
                print("piece type:{} path type:{}\n".format(piece_name, step_func.__name__))
