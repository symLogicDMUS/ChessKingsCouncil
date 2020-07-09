# index equals number of '#' at that location
empty_sqr_hash = [None, '#', '##', '###', '####', '#####', '######', '#######', '########']


# fenParser module 2

def num_to_sharps(pos_str):
    """fenParser task 2, converts every digit encountered to that many consecutive '#' chars
    
        pos_str: the position part of the fen string

        returns list of sqrs
    """
    new_pos_str = ''
    for sqr in pos_str:
        if sqr.isdigit():
             new_pos_str += empty_sqr_hash[int(sqr)]
        else:
            new_pos_str += sqr

    return new_pos_str


if __name__ == "__main__":

    # test 1:
    print("test 1:")
    new_pos_str = num_to_sharps('RNBQKBNRPPPPPPPP8888pppppppprnbqkbnr')
    print(new_pos_str)
    print("\n")

    # test 2:
    print("test 2:")
    new_pos_str = num_to_sharps('1RBRK38RNBQ1BNR8rnbq1bnr3k488')
    print(new_pos_str)
    print("\n")

    # test 3:
    print("test 3:")
    new_pos_str = num_to_sharps('b2q2q13R1R22NP4q1QK1QBr83P1P2q2r2P13k3b')
    print(new_pos_str)
    print("\n")