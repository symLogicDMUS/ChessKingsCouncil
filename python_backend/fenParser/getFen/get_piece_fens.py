
from fenParser.getFen.get_piece_fen import get_piece_fen
from bools.is_piece import is_piece


def get_piece_fens(id_list):
    """getFen TASK 2, for each id in id_list, if it is a piece id get its cooresponding fen"""
    for i in range(len(id_list)):
        for j in range(len(id_list[i])):
            if is_piece(id_list[i][j]):
                id_list[i][j] = get_piece_fen(id_list[i][j])

    return id_list


if __name__ == "__main__":

    # test 1:
    print('test 1:')
    print(get_piece_fens([
    ['BR1', 'BN1', 'BB1', 'BQ1', 'BK1', 'BB2', 'BN2', 'BR2'],
    ['BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['WP1', 'WP2', 'WP3', 'WP4', 'WP5', 'WP6', 'WP7', 'WP8'],
    ['WR1', 'WN1', 'WB1', 'WQ1', 'WK1', 'WB2', 'WN2', 'WR2']]))
    print('\n')

    # test 2
    print('test 2:')
    print(get_piece_fens([
    ['BR1', '#', '#', '#', 'BK1', '#', '#', 'BR2'],
    ['#', 'WP3', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', 'WP2', '#', '#'],
    ['BP2', '#', '#', '#', 'BN1', '#', '#', 'BP3'],
    ['#', '#', '#', 'BB2', '#', 'WB2', 'BP1', 'WP1'],
    ['WN1', 'WB1', 'WQ1', 'BB1', '#', 'BQ1', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['WR1', '#', '#', '#', 'WK1', '#', '#', 'WR2']]))
    print('\n')

    # test 3:
    print('test 3:')
    print(get_piece_fens([
    ['#', '#', '#', 'BK1', '#', '#', '#', 'BB2'],
    ['BQ4', '#', '#', 'BR2', '#', '#', 'WP4', '#'],
    ['#', '#', '#', 'WP2', '#', 'WP3', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['BQ3', '#', 'WQ1', 'WK1', '#', 'WQ2', 'WB1', 'BR1'],
    ['#', '#', 'WN1', 'WP1', '#', '#', '#', '#'],
    ['#', '#', '#', 'WR1', '#', 'WR2', '#', '#'],
    ['BB1', '#', '#', 'BQ1', '#', '#', 'BQ2', '#']]))
    print('\n')
