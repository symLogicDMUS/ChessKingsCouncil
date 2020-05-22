

def pos_str_to_list(pos_str):
    """fenParser task 3, convert the pos string to a list and return"""
    return list(pos_str)

if __name__ == "__main__":

    # test 1
    print("test 1:")
    pos_list = pos_str_to_list('RNBQKBNRPPPPPPPP################################pppppppprnbqkbnr')
    print(pos_list)
    print("\n")

    # test 2
    print("test 2:")
    pos_list = pos_str_to_list('#RBRK###########RNBQ#BNR########rnbq#bnr###k####################')
    print(pos_list)
    print("\n")

    # test 3
    print("test 3:")
    pos_list = pos_str_to_list('b##q##q####R#R####NP####q#QK#QBr###########P#P##q##r##P####k###b')
    print(pos_list)

    
