
from pins.get_index_second_piece import _get_index_attacking_piece
from pins.is_pin import is_pin
from pathsInfo.get_sub_path import get_sub_path
from pathsInfo.pathData import _PathData


def _get_pin_info(path_data):
    """return the id of the piece that is pinned, and the coordinate path it is pinned to"""
    i = _get_index_attacking_piece(path_data.pieces, path_data.path)
    pin_path = get_sub_path(path_data.coord_path, i)
    return path_data.pieces[0], pin_path


if __name__ == "__main__":
    p = _PathData('90d')
    p.auto(
        ['#', 'WP2', 'BR2', 'BK1'],
        [(4, 5), (4, 6), (4, 7), (4, 8)],
        ['WP2', 'BR2', 'BK1'],
        ['f', 'e', 'e'],
        [False, True, False]
    )
    print(_get_pin_info(p))

    p = _PathData('45d')
    p.auto(
        ['#', 'WP3', 'WP4', 'BB2'],
        [(5, 5), (6, 6), (7, 7), (8, 8)],
        ['WP3', 'WP4', 'BB2'],
        ['f', 'f', 'e'],
        [False, False, True])
    print(_get_pin_info(p))

    p = _PathData('0d')
    p.auto(
        ['#', 'WQ2', 'WB1', 'BR1'],
        [(5, 4), (6, 4), (7, 4), (8, 4)],
        ['WQ2', 'WB1', 'BR1'],
        ['f', 'f', 'e'],
        [True, False, True])
    print(_get_pin_info(p))

    p = _PathData('315d')
    p.auto(
        ['#', 'WR2', 'BQ2'],
        [(5, 3), (6, 2), (7, 1)],
        ['WR2', 'BQ2'],
        ['f', 'e'],
        [False, True])
    print(_get_pin_info(p))

    p = _PathData('270d')
    p.auto(
        ['WP1', 'WR1', 'BQ1'],
        [(4, 3), (4, 2), (4, 1)],
        ['WP1', 'WR1', 'BQ1'],
        ['f', 'f', 'e'],
        [False, True, True])
    print(_get_pin_info(p))

    p = _PathData('225d')
    p.auto(
        ['WN1', '#', 'BB1'],
        [(3, 3), (2, 2), (1, 1)],
        ['WN1', 'BB1'],
        ['f', 'e'],
        [False, True])
    print(_get_pin_info(p))

    p = _PathData('180d')
    p.auto(
        ['WQ1', '#', 'BQ3'],
        [(3, 4), (2, 4), (1, 4)],
        ['WQ1', 'BQ3'],
        ['f', 'e'],
        [True, True])
    print(_get_pin_info(p))
