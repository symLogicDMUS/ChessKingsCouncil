from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_king_loc(board, color):
    """return the location of the king of specified color"""

    for coord, id in board.items():
        if id[0] == color and id[1] == 'K':
            return coord
    else:
        print('error: king not found\n')
        return -1


if __name__ == "__main__":
    print('test 1:')
    board = sample_board_dicts['check_example3']
    king_loc = get_king_loc(board, 'W')
    print(king_loc == (4, 4))
    print('\n')