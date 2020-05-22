from custom_except import *
import re

def get_pos_str(fen):
    """fenParser task 0, return the position part of the fen string"""
    res = re.search(r'(((r|n|b|q|k|p|R|N|B|Q|K|P|[1-8])){1,8}/){7}((r|n|b|q|k|p|R|N|B|Q|K|P|[1-8]){1,8}){1}', fen)

    if res != None:
        pos_str = res.group(0)
        return pos_str
    else:
        print('error: position string not found')
        return -1


if __name__ == '__main__':

    # test 1:
    print('test 1:')
    pos_str = get_pos_str('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    print(pos_str)
    print('\n')