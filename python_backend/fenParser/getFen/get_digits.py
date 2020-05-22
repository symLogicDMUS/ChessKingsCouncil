

def get_digits(fen):
    """getFen TASK 5, replace consecutive '#' (empty squares) with the digit for how many"""
    for consect in ['########', '#######', '######', '#####', '####', '###', '##', '#']:
        fen = fen.replace(consect, str(len(consect)))
    return fen


if __name__ == "__main__":

    # test 1
    print('test 1')
    print(get_digits('rnbqkbnr/pppppppp/########/########/########/########/PPPPPPPP/RNBQKBNR'))
    print('\n')

    # test 2:
    print('test 2')
    print(get_digits('r###k##r/#P######/#####P##/p###n##p/###b#BpP/NBQb#q##/########/R###K##R'))
    print('\n')

    # test 3:
    print('test 3')
    print(get_digits('###k###b/q##r##P#/###P#P##/########/q#QK#QBr/##NP####/###R#R##/b##q##q#'))
    print('\n')