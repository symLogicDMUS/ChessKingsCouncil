from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_num_path_attackers(pd_dict):
    """get the number of Rooks, Bishops, or Queens, that are attacking the King"""
    num_path_attackers = 0
    for direction in pd_dict.keys():
        if len(pd_dict[direction].pieces) == 0:
            continue
        if pd_dict[direction].statuses[0] != 'e':
            continue
        if not pd_dict[direction].piece_matches_path[0]:
            continue
        num_path_attackers += 1
    return num_path_attackers


if __name__ == "__main__":

    print('test 1, check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1')
    board = sample_board_dicts['check_example3']

    pathdata_dict = get_pathdata_dict((4, 4), board, 'W')
    print(get_num_path_attackers(pathdata_dict))
    print('\n')

    print('test 2, super_checkmate_impossible_example :')
    board = sample_board_dicts['super_checkmate_impossible_example']

    pathdata_dict = get_pathdata_dict((6, 6), board, 'W')
    print(get_num_path_attackers(pathdata_dict))
    print('\n')
