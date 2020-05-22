from custom_except import *

def join_to_fen(rows):
    """getFen TASK 4, final step in getting the fen string. join each row-string together to get fen"""
    return "/".join(rows)


if __name__ == "__main__":

    print('test 1:')
    print(join_to_fen(['rnbqkbnr', 'pppppppp', '########', '########', '########', '########', 'PPPPPPPP', 'RNBQKBNR']))
    print('\n')

    print('test 2:')
    print(join_to_fen(['r###k##r', '#P######', '#####P##', 'p###n##p', '###b#BpP', 'NBQb#q##', '########', 'R###K##R']))
    print('\n')

    print('test 3:')
    print(join_to_fen(['###k###b', 'q##r##P#', '###P#P##', '########', 'q#QK#QBr', '##NP####', '###R#R##', 'b##q##q#']))
    print('\n')

