import os
import json
from flask_helpers.helpers.filepath import get_dir_containing_name


def get_piece_type(id_):
    """return letter of the piece to indicate id """
    if id_ == '#':
        return "Empty"
    return id_[1]


if __name__ == "__main__":

    for id_ in ['WP1', 'BB2', 'WQ3', 'WK1', 'BK1', 'WR2', 'WN1']:
        type_ = get_piece_type(id_)
        print("id:{}, type:{}\n".format(id_, type_))
