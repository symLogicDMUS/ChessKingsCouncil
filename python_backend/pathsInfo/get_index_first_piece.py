from custom_except import *

def get_index_first_piece(ids):
    """take a list of ids and return the index of the first piece id"""

    for i in range(len(ids)):
        if ids[i] != '#':
            return i
    else:
        return 'no pieces'


if __name__ == "__main__":
     i = get_index_first_piece(['#', 'WP1', 'WP2', 'BB1'])
     print(i)