from game_logic.pathsInfo.get_path_dir import _get_path_dir
from game_logic.pathsInfo.PathData import PathData
from game_logic.pathsInfo.get_path_data import _get_path_data
from game_logic.step_funcs.step_funcs import step_func_list
from game_logic.printers.print_board import print_board
from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_pathdata_dict(board, sqr, color, piece_defs, id_dict):
    """get data about every path stemming from sqr, and record in dict"""

    pd_dict = {}
    for step_func in step_func_list:
        # get direction of path
        path_dir = _get_path_dir(step_func)

        # initialize class for given direction
        pd_dict[path_dir] = PathData(path_dir)

        # get path data for given direction
        path_data = _get_path_data(board, sqr, color, piece_defs, id_dict, step_func)

        # initialize class attributes to path data results
        pd_dict[path_dir].coord_path = path_data[0]
        pd_dict[path_dir].path = path_data[1]
        pd_dict[path_dir].pieces = path_data[2]
        pd_dict[path_dir].statuses = path_data[3]
        pd_dict[path_dir].piece_matches_path = path_data[4]

    return pd_dict


if __name__ == "__main__":

    board = sample_board_dicts['check_example3']

    piece_defs = get_standard_piece_defs()
    id_dict = get_standard_id_dict()

    # test 1:
    pd_dict = get_pathdata_dict(board, (4, 4), 'W', piece_defs, id_dict)
    print('test 1:')
    for path in pd_dict.values():
        print_board(board, heading=str(path), highlights=path.coord_path, highlights3=[(4, 4)])
        print("")
