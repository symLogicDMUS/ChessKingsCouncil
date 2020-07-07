def join_to_row(row):
    """getFen TASK 3.1, join the squares from a row on the board"""
    return "".join(row)


if __name__ == "__main__":

    # test 1:
    print(join_to_row(['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']))
    print(join_to_row(['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']))
    print(join_to_row(['#', '#', '#', '#', '#', '#', '#', '#']))
    print(join_to_row(['#', '#', '#', '#', '#', '#', '#', '#']))
    print(join_to_row(['#', '#', '#', '#', '#', '#', '#', '#']))
    print(join_to_row(['#', '#', '#', '#', '#', '#', '#', '#']))
    print(join_to_row(['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P']))
    print(join_to_row(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']))

    # test 2:
    print(join_to_row(['r', '#', '#', '#', 'k', '#', '#', 'r']))
    print(join_to_row(['#', 'P', '#', '#', '#', '#', '#', '#']))
    print(join_to_row(['#', '#', '#', '#', '#', 'P', '#', '#']))
    print(join_to_row(['p', '#', '#', '#', 'n', '#', '#', 'p']))
    print(join_to_row(['#', '#', '#', 'b', '#', 'B', 'p', 'P']))
    print(join_to_row(['N', 'B', 'Q', 'b', '#', 'q', '#', '#']))
    print(join_to_row(['#', '#', '#', '#', '#', '#', '#', '#']))
    print(join_to_row(['R', '#', '#', '#', 'K', '#', '#', 'R']))
