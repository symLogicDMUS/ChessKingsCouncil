

def get_trav_str(pos_str):
    """ fenParser task 1, change the pos_str into a string to traverse, and return"""

    pos_str = pos_str.split('/')
    pos_str.reverse()
    pos_str = "".join(pos_str)

    return pos_str


if __name__ == "__main__":

    # test 1
    print('test 1:')
    trav_str = get_trav_str('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')
    print(trav_str)
    print("\n")

    # test 2
    print('test 2:')
    trav_str = get_trav_str('8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3')
    print(trav_str)
    print("\n")

    # test 3
    print('test 3:')
    trav_str = get_trav_str('3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1')
    print(trav_str)
    print("\n")

