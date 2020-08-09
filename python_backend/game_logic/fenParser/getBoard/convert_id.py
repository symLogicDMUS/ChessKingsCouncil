

def convert_id(fen_id):
    """ fenParser task 4, convert fen id to a game id"""
    if fen_id.isupper():
        return 'W' + fen_id
    else:
        return 'B' + fen_id.upper()


def convert_ids(pos_list):
    """convert each fen_id in the pos_list to a game id"""

    for i in range(len(pos_list)):
        if len(pos_list[i]) == 1 and pos_list[i].isalpha():
            pos_list[i] = convert_id(pos_list[i])

    return pos_list


if __name__ == "__main__":

    # test 1:
    print('test 1:')
    pos_list = convert_ids( ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R', 'P', 'P', 'P', 
                             'P', 'P', 'P', 'P', 'P', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 
                             'p', 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'])

    print(pos_list)
    print("\n")

    # test 2
    print('test 2')
    pos_list = convert_ids( ['#', 'R', 'L', 'T', 'K', '#', '#', '#', '#', '#', '#',
                             '#', '#', '#', '#', '#', 'R', 'N', 'B', 'Q', '#', 'B', 
                             'N', 'R', '#', '#', '#', '#', '#', '#', '#', '#', 'r', 
                             'n', 'b', 'q', '#', 'b', 'n', 'r', '#', '#', '#', 'k', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#'])
    print(pos_list)
    print("\n")



