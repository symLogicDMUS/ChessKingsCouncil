from game_logic.pathsInfo.get_coord_path import _get_coord_path
from game_logic.pathsInfo.get_path import _get_path
from game_logic.pathsInfo.get_pieces_on_path import _get_pieces_on_path
from game_logic.pathsInfo.get_statuses import _get_statuses
from game_logic.pathsInfo.get_piece_matches_path import _get_piece_matches_path
from game_logic.step_funcs.step_funcs import *
from game_logic.printers.print_board import print_board
from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def _get_path_data(board, sqr, color, piece_defs, id_dict, step_func):
    """get all info about a path on board determined by step function stemming from sqr"""
    x, y = sqr[0], sqr[1]
    coord_path = _get_coord_path(x, y, step_func)
    path = _get_path(board, x, y, step_func)
    piece_ids = _get_pieces_on_path(board, x, y, step_func)
    statuses = _get_statuses(piece_ids, color)
    piece_matches_path = []
    for piece_id in piece_ids:
        id_ = piece_id[1].lower()
        piece_name = id_dict[id_]
        piece_matches_path.append(_get_piece_matches_path(step_func, piece_defs, piece_name, color))
    return [coord_path, path, piece_ids, statuses, piece_matches_path]


if __name__ == "__main__":

    board = sample_board_dicts['check_example3']
    piece_defs = get_standard_piece_defs()
    id_dict = get_standard_id_dict()

    # test 1, 90:
    print("test 1:")
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr90d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 2, 45:
    print('test 2:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr45d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 3, 0:
    print('test 3:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr0d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 4, 315:
    print('test 4:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr315d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 5, 270:
    print('test 5:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr270d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 6, 225:
    print('test 6:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr225d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 7, 180:
    print('test 7:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr180d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 8, 135:
    print('test 8:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', piece_defs, id_dict, step_1sqr135d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')
